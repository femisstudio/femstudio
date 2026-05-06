import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AboutQuickInquiryForm from '@/components/sections/AboutQuickInquiryForm'
import WebDesignShowcase from '@/components/sections/WebDesignShowcase'

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

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    copy: 'We learn your business, audience, offer, and goals so the website has a clear job from the start.',
    image: '/images/webdesign/client-website-example.jpg',
    alt: 'Website discovery and UX planning for Houston business web design by FemStudio',
  },
  {
    number: '02',
    title: 'Design & Prototype',
    copy: 'We turn the strategy into layouts, visual direction, and page flows that feel polished before build begins.',
    image: '/images/webdesign/tarro-law-group-website-design.jpg',
    alt: 'Website prototype and interface design for a professional service business by FemStudio',
  },
  {
    number: '03',
    title: 'Development & Launch',
    copy: 'We build responsive pages, test across key screens, and prepare the site for a clean launch.',
    image: '/images/webdesign/client-website-example.jpg',
    alt: 'Responsive website development and launch support by FemStudio',
  },
  {
    number: '04',
    title: 'Support & Growth',
    copy: 'We help you refine the site after launch with practical updates, performance checks, and content improvements.',
    image: '/images/og/og-web-design.jpg',
    alt: 'Website growth and performance support for FemStudio web design clients',
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
      <main id="main-content" className="overflow-x-hidden bg-forest text-cream">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/5 bg-darkGreen">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 lg:px-12">
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

            <nav className="hidden items-center gap-8 lg:flex xl:gap-12" aria-label="Main navigation">
              <Link href="/photography" className="focus-ring rounded-sm font-serif text-lg italic text-cream/80 transition-colors hover:text-gold">
                Photography
              </Link>
              <Link href="/web-design" className="focus-ring rounded-sm font-serif text-lg italic text-cream/80 transition-colors hover:text-gold">
                Web Design
              </Link>
              <Link href="/about" className="focus-ring rounded-sm font-serif text-lg italic text-cream/80 transition-colors hover:text-gold">
                About
              </Link>
              <Link href="/contact" className="focus-ring rounded-sm font-serif text-lg italic text-cream/80 transition-colors hover:text-gold">
                Contact
              </Link>
            </nav>

            <Link
              href="/contact?service=web-design"
              className="focus-ring hidden rounded-full border-2 border-gold px-8 py-3 font-sans text-xs tracking-widest text-gold transition-colors hover:bg-gold hover:text-darkGreen lg:inline-flex"
            >
              START PROJECT
            </Link>

            <Link href="/contact?service=web-design" className="focus-ring rounded-full border border-gold px-4 py-2 font-sans text-[10px] tracking-widest text-gold lg:hidden">
              START
            </Link>
          </div>
        </header>

        <section
          id="hero-section"
          className="flex min-h-[500px] items-center bg-darkGreen pt-24 lg:h-[60vh] lg:pt-32"
          aria-labelledby="web-design-heading"
        >
          <div className="mx-auto flex h-full max-w-[1400px] flex-col items-center justify-between gap-8 px-6 py-12 lg:flex-row lg:gap-16 lg:px-12 lg:py-0">
            <div className="flex-1 text-center lg:text-left">
              <p className="mb-6 font-sans text-xs tracking-[0.3em] text-gold lg:mb-8">FEMSTUDIO / WEB DESIGN</p>
              <h1 id="web-design-heading" className="mb-6 font-sans text-4xl font-bold leading-tight text-cream sm:text-5xl lg:mb-8 lg:text-6xl xl:text-7xl">
                <span className="block">WEB DESIGN</span>
                <span className="mt-2 block text-transparent [-webkit-text-stroke:2px_#c9a227]">&amp; STRATEGY</span>
              </h1>
              <p className="mx-auto max-w-xl font-serif text-xl italic text-cream/60 lg:mx-0 lg:text-2xl">
                Bespoke digital experiences built for Houston businesses.
              </p>
            </div>

            <div className="w-full max-w-2xl flex-1">
              <BrowserFrame>
                <div className="relative aspect-[16/10] overflow-hidden bg-cream">
                  <Image
                    src="/images/webdesign/tarro-law-group-website-design.jpg"
                    alt="Custom web design mockup for a Houston business by FemStudio"
                    fill
                    preload
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </BrowserFrame>
            </div>
          </div>
        </section>

        <WebDesignShowcase />

        <section id="process-section" className="border-t border-cream/5 bg-darkGreen py-16 lg:py-24" aria-labelledby="process-heading">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
                <h2 id="process-heading" className="mb-6 font-sans text-4xl font-bold text-cream lg:text-5xl xl:text-6xl">
                  <span className="block">OUR</span>
                  <span className="mt-2 block text-gold">PROCESS</span>
                </h2>
                <p className="max-w-md font-serif text-lg italic text-cream/60 lg:text-xl">
                  Every site starts with strategy. We learn your business, design for your audience, and build for results.
                </p>
              </div>

              <div className="relative lg:col-span-8">
                <div className="absolute bottom-0 left-[7px] top-0 hidden w-0.5 bg-gold/30 lg:block" aria-hidden="true" />
                {processSteps.map((step, index) => (
                  <article key={step.title} className={`relative pl-0 lg:pl-12 ${index < processSteps.length - 1 ? 'mb-16 lg:mb-20' : ''}`}>
                    <span className="absolute left-0 top-2 z-10 hidden h-4 w-4 rounded-full border-[3px] border-darkGreen bg-gold lg:block" aria-hidden="true" />
                    <div className="mb-4">
                      <p className="mb-2 block font-sans text-sm tracking-[0.3em] text-gold">{step.number}</p>
                      <h3 className="mb-4 font-sans text-2xl font-bold text-cream lg:text-3xl">{step.title}</h3>
                      <p className="mb-6 font-serif text-lg italic text-cream/70 lg:text-xl">{step.copy}</p>
                    </div>
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gold/20 bg-forest">
                      <Image src={step.image} alt={step.alt} fill sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover" />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq-section" className="bg-forest px-6 py-16 lg:px-12 lg:py-24" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-[1000px]">
            <p className="mb-4 text-center font-sans text-xs tracking-[0.3em] text-gold">FAQ</p>
            <h2 id="faq-heading" className="mb-12 text-center font-sans text-4xl font-bold text-cream lg:text-5xl">
              WEB DESIGN QUESTIONS
            </h2>
            <div className="divide-y divide-cream/10">
              {faqs.map((faq) => (
                <article key={faq.q} className="py-8">
                  <h3 className="mb-4 font-serif text-3xl italic text-cream">{faq.q}</h3>
                  <p className="font-serif text-lg leading-relaxed text-cream/70">{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cta-section" className="border-t border-cream/5 bg-forest py-20 text-center lg:py-32">
          <div className="mx-auto max-w-[1000px] px-6 lg:px-12">
            <h2 className="mb-6 font-sans text-4xl font-bold text-cream sm:text-5xl lg:mb-8 lg:text-6xl xl:text-7xl">
              START YOUR PROJECT
            </h2>
            <p className="mx-auto mb-10 max-w-2xl font-serif text-xl italic text-cream/70 lg:mb-12 lg:text-2xl">
              Tell us about your business and let&apos;s build something together.
            </p>
            <Link
              href="/contact?service=web-design"
              className="focus-ring inline-flex rounded-full border-2 border-gold px-12 py-4 font-sans text-sm tracking-widest text-gold transition-colors hover:bg-gold hover:text-darkGreen"
            >
              GET IN TOUCH
            </Link>
          </div>
        </section>

        <footer id="footer" className="border-t border-cream/5 bg-darkGreen py-16 lg:py-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="mb-16 grid grid-cols-1 gap-12 lg:mb-20 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="mb-6 font-sans text-3xl font-bold text-cream lg:mb-8 lg:text-4xl xl:text-5xl">
                  LET&apos;S CREATE
                  <br />
                  MAGIC
                </h2>
                <p className="mb-8 font-serif text-lg italic text-cream/60 lg:text-xl">
                  Ready to bring your vision to life? Get in touch and let&apos;s start the conversation.
                </p>

                <address className="mb-8 space-y-4 not-italic">
                  <a href="mailto:info@femsstudio.com" className="focus-ring flex rounded-sm font-serif text-lg text-cream transition-colors hover:text-gold">
                    info@femsstudio.com
                  </a>
                  <a href="tel:+12818183726" className="focus-ring flex rounded-sm font-serif text-lg text-cream transition-colors hover:text-gold">
                    +1 (281) 818-3726
                  </a>
                </address>

                <div className="flex items-center gap-4 font-sans text-xs tracking-widest text-gold" aria-label="Social links">
                  <a
                    href="https://www.instagram.com/femstudio__"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 transition-colors hover:bg-gold hover:text-darkGreen"
                  >
                    IG
                  </a>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/10 text-cream/25" aria-hidden="true">
                    X
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/10 text-cream/25" aria-hidden="true">
                    BE
                  </span>
                </div>
              </div>

              <div>
                <AboutQuickInquiryForm />
              </div>
            </div>

            <div className="border-t border-cream/10 pt-8">
              <p className="text-center font-sans text-xs tracking-wider text-cream/40">
                &copy; 2026 FEMSTUDIO. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
