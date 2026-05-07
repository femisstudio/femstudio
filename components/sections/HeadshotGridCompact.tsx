'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeadshotGridCompact() {
  const headshots = [
    { id: 1, src: '/images/headshots/professional-headshot-houston-01.jpg' },
    { id: 2, src: '/images/headshots/professional-headshot-houston-02.jpg' },
    { id: 3, src: '/images/headshots/professional-headshot-houston-03.jpg' },
    { id: 4, src: '/images/headshots/professional-headshot-houston-04.jpg' },
  ]

  return (
    <>
      {/* 2x2 Grid + Center Logo */}
      <section aria-label="FemStudio headshot photography portfolio" className="w-full bg-darkGreen overflow-hidden">
        <div className="grid gap-0" style={{
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: 'auto',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
        }}>
          {/* Top Row - 2 Images */}
          {headshots.slice(0, 2).map((headshot) => (
            <div
              key={`top-${headshot.id}`}
              className="group relative overflow-hidden bg-darkGreen"
              style={{ aspectRatio: '3 / 4' }}
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

          {/* Center Logo - Row 1 */}
          <div
            className="relative overflow-hidden bg-white flex items-center justify-center col-span-2"
            style={{ aspectRatio: '2 / 3' }}
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

          {/* Top Right - 1 Image (mirrored) */}
          <div
            key="top-right"
            className="group relative overflow-hidden bg-darkGreen"
            style={{ aspectRatio: '3 / 4' }}
          >
            <Image
              src={headshots[0].src}
              alt="Professional corporate headshot photography by FemStudio Houston"
              fill
              className="object-cover object-top"
              quality={85}
            />
            <div className="absolute inset-0 bg-[#0f2d24]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          {/* Bottom Row - 2 Images */}
          {headshots.slice(2, 4).map((headshot) => (
            <div
              key={`bottom-${headshot.id}`}
              className="group relative overflow-hidden bg-darkGreen"
              style={{ aspectRatio: '3 / 4' }}
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
