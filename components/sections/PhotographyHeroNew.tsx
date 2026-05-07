'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function PhotographyHeroNew() {
  const headshots = [
    '/images/headshots/professional-headshot-houston-01.jpg',
    '/images/headshots/professional-headshot-houston-02.jpg',
    '/images/headshots/professional-headshot-houston-03.jpg',
    '/images/headshots/professional-headshot-houston-04.jpg',
  ]

  type GridTile = { type: 'headshot'; src: string } | { type: 'logo' }

  // Grid positions: 1-4 are headshots 01-04, 5 is logo, 6-9 cycle through 01-04
  const gridTiles: GridTile[] = [
    { type: 'headshot', src: headshots[0] },
    { type: 'headshot', src: headshots[1] },
    { type: 'headshot', src: headshots[2] },
    { type: 'headshot', src: headshots[3] },
    { type: 'logo' },
    { type: 'headshot', src: headshots[0] },
    { type: 'headshot', src: headshots[1] },
    { type: 'headshot', src: headshots[2] },
    { type: 'headshot', src: headshots[3] },
  ]

  return (
    <section className="w-full bg-cream min-h-screen md:min-h-[100vh] flex items-center">
      <div className="w-full flex flex-col md:flex-row gap-0">
        {/* LEFT SIDE — 40% width on desktop */}
        <div className="w-full md:w-2/5 px-6 md:px-12 py-12 md:py-20 flex flex-col justify-center">
          {/* Eyebrow */}
          <p className="font-sans text-xs tracking-widest text-gold uppercase">
            Houston Corporate Headshots
          </p>

          {/* Headline */}
          <h1 className="mt-4 font-serif italic font-bold text-4xl md:text-5xl text-forest leading-tight">
            Headshots that look like leadership.
          </h1>

          {/* Subheading */}
          <p className="mt-4 font-serif text-base text-forest/70 max-w-sm leading-relaxed">
            Premium headshot photography for professionals, founders, and teams who need to look confident, credible, and ready for the room.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-row gap-4">
            <Link
              href="/contact"
              className="focus-ring rounded-full px-6 py-3 font-sans text-xs font-medium font-bold tracking-widest transition-all duration-200 active:scale-95"
              style={{ backgroundColor: '#0f2d24', color: '#fcfbf7' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(15, 45, 36, 0.9)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#0f2d24')}
            >
              BOOK A HEADSHOT
            </Link>
            <Link
              href="#portfolio"
              className="focus-ring rounded-full border border-forest px-6 py-3 font-sans text-xs font-bold tracking-widest text-forest transition-colors duration-200 hover:bg-forest hover:text-cream"
            >
              VIEW PORTFOLIO
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 flex gap-10">
            <div>
              <p className="font-serif font-bold text-4xl text-forest">50+</p>
              <p className="font-sans text-xs tracking-widest text-forest/60 uppercase mt-1">
                headshots captured
              </p>
            </div>
            <div>
              <p className="font-serif font-bold text-4xl text-forest">5–6</p>
              <p className="font-sans text-xs tracking-widest text-forest/60 uppercase mt-1">
                client websites
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — 60% width on desktop */}
        <div className="w-full md:w-3/5 px-6 md:p-8 pb-12 md:pb-0 flex items-center justify-center">
          {/* 3x3 Grid */}
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1', maxWidth: '100%' }}>
            <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-2">
              {gridTiles.map((tile, idx) =>
                tile.type === 'logo' ? (
                  <div
                    key={`logo-${idx}`}
                    className="relative overflow-hidden bg-forest flex items-center justify-center"
                    style={{ aspectRatio: '1/1' }}
                    aria-label="FemStudio Houston Photography Studio"
                  >
                    <Image
                      src="/images/brand/femstudio-logo-stacked.png"
                      alt="FemStudio logo"
                      fill
                      className="object-contain p-6"
                      quality={90}
                    />
                  </div>
                ) : tile.type === 'headshot' ? (
                  <div
                    key={`headshot-${idx}`}
                    className="group relative overflow-hidden bg-forest"
                    style={{ aspectRatio: '1/1' }}
                  >
                    <Image
                      src={tile.src}
                      alt="Professional corporate headshot photography by FemStudio Houston"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 33vw, 20vw"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-[#0f2d24]/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
