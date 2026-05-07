'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HomeSplitHero() {
  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-forest md:h-[800px]">
      <div className="flex h-full">
        {/* Left: Photography Panel */}
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-black md:w-1/2">
          <Image
            src="/images/editorial/porsche-editorial-brand-photography-houston-model-car-hero.jpg"
            alt="Porsche editorial photography - model and car in Houston"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darkGreen/90 via-transparent to-darkGreen/20" />
          <div className="relative z-10 text-center">
            <h1 className="font-serif text-6xl italic leading-tight text-cream drop-shadow-lg md:text-8xl">Photography</h1>
          </div>
          <Link
            href="/photography"
            className="focus-ring absolute bottom-8 left-0 right-0 mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-gold px-6 py-3 font-serif italic text-gold transition-all hover:bg-gold/10 md:bottom-12"
          >
            Explore Portfolio
          </Link>
        </div>

        {/* Center: Gold Divider */}
        <div className="hidden w-1 flex-col items-center justify-center gap-24 bg-gold/30 md:flex">
          <div className="h-1 w-8 bg-gold" />
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="font-sans text-xs font-bold tracking-[0.2em] text-gold/80">BRAND</p>
            <p className="font-sans text-xs font-bold tracking-[0.2em] text-gold/80">PHOTOGRAPHY</p>
          </div>
          <div className="h-12 w-px bg-gold/30" />
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="font-sans text-xs font-bold tracking-[0.2em] text-gold/80">CUSTOM</p>
            <p className="font-sans text-xs font-bold tracking-[0.2em] text-gold/80">WEB DESIGN</p>
          </div>
          <div className="h-1 w-8 bg-gold" />
        </div>

        {/* Right: Web Design Panel */}
        <div className="relative flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-darkGreen via-darkGreen to-forest md:w-1/2">
          {/* Animated geometric background */}
          <div className="absolute inset-0 overflow-hidden opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(200,162,39,0.1)_25%,rgba(200,162,39,0.1)_50%,transparent_50%,transparent_75%,rgba(200,162,39,0.1)_75%,rgba(200,162,39,0.1))] bg-[length:40px_40px]" />
          </div>

          <div className="relative z-10 text-center">
            <h2 className="mb-4 font-sans text-5xl font-bold tracking-tight text-cream md:text-7xl">
              WEB DESIGN
            </h2>
            <p className="font-sans text-2xl font-bold tracking-wide text-gold md:text-4xl">& STRATEGY</p>
          </div>

          <Link
            href="/web-design"
            className="focus-ring absolute bottom-8 left-0 right-0 mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-gold px-6 py-3 font-serif italic text-gold transition-all hover:bg-gold/10 md:bottom-12"
          >
            View Work
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#services"
        className="focus-ring absolute bottom-6 left-1/2 z-20 -translate-x-1/2 inline-flex flex-col items-center gap-2 rounded-full border border-gold/50 px-4 py-3 text-gold/70 transition-all hover:text-gold md:bottom-8"
      >
        <svg className="h-5 w-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </Link>
    </div>
  )
}
