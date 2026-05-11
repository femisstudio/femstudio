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

const projects: { climTransform: Project; cinciti: Project; johnAdeniran: Project } = {
  climTransform: {
    image: '/images/webdesign/web-design-houston-climtransformlab.webp',
    client: 'ClimTransform Lab',
    industry: 'Academic Research · Emory University',
    description: 'A research lab website for Dr. Jola Ajibade at Emory University. Built for clarity, credibility, and academic authority.',
    alt: 'ClimTransform Lab website designed by FemStudio Houston',
    liveLink: 'https://climtransformlab.com',
  },
  cinciti: {
    image: '/images/webdesign/web-design-houston-cinciti.webp',
    client: 'Cinciti',
    industry: 'Business Growth · Strategy',
    description: 'Bold conversion-focused website for a business growth and systems consultancy.',
    alt: 'Cinciti website designed by FemStudio',
  },
  johnAdeniran: {
    image: '/images/webdesign/web-design-ux-portfolio-john-adeniran.png',
    client: 'John Adeniran',
    industry: 'UX/UI Portfolio · Product Design',
    description: 'A personal UX/UI and product design portfolio showcasing enterprise and digital product work.',
    alt: 'John Adeniran UX UI portfolio website designed by FemStudio',
    liveLink: 'https://johnadeniran.com',
  },
}

function ProjectCard({ project, isRightColumn }: { project: Project; isRightColumn: boolean }) {
  const wrapperClass = isRightColumn ? 'relative overflow-hidden rounded-2xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 h-full' : 'relative overflow-hidden rounded-2xl group cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2'
  const wrapperStyle = isRightColumn ? { '--tw-ring-color': '#c9a227' } as React.CSSProperties : { aspectRatio: '16/10', '--tw-ring-color': '#c9a227' } as React.CSSProperties

  return (
    <div className={wrapperClass} style={wrapperStyle} aria-label={`${project.client} web design project by FemStudio`}>
      {/* Image */}
      <Image
        src={project.image}
        alt={project.alt}
        fill
        className="object-cover"
        style={{ objectPosition: 'top' }}
        quality={85}
        sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 60vw, 50vw"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center" style={{ backgroundColor: '#0f2d24ea' }}>
        <p className="font-syncopate text-xs tracking-widest uppercase mb-3" style={{ color: '#c9a227' }}>
          {project.industry}
        </p>
        <h3 className="font-cormorant-garamond italic font-bold text-2xl mb-2 leading-tight" style={{ color: '#fcfbf7' }}>
          {project.client}
        </h3>
        <p className="font-cormorant-garamond text-sm leading-relaxed max-w-xs mb-4" style={{ color: 'rgba(252, 251, 247, 0.7)' }}>
          {project.description}
        </p>
        {project.liveLink && (
          <Link
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-syncopate text-xs tracking-widest border rounded-full px-4 py-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ borderColor: '#c9a227', color: '#c9a227' }}
            aria-label={`View ${project.client} website opens in new tab`}
          >
            VIEW LIVE SITE →
          </Link>
        )}
      </div>

      {/* Bottom strip */}
      <div className="absolute bottom-0 left-0 right-0 px-5 py-3 border-t" style={{ backgroundColor: 'white', borderColor: 'rgba(15, 45, 36, 0.1)' }}>
        <p className="font-syncopate text-xs tracking-widest uppercase mb-1" style={{ color: '#0f2d24' }}>
          {project.client}
        </p>
        <p className="font-cormorant-garamond italic text-sm" style={{ color: 'rgba(15, 45, 36, 0.55)' }}>
          {project.industry}
        </p>
      </div>
    </div>
  )
}

export default function WebDesignShowcase() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-20" style={{ backgroundColor: '#fcfbf7' }} aria-label="FemStudio web design portfolio">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <p className="font-syncopate text-xs tracking-widest uppercase mb-2" style={{ color: '#c9a227' }}>
            OUR WORK
          </p>
          <h2 className="font-cormorant-garamond italic font-bold text-5xl mt-2 mb-2" style={{ color: '#0f2d24' }}>
            Selected projects.
          </h2>
          <p className="font-cormorant-garamond text-xl italic" style={{ color: 'rgba(15, 45, 36, 0.55)' }}>
            Built with strategy, craft, and intention.
          </p>
        </div>

        <p className="sr-only">
          FemStudio has designed and developed websites for academic institutions, business consultancies, and UX/UI professionals across the United States.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-10 items-stretch">
          {/* Left column */}
          <div className="lg:col-span-3">
            <ProjectCard project={projects.climTransform} isRightColumn={false} />
          </div>

          {/* Right column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex-1 min-h-0">
              <ProjectCard project={projects.cinciti} isRightColumn={true} />
            </div>
            <div className="flex-1 min-h-0">
              <ProjectCard project={projects.johnAdeniran} isRightColumn={true} />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="font-cormorant-garamond italic text-base" style={{ color: 'rgba(15, 45, 36, 0.4)' }}>
            Additional projects available upon request.
          </p>
          <Link
            href="/contact"
            className="inline-block font-syncopate text-xs tracking-widest font-medium rounded-full px-8 py-4 mt-6 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ backgroundColor: '#c9a227', color: '#0f2d24', '--tw-ring-color': '#c9a227' } as React.CSSProperties}
          >
            START YOUR PROJECT
          </Link>
        </div>
      </div>
    </section>
  )
}
