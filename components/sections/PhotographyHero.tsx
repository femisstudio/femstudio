'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function PhotographyHero() {
  const headshots = [
    { id: 1, src: '/images/headshots/professional-headshot-houston-01.jpg' },
    { id: 2, src: '/images/headshots/professional-headshot-houston-02.jpg' },
    { id: 3, src: '/images/headshots/professional-headshot-houston-03.jpg' },
    { id: 4, src: '/images/headshots/professional-headshot-houston-04.jpg' },
  ]

  return (
    <section className="w-full bg-cream px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Two-column grid: text left, mosaic right */}
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-start">
          {/* Left Column: Content */}
          <div className="flex flex-col justify-start">
            {/* Eyebrow with gold accent line */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-6 bg-gold" />
              <p className="text-sm font-medium tracking-widest text-forest uppercase">
                Houston Corporate Headshots
              </p>
            </div>

            {/* Headline */}
            <h1 className="mb-6 font-serif text-5xl md:text-6xl italic text-forest leading-tight">
              Corporate Headshots That Make You Look Ready for the Room
            </h1>

            {/* Body Copy */}
            <p className="mb-8 font-serif text-lg text-forest/80 leading-relaxed max-w-xl">
              Premium headshot photography for professionals, founders, teams, and executives who need a confident, polished presence online and in person.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* Primary CTA */}
              <Link
                href="/contact?service=photography"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-forest px-8 py-3 font-sans text-sm font-bold tracking-widest text-cream transition-all duration-200 hover:bg-forest/90 active:scale-95"
              >
                Book a Headshot Session
              </Link>

              {/* Secondary CTA */}
              <Link
                href="#gallery"
                className="focus-ring inline-flex items-center justify-center rounded-full border-2 border-forest px-8 py-3 font-sans text-sm font-bold tracking-widest text-forest transition-colors duration-200 hover:bg-forest hover:text-cream"
              >
                View Headshot Work
              </Link>
            </div>

            {/* Service line */}
            <p className="text-sm text-forest/60 font-sans tracking-wide">
              Individual headshots · Team sessions · Branding portraits
            </p>
          </div>

          {/* Right Column: Headshot Mosaic */}
          <div className="w-full">
            {/* Mosaic Grid Card */}
            <div className="rounded-lg overflow-hidden shadow-lg" style={{ aspectRatio: '3 / 4' }}>
              <div
                className="w-full h-full grid gap-1"
                style={{
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gridAutoRows: 'auto',
                }}
              >
                {/* Top Row: 2 headshots */}
                {headshots.slice(0, 2).map((headshot) => (
                  <div
                    key={`top-${headshot.id}`}
                    className="relative overflow-hidden bg-forest"
                    style={{ aspectRatio: '1 / 1' }}
                  >
                    <Image
                      src={headshot.src}
                      alt="Professional corporate headshot by FemStudio Houston"
                      fill
                      className="object-cover object-top"
                      quality={85}
                    />
                  </div>
                ))}

                {/* Center Logo Tile */}
                <div
                  className="relative overflow-hidden bg-cream flex items-center justify-center col-span-2"
                  style={{ aspectRatio: '2 / 1' }}
                >
                  <Image
                    src="/images/brand/femstudio-logo-stacked.png"
                    alt="FemStudio logo"
                    fill
                    className="object-contain p-3"
                    quality={90}
                  />
                </div>

                {/* Bottom Row: 2 headshots */}
                {headshots.slice(2, 4).map((headshot) => (
                  <div
                    key={`bottom-${headshot.id}`}
                    className="relative overflow-hidden bg-forest"
                    style={{ aspectRatio: '1 / 1' }}
                  >
                    <Image
                      src={headshot.src}
                      alt="Professional corporate headshot by FemStudio Houston"
                      fill
                      className="object-cover object-top"
                      quality={85}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
