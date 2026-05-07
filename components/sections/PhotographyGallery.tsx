'use client'

import { useState } from 'react'
import Image from 'next/image'

const allPortfolioItems = [
  // HEADSHOTS
  {
    id: 1,
    category: 'HEADSHOTS',
    image: '/images/headshots/professional-headshot-houston-01.jpg',
    alt: 'Professional corporate headshot',
  },
  {
    id: 2,
    category: 'HEADSHOTS',
    image: '/images/headshots/professional-headshot-houston-02.jpg',
    alt: 'Professional headshot for LinkedIn',
  },
  {
    id: 3,
    category: 'HEADSHOTS',
    image: '/images/headshots/professional-headshot-houston-03.jpg',
    alt: 'Professional corporate headshot',
  },
  {
    id: 4,
    category: 'HEADSHOTS',
    image: '/images/headshots/professional-headshot-houston-04.jpg',
    alt: 'Professional headshot',
  },
  {
    id: 5,
    category: 'HEADSHOTS',
    image: '/images/headshots/professional-headshot-houston-05.jpg',
    alt: 'Professional corporate portrait',
  },
  {
    id: 6,
    category: 'HEADSHOTS',
    image: '/images/headshots/professional-headshot-houston-06.jpg',
    alt: 'Professional headshot',
  },
  {
    id: 7,
    category: 'HEADSHOTS',
    image: '/images/headshots/professional-headshot-houston-07.jpg',
    alt: 'Professional corporate headshot',
  },
  {
    id: 8,
    category: 'HEADSHOTS',
    image: '/images/headshots/professional-headshot-houston-08.jpg',
    alt: 'Professional headshot',
  },
  {
    id: 9,
    category: 'HEADSHOTS',
    image: '/images/headshots/professional-headshot-houston-09.jpg',
    alt: 'Professional portrait',
  },
  {
    id: 10,
    category: 'HEADSHOTS',
    image: '/images/headshots/professional-headshot-houston-10.jpg',
    alt: 'Professional headshot',
  },
  {
    id: 11,
    category: 'HEADSHOTS',
    image: '/images/headshots/professional-headshot-houston-11.jpg',
    alt: 'Professional corporate headshot',
  },
  {
    id: 12,
    category: 'HEADSHOTS',
    image: '/images/headshots/professional-headshot-houston-12.jpg',
    alt: 'Professional headshot',
  },
  // HEADSHOTS (moved from PORTRAITS)
  {
    id: 32,
    category: 'HEADSHOTS',
    image: '/images/casual/casual-portrait-houston-01.jpg',
    alt: 'Casual portrait photography',
  },
  // EDITORIAL & BRAND
  {
    id: 13,
    category: 'EDITORIAL & BRAND',
    image: '/images/editorial/porsche-editorial-houston-photographer-01.jpg',
    alt: 'Editorial brand photography',
  },
  {
    id: 14,
    category: 'EDITORIAL & BRAND',
    image: '/images/editorial/porsche-editorial-houston-photographer-02.jpg',
    alt: 'Editorial photography',
  },
  {
    id: 15,
    category: 'EDITORIAL & BRAND',
    image: '/images/editorial/porsche-editorial-houston-photographer-03.jpg',
    alt: 'Brand photography',
  },
  {
    id: 16,
    category: 'EDITORIAL & BRAND',
    image: '/images/editorial/porsche-editorial-houston-photographer-04.jpg',
    alt: 'Editorial photography',
  },
  {
    id: 17,
    category: 'EDITORIAL & BRAND',
    image: '/images/editorial/porsche-editorial-houston-photographer-05.jpg',
    alt: 'Brand photography',
  },
  {
    id: 18,
    category: 'EDITORIAL & BRAND',
    image: '/images/editorial/porsche-editorial-houston-photographer-06.jpg',
    alt: 'Editorial brand photography',
  },
  // CELEBRATIONS
  {
    id: 19,
    category: 'CELEBRATIONS',
    image: '/images/celebrations/prom-photography-houston-01.jpg',
    alt: 'Prom celebration photography',
  },
  {
    id: 20,
    category: 'CELEBRATIONS',
    image: '/images/celebrations/prom-photography-houston-02.jpg',
    alt: 'Prom photography',
  },
  {
    id: 21,
    category: 'CELEBRATIONS',
    image: '/images/celebrations/prom-photography-houston-03.jpg',
    alt: 'Prom celebration',
  },
  {
    id: 22,
    category: 'CELEBRATIONS',
    image: '/images/celebrations/prom-photography-houston-04.jpg',
    alt: 'Prom photography',
  },
  {
    id: 23,
    category: 'CELEBRATIONS',
    image: '/images/celebrations/prom-photography-houston-05.jpg',
    alt: 'Prom celebration photography',
  },
  {
    id: 24,
    category: 'CELEBRATIONS',
    image: '/images/celebrations/graduation-photography-houston-01.jpg',
    alt: 'Graduation celebration',
  },
  {
    id: 25,
    category: 'CELEBRATIONS',
    image: '/images/celebrations/graduation-photography-houston-02.jpg',
    alt: 'Graduation photography',
  },
  {
    id: 26,
    category: 'CELEBRATIONS',
    image: '/images/celebrations/graduation-photography-houston-03.jpg',
    alt: 'Graduation celebration',
  },
  {
    id: 27,
    category: 'CELEBRATIONS',
    image: '/images/celebrations/graduation-photography-houston-04.jpg',
    alt: 'Graduation photography',
  },
  {
    id: 28,
    category: 'CELEBRATIONS',
    image: '/images/celebrations/graduation-photography-houston-05.jpg',
    alt: 'Graduation celebration',
  },
  {
    id: 29,
    category: 'CELEBRATIONS',
    image: '/images/celebrations/graduation-photography-houston-06.jpg',
    alt: 'Graduation photography',
  },
  {
    id: 30,
    category: 'CELEBRATIONS',
    image: '/images/celebrations/graduation-photography-houston-07.jpg',
    alt: 'Graduation celebration',
  },
  {
    id: 31,
    category: 'CELEBRATIONS',
    image: '/images/celebrations/graduation-photography-houston-08.jpg',
    alt: 'Graduation photography',
  },
  // CELEBRATIONS (moved from EVENTS)
  {
    id: 33,
    category: 'CELEBRATIONS',
    image: '/images/wedding-guest/wedding-guest-photography-houston-01.jpg',
    alt: 'Wedding guest photography',
  },
  {
    id: 34,
    category: 'CELEBRATIONS',
    image: '/images/wedding-guest/wedding-guest-photography-houston-02.jpg',
    alt: 'Wedding guest photography',
  },
  {
    id: 35,
    category: 'CELEBRATIONS',
    image: '/images/wedding-guest/wedding-guest-photography-houston-03.jpg',
    alt: 'Wedding guest photography',
  },
  {
    id: 36,
    category: 'CELEBRATIONS',
    image: '/images/wedding-guest/wedding-guest-photography-houston-04.jpg',
    alt: 'Wedding guest photography',
  },
  {
    id: 37,
    category: 'CELEBRATIONS',
    image: '/images/wedding-guest/wedding-guest-photography-houston-05.jpg',
    alt: 'Wedding guest photography',
  },
  {
    id: 38,
    category: 'CELEBRATIONS',
    image: '/images/wedding-guest/wedding-guest-photography-houston-06.jpg',
    alt: 'Wedding guest photography',
  },
  {
    id: 39,
    category: 'CELEBRATIONS',
    image: '/images/wedding-guest/wedding-guest-photography-houston-07.jpg',
    alt: 'Wedding guest photography',
  },
  {
    id: 40,
    category: 'CELEBRATIONS',
    image: '/images/wedding-guest/wedding-guest-photography-houston-08.jpg',
    alt: 'Wedding guest photography',
  },
  {
    id: 41,
    category: 'CELEBRATIONS',
    image: '/images/wedding-guest/wedding-guest-photography-houston-09.jpg',
    alt: 'Wedding guest photography',
  },
  {
    id: 42,
    category: 'CELEBRATIONS',
    image: '/images/wedding-guest/wedding-guest-photography-houston-10.jpg',
    alt: 'Wedding guest photography',
  },
  {
    id: 43,
    category: 'CELEBRATIONS',
    image: '/images/wedding-guest/wedding-guest-photography-houston-11.jpg',
    alt: 'Wedding guest photography',
  },
  {
    id: 44,
    category: 'CELEBRATIONS',
    image: '/images/wedding-guest/wedding-guest-photography-houston-12.jpg',
    alt: 'Wedding guest photography',
  },
  {
    id: 45,
    category: 'CELEBRATIONS',
    image: '/images/wedding-guest/wedding-guest-photography-houston-13.jpg',
    alt: 'Wedding guest photography',
  },
  {
    id: 46,
    category: 'CELEBRATIONS',
    image: '/images/wedding-guest/wedding-guest-photography-houston-14.jpg',
    alt: 'Wedding guest photography',
  },
  {
    id: 47,
    category: 'CELEBRATIONS',
    image: '/images/wedding-guest/wedding-guest-photography-houston-15.jpg',
    alt: 'Wedding guest photography',
  },
  {
    id: 48,
    category: 'CELEBRATIONS',
    image: '/images/wedding-guest/wedding-guest-photography-houston-16.jpg',
    alt: 'Wedding guest photography',
  },
]

