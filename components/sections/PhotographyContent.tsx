'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'

type Filter = 'all' | 'headshots' | 'editorial' | 'celebrations'

interface PortfolioItem {
  id: string
  category: Exclude<Filter, 'all'>
  label: string
  src: string
  alt: string
  className: string
}

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'ALL' },
  { value: 'headshots', label: 'HEADSHOTS' },
  { value: 'editorial', label: 'EDITORIAL & BRAND' },
  { value: 'celebrations', label: 'CELEBRATIONS' },
]

const items: PortfolioItem[] = [
  {
    id: 'headshot-1',
    category: 'headshots',
    label: 'Headshots',
    src: '/images/headshots/professional-headshot-houston-01.jpg',
    alt: 'Professional LinkedIn headshot photographed at FemStudio in Houston TX',
    className: 'md:row-span-2',
  },
  {
    id: 'headshot-2',
    category: 'headshots',
    label: 'Corporate',
    src: '/images/headshots/professional-headshot-houston-02.jpg',
    alt: 'Corporate headshot for Houston professional by FemStudio',
    className: '',
  },
  {
    id: 'headshot-3',
    category: 'headshots',
    label: 'Career',
    src: '/images/headshots/professional-headshot-houston-03.jpg',
    alt: 'Career headshot session in Houston TX by FemStudio',
    className: 'md:row-span-2',
  },
  {
    id: 'headshot-4',
    category: 'headshots',
    label: 'Executive',
    src: '/images/headshots/professional-headshot-houston-04.jpg',
    alt: 'Executive headshot photography for Houston business by FemStudio',
    className: '',
  },
  {
    id: 'editorial-1',
    category: 'editorial',
    label: 'Editorial',
    src: '/images/editorial/porsche-editorial-houston-photographer-03.jpg',
    alt: 'Porsche editorial photography with model and car in Houston TX by FemStudio',
    className: 'md:row-span-2',
  },
  {
    id: 'editorial-2',
    category: 'editorial',
    label: 'Brand',
    src: '/images/editorial/porsche-editorial-houston-photographer-02.jpg',
    alt: 'Brand photography campaign with Porsche in Houston TX by FemStudio',
    className: '',
  },
  {
    id: 'editorial-3',
    category: 'editorial',
    label: 'Campaign',
    src: '/images/editorial/porsche-editorial-houston-photographer-01.jpg',
    alt: 'Automotive editorial portrait shoot with Porsche in Houston TX by FemStudio',
    className: 'md:row-span-2',
  },
  {
    id: 'editorial-4',
    category: 'editorial',
    label: 'Automotive',
    src: '/images/editorial/porsche-editorial-houston-photographer-04.jpg',
    alt: 'Automotive editorial brand photography in Houston by FemStudio',
    className: '',
  },
  {
    id: 'celebration-1',
    category: 'celebrations',
    label: 'Prom',
    src: '/images/celebrations/prom-photography-houston-01.jpg',
    alt: 'Prom photography session in Houston TX by FemStudio',
    className: 'md:row-span-2',
  },
  {
    id: 'celebration-2',
    category: 'celebrations',
    label: 'Milestone',
    src: '/images/celebrations/prom-photography-houston-02.jpg',
    alt: 'Houston prom milestone portrait by FemStudio',
    className: '',
  },
  {
    id: 'celebration-3',
    category: 'celebrations',
    label: 'Graduation',
    src: '/images/celebrations/graduation-photography-houston-01.jpg',
    alt: 'Graduation photography in Houston TX by FemStudio',
    className: 'md:row-span-2',
  },
  {
    id: 'celebration-4',
    category: 'celebrations',
    label: 'Portrait',
    src: '/images/celebrations/graduation-photography-houston-02.jpg',
    alt: 'Graduation milestone portrait in Houston TX by FemStudio',
    className: '',
  },
]

export default function PhotographyContent() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')

  const visibleItems = useMemo(
    () => (activeFilter === 'all' ? items : items.filter((item) => item.category === activeFilter)),
    [activeFilter],
  )

  return (
    <section aria-labelledby="portfolio-heading" className="bg-darkGreen px-6 py-20 md:px-24 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 font-sans text-xs tracking-[0.3em] text-gold">PORTFOLIO</p>
            <h2 id="portfolio-heading" className="font-serif text-5xl italic text-cream md:text-7xl">
              Work with range.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4" role="tablist" aria-label="Photography filters">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter.value}
                className={`focus-ring rounded-full border px-5 py-3 font-sans text-[10px] tracking-[0.24em] transition-colors ${
                  activeFilter === filter.value
                    ? 'border-gold bg-gold text-darkGreen'
                    : 'border-cream/25 text-cream/70 hover:border-gold hover:text-gold'
                }`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid auto-rows-[280px] gap-6 md:grid-cols-3">
          {visibleItems.map((item) => (
            <article
              key={item.id}
              className={`portfolio-card relative overflow-hidden rounded-lg bg-forest ${item.className}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cream/10 to-gold/15" aria-hidden="true" />
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-darkGreen/85 to-transparent p-6">
                <h3 className="font-serif text-2xl italic text-cream">{item.label}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
