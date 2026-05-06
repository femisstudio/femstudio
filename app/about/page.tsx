import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AboutQuickInquiryForm from '@/components/sections/AboutQuickInquiryForm'

export const metadata: Metadata = {
  title: { absolute: 'About John Adeniran | FemStudio Houston' },
  description:
    'Meet John Adeniran, founder of FemStudio in Houston, with a background in photography, web design, and UX design for professional headshots and custom websites.',
  keywords: ['John Adeniran', 'FemStudio', 'Houston photographer', 'web design Houston', 'UX design'],
  alternates: { canonical: 'https://femsstudio.com/about' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'profile',
    url: 'https://femsstudio.com/about',
    siteName: 'FemStudio',
    title: 'About John Adeniran | FemStudio Houston',
    description:
      'Meet John Adeniran, founder of FemStudio in Houston, with a background in photography, web design, and UX design.',
    images: [
      {
        url: '/images/og/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'John Adeniran founder of FemStudio Houston',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About John Adeniran | FemStudio Houston',
    description:
      'Meet John Adeniran, founder of FemStudio in Houston, with a background in photography, web design, and UX design.',
    creator: '@femstudio__',
    images: ['/images/og/og-about.jpg'],
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'John Adeniran',
  jobTitle: 'Founder & Creative Director',
  worksFor: {
    '@type': 'Organization',
    name: 'FemStudio',
  },
  url: 'https://femsstudio.com/about',
  sameAs: 'https://www.instagram.com/femstudio__',
}

const values = [
  {
    title: 'Everyone deserves a professional image.',
    desc: 'Your headshot is your handshake. It should represent your professional self, not just a photo taken on a random day.',
  },
  {
    title: 'Design should do something.',
    desc: 'A beautiful website should also guide people clearly. FemStudio builds for both aesthetics and outcomes.',
  },
  {
    title: 'Craft first, scale second.',
    desc: 'FemStudio is growing intentionally. Every service offered is one that has been practiced with care.',
  },
]

const stats = [
  ['EST. 2022', 'Founded'],
  ['HOUSTON, TX', 'Based In'],
  ['2 SERVICES', 'And Growing'],
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, '\\u003c'),
        }}
      />
      <main id="main-content" className="overflow-x-hidden bg-forest text-cream">
        <header className="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-6 text-cream mix-blend-difference md:px-10 lg:px-16">
          <Link
            href="/"
            aria-label="FemStudio homepage"
            className="focus-ring rounded-sm font-sans text-xl font-bold tracking-widest text-gold"
          >
            FEM<span className="text-cream">STUDIO</span>
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
            href="/contact"
            className="focus-ring rounded-full border border-gold px-5 py-2 font-sans text-[10px] uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-forest md:px-6 md:text-xs"
          >
            Start Project
          </Link>
        </header>

        <section
          id="hero-about"
          className="relative flex h-[600px] w-full items-center justify-center overflow-hidden bg-darkGreen lg:h-[700px]"
          aria-labelledby="about-heading"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-transparent to-forest/80" aria-hidden="true" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.08),transparent_42%)]" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-5xl px-8 text-center">
            <p className="mb-8 inline-block rounded-full border border-gold/30 px-4 py-1 font-sans text-[10px] tracking-[0.3em] text-gold/80">
              EST. 2022 / HOUSTON, TX
            </p>
            <h1
              id="about-heading"
              className="mb-6 font-serif text-6xl font-light italic leading-none tracking-tight text-cream md:text-7xl lg:text-8xl xl:text-9xl"
            >
              The Story
              <br />
              Behind the Lens
            </h1>
            <p className="mx-auto max-w-2xl font-serif text-lg italic text-cream/70 lg:text-xl">
              Houston-based photographer and web designer, helping people and businesses show up professionally at every stage.
            </p>
          </div>
        </section>

        <section id="founder-story" className="relative w-full bg-forest px-8 py-24 lg:px-24 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <figure className="relative h-[500px] overflow-hidden rounded-lg border border-cream/10 bg-darkGreen lg:h-[700px]">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-forest/75 to-transparent" aria-hidden="true" />
                <Image
                  src="/images/founder/john-adeniran-femstudio-houston-photographer.jpg"
                  alt="John Adeniran, Founder and Creative Director of FemStudio Houston"
                  fill
                  preload
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <figcaption className="absolute bottom-8 left-8 z-20">
                  <p className="mb-1 font-sans text-lg font-bold tracking-wider text-white">JOHN ADENIRAN</p>
                  <p className="font-serif text-base italic text-gold">Founder, FemStudio</p>
                </figcaption>
              </figure>

              <div className="space-y-8">
                <p className="inline-block border-b border-gold/30 pb-2 font-sans text-[10px] tracking-[0.3em] text-gold/80">
                  FOUNDER &amp; CREATIVE DIRECTOR
                </p>
                <h2 className="font-serif text-4xl font-light italic leading-tight tracking-tight text-cream lg:text-5xl xl:text-6xl">
                  Bridging the gap from prospect to professional.
                </h2>
                <div className="space-y-6 font-serif text-base italic leading-relaxed text-cream/70 lg:text-lg">
                  <p>
                    FemStudio started with a simple belief: everyone deserves to look the part. Whether you are a college
                    student chasing your first internship, a recent graduate building your LinkedIn presence, or a business
                    owner trying to stand out, a professional image is not a luxury. It is the first step.
                  </p>
                  <p>
                    I am a UX designer by day and a photographer and web designer by passion. That background means I do not
                    just take pictures or build websites. I think about how every frame and every page communicates who you
                    are. Design and photography are the same discipline to me: both are about helping people feel something
                    and then do something.
                  </p>
                  <p>
                    The long vision for FemStudio is bigger: film, music, short stories, and full creative production. Right
                    now I am focused on doing two things with care: headshots that open doors and websites that support
                    business growth. Everything starts here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full border-y border-cream/10 bg-darkGreen px-8 py-16 lg:py-20" aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="sr-only">
            FemStudio statistics
          </h2>
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-8 divide-y divide-gold/30 md:grid-cols-3 md:divide-x md:divide-y-0 lg:gap-0">
              {stats.map(([value, label]) => (
                <div key={label} className="pt-8 text-center md:px-8 md:pt-0">
                  <p className="mb-3 font-sans text-5xl font-bold leading-none tracking-tight text-gold lg:text-6xl">
                    {value}
                  </p>
                  <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-cream/60">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="values" className="relative w-full bg-forest px-8 py-24 lg:px-24 lg:py-32" aria-labelledby="values-heading">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <h2
                id="values-heading"
                className="mb-4 font-sans text-4xl font-bold leading-none tracking-tight text-cream lg:text-5xl xl:text-6xl"
              >
                OUR CORE VALUES
              </h2>
              <p className="mx-auto max-w-2xl font-serif text-lg italic text-cream/60 lg:text-xl">
                The principles that guide every project, every frame, and every line of code.
              </p>
            </div>

            <div className="border-t border-cream/10">
              {values.map((value, index) => (
                <article
                  key={value.title}
                  className="grid grid-cols-1 items-start gap-8 border-b border-cream/10 py-12 lg:grid-cols-12 lg:gap-0 lg:py-16"
                >
                  <div className="lg:col-span-2">
                    <p className="font-sans text-6xl font-bold tracking-tight text-gold/20 lg:text-7xl">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                  </div>
                  <div className="lg:col-span-10">
                    <h3 className="mb-6 font-sans text-2xl font-bold tracking-tight text-cream lg:text-3xl">
                      {value.title}
                    </h3>
                    <p className="font-serif text-base italic leading-relaxed text-cream/70 lg:text-lg">{value.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cta-about" className="relative w-full border-t border-cream/5 bg-darkGreen px-8 py-24 lg:px-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-8 inline-block rounded-full border border-gold/30 px-4 py-1 font-sans text-[10px] tracking-[0.3em] text-gold/80">
              READY TO BEGIN?
            </p>
            <h2 className="mb-8 font-sans text-4xl font-bold leading-tight tracking-tight text-cream lg:text-5xl xl:text-6xl">
              READY TO WORK
              <br />
              TOGETHER?
            </h2>
            <p className="mx-auto mb-12 max-w-2xl font-serif text-lg italic text-cream/70 lg:text-xl">
              Whether you need a headshot that opens doors or a website that supports your business, let&apos;s talk.
            </p>
            <Link
              href="/contact"
              className="focus-ring inline-flex rounded-full border border-gold px-10 py-4 font-sans text-xs uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-forest"
            >
              Get In Touch
            </Link>
          </div>
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
              <address className="mb-12 space-y-4 not-italic font-sans text-xs tracking-widest text-cream">
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
            <p>© 2026 FEMSTUDIO. ALL RIGHTS RESERVED.</p>
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
