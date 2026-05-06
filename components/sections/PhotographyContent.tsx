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
  frame: string
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
    alt: 'Professional headshot photographed by FemStudio in Houston TX',
    frame: 'aspect-[4/5]',
  },
  {
    id: 'headshot-2',
    category: 'headshots',
    label: 'Headshots',
    src: '/images/headshots/professional-headshot-houston-02.jpg',
    alt: 'Corporate headshot photographed by FemStudio in Houston TX',
    frame: 'aspect-square',
  },
  {
    id: 'headshot-3',
    category: 'headshots',
    label: 'Headshots',
    src: '/images/headshots/professional-headshot-houston-03.jpg',
    alt: 'Editorial professional portrait photographed by FemStudio in Houston TX',
    frame: 'aspect-[4/5]',
  },
  {
    id: 'editorial-1',
    category: 'editorial',
    label: 'Editorial & Brand',
    src: '/images/editorial/porsche-editorial-houston-photographer-02.jpg',
    alt: 'Porsche editorial brand photography with model and car in Houston TX by FemStudio',
    frame: 'aspect-[4/5]',
  },
  {
    id: 'celebration-1',
    category: 'celebrations',
    label: 'Celebrations',
    src: '/images/celebrations/prom-photography-houston-01.jpg',
    alt: 'Prom portrait photography in Houston TX by FemStudio',
    frame: 'aspect-[4/5]',
  },
  {
    id: 'headshot-4',
    category: 'headshots',
    label: 'Headshots',
    src: '/images/headshots/professional-headshot-houston-04.jpg',
    alt: 'Executive headshot photographed by FemStudio in Houston TX',
    frame: 'aspect-square',
  },
  {
    id: 'celebration-2',
    category: 'celebrations',
    label: 'Celebrations',
    src: '/images/celebrations/prom-photography-houston-02.jpg',
    alt: 'Milestone portrait photography in Houston TX by FemStudio',
    frame: 'aspect-square',
  },
  {
    id: 'celebration-3',
    category: 'celebrations',
    label: 'Celebrations',
    src: '/images/celebrations/graduation-photography-houston-01.jpg',
    alt: 'Graduation portrait photography in Houston TX by FemStudio',
    frame: 'aspect-[4/5]',
  },
  {
    id: 'editorial-2',
    category: 'editorial',
    label: 'Editorial & Brand',
    src: '/images/editorial/porsche-editorial-houston-photographer-03.jpg',
    alt: 'Automotive editorial portrait with Porsche in Houston TX by FemStudio',
    frame: 'aspect-square',
  },
  {
    id: 'headshot-5',
    category: 'headshots',
    label: 'Headshots',
    src: '/images/headshots/professional-headshot-houston-02.jpg',
    alt: 'Professional business headshot in Houston TX by FemStudio',
    frame: 'aspect-[5/4]',
  },
  {
    id: 'editorial-3',
    category: 'editorial',
    label: 'Editorial & Brand',
    src: '/images/editorial/porsche-editorial-houston-photographer-01.jpg',
    alt: 'Porsche editorial portrait photography in Houston TX by FemStudio',
    frame: 'aspect-[4/5]',
  },
  {
    id: 'editorial-4',
    category: 'editorial',
    label: 'Editorial & Brand',
    src: '/images/editorial/porsche-editorial-houston-photographer-04.jpg',
    alt: 'Editorial automotive brand photography in Houston TX by FemStudio',
    frame: 'aspect-square',
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
          <div className="columns-1 gap-8 md:columns-2 lg:columns-3">
            {visibleItems.map((item) => (
              <article
                key={item.id}
                className="group mb-8 break-inside-avoid overflow-hidden border border-transparent bg-darkGreen transition-colors duration-500 hover:border-gold"
              >
                <div className={`relative ${item.frame}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-forest/90 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="font-serif text-sm italic uppercase tracking-wider text-gold">{item.label}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
