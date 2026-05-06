'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { FocusEvent } from 'react'
import { useState } from 'react'

type ActivePanel = 'photography' | 'digital' | null

const dividerItems = ['50+ HEADSHOTS', 'HUMAN / EMOTION / TIMELESS', 'EST. 2022', 'GEOMETRY / UI/UX / FUTURE', '5-6 WEBSITES']

export default function HomeSplitHero() {
  const [activePanel, setActivePanel] = useState<ActivePanel>(null)

  const photographyActive = activePanel === 'photography'
  const digitalActive = activePanel === 'digital'
  const photographyWidth = digitalActive ? 'md:w-[45%]' : photographyActive ? 'md:w-[55%]' : 'md:w-1/2'
  const digitalWidth = photographyActive ? 'md:w-[45%]' : digitalActive ? 'md:w-[55%]' : 'md:w-1/2'

  function handleBlur(event: FocusEvent<HTMLElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setActivePanel(null)
    }
  }

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-forest md:h-[1024px]" aria-labelledby="home-hero-heading">
      <h1 id="home-hero-heading" className="sr-only">
        FemStudio Houston photography and web design
      </h1>

      <div className="flex flex-col md:h-full md:flex-row">
        <article
          tabIndex={0}
          role="group"
          aria-label="Photography services and portfolio"
          onMouseEnter={() => setActivePanel('photography')}
          onMouseLeave={() => setActivePanel(null)}
          onFocus={() => setActivePanel('photography')}
          onBlur={handleBlur}
          className={`focus-ring group relative flex h-[560px] w-full cursor-pointer items-center justify-center overflow-hidden bg-[#8b8b8b] transition-all duration-700 ease-out md:h-full ${photographyWidth}`}
        >
          <Image
            src="/images/headshots/professional-headshot-houston-01.jpg"
            alt="Professional portrait photography in Houston TX by FemStudio"
            fill
            preload
            sizes="(max-width: 768px) 100vw, 55vw"
            className={`object-cover opacity-75 mix-blend-multiply grayscale transition-all duration-700 ease-out ${
              photographyActive ? 'scale-105 opacity-95 grayscale-0' : ''
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darkGreen/70 via-transparent to-darkGreen/15" aria-hidden="true" />

          <p
            className={`absolute left-8 top-28 border-b border-forest/30 pb-2 font-sans text-[10px] tracking-[0.3em] text-forest/70 transition-colors duration-500 md:left-12 md:top-32 ${
              photographyActive ? 'border-forest text-forest' : ''
            }`}
          >
            UNIVERSE 01
          </p>

          <p
            id="photography-panel-title"
            aria-hidden="true"
            className={`relative z-10 mt-20 text-center font-serif text-7xl font-light italic leading-none tracking-tight text-cream drop-shadow-lg transition-all duration-700 md:text-9xl ${
              photographyActive ? 'scale-105 text-gold' : ''
            }`}
          >
            Photo
            <br />
            graphy
          </p>

          <div
            className={`absolute bottom-16 left-8 z-10 max-w-xs translate-y-4 opacity-0 transition-all duration-500 md:bottom-24 md:left-12 ${
              photographyActive ? 'translate-y-0 opacity-100' : ''
            }`}
          >
            <p className="mb-4 font-serif text-sm italic text-cream/85">
              Professional headshots, editorial portraits, and milestone photography for Houston clients.
            </p>
            <Link
              href="/photography"
              className="focus-ring inline-flex rounded-full border border-cream/40 px-6 py-2 font-sans text-[10px] tracking-widest text-cream transition-colors hover:bg-cream hover:text-forest"
            >
              EXPLORE PORTFOLIO
            </Link>
          </div>

          <div
            className={`absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-3 opacity-0 transition-opacity duration-500 md:flex ${
              photographyActive ? 'opacity-100' : ''
            }`}
            aria-hidden="true"
          >
            {[0, 1, 2].map((dot) => (
              <span key={dot} className="h-2 w-2 rounded-full bg-cream/70 transition-transform duration-300 hover:scale-150 hover:bg-gold" />
            ))}
          </div>
        </article>

        <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-20 hidden w-[2px] -translate-x-1/2 bg-gold transition-all duration-700 md:block">
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-7 rounded-full border border-gold/30 bg-forest/80 px-4 py-10 backdrop-blur-sm">
            {dividerItems.map((item, index) => (
              <div key={item} className="flex flex-col items-center gap-7">
                <span
                  className={`rotate-180 font-sans text-[10px] tracking-[0.2em] [text-orientation:mixed] [writing-mode:vertical-rl] ${
                    index % 2 === 0 ? 'text-gold/85' : 'text-cream/60'
                  }`}
                >
                  {item}
                </span>
                {index < dividerItems.length - 1 && <span className="h-1 w-1 rounded-full bg-gold" />}
              </div>
            ))}
          </div>

          <Link
            href="#process"
            aria-label="Scroll to process"
            className="focus-ring pointer-events-auto absolute bottom-12 left-1/2 flex h-12 w-8 -translate-x-1/2 justify-center rounded-full border-2 border-gold/40 pt-2 transition-colors hover:border-gold"
          >
            <span className="h-3 w-1 animate-bounce rounded-full bg-gold" aria-hidden="true" />
          </Link>
        </div>

        <article
          tabIndex={0}
          role="group"
          aria-label="Web design services and projects"
          onMouseEnter={() => setActivePanel('digital')}
          onMouseLeave={() => setActivePanel(null)}
          onFocus={() => setActivePanel('digital')}
          onBlur={handleBlur}
          className={`focus-ring group relative flex h-[560px] w-full cursor-pointer items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_50%,rgba(20,45,60,0.82)_0%,#0f2d24_100%)] transition-all duration-700 ease-out md:h-full ${digitalWidth}`}
        >
          <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(252,251,247,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(252,251,247,0.04)_1px,transparent_1px)] [background-size:54px_54px]" aria-hidden="true" />
          <div
            className={`absolute left-1/3 top-1/3 h-64 w-64 rotate-12 rounded-lg border border-gold/10 transition-all duration-1000 ${
              digitalActive ? 'rotate-45 scale-125 border-gold/30' : ''
            }`}
            aria-hidden="true"
          />
          <div
            className={`absolute bottom-1/3 right-1/3 h-48 w-48 rounded-full border border-cream/10 transition-all duration-1000 ${
              digitalActive ? 'scale-150 border-cream/30' : ''
            }`}
            aria-hidden="true"
          />

          <p
            className={`absolute right-8 top-28 border-b border-cream/30 pb-2 text-right font-sans text-[10px] tracking-[0.3em] text-cream/60 transition-colors duration-500 md:right-12 md:top-32 ${
              digitalActive ? 'border-cream text-cream' : ''
            }`}
          >
            UNIVERSE 02
          </p>

          <div className={`relative z-10 text-center transition-transform duration-700 ${digitalActive ? 'scale-105' : ''}`}>
            <p
              id="digital-panel-title"
              className={`font-sans text-6xl font-bold leading-none tracking-tight text-cream transition-colors duration-500 md:text-8xl ${
                digitalActive ? 'text-gold' : ''
              }`}
            >
              DIGITAL
            </p>
            <p className="mt-2 font-sans text-6xl font-bold leading-none tracking-tight text-transparent [-webkit-text-stroke:1px_rgba(252,251,247,0.5)] md:text-8xl">
              REALM
            </p>
          </div>

          <div
            className={`absolute bottom-16 right-8 z-10 max-w-xs translate-y-4 text-right opacity-0 transition-all duration-500 md:bottom-24 md:right-12 ${
              digitalActive ? 'translate-y-0 opacity-100' : ''
            }`}
          >
            <p className="mb-4 font-serif text-sm italic text-cream/85">
              Custom web design for clean business websites, portfolios, and conversion-focused landing pages.
            </p>
            <Link
              href="/web-design"
              className="focus-ring inline-flex rounded-full border border-cream/40 px-6 py-2 font-sans text-[10px] tracking-widest text-cream transition-colors hover:bg-cream hover:text-forest"
            >
              VIEW PROJECTS
            </Link>
          </div>

          <div
            className={`absolute left-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-3 opacity-0 transition-opacity duration-500 md:flex ${
              digitalActive ? 'opacity-100' : ''
            }`}
            aria-hidden="true"
          >
            {[0, 1, 2].map((dot) => (
              <span key={dot} className="h-2 w-2 rounded-full bg-cream/70 transition-transform duration-300 hover:scale-150 hover:bg-gold" />
            ))}
          </div>

          <div
            className={`absolute right-1/4 top-1/4 grid grid-cols-3 gap-2 opacity-0 transition-opacity duration-700 ${
              digitalActive ? 'opacity-100' : ''
            }`}
            aria-hidden="true"
          >
            {Array.from({ length: 6 }, (_, index) => (
              <span key={index} className="h-3 w-3 border border-gold/30 bg-gold/0" />
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
