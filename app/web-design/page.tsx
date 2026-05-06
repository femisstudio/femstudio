import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export const metadata: Metadata = {
  title: { absolute: 'Web Design Houston | FemStudio' },
  description:
    'Houston custom web design by FemStudio for photography brands, business websites, portfolios, e-commerce experiences, and polished digital platforms.',
  keywords: [
    'web design Houston',
    'custom web design Houston',
    'business websites Houston',
    'portfolio websites Houston',
    'FemStudio web design',
  ],
  alternates: { canonical: 'https://femsstudio.com/web-design' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    url: 'https://femsstudio.com/web-design',
    siteName: 'FemStudio',
    title: 'Web Design Houston | FemStudio',
    description:
      'Houston custom web design for photography brands, business websites, portfolios, e-commerce experiences, and polished digital platforms.',
    images: [
      {
        url: '/images/og/og-web-design.jpg',
        width: 1200,
        height: 630,
        alt: 'FemStudio web design studio in Houston TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Houston | FemStudio',
    description:
      'Houston custom web design for photography brands, business websites, portfolios, and e-commerce experiences.',
    creator: '@femstudio__',
    images: ['/images/og/og-web-design.jpg'],
  },
}

const services = [
  ['Landing Pages', 'Focused pages for launches, offers, campaigns, and service inquiries.'],
  ['Portfolio Websites', 'Editorial portfolios for photographers, designers, creators, and Houston professionals.'],
  ['E-Commerce Experiences', 'Product pages and shopping flows that present offers clearly.'],
  ['Business Websites', 'Professional websites for service businesses that need trust and clarity.'],
  ['SaaS or Dashboard Interfaces', 'Clean interface design for internal tools, products, and operations.'],
]

const process = [
  ['Discovery', 'Clarify the business, audience, goals, content, and the action the website needs to support.'],
  ['Design', 'Shape the visual system, page structure, messaging hierarchy, and responsive experience.'],
  ['Build', 'Turn the approved direction into a polished, responsive website with clean implementation.'],
  ['Launch', 'Prepare the final site, test key paths, and make sure the handoff is clear.'],
]

const faqs = [
  {
    q: 'How much does a website cost in Houston?',
    a: 'Website cost in Houston depends on scope, content, integrations, and how custom the experience needs to be. FemStudio prices web design by inquiry so each proposal matches the project instead of forcing every business into the same package.',
  },
  {
    q: 'How long does a website take?',
    a: 'Most FemStudio web design projects move through discovery, design, build, and launch in a structured timeline. The exact schedule depends on page count, content readiness, feedback speed, and whether the site includes e-commerce or custom interface work.',
  },
  {
    q: 'Do you build on WordPress or custom code?',
    a: 'FemStudio can advise on the right platform for the job, but the focus is custom web design and clean front-end implementation. For Houston businesses that need speed, flexibility, and a distinctive brand experience, custom code is often a strong fit.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom Web Design - FemStudio Houston',
  serviceType: 'Web Design',
  url: 'https://femsstudio.com/web-design',
  description:
    'Custom web design for Houston businesses, photography brands, portfolios, e-commerce experiences, landing pages, and SaaS or dashboard interfaces.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'FemStudio',
    url: 'https://femsstudio.com',
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
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export default function WebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />
      <main id="main-content" className="bg-darkGreen">
        <Header />

        <section aria-labelledby="web-design-hero-heading" className="relative h-[70vh] min-h-[560px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-forest via-darkGreen to-[#17120c]" aria-hidden="true" />
          <Image
            src="/images/webdesign/client-website-example.jpg"
            alt="Custom web design interface mockup for a Houston business by FemStudio"
            fill
            preload
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-darkGreen via-darkGreen/75 to-darkGreen/15" aria-hidden="true" />
          <div className="relative z-10 flex h-full items-end px-6 pb-16 md:px-24 md:pb-24">
            <div className="max-w-3xl">
              <p className="mb-5 font-sans text-xs tracking-[0.32em] text-gold">WEB DESIGN HOUSTON</p>
              <h1 id="web-design-hero-heading" className="mb-6 font-serif text-6xl italic leading-tight text-cream md:text-8xl">
                Websites built to make the next step clear.
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed text-cream/75 md:text-2xl">
                Custom web design for Houston businesses, photography brands, portfolios, e-commerce ideas, and teams that need a polished digital presence.
              </p>
              <Link
                href="/contact?service=web-design"
                className="focus-ring mt-10 inline-flex rounded-full bg-gold px-8 py-4 font-sans text-xs tracking-[0.22em] text-darkGreen"
              >
                START A WEB PROJECT
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-24 md:py-28" aria-labelledby="services-heading">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 font-sans text-xs tracking-[0.3em] text-gold">WHAT WE DESIGN</p>
            <h2 id="services-heading" className="mb-14 font-serif text-5xl italic text-cream md:text-7xl">
              Digital homes for real businesses.
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map(([title, copy]) => (
                <article key={title} className="rounded-lg border border-cream/15 bg-cream/[0.03] p-8">
                  <h3 className="mb-4 font-serif text-3xl italic text-cream">{title}</h3>
                  <p className="leading-relaxed text-cream/70">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-forest px-6 py-20 md:px-24 md:py-28" aria-labelledby="process-heading">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 font-sans text-xs tracking-[0.3em] text-gold">PROCESS</p>
            <h2 id="process-heading" className="mb-14 font-serif text-5xl italic text-cream md:text-7xl">
              From idea to launch.
            </h2>
            <div className="grid gap-6 md:grid-cols-4">
              {process.map(([title, copy], index) => (
                <article key={title} className="border-t border-gold/35 pt-8">
                  <p className="mb-6 font-sans text-xs tracking-[0.28em] text-gold">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mb-4 font-serif text-3xl italic text-cream">{title}</h3>
                  <p className="leading-relaxed text-cream/70">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-24 md:py-28" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 font-sans text-xs tracking-[0.3em] text-gold">FAQ</p>
            <h2 id="faq-heading" className="mb-12 font-serif text-5xl italic text-cream md:text-7xl">
              Web design questions.
            </h2>
            <div className="divide-y divide-cream/15">
              {faqs.map((faq) => (
                <article key={faq.q} className="py-8">
                  <h3 className="mb-4 font-serif text-3xl italic text-cream">{faq.q}</h3>
                  <p className="text-lg leading-relaxed text-cream/70">{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-forest px-6 py-20 text-center md:px-24 md:py-28">
          <h2 className="mx-auto mb-8 max-w-4xl font-serif text-5xl italic text-cream md:text-7xl">
            Bring the idea. We will shape the interface.
          </h2>
          <Link
            href="/contact?service=web-design"
            className="focus-ring inline-flex rounded-full bg-gold px-10 py-4 font-sans text-xs tracking-[0.22em] text-darkGreen"
          >
            INQUIRE ABOUT WEB DESIGN
          </Link>
        </section>

        <Footer />
      </main>
    </>
  )
}
