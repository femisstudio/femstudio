import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ProcessSectionHeader } from '@/components/sections/ProcessSectionHeader'
import { ProcessGridItem } from '@/components/sections/ProcessGridItem'

export const metadata: Metadata = {
  title: { absolute: 'About John Adeniran | FemStudio Houston' },
  description:
    'Who is John Adeniran? Learn about FemStudio founder John Adeniran, a UX designer and photographer in Houston specializing in professional headshots and web design since 2022.',
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
    number: '01',
    phase: 'Perspective',
    title: 'Everyone deserves a professional image.',
    description: 'Your headshot is your handshake. It should represent your professional self, not just a photo taken on a random day.',
    pills: [{ text: 'Credibility' }, { text: 'Authenticity' }, { text: 'First Impression' }],
  },
  {
    number: '02',
    phase: 'Purpose',
    title: 'Design should do something.',
    description: 'A beautiful website should also guide people clearly. FemStudio builds for both aesthetics and outcomes.',
    pills: [{ text: 'Intention' }, { text: 'Clarity' }, { text: 'Impact' }],
  },
  {
    number: '03',
    phase: 'Practice',
    title: 'Craft first, scale second.',
    description: 'FemStudio is growing intentionally. Every service offered is one that has been practiced with care.',
    pills: [{ text: 'Mastery' }, { text: 'Discipline' }, { text: 'Growth' }],
  },
]

const stats = [
  { value: 'EST. 2022', label: 'Founded' },
  { value: 'HOUSTON, TX', label: 'Based In' },
  { value: '2 SERVICES', label: 'And Growing' },
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
      <main id="main-content" className="bg-darkGreen text-cream">
        <p className="sr-only">
          FemStudio is founded by John Adeniran, a UX designer, photographer, and web designer based in Houston, Texas. FemStudio provides professional photography and custom web design services to Houston-area businesses and professionals.
        </p>
        <Header dark={true} />

        {/* Hero Section */}
        <section
          id="hero-about"
          className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden bg-darkGreen pt-24 md:min-h-[700px]"
          aria-labelledby="about-heading"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-transparent to-forest/80" aria-hidden="true" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.08),transparent_42%)]" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-10">
            <p className="mb-8 inline-block rounded-full border border-gold/30 px-4 py-1 font-sans text-[10px] tracking-[0.3em] text-gold/80">
              EST. 2022 / HOUSTON, TX
            </p>
            <h1 id="about-heading" className="mb-6 font-serif text-5xl italic leading-tight text-cream md:text-7xl">
              The Story Behind the Lens
            </h1>
            <p className="mx-auto max-w-2xl font-serif text-lg italic text-cream/70">
              Houston-based photographer and web designer, helping people and businesses show up professionally at every stage.
            </p>
          </div>
        </section>

        {/* Founder Story Section */}
        <section id="founder-story" className="relative w-full bg-forest px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <figure className="relative h-96 overflow-hidden rounded-lg border border-cream/10 bg-darkGreen md:h-[500px] lg:h-[600px]">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-forest/75 to-transparent" aria-hidden="true" />
                <Image
                  src="/images/founder/john-adeniran-femstudio-houston-photographer.jpg"
                  alt="John Adeniran, Founder and Creative Director of FemStudio Houston"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <figcaption className="absolute bottom-6 left-6 z-20 md:bottom-8 md:left-8">
                  <p className="mb-1 font-sans text-base font-bold tracking-wider text-white md:text-lg">JOHN ADENIRAN</p>
                  <p className="font-serif text-sm italic text-gold md:text-base">Founder, FemStudio</p>
                </figcaption>
              </figure>

              <div className="space-y-8">
                <p className="inline-block border-b border-gold/30 pb-2 font-sans text-[10px] tracking-[0.3em] text-gold/80">
                  FOUNDER &amp; CREATIVE DIRECTOR
                </p>
                <div className="space-y-6 font-serif text-base italic leading-relaxed text-cream/75 md:text-lg">
                  <p>
                    FemStudio started with a simple belief — that everyone deserves to look the part. Whether you are a college
                    student chasing your first internship, a recent graduate building your LinkedIn presence, or a business
                    owner trying to stand out, a professional image is not a luxury. It is the first step.
                  </p>
                  <p>
                    I am a UX designer by day and a photographer and web designer by passion. That background means I do not
                    just take pictures or build websites — I think about how every frame and every page communicates who you
                    are. Design and photography are the same discipline to me: both are about making people feel something
                    and then do something.
                  </p>
                  <p>
                    The long vision for FemStudio is bigger — film, music, short stories, full creative production. But right
                    now I am focused on doing two things exceptionally well: headshots that open doors and websites that grow
                    businesses. Everything starts here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="w-full border-y border-cream/10 bg-darkGreen px-6 py-16 md:px-10" aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="sr-only">
            FemStudio statistics
          </h2>
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {stats.map(({ value, label }, index) => (
                <div
                  key={label}
                  className={`flex flex-col items-center justify-center text-center py-12 px-6 ${
                    index > 0 ? 'border-t border-gold/30 md:border-t-0 md:border-l md:border-gold/30' : ''
                  }`}
                >
                  <p className={`font-cormorant-garamond font-bold text-cream leading-none mb-3 whitespace-nowrap ${
                    index === 1 ? 'text-4xl md:text-5xl' : 'text-5xl md:text-6xl'
                  }`}>
                    {value}
                  </p>
                  <p className="font-syncopate text-xs tracking-widest uppercase mt-3" style={{ color: '#c9a227' }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section id="values" className="relative w-full bg-forest px-6 py-24 md:px-10 md:py-32" aria-labelledby="values-heading">
          <div className="mx-auto max-w-7xl">
            <ProcessSectionHeader
              eyebrow="HOW WE THINK"
              heading="The Principles"
              subtext="The values that shape every decision — from the first conversation to the final delivery."
            />

            <div>
              {values.map((value, index) => (
                <ProcessGridItem
                  key={index}
                  number={value.number}
                  phase={value.phase}
                  title={value.title}
                  description={value.description}
                  pills={value.pills}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta-about" className="relative w-full border-t border-cream/5 bg-darkGreen px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 font-serif text-5xl italic leading-tight text-cream md:text-7xl">
              Ready to work together?
            </h2>
            <p className="mx-auto mb-12 max-w-2xl font-serif text-lg italic leading-relaxed text-cream/75">
              Whether you need a headshot that opens doors or a website that supports your business, let&apos;s talk.
            </p>
            <Link
              href="/contact"
              className="focus-ring inline-flex rounded-full border border-gold px-8 py-3 font-sans text-xs font-bold tracking-widest text-gold transition-colors hover:bg-gold hover:text-darkGreen"
            >
              GET IN TOUCH
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
