'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroSplitDivider() {
  return (
    <section className="relative w-full h-[1024px] flex items-center justify-center overflow-hidden">
      {/* Photography Section */}
      <div className="w-full h-full relative bg-[#8b8b8b] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/editorial/porsche-editorial-brand-photography-houston-model-car-hero.jpg"
          alt="Editorial Portrait"
          fill
          className="object-cover mix-blend-multiply opacity-80 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0 hover:scale-105"
        />

        <div className="absolute top-32 left-12 font-sans text-[10px] tracking-[0.3em] text-forest/60 border-b border-forest/30 pb-2 transition-all duration-500 hover:text-forest hover:border-forest">
          UNIVERSE 01
        </div>

        <h1 className="relative z-10 text-4xl md:text-6xl font-light italic text-cream leading-none tracking-tight text-center mt-32 drop-shadow-lg transition-all duration-700 hover:scale-110 hover:text-gold cursor-pointer whitespace-nowrap">
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

    </section>
  )
}
