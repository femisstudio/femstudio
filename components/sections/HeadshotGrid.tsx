'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeadshotGrid() {
  const availableImages = [
    '/images/headshots/professional-headshot-houston-01.jpg',
    '/images/headshots/professional-headshot-houston-02.jpg',
    '/images/headshots/professional-headshot-houston-03.jpg',
    '/images/headshots/professional-headshot-houston-04.jpg',
  ]

  const headshots = Array.from({ length: 19 }, (_, i) => ({
    id: i + 1,
    src: availableImages[i % availableImages.length],
  }))

  return (
    <>
      {/* Mosaic Grid Hero */}
      <section aria-label="FemStudio headshot photography portfolio" className="w-full bg-darkGreen overflow-hidden">
        <div className="grid gap-0" style={{
          gridTemplateColumns: 'repeat(6, 1fr)',
          gridAutoRows: 'auto',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
        }}>
          {/* Top Row - 4 Large Tiles (positions 0-3) */}
          {headshots.slice(0, 4).map((headshot, idx) => (
            <div
              key={`top-${idx}`}
              className="group relative overflow-hidden bg-darkGreen"
              style={{
                aspectRatio: '3 / 4',
                gridColumn: idx === 0 ? 'span 1' : idx === 1 ? 'span 1' : idx === 2 ? 'span 2' : 'span 2',
              }}
            >
              <Image
                src={headshot.src}
                alt="Professional corporate headshot photography by FemStudio Houston"
                fill
                className="object-cover object-top"
                quality={85}
              />
              <div className="absolute inset-0 bg-[#0f2d24]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}

          {/* Middle Row - Logo Center (positions 4-10) */}
          {/* Left side tiles */}
          {headshots.slice(4, 6).map((headshot, idx) => (
            <div
              key={`mid-left-${idx}`}
              className="group relative overflow-hidden bg-darkGreen"
              style={{ aspectRatio: '4 / 3' }}
            >
              <Image
                src={headshot.src}
                alt="Professional corporate headshot photography by FemStudio Houston"
                fill
                className="object-cover object-top"
                quality={85}
              />
              <div className="absolute inset-0 bg-[#0f2d24]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}

          {/* Center Logo Tile - Larger */}
          <div
            className="relative overflow-hidden bg-white flex items-center justify-center"
            style={{
              gridColumn: 'span 2',
              aspectRatio: '1 / 1',
            }}
            aria-label="FemStudio — Houston Photography Studio"
          >
            <Image
              src="/images/brand/femstudio-logo-stacked.png"
              alt="FemStudio logo"
              fill
              className="object-contain p-8"
              quality={90}
            />
          </div>

          {/* Right side tiles */}
          {headshots.slice(6, 8).map((headshot, idx) => (
            <div
              key={`mid-right-${idx}`}
              className="group relative overflow-hidden bg-darkGreen"
              style={{ aspectRatio: '4 / 3' }}
            >
              <Image
                src={headshot.src}
                alt="Professional corporate headshot photography by FemStudio Houston"
                fill
                className="object-cover object-top"
                quality={85}
              />
              <div className="absolute inset-0 bg-[#0f2d24]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}

          {/* Bottom Row - 5 Equal Smaller Tiles (positions 11-19) */}
          {headshots.slice(8, 19).map((headshot, idx) => (
            <div
              key={`bottom-${idx}`}
              className="group relative overflow-hidden bg-darkGreen"
              style={{
                aspectRatio: '5 / 4',
                gridColumn: idx < 5 ? 'span 1' : idx < 10 ? 'span 1' : 'span 1',
              }}
            >
              <Image
                src={headshot.src}
                alt="Professional corporate headshot photography by FemStudio Houston"
                fill
                className="object-cover object-top"
                quality={85}
              />
              <div className="absolute inset-0 bg-[#0f2d24]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
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
