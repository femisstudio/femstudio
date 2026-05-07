'use client'

interface FAQItem {
  q: string
  a: string
}

interface FAQSectionProps {
  items: FAQItem[]
  title?: string
  className?: string
}

export default function FAQSection({ items, title = 'Frequently Asked', className = '' }: FAQSectionProps) {
  return (
    <section className={`w-full px-6 py-24 md:px-10 md:py-32 ${className}`}>
      <div className="mx-auto max-w-3xl">
        {title && (
          <div className="mb-16">
            <p className="mb-3 font-sans text-xs tracking-[0.32em] text-gold">QUESTIONS</p>
            <h2 className="font-serif text-5xl italic text-cream md:text-6xl">{title}</h2>
          </div>
        )}

        <div className="space-y-4 border-t border-cream/10 pt-8">
          {items.map((item, index) => (
            <details key={index} className="group cursor-pointer">
              <summary className="flex items-center justify-between py-6 font-serif text-xl italic text-cream transition-colors hover:text-gold md:text-2xl">
                {item.q}
                <span className="inline-block transition-transform group-open:rotate-180">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </summary>
              <p className="pb-6 font-serif text-base italic text-cream/75 md:text-lg">{item.a}</p>
              <div className="border-b border-cream/10" aria-hidden="true" />
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
