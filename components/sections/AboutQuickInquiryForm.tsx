'use client'

import { FormEvent, useState } from 'react'

const services = ['Photography', 'Web Design', 'Both'] as const

interface InquiryState {
  service: (typeof services)[number]
  name: string
  email: string
  details: string
  company: string
  startedAt: number
}

const initialState = (): InquiryState => ({
  service: 'Photography',
  name: '',
  email: '',
  details: '',
  company: '',
  startedAt: Date.now(),
})

function clean(value: string) {
  return value.replace(/<[^>]*>/g, '').trim()
}

export default function AboutQuickInquiryForm() {
  const [form, setForm] = useState<InquiryState>(() => initialState())
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
          service: form.service,
          details: clean(form.details),
          company: clean(form.company),
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
      setForm(initialState())
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please email info@femsstudio.com.')
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8" aria-label="Quick FemStudio inquiry">
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input
            tabIndex={-1}
            autoComplete="off"
            value={form.company}
            onChange={(event) => setForm({ ...form, company: event.target.value })}
          />
        </label>
      </div>

      <fieldset>
        <legend className="sr-only">Project type</legend>
        <div className="mb-8 flex flex-wrap gap-4">
          {services.map((service) => (
            <label key={service} className="group flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="project_type"
                value={service}
                checked={form.service === service}
                onChange={() => setForm({ ...form, service })}
                className="peer sr-only"
              />
              <span
                className="h-3 w-3 rounded-full border border-cream/30 transition-colors group-hover:border-gold peer-checked:border-gold peer-checked:bg-gold"
                aria-hidden="true"
              />
              <span className="font-sans text-[10px] uppercase tracking-widest text-cream/50 transition-colors peer-checked:text-gold">
                {service}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block border-b border-cream/20 pb-2">
        <span className="sr-only">Name</span>
        <input
          required
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
          placeholder="Name"
          className="w-full border-none bg-transparent font-serif text-xl text-cream outline-none placeholder:text-cream/30 focus:ring-0"
        />
      </label>

      <label className="block border-b border-cream/20 pb-2">
        <span className="sr-only">Email</span>
        <input
          required
          type="email"
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
          placeholder="Email"
          className="w-full border-none bg-transparent font-serif text-xl text-cream outline-none placeholder:text-cream/30 focus:ring-0"
        />
      </label>

      <label className="block border-b border-cream/20 pb-2">
        <span className="sr-only">Project details</span>
        <textarea
          required
          value={form.details}
          onChange={(event) => setForm({ ...form, details: event.target.value })}
          placeholder="Project Details"
          rows={3}
          className="w-full resize-none border-none bg-transparent font-serif text-xl text-cream outline-none placeholder:text-cream/30 focus:ring-0"
        />
      </label>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="focus-ring rounded-full bg-gold px-8 py-3 font-sans text-xs font-bold tracking-widest text-forest transition-colors hover:bg-cream disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? 'SENDING' : 'SUBMIT INQUIRY'}
      </button>

      {message && (
        <p className={`text-sm ${status === 'success' ? 'text-gold' : 'text-red-300'}`} role="status">
          {message}
        </p>
      )}
    </form>
  )
}
