'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroSplitDivider() {
  return (
    <section className="relative w-full h-[1024px] flex flex-col md:flex-row overflow-hidden group">
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

        <h1 className="relative z-10 text-7xl md:text-9xl font-light italic text-cream leading-none tracking-tight text-center mt-32 drop-shadow-lg transition-all duration-700 hover:scale-110 hover:text-gold cursor-pointer">
          Photo<br />graphy
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

      {/* Central Divider */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gold z-20 hidden md:block transform -translate-x-1/2 transition-all duration-700 group-hover:w-[3px] group-hover:shadow-[0_0_20px_rgba(201,162,39,0.6)]">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-8 py-12 bg-forest/80 backdrop-blur-sm rounded-full border border-gold/30 transition-all duration-500 hover:bg-forest hover:border-gold hover:scale-110 hover:shadow-[0_0_30px_rgba(201,162,39,0.4)]">
          <span className="vertical-text font-sans text-[10px] tracking-[0.2em] text-gold/80 transition-all duration-300 hover:text-gold hover:scale-110 cursor-pointer">
            50+ HEADSHOTS
          </span>

          <div className="w-1 h-1 rounded-full bg-gold animate-pulse" />

          <span className="vertical-text font-sans text-[10px] tracking-[0.2em] text-cream/60 transition-all duration-300 hover:text-cream hover:scale-110 cursor-pointer">
            HUMAN • EMOTION • TIMELESS
          </span>

          <div className="w-1 h-1 rounded-full bg-gold animate-pulse" style={{ animationDelay: '0.5s' }} />

          <span className="vertical-text font-sans text-[10px] tracking-[0.2em] text-gold/80 transition-all duration-300 hover:text-gold hover:scale-110 cursor-pointer">
            6 CLIENT WEBSITES
          </span>

          <div className="w-1 h-1 rounded-full bg-gold animate-pulse" style={{ animationDelay: '1s' }} />

          <span className="vertical-text font-sans text-[10px] tracking-[0.2em] text-cream/60 transition-all duration-300 hover:text-cream hover:scale-110 cursor-pointer">
            GEOMETRY • UI/UX • FUTURE
          </span>

          <div className="w-1 h-1 rounded-full bg-gold animate-pulse" style={{ animationDelay: '1.5s' }} />

          <span className="vertical-text font-sans text-[10px] tracking-[0.2em] text-gold/80 transition-all duration-300 hover:text-gold hover:scale-110 cursor-pointer">
            EST. 2022
          </span>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-8 h-12 border-2 border-gold/40 rounded-full flex justify-center pt-2 hover:border-gold transition-all duration-300 cursor-pointer">
          <div className="w-1 h-3 bg-gold rounded-full animate-bounce" />
        </div>
      </div>

      {/* Right: Digital Realm */}
      <div className="w-full md:w-1/2 h-full relative bg-gradient-to-b from-[#142d3c] via-darkGreen to-forest flex items-center justify-center overflow-hidden transition-all duration-700 hover:w-[55%] cursor-pointer">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#2a1b3d] rounded-full mix-blend-screen filter blur-[80px] opacity-60 transition-all duration-1000 hover:opacity-80 hover:scale-110" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#1a4336] rounded-full mix-blend-screen filter blur-[60px] opacity-50 transition-all duration-1000 hover:opacity-70 hover:scale-110" />

        <div className="absolute top-1/3 left-1/3 w-64 h-64 border border-gold/10 rounded-lg transform rotate-12 transition-all duration-[3s] hover:rotate-45 hover:scale-125 hover:border-gold/30" />
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 border border-cream/10 rounded-full transition-all duration-[3s] hover:scale-150 hover:border-cream/30" />

        <div className="absolute top-32 right-12 font-sans text-[10px] tracking-[0.3em] text-cream/60 border-b border-cream/30 pb-2 text-right transition-all duration-500 hover:text-cream hover:border-cream">
          UNIVERSE 02
        </div>

        <div className="relative z-10 flex flex-col items-center text-center transition-all duration-700 hover:scale-110">
          <h1 className="text-6xl md:text-8xl font-sans font-bold text-cream tracking-tighter leading-none transition-all duration-500 hover:text-gold cursor-pointer">
            DIGITAL
          </h1>
          <h1
            className="text-6xl md:text-8xl font-sans font-bold tracking-tighter leading-none mt-2 transition-all duration-500 hover:text-cream cursor-pointer"
            style={{ color: 'transparent', WebkitTextStroke: '1px rgba(252, 251, 247, 0.5)' }}
          >
            REALM
          </h1>
        </div>

        <div className="absolute bottom-24 right-12 opacity-0 hover:opacity-100 transition-all duration-500 transform translate-y-4 hover:translate-y-0 text-right">
          <p className="font-serif text-sm text-cream/80 italic mb-4 max-w-xs">Crafting immersive digital experiences that transcend the ordinary</p>
          <Link
            href="/web-design"
            className="focus-ring inline-block px-6 py-2 border border-cream/40 text-cream font-sans text-[10px] tracking-widest hover:bg-cream hover:text-forest transition-all duration-300 rounded-full"
          >
            VIEW PROJECTS
          </Link>
        </div>

        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 flex flex-col gap-3 opacity-0 hover:opacity-100 transition-all duration-500">
          <div className="w-2 h-2 rounded-full bg-cream/60 hover:bg-gold hover:scale-150 transition-all duration-300 cursor-pointer" />
          <div className="w-2 h-2 rounded-full bg-cream/60 hover:bg-gold hover:scale-150 transition-all duration-300 cursor-pointer" />
          <div className="w-2 h-2 rounded-full bg-cream/60 hover:bg-gold hover:scale-150 transition-all duration-300 cursor-pointer" />
        </div>

        <div className="absolute top-1/4 right-1/4 grid grid-cols-3 gap-2 opacity-0 hover:opacity-100 transition-all duration-700">
          <div className="w-3 h-3 border border-gold/30 hover:bg-gold/20 transition-all duration-300 cursor-pointer" />
          <div className="w-3 h-3 border border-gold/30 hover:bg-gold/20 transition-all duration-300 cursor-pointer" style={{ transitionDelay: '0.1s' }} />
          <div className="w-3 h-3 border border-gold/30 hover:bg-gold/20 transition-all duration-300 cursor-pointer" style={{ transitionDelay: '0.2s' }} />
          <div className="w-3 h-3 border border-gold/30 hover:bg-gold/20 transition-all duration-300 cursor-pointer" style={{ transitionDelay: '0.3s' }} />
          <div className="w-3 h-3 border border-gold/30 hover:bg-gold/20 transition-all duration-300 cursor-pointer" style={{ transitionDelay: '0.4s' }} />
          <div className="w-3 h-3 border border-gold/30 hover:bg-gold/20 transition-all duration-300 cursor-pointer" style={{ transitionDelay: '0.5s' }} />
        </div>
      </div>
    </section>
  )
}
