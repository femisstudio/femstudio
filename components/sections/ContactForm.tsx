'use client'

import { FormEvent, useMemo, useState } from 'react'

const serviceOptions = ['Photography', 'Web Design', 'E-Commerce', 'Both'] as const
const budgetOptions = ['Under $500', '$500 - $1,500', '$1,500 - $5,000', '$5,000+'] as const

interface ContactFormState {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  budget: string
  details: string
  company: string
  startedAt: number
}

const initialState = (): ContactFormState => ({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: 'Photography',
  budget: '',
  details: '',
  company: '',
  startedAt: Date.now(),
})

function clean(value: string) {
  return value.replace(/<[^>]*>/g, '').trim()
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(() => initialState())
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const fullName = useMemo(() => clean(`${form.firstName} ${form.lastName}`), [form.firstName, form.lastName])

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          email: clean(form.email),
          phone: clean(form.phone),
          service: clean(form.service),
          budget: clean(form.budget),
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
    <form onSubmit={onSubmit} className="grid gap-6" aria-label="FemStudio contact form">
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
      <div className="grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="sr-only">First Name</span>
          <input
            required
            value={form.firstName}
            onChange={(event) => setForm({ ...form, firstName: event.target.value })}
            placeholder="First Name"
            className="w-full border-0 border-b border-cream/20 bg-transparent py-4 text-xl text-cream outline-none placeholder:text-cream/30 focus:border-gold"
          />
        </label>
        <label className="block">
          <span className="sr-only">Last Name</span>
          <input
            required
            value={form.lastName}
            onChange={(event) => setForm({ ...form, lastName: event.target.value })}
            placeholder="Last Name"
            className="w-full border-0 border-b border-cream/20 bg-transparent py-4 text-xl text-cream outline-none placeholder:text-cream/30 focus:border-gold"
          />
        </label>
      </div>
      <label className="block">
        <span className="sr-only">Email Address</span>
        <input
          required
          type="email"
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
          placeholder="Email Address"
          className="w-full border-0 border-b border-cream/20 bg-transparent py-4 text-xl text-cream outline-none placeholder:text-cream/30 focus:border-gold"
        />
      </label>
      <label className="block">
        <span className="sr-only">Phone Number</span>
        <input
          value={form.phone}
          onChange={(event) => setForm({ ...form, phone: event.target.value })}
          placeholder="Phone Number (Optional)"
          className="w-full border-0 border-b border-cream/20 bg-transparent py-4 text-xl text-cream outline-none placeholder:text-cream/30 focus:border-gold"
        />
      </label>
      <div>
        <label className="block mb-4">
          <span className="sr-only">Service Interest</span>
          <select
            value={form.service}
            onChange={(event) => setForm({ ...form, service: event.target.value })}
            className="w-full border-0 border-b border-cream/20 bg-transparent py-4 font-sans text-sm tracking-[0.15em] text-cream outline-none focus:border-gold"
          >
            {serviceOptions.map((option) => (
              <option key={option} value={option} className="bg-darkGreen">
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="border-0 p-0">
        <legend className="mb-4 font-sans text-sm tracking-[0.15em] text-cream/70">Budget Range (Optional)</legend>
        <div className="grid gap-3 md:grid-cols-2">
          {budgetOptions.map((option) => (
            <label key={option} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="budget"
                value={option}
                checked={form.budget === option}
                onChange={(event) => setForm({ ...form, budget: event.target.value })}
                className="h-4 w-4 appearance-none rounded-full border border-gold/50 checked:bg-gold cursor-pointer"
              />
              <span className="text-cream/70 font-sans text-sm">{option}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block">
        <span className="sr-only">Project or session details</span>
        <textarea
          required
          value={form.details}
          onChange={(event) => setForm({ ...form, details: event.target.value })}
          placeholder="Tell us about your project or session"
          rows={7}
          className="w-full resize-none border-0 border-b border-cream/20 bg-transparent py-4 text-xl text-cream outline-none placeholder:text-cream/30 focus:border-gold"
        />
      </label>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="focus-ring rounded-full border border-gold px-10 py-4 font-sans text-xs tracking-[0.22em] text-gold transition-colors hover:bg-gold hover:text-darkGreen disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? 'SENDING' : 'SEND MESSAGE'}
      </button>
      {message && (
        <p className={`text-sm ${status === 'success' ? 'text-gold' : 'text-red-300'}`} role="status">
          {message}
        </p>
      )}
    </form>
  )
}
