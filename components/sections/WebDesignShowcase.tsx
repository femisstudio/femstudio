'use client'

import Image from 'next/image'
import Link from 'next/link'

interface Project {
  image: string
  client: string
  industry: string
  description: string
  alt: string
  liveLink?: string
}

const projectsRow1: Project[] = [
  {
    image: '/images/webdesign/web-design-houston-climtransformlab.webp',
    client: 'ClimTransform Lab',
    industry: 'Academic Research',
    description: 'A clean, professional research lab website for Dr. Jola Ajibade at Emory University.',
    alt: 'ClimTransform Lab website design by FemStudio Houston',
    liveLink: 'https://climtransformlab.com',
  },
  {
    image: '/images/webdesign/web-design-houston-tarro-law-group.webp',
    client: 'Tarro Law Group',
    industry: 'Legal Services',
    description: 'A premium dark-themed website built to communicate authority and trust to high-value clients.',
    alt: 'Tarro Law Group website design by FemStudio Houston',
  },
]

const projectsRow2: Project[] = [
  {
    image: '/images/webdesign/web-design-houston-luna-cleanz.webp',
    client: 'Luna Cleanz',
    industry: 'Cleaning Services',
    description: 'A bright, conversion-focused website built to drive bookings and communicate professionalism.',
    alt: 'Luna Cleanz website design by FemStudio Houston',
  },
  {
    image: '/images/webdesign/web-design-houston-the-dirt-way.webp',
    client: 'The Dirt Way',
    industry: 'Cleaning Services',
    description: 'A modern dark-themed website focused on communicating quality and ease of booking.',
    alt: 'The Dirt Way website design by FemStudio Houston',
  },
  {
    image: '/images/webdesign/web-design-houston-cinciti-collective.webp',
    client: 'CIN CITI Collective',
    industry: 'Growth Systems',
    description: 'A premium website built for a growth systems consulting firm focused on scalable organizational solutions.',
    alt: 'CIN CITI Collective website design by FemStudio Houston',
  },
]

function ProjectCard({ project, aspectRatio }: { project: Project; aspectRatio: string }) {
  const cardImage = (
    <>
      <Image
        src={project.image}
        alt={project.alt}
        fill
        className="object-cover"
        style={{ objectPosition: 'top' }}
        quality={85}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col items-center justify-center p-6 text-center"
        style={{ backgroundColor: '#0f2d24e0' }}
      >
        <p className="font-syncopate text-xs tracking-widest uppercase mb-3" style={{ color: '#c9a227' }}>
          {project.industry}
        </p>
        <h3 className="font-cormorant-garamond italic font-bold text-2xl mb-2 leading-tight" style={{ color: '#fcfbf7' }}>
          {project.client}
        </h3>
        <p className="font-cormorant-garamond text-sm leading-relaxed max-w-xs mb-4" style={{ color: 'rgba(252, 251, 247, 0.75)' }}>
          {project.description}
        </p>
        {project.liveLink && (
          <Link
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-syncopate text-xs tracking-widest border rounded-full px-4 py-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ borderColor: '#c9a227', color: '#c9a227' }}
            aria-label="View ClimTransform Lab website opens in new tab"
          >
            VIEW LIVE SITE →
          </Link>
        )}
      </div>

      {/* Bottom strip - always visible */}
      <div
        className="absolute bottom-0 left-0 right-0 px-5 py-3 border-t"
        style={{ backgroundColor: 'white', borderColor: 'rgba(15, 45, 36, 0.1)' }}
      >
        <p className="font-syncopate text-xs tracking-widest mb-1" style={{ color: '#0f2d24' }}>
          {project.client}
        </p>
        <p className="font-cormorant-garamond italic text-sm" style={{ color: 'rgba(15, 45, 36, 0.55)' }}>
          {project.industry}
        </p>
      </div>
    </>
  )

  return (
    <div
      className="relative overflow-hidden rounded-2xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{ aspectRatio: aspectRatio as React.CSSProperties['aspectRatio'] }}
      aria-label={`${project.client} web design project by FemStudio Houston`}
    >
      {cardImage}
    </div>
  )
}

export default function WebDesignShowcase() {
  return (
    <section
      className="bg-cream px-6 py-24 md:px-12 lg:px-20"
      style={{ backgroundColor: '#fcfbf7' }}
      aria-label="FemStudio web design portfolio Houston TX"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <p className="font-syncopate text-xs tracking-widest uppercase mb-2" style={{ color: '#c9a227' }}>
            OUR WORK
          </p>
          <h2 className="font-cormorant-garamond italic font-bold text-5xl mt-2 mb-2" style={{ color: '#0f2d24' }}>
            Selected projects.
          </h2>
          <p className="font-cormorant-garamond text-xl" style={{ color: 'rgba(15, 45, 36, 0.6)' }}>
            Custom websites built for real businesses.
          </p>
        </div>

        <p className="sr-only">
          FemStudio has designed custom websites for clients in legal services, academic research, and cleaning industries across Houston TX and the United States.
        </p>

        {/* Row 1 - Asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
          <div className="lg:col-span-3">
            <ProjectCard project={projectsRow1[0]} aspectRatio="16/10" />
          </div>
          <div className="lg:col-span-2">
            <ProjectCard project={projectsRow1[1]} aspectRatio="16/10" />
          </div>
        </div>

        {/* Row 2 - Three equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {projectsRow2.map((project) => (
            <div key={project.client}>
              <ProjectCard project={project} aspectRatio="4/3" />
            </div>
          ))}
        </div>

        {/* Note and CTA */}
        <div className="text-center mt-12">
          <p className="font-cormorant-garamond italic text-base" style={{ color: 'rgba(15, 45, 36, 0.5)' }}>
            Additional projects available upon request.
          </p>
          <Link
            href="/contact"
            className="inline-block font-syncopate text-xs tracking-widest font-medium rounded-full px-8 py-4 mt-6 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              backgroundColor: '#c9a227',
              color: '#0f2d24',
            }}
          >
            START YOUR PROJECT
          </Link>
        </div>
      </div>
    </section>
  )
}
