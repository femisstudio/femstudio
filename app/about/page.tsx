import type { Metadata } from 'next'
import Image from 'next/image'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

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
    title: 'Design should guide people clearly.',
    desc: 'A website should make the next step obvious while still feeling personal to the person or business behind it.',
  },
  {
    title: 'The work should feel honest.',
    desc: 'FemStudio is built around real portraits, clear messaging, and creative direction that respects the client.',
  },
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
      <main id="main-content" className="bg-darkGreen">
        <Header />

        <section className="px-6 pb-20 pt-36 md:px-24 md:pb-28 md:pt-44">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-5 font-sans text-xs tracking-[0.32em] text-gold">ABOUT FEMSTUDIO</p>
              <h1 className="mb-8 font-serif text-6xl italic leading-tight text-cream md:text-8xl">
                Meet John Adeniran.
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed text-cream/75 md:text-2xl">
                Houston-based photographer and web designer helping people and businesses show up professionally at every stage.
              </p>
            </div>

            <figure className="relative min-h-[520px] overflow-hidden rounded-lg bg-gradient-to-br from-forest via-darkGreen to-[#2a2418]">
              <Image
                src="/images/founder/john-adeniran-femstudio-houston-photographer.jpg"
                alt="John Adeniran, Founder and Creative Director of FemStudio Houston"
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </figure>
          </div>
        </section>

        <section className="bg-forest px-6 py-20 md:px-24 md:py-28" aria-labelledby="story-heading">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1fr]">
            <div>
              <p className="mb-4 font-sans text-xs tracking-[0.3em] text-gold">THE STORY</p>
              <h2 id="story-heading" className="font-serif text-5xl italic text-cream md:text-7xl">
                A camera, a design eye, and a reason.
              </h2>
            </div>
            <div className="space-y-7 text-xl leading-relaxed text-cream/75">
              <p>
                FemStudio started with a simple belief: everyone deserves to look the part. Whether you are a college student chasing your first internship, a recent graduate building your LinkedIn presence, or a business owner trying to stand out, a professional image is not a luxury. It is the first step.
              </p>
              <p>
                I am a UX designer by day and a photographer and web designer by passion. That background means I do not just take pictures or build websites. I think about how every frame and every page communicates who you are.
              </p>
              <p>
                The long vision for FemStudio is bigger: film, music, short stories, and full creative production. Right now I am focused on doing two things exceptionally well: headshots that open doors and websites that grow businesses. Everything starts here.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-24 md:py-28" aria-labelledby="values-heading">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 font-sans text-xs tracking-[0.3em] text-gold">VALUES</p>
            <h2 id="values-heading" className="mb-14 font-serif text-5xl italic text-cream md:text-7xl">
              What guides the work.
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value, index) => (
                <article key={value.title} className="rounded-lg border border-cream/15 bg-cream/[0.03] p-8">
                  <p className="mb-8 font-sans text-xs tracking-[0.28em] text-gold">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="mb-5 font-serif text-3xl italic text-cream">{value.title}</h3>
                  <p className="leading-relaxed text-cream/70">{value.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-forest px-6 py-20 md:px-24 md:py-28" aria-labelledby="stats-heading">
          <div className="mx-auto max-w-7xl">
            <h2 id="stats-heading" className="sr-only">
              FemStudio Statistics
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                ['EST.', '2022'],
                ['HEADSHOTS', '50+'],
                ['CLIENT WEBSITES', '5-6'],
              ].map(([label, value]) => (
                <div key={label} className="border-t border-gold/35 pt-8">
                  <p className="mb-3 font-sans text-xs tracking-[0.28em] text-gold">{label}</p>
                  <p className="font-serif text-6xl italic text-cream">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