const featuredImages = [1, 2, 3, 4, 5, 6, 13, 14, 15, 19, 24, 26, 33, 39, 45]

const filterCategories = ['ALL', 'HEADSHOTS', 'EDITORIAL & BRAND', 'CELEBRATIONS']

export default function PhotographyGallery() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredItems =
    activeFilter === 'ALL'
      ? allPortfolioItems.filter((item) => featuredImages.includes(item.id))
      : allPortfolioItems.filter((item) => item.category === activeFilter)

  return (
    <>
      {/* Filter Bar */}
      <section className="w-full bg-darkGreen border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6">
          <div className="flex gap-4 md:gap-8 font-sans text-[10px] tracking-[0.3em] uppercase overflow-x-auto pb-2">
            {filterCategories.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative whitespace-nowrap transition-colors ${
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

      {/* Grid layout */}
      <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-forest">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                className="group relative overflow-hidden rounded-lg transition-transform duration-500 hover:scale-[1.02] aspect-square cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold"
                aria-label={`Click to view full screen: ${item.alt}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={85}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Full screen image viewer"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-cream hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded-sm p-2"
            aria-label="Close image viewer"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative w-full h-full max-w-4xl max-h-screen flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="Full screen gallery image"
              fill
              className="object-contain"
              sizes="100vw"
              quality={95}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}
