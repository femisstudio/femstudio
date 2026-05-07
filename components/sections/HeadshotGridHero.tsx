'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeadshotGridHero() {
  return (
    <>
      {/* Full-Width Hero Grid Image */}
      <section aria-label="FemStudio headshot photography portfolio" className="w-full bg-darkGreen overflow-hidden">
        <div className="relative w-full" style={{ aspectRatio: '16 / 10' }}>
          <Image
            src="/images/brand/femstudio_logo_stacked.png"
            alt="FemStudio professional headshot photography portfolio grid with 19 headshots and centered logo"
            fill
            className="object-cover object-center"
            quality={85}
            priority
          />
        </div>
      </section>

      {/* Text Section Below Grid */}
      <section className="w-full bg-darkGreen px-6 py-20 md:py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 font-sans text-sm font-medium tracking-widest text-gold uppercase">
            FemStudio Photography
          </p>
          <h2 className="mb-6 font-serif text-5xl italic text-cream md:text-6xl">Every frame, a story.</h2>
          <p className="mb-12 font-serif text-lg italic text-cream/70">
            Houston-based photographer capturing portraits, brands, and milestones.
          </p>
          <Link
            href="/contact?service=photography"
            className="focus-ring inline-block rounded-full border-2 border-gold px-8 py-3 font-sans text-xs font-bold tracking-widest text-gold transition-colors duration-200 hover:bg-gold hover:text-darkGreen"
          >
            BOOK YOUR SESSION
          </Link>
        </div>
      </section>
    </>
  )
}
