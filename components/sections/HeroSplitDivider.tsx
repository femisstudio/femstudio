'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroSplitDivider() {
  return (
    <section className="relative w-full h-[1024px] flex flex-col md:flex-row overflow-hidden group" aria-label="FemStudio Houston — brand photography and web design studio">
      <p className="sr-only">FemStudio is a Houston TX brand photography and custom web design studio helping professionals look credible and grow their business online.</p>
      {/* Left: Photography */}
      <div className="w-full md:w-1/2 h-full relative bg-[#8b8b8b] flex items-center justify-center overflow-hidden transition-all duration-700 hover:w-[55%] cursor-pointer">
        <Image
          src="/images/editorial/porsche-editorial-brand-photography-houston-model-car-hero.jpg"
          alt="Editorial Portrait"
          fill
          className="object-cover mix-blend-multiply opacity-80 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0 hover:scale-105"
        />

        <div className="absolute top-32 left-12 font-sans text-[10px] tracking-[0.3em] text-forest/60 border-b border-forest/30 pb-2 transition-all duration-500 hover:text-forest hover:border-forest">
          UNIVERSE 01
        </div>

        <h1 className="relative z-10 text-7xl md:text-9xl font-light italic text-cream leading-none tracking-tight text-center mt-32 drop-shadow-lg transition-all duration-700 hover:scale-110 hover:text-gold cursor-pointer whitespace-nowrap">
          Photography
        </h1>

        <div className="absolute bottom-24 left-12 opacity-0 hover:opacity-100 transition-all duration-500 transform translate-y-4 hover:translate-y-0">
          <p className="font-serif text-sm text-cream/80 italic mb-4 max-w-xs">Capturing raw emotion and timeless beauty through the lens</p>
          <Link
            href="/photography"
            className="focus-ring inline-block px-6 py-2 border border-cream/40 text-cream font-sans text-[10px] tracking-widest hover:bg-cream hover:text-forest transition-all duration-300 rounded-full"
          >
            EXPLORE PORTFOLIO
          </Link>
        </div>

        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex flex-col gap-3 opacity-0 hover:opacity-100 transition-all duration-500">
          <div className="w-2 h-2 rounded-full bg-cream/60 hover:bg-gold hover:scale-150 transition-all duration-300 cursor-pointer" />
          <div className="w-2 h-2 rounded-full bg-cream/60 hover:bg-gold hover:scale-150 transition-all duration-300 cursor-pointer" />
          <div className="w-2 h-2 rounded-full bg-cream/60 hover:bg-gold hover:scale-150 transition-all duration-300 cursor-pointer" />
        </div>
      </div>

      {/* Right: FemStudio Brand */}
      <div className="w-full md:w-1/2 h-full relative bg-[#0f2d24] flex flex-col justify-center px-12 py-16">
        {/* Eyebrow */}
        <p className="font-syncopate text-xs tracking-widest mb-6" style={{ color: '#c9a227' }}>
          FEMSTUDIO — HOUSTON TX
        </p>

        {/* Main Statement */}
        <h2 className="font-cormorant-garamond italic font-bold text-5xl text-cream leading-tight mb-6 max-w-lg">
          We make you look like the brand you are.
        </h2>

        {/* Supporting Text */}
        <p className="font-cormorant-garamond text-lg text-cream opacity-60 italic max-w-sm mb-10">
          Brand photography and custom web design for professionals who are serious about how they show up.
        </p>

        {/* Service Tags */}
        <div className="flex gap-3 mb-12 flex-wrap">
          <div className="border rounded-full px-4 py-2 font-syncopate text-xs tracking-widest" style={{ borderColor: '#c9a227', color: '#c9a227' }}>
            BRAND PHOTOGRAPHY
          </div>
          <div className="border rounded-full px-4 py-2 font-syncopate text-xs tracking-widest" style={{ borderColor: 'rgba(252, 251, 247, 0.2)', color: 'rgba(252, 251, 247, 0.6)' }}>
            CUSTOM WEB DESIGN
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex gap-10 mb-12">
          <div>
            <p className="font-cormorant-garamond font-bold text-4xl text-cream">50+</p>
            <p className="font-syncopate text-xs tracking-widest text-cream opacity-50 mt-1">headshots captured</p>
          </div>
          <div>
            <p className="font-cormorant-garamond font-bold text-4xl text-cream">5—6</p>
            <p className="font-syncopate text-xs tracking-widest text-cream opacity-50 mt-1">client websites</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 mb-auto">
          <Link
            href="/photography"
            className="font-syncopate text-xs tracking-widest font-medium rounded-full px-6 py-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ backgroundColor: '#c9a227', color: '#0f2d24', '--tw-ring-color': '#c9a227' } as React.CSSProperties}
          >
            BOOK A SESSION
          </Link>
          <Link
            href="/web-design"
            className="font-syncopate text-xs tracking-widest rounded-full px-6 py-3 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ borderColor: 'rgba(252, 251, 247, 0.3)', color: 'rgba(252, 251, 247, 1)', border: '1px solid rgba(252, 251, 247, 0.3)', '--tw-ring-color': '#c9a227' } as React.CSSProperties}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#c9a227'
              e.currentTarget.style.color = '#c9a227'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(252, 251, 247, 0.3)'
              e.currentTarget.style.color = 'rgba(252, 251, 247, 1)'
            }}
          >
            START A PROJECT
          </Link>
        </div>

        {/* Headshot Images Strip */}
        <div className="flex gap-2 mt-auto pt-8 border-t" style={{ borderColor: 'rgba(252, 251, 247, 0.1)' }}>
          <div className="relative w-16 h-20 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src="/images/headshots/professional-headshot-houston-01.jpg"
              alt="FemStudio professional headshot example 1"
              fill
              className="object-cover"
              style={{ objectPosition: 'center top' }}
              quality={85}
            />
          </div>
          <div className="relative w-16 h-20 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src="/images/headshots/professional-headshot-houston-02.jpg"
              alt="FemStudio professional headshot example 2"
              fill
              className="object-cover"
              style={{ objectPosition: 'center top' }}
              quality={85}
            />
          </div>
          <div className="relative w-16 h-20 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src="/images/headshots/professional-headshot-houston-03.jpg"
              alt="FemStudio professional headshot example 3"
              fill
              className="object-cover"
              style={{ objectPosition: 'center top' }}
              quality={85}
            />
          </div>
          <p className="font-syncopate text-xs text-cream opacity-40 self-end ml-2">+ 50 more</p>
        </div>
      </div>
    </section>
  )
}
