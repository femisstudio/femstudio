'use client'

import { useState } from 'react'

interface FAQItem {
  q: string
  a: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  title?: string
  className?: string
}

export default function FAQAccordion({ items, title = 'Frequently Asked', className = '' }: FAQAccordionProps) {
  const [openId, setOpenId] = useState(0) // First item open by default

  return (
    <section className={`w-full px-6 py-24 md:px-10 md:py-32 ${className}`}>
      <div className="mx-auto max-w-3xl">
        {title && (
          <div className="mb-16">
            <p className="mb-3 font-sans text-xs tracking-[0.32em] text-gold">QUESTIONS</p>
            <h2 className="font-serif text-5xl italic text-cream md:text-6xl">{title}</h2>
          </div>
        )}

        <div className="space-y-0 border-t border-cream/10">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setOpenId(openId === index ? -1 : index)}
              className="w-full text-left transition-all duration-200"
            >
              <div className="flex items-center justify-between gap-4 border-b border-gold/30 py-5 focus-visible:outline-none">
                <h3 className="font-sans text-sm tracking-wide text-cream flex-1">{item.q}</h3>
                {/* Fix 6: Gold chevron that rotates */}
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-gold transition-transform duration-200 ${openId === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Answer - visible when open */}
              {openId === index && (
                <div className="px-0 py-5 font-serif text-base text-cream opacity-80">
                  {item.a}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
