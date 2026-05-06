'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'

const serviceOptions = [
  { value: 'photography', label: 'Photography' },
  { value: 'web-design', label: 'Web Design' },
  { value: 'both', label: 'Both' },
] as const

interface InquiryForm {
  name: string
  email: string
  phone: string
  service: string
  details: string
  startedAt: number
}

const initialForm = (): InquiryForm => ({
  name: '',
  email: '',
  phone: '',
  service: 'photography',
  details: '',
  startedAt: Date.now(),
})

function clean(value: string) {
  return value.replace(/<[^>]*>/g, '').trim()
}

export default function Footer() {
  const [form, setForm] = useState<InquiryForm>(() => initialForm())
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: clean(form.name),
          email: clean(form.email),
          phone: clean(form.phone),
          service: form.service,
          details: clean(form.details),
          startedAt: form.startedAt,
        }),
      })
      const data = (await response.json()) as { success?: boolean; error?: string; message?: string }

      if (!response.ok || !data.success) {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please email info@femsstudio.com.')
        return
      }

      setStatus('success')
      setMessage(data.message || 'Inquiry sent. We will be in touch soon.')
      setForm(initialForm())
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please email info@femsstudio.com.')
    }
  }

  return (
    <footer className="border-t border-gold/20 bg-[#081712] px-6 py-20 md:px-24" aria-label="Site footer">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="mb-5 font-sans text-xs tracking-[0.3em] text-gold">FEMSTUDIO</p>
          <h2 className="mb-8 max-w-2xl font-serif text-5xl italic leading-tight text-cream md:text-7xl">
            Let&apos;s create something honest.
          </h2>
          <p className="mb-10 max-w-xl text-xl leading-relaxed text-cream/70">
            Houston photography and web design for people and businesses that need to show up with clarity.
          </p>

          <address className="not-italic text-cream/75">
            <p>Houston, TX</p>
            <p>
              <a className="focus-ring rounded-sm hover:text-gold" href="mailto:info@femsstudio.com">
                info@femsstudio.com
              </a>
            </p>
            <p>
              <a className="focus-ring rounded-sm hover:text-gold" href="tel:+12818183726">
                +1 (281) 818-3726
              </a>
            </p>
          </address>

          <nav className="mt-10 flex flex-wrap gap-5 font-sans text-xs tracking-[0.22em]" aria-label="Footer links">
            {['Photography', 'Web Design', 'About', 'Contact'].map((label) => {
              const href = label === 'Web Design' ? '/web-design' : `/${label.toLowerCase()}`
              return (
                <Link key={label} href={href} className="focus-ring rounded-sm text-cream/70 hover:text-gold">
                  {label.toUpperCase()}
                </Link>
              )
            })}
          </nav>
        </div>

        <form onSubmit={onSubmit} className="rounded-lg border border-cream/15 bg-cream/[0.03] p-6 md:p-8">
          <h3 className="mb-6 font-serif text-3xl italic text-cream">Quick inquiry</h3>
          <div className="grid gap-5">
            <input
              required
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              placeholder="Name"
              className="rounded-none border-0 border-b border-cream/25 bg-transparent px-0 py-3 text-xl text-cream outline-none placeholder:text-cream/35 focus:border-gold"
            />
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              placeholder="Email"
              className="rounded-none border-0 border-b border-cream/25 bg-transparent px-0 py-3 text-xl text-cream outline-none placeholder:text-cream/35 focus:border-gold"
            />
            <input
              value={form.phone}
              onChange={(event) => setForm({ ...form, phone: event.target.value })}
              placeholder="Phone (optional)"
              className="rounded-none border-0 border-b border-cream/25 bg-transparent px-0 py-3 text-xl text-cream outline-none placeholder:text-cream/35 focus:border-gold"
            />
            <select
              value={form.service}
              onChange={(event) => setForm({ ...form, service: event.target.value })}
              className="rounded-none border-0 border-b border-cream/25 bg-transparent px-0 py-3 font-sans text-sm tracking-[0.15em] text-cream outline-none focus:border-gold"
            >
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-darkGreen">
                  {option.label}
                </option>
              ))}
            </select>
            <textarea
              required
              value={form.details}
              onChange={(event) => setForm({ ...form, details: event.target.value })}
              placeholder="Tell us about your project"
              rows={5}
              className="resize-none rounded-none border-0 border-b border-cream/25 bg-transparent px-0 py-3 text-xl text-cream outline-none placeholder:text-cream/35 focus:border-gold"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="focus-ring mt-8 w-full rounded-full border border-gold px-8 py-4 font-sans text-xs tracking-[0.22em] text-gold transition-colors hover:bg-gold hover:text-darkGreen disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'submitting' ? 'SENDING' : 'SEND INQUIRY'}
          </button>

          {message && (
            <p className={`mt-5 text-sm ${status === 'success' ? 'text-gold' : 'text-red-300'}`} role="status">
              {message}
            </p>
          )}
        </form>
      </div>
      <p className="mx-auto mt-16 max-w-7xl font-sans text-xs tracking-[0.2em] text-cream/35">
        © 2026 FEMSTUDIO. EST. 2022.
      </p>
    </footer>
  )
}
