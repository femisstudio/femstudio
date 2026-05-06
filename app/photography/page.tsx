import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AboutQuickInquiryForm from '@/components/sections/AboutQuickInquiryForm'
import PhotographyContent from '@/components/sections/PhotographyContent'

export const metadata: Metadata = {
  title: { absolute: 'Professional Headshots Houston | FemStudio Photography' },
  description:
    'Houston professional headshots for LinkedIn, internships, and corporate profiles. Editorial brand photography and celebration photography by FemStudio.',
  keywords: [
    'professional headshots houston',
    'headshot photographer houston',
    'brand photography houston',
    'editorial photography houston',
    'houston photographer',
  ],
  alternates: { canonical: 'https://femsstudio.com/photography' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    url: 'https://femsstudio.com/photography',
    siteName: 'FemStudio',
    title: 'Professional Headshots Houston | FemStudio Photography',
    description:
      'Houston professional headshots for LinkedIn, internships, corporate profiles, and brand photography.',
    images: [
      {
        url: '/images/og/og-photography.jpg',
        width: 1200,
        height: 630,
        alt: 'FemStudio professional photography studio in Houston TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Headshots Houston | FemStudio Photography',
    description: 'Houston professional headshots, editorial brand photography, and milestone portraits.',
    creator: '@femstudio__',
    images: ['/images/og/og-photography.jpg'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Professional Photography - FemStudio Houston',
  description:
    'Professional headshots for LinkedIn, internships, and corporate profiles. Editorial portraits, brand campaigns, and celebration photography in Houston TX.',
  serviceType: 'Photography',
  provider: {
    '@type': 'LocalBusiness',
    name: 'FemStudio',
    url: 'https://femsstudio.com',
    telephone: '+12818183726',
    email: 'info@femsstudio.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Houston',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Houston',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Photography Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Professional Headshots' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Photography' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Editorial Photography' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Celebration Photography' } },
    ],
  },
}

const headshotImages = [
  '/images/headshots/professional-headshot-houston-01.jpg',
  '/images/headshots/professional-headshot-houston-02.jpg',
  '/images/headshots/professional-headshot-houston-03.jpg',
  '/images/headshots/professional-headshot-houston-04.jpg',
]

export default function PhotographyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, '\\u003c'),
        }}
      />
      <main id="main-content" className="overflow-x-hidden bg-forest text-cream">
        <header className="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-6 text-cream mix-blend-difference md:px-8">
          <Link
            href="/"
            aria-label="FemStudio homepage"
            className="focus-ring relative h-8 w-36 rounded-sm md:w-40"
          >
            <Image
              src="/images/brand/femstudio-logo-horizontal.png"
              alt="FemStudio"
              fill
              sizes="160px"
              className="object-contain object-left"
            />
          </Link>

          <nav className="hidden gap-8 font-serif text-base italic md:flex lg:gap-12 lg:text-lg" aria-label="Main navigation">
            <Link href="/photography" className="focus-ring rounded-sm transition-colors hover:text-gold">
              Photography
            </Link>
            <Link href="/web-design" className="focus-ring rounded-sm transition-colors hover:text-gold">
              Web Design
            </Link>
            <Link href="/about" className="focus-ring rounded-sm transition-colors hover:text-gold">
              About
            </Link>
            <Link href="/contact" className="focus-ring rounded-sm transition-colors hover:text-gold">
              Contact
            </Link>
          </nav>

          <Link
            href="/contact?service=photography"
            className="focus-ring rounded-full border border-gold px-5 py-2 font-sans text-[10px] uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-forest md:px-6 md:text-xs"
          >
            Start Project
          </Link>
        </header>

        <section className="relative h-[430px] overflow-hidden bg-darkGreen sm:h-[560px] md:h-[680px] lg:h-[760px]" aria-label="Porsche editorial photography by FemStudio">
          <Image
            src="/images/editorial/porsche-editorial-houston-photographer-02.jpg"
            alt="Porsche editorial brand photography with model and car in Houston TX by FemStudio"
            fill
            preload
            sizes="100vw"
            className="object-cover object-center"
          />
        </section>

        <section className="flex min-h-[520px] items-end bg-forest px-6 pb-20 pt-24 md:min-h-[720px] md:px-12 md:pb-24 lg:min-h-[820px]" aria-labelledby="photography-heading">
          <div className="mx-auto w-full max-w-7xl">
            <p className="mb-4 font-sans text-[10px] tracking-[0.3em] text-gold">FEMSTUDIO PHOTOGRAPHY</p>
            <h1 id="photography-heading" className="mb-4 font-serif text-5xl font-light italic leading-none text-cream md:text-7xl">
              Every frame, a story.
            </h1>
            <p className="max-w-xl font-serif text-lg italic text-cream/60">
              Houston-based photographer capturing portraits, brands, and milestones.
            </p>
          </div>
        </section>

        <PhotographyContent />

        <section className="border-y border-cream/5 bg-darkGreen px-6 py-16 md:px-12 md:py-20" aria-labelledby="headshots-heading">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.4fr]">
            <div>
              <h2 id="headshots-heading" className="mb-4 font-sans text-3xl font-bold leading-tight text-cream md:text-5xl">
                PROFESSIONAL
                <br />
                HEADSHOTS
              </h2>
              <p className="font-serif text-lg italic text-gold">
                Corporate sessions available for individuals and teams in Houston.
              </p>
            </div>

            <div className="flex gap-4 overflow-hidden">
              {headshotImages.map((src, index) => (
                <div key={src} className="relative h-36 min-w-28 overflow-hidden border border-gold/30 bg-forest md:h-44 md:min-w-36 lg:h-56 lg:min-w-44">
                  <Image
                    src={src}
                    alt={`Professional headshot example ${index + 1} by FemStudio in Houston TX`}
                    fill
                    sizes="176px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-forest px-6 py-20 text-center md:px-12 md:py-28">
          <h2 className="mb-6 font-sans text-4xl font-bold text-cream md:text-5xl">READY TO BOOK?</h2>
          <p className="mx-auto mb-10 max-w-xl font-serif text-lg italic text-cream/60">
            Sessions are available by appointment. Reach out and let&apos;s create something.
          </p>
          <Link
            href="/contact?service=photography"
            className="focus-ring inline-flex rounded-full border border-gold px-8 py-3 font-sans text-[10px] tracking-widest text-gold transition-colors hover:bg-gold hover:text-forest"
          >
            INQUIRE ABOUT A SESSION
          </Link>
        </section>

        <footer id="footer" className="w-full border-t border-gold/20 bg-[#081712] px-8 pb-12 pt-24 lg:px-24 lg:pt-32">
          <div className="mx-auto mb-24 flex max-w-7xl flex-col justify-between gap-16 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <p className="mb-2 font-sans text-4xl font-bold leading-none tracking-tight text-cream lg:text-5xl xl:text-6xl">
                LET&apos;S
              </p>
              <p className="mb-2 font-sans text-4xl font-bold leading-none tracking-tight text-cream lg:text-5xl xl:text-6xl">
                CREATE
              </p>
              <p className="mb-8 font-sans text-4xl leading-none tracking-tight text-gold lg:text-5xl xl:text-6xl">
                MAGIC
              </p>
              <p className="mb-12 max-w-md font-serif text-base italic text-cream/60 lg:text-lg">
                Whether you need a new visual identity or a clean digital platform, we can shape the next step.
              </p>
              <address className="mb-12 space-y-4 font-sans text-xs not-italic tracking-widest text-cream">
                <a href="mailto:info@femsstudio.com" className="focus-ring block rounded-sm transition-colors hover:text-gold">
                  info@femsstudio.com
                </a>
                <a href="tel:+12818183726" className="focus-ring block rounded-sm transition-colors hover:text-gold">
                  +1 (281) 818-3726
                </a>
              </address>
              <div className="flex gap-6 font-sans text-xs tracking-widest text-gold" aria-label="Social links">
                <a
                  href="https://www.instagram.com/femstudio__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded-sm transition-colors hover:text-cream"
                >
                  IG
                </a>
                <span className="text-cream/25" aria-hidden="true">
                  X
                </span>
                <span className="text-cream/25" aria-hidden="true">
                  BE
                </span>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <AboutQuickInquiryForm />
            </div>
          </div>

          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between border-t border-cream/10 pt-8 font-sans text-[9px] tracking-widest text-cream/30 md:flex-row">
            <p>&copy; 2026 FEMSTUDIO. ALL RIGHTS RESERVED.</p>
            <div className="mt-4 flex gap-4 md:mt-0" aria-label="Legal links">
              <span>PRIVACY POLICY</span>
              <span>TERMS OF SERVICE</span>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
