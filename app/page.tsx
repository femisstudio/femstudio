import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AboutQuickInquiryForm from '@/components/sections/AboutQuickInquiryForm'
import HomeSplitHero from '@/components/sections/HomeSplitHero'

export const metadata: Metadata = {
  title: { absolute: 'FemStudio | Houston Photography & Web Design Studio' },
  description:
    'FemStudio is a Houston, TX photography and web design studio creating professional headshots, editorial brand photography, celebration portraits, and custom websites.',
  keywords: [
    'houston photographer',
    'professional headshots houston',
    'web design houston',
    'brand photography houston',
    'linkedin headshots houston',
    'femstudio',
  ],
  alternates: { canonical: 'https://femsstudio.com' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    url: 'https://femsstudio.com',
    siteName: 'FemStudio',
    title: 'FemStudio | Houston Photography & Web Design Studio',
    description:
      'Houston, TX photography and web design studio for headshots, editorial brand photography, celebrations, and custom business websites.',
    locale: 'en_US',
    images: [
      {
        url: '/images/og/og-femstudio.jpg',
        width: 1200,
        height: 630,
        alt: 'FemStudio Houston photography and web design studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FemStudio | Houston Photography & Web Design Studio',
    description:
      'Houston photography and web design for people and businesses ready to show up clearly.',
    creator: '@femstudio__',
    images: ['/images/og/og-femstudio.jpg'],
  },
}

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'FemStudio',
  url: 'https://femsstudio.com',
  creator: {
    '@type': 'Person',
    name: 'John Adeniran',
  },
  about: ['Houston photography', 'Professional headshots', 'Web design', 'Brand photography'],
}

const processSteps = [
  {
    eyebrow: '01 DISCOVERY & STRATEGY',
    copy: 'We clarify the audience, goals, content, and first actions your visitors need to take.',
    image: '/images/webdesign/client-website-example.jpg',
    alt: 'Custom website planning and UX design process for Houston business websites by FemStudio',
  },
  {
    eyebrow: '02 DESIGN & PROTOTYPING',
    copy: 'We shape the look, flow, and page structure so the site feels refined and easy to use.',
    image: '/images/webdesign/tarro-law-group-website-design.jpg',
    alt: 'Website interface design example for custom web design in Houston by FemStudio',
  },
  {
    eyebrow: '03 DEVELOPMENT & LAUNCH',
    copy: 'We build responsive pages, tune performance, connect the contact flow, and prepare the site for launch.',
    image: '/images/webdesign/client-website-example.jpg',
    alt: 'Responsive website build and launch preparation for FemStudio web design clients',
  },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema).replace(/</g, '\\u003c'),
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
            <Link href="#process" className="focus-ring rounded-sm transition-colors hover:text-gold">
              Work
            </Link>
          </nav>

          <Link
            href="/contact"
            className="focus-ring rounded-full border border-gold px-5 py-2 font-sans text-[10px] uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-forest md:px-6 md:text-xs"
          >
            Start Project
          </Link>
        </header>

        <HomeSplitHero />

        <section id="process" className="relative w-full border-t border-cream/5 bg-darkGreen px-8 py-24 md:px-24 md:py-32">
          <div className="mx-auto flex max-w-7xl flex-col gap-16 md:flex-row">
            <div className="h-fit w-full md:sticky md:top-32 md:w-1/3">
              <p className="mb-2 font-sans text-4xl font-bold leading-none tracking-tight text-cream md:text-5xl">
                DIGITAL
              </p>
              <h2 className="mb-8 font-sans text-4xl leading-none tracking-tight text-gold md:text-5xl">
                ALCHEMY
              </h2>
              <p className="mb-12 font-serif text-lg italic text-cream/60">
                We do not just build pages. We shape digital spaces that help visitors understand what to do next.
              </p>
              <div className="flex flex-wrap gap-4 border-y border-cream/10 py-4 font-sans text-[10px] tracking-widest">
                <span className="text-gold">01 DISCOVERY</span>
                <span className="text-cream/30">02 DESIGN</span>
                <span className="text-cream/30">03 BUILD</span>
              </div>
            </div>

            <div className="w-full space-y-24 md:w-2/3">
              {processSteps.map((step, index) => (
                <article key={step.eyebrow} className="relative border-l border-cream/10 pl-12">
                  <span
                    className={`absolute -left-[5px] top-2 h-2 w-2 rounded-full ${
                      index === 0 ? 'bg-gold' : 'bg-cream/30'
                    }`}
                    aria-hidden="true"
                  />
                  <h3
                    className={`mb-2 block font-sans text-xs tracking-widest ${
                      index === 0 ? 'text-gold' : 'text-cream/50'
                    }`}
                  >
                    {step.eyebrow}
                  </h3>
                  <p className="mb-8 font-serif text-lg italic text-cream/70">{step.copy}</p>
                  <div className="portfolio-card relative h-64 w-full overflow-hidden rounded-lg border border-cream/10 bg-forest">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover opacity-75 grayscale transition-opacity duration-500 hover:opacity-100"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer id="footer" className="w-full border-t border-gold/20 bg-[#081712] px-8 pb-12 pt-24 md:px-24 md:pt-32">
          <div className="mx-auto mb-24 flex max-w-7xl flex-col justify-between gap-16 md:flex-row">
            <div className="w-full md:w-1/2">
              <p className="mb-2 font-sans text-4xl font-bold leading-none tracking-tight text-cream md:text-6xl">
                LET&apos;S
              </p>
              <p className="mb-2 font-sans text-4xl font-bold leading-none tracking-tight text-cream md:text-6xl">
                CREATE
              </p>
              <p className="mb-8 font-sans text-4xl leading-none tracking-tight text-gold md:text-6xl">
                MAGIC
              </p>
              <p className="mb-12 max-w-md font-serif text-lg italic text-cream/60">
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

            <div className="w-full md:w-1/2">
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
