'use client'

import { useState } from 'react'

interface FAQItem {
  q: string
  a: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  title?: string
  subtitle?: string
  className?: string
  isDark?: boolean
  faqSize?: 'normal' | 'large'
}

export default function FAQAccordion({ items, title = 'Frequently Asked', subtitle, className = '', isDark = false, faqSize = 'normal' }: FAQAccordionProps) {
  const [openId, setOpenId] = useState(0)

  const bgClass = isDark ? 'bg-darkGreen text-cream' : 'bg-cream text-forest'
  const borderTopClass = isDark ? '' : 'border-t-2 border-gold'
  const isLarge = faqSize === 'large'
  const headingSize = isLarge ? 'text-4xl md:text-5xl' : 'text-4xl'
  const questionSize = isLarge ? 'text-lg' : 'text-sm'
  const answerSize = 'text-lg'
  const rowPadding = isLarge ? 'py-8' : 'py-6'

  return (
    <section className={`w-full px-6 md:px-12 lg:px-20 py-24 ${borderTopClass} ${bgClass} ${className}`}>
      <div className="mx-auto max-w-3xl">
        {title && (
          <div className="mb-12">
            <p className="font-syncopate text-xs tracking-widest uppercase mb-3" style={{ color: '#c9a227' }}>
              QUESTIONS
            </p>
            <h2 className={`font-cormorant-garamond italic font-bold ${headingSize} mb-2`} style={{ color: isDark ? '#fcfbf7' : '#0f2d24' }}>
              {title}
            </h2>
            {subtitle && (
              <p className="font-cormorant-garamond text-xl" style={{ color: isDark ? 'rgba(252, 251, 247, 0.6)' : 'rgba(15, 45, 36, 0.6)' }}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={`space-y-0 ${isDark ? 'border-cream/10' : 'border-forest/20'} border-t`}>
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setOpenId(openId === index ? -1 : index)}
              className="w-full text-left transition-all duration-200 cursor-pointer"
            >
              <div className={`flex items-center justify-between gap-4 ${rowPadding} focus-visible:outline-none ${isDark ? 'border-gold/30' : 'border-forest/20'} border-b`}>
                <h3 className={`font-syncopate ${questionSize} tracking-normal flex-1`} style={{ color: isDark ? '#fcfbf7' : '#0f2d24' }}>
                  {item.q}
                </h3>
                <svg
                  className="w-5 h-5 flex-shrink-0 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={{
                    color: isDark ? '#c9a227' : '#0f2d24',
                    transform: openId === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {openId === index && (
                <div className={`font-cormorant-garamond ${answerSize} leading-relaxed pt-3 pb-2`} style={{ color: isDark ? 'rgba(252, 251, 247, 0.7)' : 'rgba(15, 45, 36, 0.7)' }}>
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
