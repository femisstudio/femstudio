'use client'

import { FormEvent, useState } from 'react'

export default function Footer() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState(() => ({
    service: 'photography',
    name: '',
    email: '',
    phone: '',
    details: '',
    company: '',
    startedAt: Date.now(),
  }))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.details,
          company: formData.company,
          startedAt: formData.startedAt,
        }),
      })

      if (response.ok) {
        setFormState('success')
        setFormData({ service: 'photography', name: '', email: '', phone: '', details: '', company: '', startedAt: Date.now() })
        setTimeout(() => setFormState('idle'), 4000)
      } else {
        setFormState('error')
        setTimeout(() => setFormState('idle'), 3000)
      }
    } catch {
      setFormState('error')
      setTimeout(() => setFormState('idle'), 3000)
    }
  }

  return (
    <footer className="bg-darkGreen px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 grid gap-16 md:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="mb-8 font-sans text-3xl font-bold tracking-wider text-gold md:text-4xl">LET&apos;S CREATE MAGIC.</h2>
            <address className="space-y-4 not-italic text-cream/75">
              <p>
                <a href="https://www.instagram.com/femstudio__" target="_blank" rel="noopener noreferrer" className="focus-ring rounded-sm hover:text-gold">
                  @femstudio__
                </a>
              </p>
              <p>
                <a href="mailto:info@femsstudio.com" className="focus-ring rounded-sm hover:text-gold">
                  info@femsstudio.com
                </a>
              </p>
              <p>
                <a href="tel:+12818183726" className="focus-ring rounded-sm hover:text-gold">
                  +1 (281) 818-3726
                </a>
              </p>
              <p>Houston, TX</p>
            </address>
          </div>

          <div>
            {formState === 'success' ? (
              <div className="flex h-full items-center justify-center rounded-lg border border-gold/30 bg-gold/5 p-8 text-center">
                <p className="font-serif text-xl text-gold">Message received. We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="service-footer" className="block text-xs font-bold tracking-widest text-cream/60 mb-2">
                    SERVICE INTEREST
                  </label>
                  <select
                    id="service-footer"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-sm border border-cream/20 bg-darkGreen px-3 py-2 text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
                  >
                    <option value="photography">Photography</option>
                    <option value="web-design">Web Design</option>
                    <option value="both">Both</option>
                  </select>
                </div>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-sm border border-cream/20 bg-darkGreen px-3 py-2 text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-sm border border-cream/20 bg-darkGreen px-3 py-2 text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
                />

                <textarea
                  name="details"
                  placeholder="Tell us about your project"
                  value={formData.details}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-sm border border-cream/20 bg-darkGreen px-3 py-2 text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
                />

                <input type="hidden" name="company" value={formData.company} />

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full rounded-full border border-gold bg-gold px-6 py-2 font-sans text-xs font-bold tracking-widest text-darkGreen transition-colors hover:bg-gold/90 disabled:opacity-60"
                >
                  {formState === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
                </button>

                {formState === 'error' && <p className="text-center text-sm text-red-400">Something went wrong. Please try again.</p>}
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 text-center text-xs text-cream/50">
          2026 FEMSTUDIO. EST. 2022.
        </div>
      </div>
    </footer>
  )
}
