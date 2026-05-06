'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'

type Filter = 'all' | 'headshots' | 'editorial' | 'celebrations'

interface PortfolioItem {
  id: string
  category: Exclude<Filter, 'all'>
  src: string
  alt: string
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
    src: '/images/headshots/professional-headshot-houston-01.jpg',
    alt: 'Professional headshot photographed by FemStudio in Houston TX',
  },
  {
    id: 'headshot-2',
    category: 'headshots',
    src: '/images/headshots/professional-headshot-houston-02.jpg',
    alt: 'Corporate headshot photographed by FemStudio in Houston TX',
  },
  {
    id: 'headshot-3',
    category: 'headshots',
    src: '/images/headshots/professional-headshot-houston-03.jpg',
    alt: 'Editorial professional portrait photographed by FemStudio in Houston TX',
  },
  {
    id: 'editorial-1',
    category: 'editorial',
    src: '/images/editorial/porsche-editorial-houston-photographer-02.jpg',
    alt: 'Porsche editorial brand photography with model and car in Houston TX by FemStudio',
  },
  {
    id: 'celebration-1',
    category: 'celebrations',
    src: '/images/celebrations/prom-photography-houston-01.jpg',
    alt: 'Prom portrait photography in Houston TX by FemStudio',
  },
  {
    id: 'headshot-4',
    category: 'headshots',
    src: '/images/headshots/professional-headshot-houston-04.jpg',
    alt: 'Executive headshot photographed by FemStudio in Houston TX',
  },
  {
    id: 'celebration-2',
    category: 'celebrations',
    src: '/images/celebrations/prom-photography-houston-02.jpg',
    alt: 'Milestone portrait photography in Houston TX by FemStudio',
  },
  {
    id: 'celebration-3',
    category: 'celebrations',
    src: '/images/celebrations/graduation-photography-houston-01.jpg',
    alt: 'Graduation portrait photography in Houston TX by FemStudio',
  },
  {
    id: 'editorial-2',
    category: 'editorial',
    src: '/images/editorial/porsche-editorial-houston-photographer-03.jpg',
    alt: 'Automotive editorial portrait with Porsche in Houston TX by FemStudio',
  },
  {
    id: 'headshot-5',
    category: 'headshots',
    src: '/images/headshots/professional-headshot-houston-02.jpg',
    alt: 'Professional business headshot in Houston TX by FemStudio',
  },
  {
    id: 'editorial-3',
    category: 'editorial',
    src: '/images/editorial/porsche-editorial-houston-photographer-01.jpg',
    alt: 'Porsche editorial portrait photography in Houston TX by FemStudio',
  },
  {
    id: 'editorial-4',
    category: 'editorial',
    src: '/images/editorial/porsche-editorial-houston-photographer-04.jpg',
    alt: 'Editorial automotive brand photography in Houston TX by FemStudio',
  },
]

export default function PhotographyContent() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')

  const visibleItems = useMemo(
    () => (activeFilter === 'all' ? items : items.filter((item) => item.category === activeFilter)),
    [activeFilter],
  )

  return (
    <>
      <section className="sticky top-[80px] z-40 border-y border-cream/5 bg-darkGreen/95 backdrop-blur-sm" aria-label="Photography portfolio filters">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-6 md:justify-start md:gap-12">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  aria-pressed={isActive}
                  className={`focus-ring relative rounded-sm py-2 font-sans text-[10px] tracking-[0.3em] transition-colors ${
                    isActive ? 'text-gold after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-gold' : 'text-cream/35 hover:text-cream'
                  }`}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section aria-labelledby="portfolio-heading" className="bg-forest px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 id="portfolio-heading" className="sr-only">
            FemStudio photography portfolio
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {visibleItems.map((item) => (
              <article key={item.id} className="portfolio-card relative aspect-square overflow-hidden bg-darkGreen">
                <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover grayscale" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
