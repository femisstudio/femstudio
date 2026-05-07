'use client'

import { useState } from 'react'
import Image from 'next/image'

const portfolioItems = [
  {
    id: 1,
    category: 'HEADSHOTS',
    image: '/images/headshots/professional-headshot-houston-01.jpg',
    alt: 'Professional corporate headshot',
  },
  {
    id: 2,
    category: 'EDITORIAL & BRAND',
    image: '/images/editorial/porsche-editorial-houston-photographer-01.jpg',
    alt: 'Editorial brand photography',
  },
  {
    id: 3,
    category: 'CELEBRATIONS',
    image: '/images/celebrations/prom-photography-houston-01.jpg',
    alt: 'Celebration photography',
  },
  {
    id: 4,
    category: 'HEADSHOTS',
    image: '/images/headshots/professional-headshot-houston-02.jpg',
    alt: 'Professional headshot',
  },
  {
    id: 5,
    category: 'EDITORIAL & BRAND',
    image: '/images/editorial/porsche-editorial-houston-photographer-02.jpg',
    alt: 'Editorial photography',
  },
  {
    id: 6,
    category: 'CELEBRATIONS',
    image: '/images/celebrations/graduation-photography-houston-01.jpg',
    alt: 'Graduation celebration',
  },
  {
    id: 7,
    category: 'HEADSHOTS',
    image: '/images/headshots/professional-headshot-houston-03.jpg',
    alt: 'Professional headshot',
  },
  {
    id: 8,
    category: 'EDITORIAL & BRAND',
    image: '/images/editorial/porsche-editorial-houston-photographer-03.jpg',
    alt: 'Brand photography',
  },
  {
    id: 9,
    category: 'EDITORIAL & BRAND',
    image: '/images/editorial/porsche-editorial-houston-photographer-04.jpg',
    alt: 'Editorial photography',
  },
  {
    id: 10,
    category: 'HEADSHOTS',
    image: '/images/headshots/professional-headshot-houston-04.jpg',
    alt: 'Professional headshot',
  },
  {
    id: 11,
    category: 'EDITORIAL & BRAND',
    image: '/images/editorial/porsche-editorial-houston-photographer-02.jpg',
    alt: 'Brand photography',
  },
  {
    id: 12,
    category: 'CELEBRATIONS',
    image: '/images/celebrations/graduation-photography-houston-02.jpg',
    alt: 'Celebration moment',
  },
]

export default function PhotographyGallery() {
  const [activeFilter, setActiveFilter] = useState('ALL')

  const filteredItems =
    activeFilter === 'ALL'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <>
      {/* Filter Bar */}
      <section className="w-full bg-darkGreen border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6">
          <div className="flex gap-8 md:gap-12 font-sans text-[10px] tracking-[0.3em] uppercase">
            {['ALL', 'HEADSHOTS', 'EDITORIAL & BRAND', 'CELEBRATIONS'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative transition-colors ${
                  activeFilter === filter ? 'text-gold' : 'text-cream/40 hover:text-cream/70'
                } ${filter === 'EDITORIAL & BRAND' ? 'hidden sm:block' : ''}`}
              >
                {filter}
                {activeFilter === filter && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" style={{ transform: 'translateY(1rem)' }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Gallery */}
      <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-forest">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative overflow-hidden border border-transparent transition-all duration-500 hover:border-gold rounded-lg">
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/90 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-end p-6">
                    <span className="font-serif italic text-gold text-sm uppercase tracking-wider">{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
