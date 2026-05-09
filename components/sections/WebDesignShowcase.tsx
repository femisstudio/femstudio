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

const projects: Project[] = [
  {
    image: '/images/webdesign/web-design-houston-climtransformlab.webp',
    client: 'ClimTransform Lab',
    industry: 'Academic Research',
    description: 'A clean, professional research lab website for Dr. Jola Ajibade at Emory University. Built to communicate complex climate research with clarity and authority.',
    alt: 'ClimTransform Lab website design by FemStudio Houston — academic research web design',
    liveLink: 'https://climtransformlab.com',
  },
  {
    image: '/images/webdesign/web-design-houston-tarro-law-group.webp',
    client: 'Tarro Law Group',
    industry: 'Legal Services',
    description: 'A premium dark-themed website for a Houston law firm. Designed to communicate authority, trust, and professionalism to high-value clients.',
    alt: 'Tarro Law Group website design by FemStudio Houston — law firm web design',
  },
  {
    image: '/images/webdesign/web-design-houston-luna-cleanz.webp',
    client: 'Luna Cleanz',
    industry: 'Cleaning Services',
    description: 'A bright, conversion-focused website for a commercial cleaning company. Built to drive bookings and communicate professionalism to business clients.',
    alt: 'Luna Cleanz website design by FemStudio Houston — cleaning business web design',
  },
  {
    image: '/images/webdesign/web-design-houston-the-dirt-way.webp',
    client: 'The Dirt Way',
    industry: 'Cleaning Services',
    description: 'A modern, dark-themed website for a residential and commercial cleaning service. Focused on communicating quality and ease of booking.',
    alt: 'The Dirt Way website design by FemStudio Houston — cleaning service web design',
  },
  {
    image: '/images/webdesign/web-design-houston-oc-south-coast-cleaning.webp',
    client: 'OC South Coast Cleaning',
    industry: 'Cleaning Services',
    description: 'A professional website for an Orange County cleaning company serving residential and commercial clients. Built for local search visibility and lead generation.',
    alt: 'OC South Coast Cleaning website design by FemStudio Houston — cleaning company web design',
  },
]

export default function WebDesignShowcase() {
  return (
    <section className="bg-cream px-6 py-24 md:px-12 lg:px-20" aria-label="FemStudio web design portfolio — Houston TX">
      <div className="mx-auto max-w-7xl">
        <p className="sr-only">
          FemStudio has designed and developed custom websites for clients in legal services, academic research, and cleaning industries in Houston TX and beyond.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const cardContent = (
              <div className="relative overflow-hidden rounded-xl group cursor-pointer aspect-[16/10] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'top' }}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-forest/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-between p-6">
                  {/* Industry label */}
                  <p className="font-syncopate text-xs tracking-widest uppercase" style={{ color: '#c9a227' }}>
                    {project.industry}
                  </p>

                  {/* Client name and description in center */}
                  <div className="text-center">
                    <h3 className="font-cormorant-garamond italic text-2xl mb-3" style={{ color: '#fcfbf7' }}>
                      {project.client}
                    </h3>
                    <p className="font-cormorant-garamond text-sm" style={{ color: 'rgba(252, 251, 247, 0.8)' }}>
                      {project.description}
                    </p>
                  </div>

                  {/* View Live Site link if available */}
                  {project.liveLink && (
                    <div className="flex justify-center">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-syncopate text-xs tracking-widest"
                        style={{ color: '#c9a227' }}
                        aria-label="View ClimTransform Lab website — opens in new tab"
                      >
                        VIEW LIVE SITE →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )

            return (
              <div key={project.client}>
                {project.liveLink ? (
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="block focus:outline-none">
                    {cardContent}
                  </Link>
                ) : (
                  <div role="img" aria-label={`${project.client} — ${project.industry} website design by FemStudio`}>
                    {cardContent}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Note below grid */}
        <div className="text-center mt-16">
          <p className="font-cormorant-garamond italic text-base" style={{ color: 'rgba(15, 45, 36, 0.6)' }}>
            Additional projects available upon request. Contact us to discuss your project.
          </p>
        </div>
      </div>
    </section>
  )
}
