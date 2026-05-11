'use client'

import { useState } from 'react'
import Link from 'next/link'

interface FAQItem {
  q: string
  a: string
}

interface FAQSectionProps {
  items: FAQItem[]
  heading: string
  description: string
  buttonText: string
  buttonHref?: string
}

export default function FAQSection({ items, heading, description, buttonText, buttonHref = '/contact' }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleAccordion(index)
    }
  }

  return (
    <section className="px-6 py-24 md:px-12 lg:px-20" style={{ backgroundColor: '#fcfbf7' }} aria-label="Frequently asked questions">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Section Intro */}
          <div className="lg:sticky lg:top-8">
            <p className="font-syncopate text-xs tracking-widest uppercase mb-3" style={{ color: '#c9a227' }}>
              QUESTIONS
            </p>
            <h2 className="font-cormorant-garamond italic font-bold text-5xl" style={{ color: '#0f2d24' }}>
              {heading}
            </h2>
            <p className="font-cormorant-garamond text-lg italic mt-4 max-w-sm" style={{ color: 'rgba(15, 45, 36, 0.6)' }}>
              {description}
            </p>
            <Link
              href={buttonHref}
              className="inline-block font-syncopate text-xs tracking-widest font-medium rounded-full px-6 py-3 mt-8 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ backgroundColor: '#c9a227', color: '#0f2d24', '--tw-ring-color': '#c9a227' } as React.CSSProperties}
            >
              {buttonText}
            </Link>
          </div>

          {/* Right Column - Accordion */}
          <div>
            {items.map((item, index) => (
              <div
                key={index}
                className="border-b cursor-pointer py-6 transition-all duration-200"
                style={{ borderColor: 'rgba(15, 45, 36, 0.15)' }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  role="button"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  tabIndex={0}
                  className="w-full flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded px-1"
                  style={{ '--tw-ring-color': '#c9a227' } as React.CSSProperties}
                >
                  <h3 className="font-cormorant-garamond text-lg" style={{ color: '#0f2d24' }}>
                    {item.q}
                  </h3>
                  <svg
                    className="w-5 h-5 flex-shrink-0 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    style={{
                      color: '#0f2d24',
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>

                {openIndex === index && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="font-cormorant-garamond text-base leading-relaxed pt-3 pb-1"
                    style={{ color: 'rgba(15, 45, 36, 0.7)' }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
