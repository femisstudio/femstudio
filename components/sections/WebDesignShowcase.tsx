'use client'

import Image from 'next/image'
import { useState } from 'react'

type Filter = 'ALL' | 'WEB DESIGN' | 'E-COMMERCE' | 'SEO & MARKETING'

interface Project {
  title: string
  category: Exclude<Filter, 'ALL'>
  year: string
  image: string
  alt: string
}

const filters: Filter[] = ['ALL', 'WEB DESIGN', 'E-COMMERCE', 'SEO & MARKETING']

const projects: Project[] = [
  {
    title: 'Tarro Law Group',
    category: 'WEB DESIGN',
    year: '2024',
    image: '/images/webdesign/tarro-law-group-website-design.jpg',
    alt: 'Tarro Law Group professional website for legal services in Houston',
  },
  {
    title: 'The Dirt Way',
    category: 'WEB DESIGN',
    year: '2024',
    image: '/images/webdesign/client-website-example.jpg',
    alt: 'The Dirt Way website showcasing landscaping and outdoor services',
  },
  {
    title: 'Luna Cleanz',
    category: 'E-COMMERCE',
    year: '2024',
    image: '/images/webdesign/client-website-example.jpg',
    alt: 'Luna Cleanz e-commerce platform for cleaning services and product sales',
  },
  {
    title: 'OC South Coast Cleaning',
    category: 'WEB DESIGN',
    year: '2024',
    image: '/images/og/og-web-design.jpg',
    alt: 'OC South Coast Cleaning professional services website',
  },
  {
    title: 'Climtransformlab',
    category: 'SEO & MARKETING',
    year: '2024',
    image: '/images/webdesign/tarro-law-group-website-design.jpg',
    alt: 'Climtransformlab digital transformation consulting website',
  },
  {
    title: 'FemStudio',
    category: 'WEB DESIGN',
    year: '2026',
    image: '/images/og/og-femstudio.jpg',
    alt: 'FemStudio website for Houston photography and web design studio',
  },
]

function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gold/30 bg-[#1a1a1a]">
      <div className="flex items-center gap-1.5 border-b border-gold/20 bg-[#2a2a2a] px-3 py-2" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-cream/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-cream/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-cream/30" />
      </div>
      {children}
    </div>
  )
}

export default function WebDesignShowcase() {
  const [activeFilter, setActiveFilter] = useState<Filter>('ALL')
  const visibleProjects =
    activeFilter === 'ALL' ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <>
      <section className="sticky top-[80px] z-40 border-b border-gold/20 bg-darkGreen lg:top-[88px]" aria-label="Web design project filters">
        <div className="mx-auto max-w-[1400px] px-6 py-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:justify-start lg:gap-12">
            {filters.map((filter) => {
              const isActive = activeFilter === filter

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`focus-ring relative rounded-sm py-2 font-sans text-xs tracking-[0.3em] transition-colors ${
                    isActive ? 'text-gold after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-gold' : 'text-cream/40 hover:text-cream'
                  }`}
                  aria-pressed={isActive}
                >
                  {filter}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section id="projects-grid" className="bg-forest py-16 lg:py-24" aria-labelledby="projects-heading">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <h2 id="projects-heading" className="sr-only">
            Web design examples
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {visibleProjects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden border border-cream/10 bg-darkGreen/50 transition-colors duration-300 hover:border-gold"
              >
                <BrowserFrame>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute right-4 top-4 flex h-10 w-10 translate-x-2 translate-y-2 items-center justify-center rounded-full bg-gold font-sans text-sm text-darkGreen opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                      &gt;
                    </span>
                  </div>
                </BrowserFrame>
                <div className="p-6 lg:p-8">
                  <h3 className="mb-2 font-sans text-lg font-bold tracking-tight text-cream lg:text-xl">{project.title}</h3>
                  <div className="flex items-center justify-between gap-6">
                    <p className="font-serif text-base italic text-gold lg:text-lg">{project.category}</p>
                    <p className="font-sans text-xs tracking-wider text-cream/40">{project.year}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
