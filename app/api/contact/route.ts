import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const MAX_LENGTHS = {
  name: 100,
  email: 160,
  phone: 40,
  service: 80,
  budget: 80,
  details: 3000,
}

const MAX_PAYLOAD_BYTES = 12_000
const MIN_SUBMISSION_TIME_MS = 1200
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type ContactPayload = Record<string, unknown>

function json(status: number, body: { success: boolean; message?: string; error?: string }) {
  return NextResponse.json(body, { status })
}

function clean(value: unknown, maxLength: number) {
  if (typeof value !== 'string') return ''
  return value
    .replace(/<[^>]*>/g, '')
    .replace(/[^\S\r\n]+/g, ' ')
    .trim()
    .slice(0, maxLength)
}

function getDetails(payload: ContactPayload) {
  return clean(payload.details ?? payload.message, MAX_LENGTHS.details)
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }

    return entities[char] || char
  })
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get('content-length') || 0)

  if (contentLength > MAX_PAYLOAD_BYTES) {
    return json(413, { success: false, error: 'Submission is too large.' })
  }

  let payload: ContactPayload
  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return json(400, { success: false, error: 'Invalid request body.' })
  }

  const name = clean(payload.name, MAX_LENGTHS.name)
  const email = clean(payload.email, MAX_LENGTHS.email).toLowerCase()
  const phone = clean(payload.phone, MAX_LENGTHS.phone)
  const service = clean(payload.service, MAX_LENGTHS.service) || 'Not specified'
  const budget = clean(payload.budget, MAX_LENGTHS.budget)
  const details = getDetails(payload)
  const startedAt = typeof payload.startedAt === 'number' ? payload.startedAt : 0

  if (startedAt && Date.now() - startedAt < MIN_SUBMISSION_TIME_MS) {
    return json(429, { success: false, error: 'Please take a moment before submitting.' })
  }

  if (!name) return json(400, { success: false, error: 'Name is required.' })
  if (!email || !EMAIL_RE.test(email)) return json(400, { success: false, error: 'A valid email is required.' })
  if (!details) return json(400, { success: false, error: 'Project details are required.' })

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return json(500, {
      success: false,
      error: 'Email service is not configured yet. Please email info@femsstudio.com directly.',
    })
  }

  const resend = new Resend(apiKey)
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safePhone = escapeHtml(phone)
  const safeService = escapeHtml(service)
  const safeBudget = escapeHtml(budget)
  const safeDetails = escapeHtml(details).replace(/\n/g, '<br />')

  try {
    await resend.emails.send({
      // Use noreply@femsstudio.com only after the femsstudio.com domain is verified in Resend.
      from: 'FemStudio Contact <onboarding@resend.dev>',
      to: ['info@femsstudio.com'],
      replyTo: email,
      subject: `New FemStudio inquiry from ${name}`,
      text: [
        'New FemStudio Inquiry',
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : '',
        `Service: ${service}`,
        budget ? `Budget: ${budget}` : '',
        '',
        details,
      ]
        .filter(Boolean)
        .join('\n'),
      html: `
        <h2>New FemStudio Inquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        ${phone ? `<p><strong>Phone:</strong> ${safePhone}</p>` : ''}
        <p><strong>Service:</strong> ${safeService}</p>
        ${budget ? `<p><strong>Budget:</strong> ${safeBudget}</p>` : ''}
        <p><strong>Details:</strong></p>
        <p>${safeDetails}</p>
      `,
    })
  } catch (error) {
    console.error('Contact form email failed', error)
    return json(500, {
      success: false,
      error: 'Email could not be sent. Please email info@femsstudio.com directly.',
    })
  }

  return json(200, {
    success: true,
    message: 'Inquiry sent. We will be in touch soon.',
  })
}
