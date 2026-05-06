import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
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

const faqs = [
  {
    q: 'How much do professional headshots cost in Houston?',
    a: 'Headshot pricing depends on the session scope, number of final images, location, and whether the session is for an individual or team. FemStudio provides custom quotes so the session matches the goal.',
  },
  {
    q: 'How long does a headshot session take?',
    a: 'Individual headshot sessions are usually short and focused. Team sessions take longer depending on the number of people, outfit changes, and location setup.',
  },
  {
    q: 'What should I wear for professional headshots?',
    a: 'Solid colors, clean lines, and outfits that fit your industry usually photograph well. Avoid large logos and busy patterns. FemStudio gives simple styling guidance before the session.',
  },
]

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

export default function PhotographyPage() {
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

        <section aria-labelledby="photography-hero-heading" className="relative h-[70vh] min-h-[560px] overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#3a3530] via-[#2a2520] to-darkGreen"
            aria-hidden="true"
          />
          <Image
            src="/images/editorial/porsche-editorial-brand-photography-houston-model-car-hero.jpg"
            alt="Porsche editorial brand photography with model and sports car in Houston TX by FemStudio"
            fill
            preload
            sizes="100vw"
            className="object-cover object-[62%_center] md:object-contain md:object-center"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,45,36,0.98)_0%,rgba(15,45,36,0.76)_35%,rgba(15,45,36,0.2)_72%),linear-gradient(to_top,rgba(15,45,36,0.8),transparent_65%)]"
            aria-hidden="true"
          />
          <div className="relative z-10 flex h-full items-end px-6 pb-16 md:px-24 md:pb-24">
            <div className="max-w-3xl">
              <p className="mb-5 font-sans text-xs tracking-[0.32em] text-gold">FEMSTUDIO PHOTOGRAPHY</p>
              <h1 id="photography-hero-heading" className="mb-6 font-serif text-6xl italic leading-tight text-cream md:text-8xl">
                Every frame, a story.
              </h1>
              <p className="max-w-xl text-xl leading-relaxed text-cream/75 md:text-2xl">
                Houston-based photographer capturing portraits, brands, and milestones.
              </p>
            </div>
          </div>
        </section>

        <PhotographyContent />

        <section className="bg-forest px-6 py-20 md:px-24 md:py-28" aria-labelledby="headshots-heading">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 font-sans text-xs tracking-[0.3em] text-gold">HEADSHOTS</p>
              <h2 id="headshots-heading" className="mb-6 font-serif text-5xl italic text-cream md:text-7xl">
                Portraits that open doors.
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-cream/75">
                Whether you need a LinkedIn photo, internship profile, company bio, or a full team session, FemStudio creates images that feel polished and human.
              </p>
              <Link
                href="/contact?service=photography"
                className="focus-ring inline-flex rounded-full border border-gold px-8 py-4 font-sans text-xs tracking-[0.22em] text-gold transition-colors hover:bg-gold hover:text-darkGreen"
              >
                BOOK A SESSION
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="relative aspect-[4/5] overflow-hidden rounded-lg bg-darkGreen">
                  <Image
                    src={`/images/headshots/professional-headshot-houston-0${n}.jpg`}
                    alt={`Professional headshot preview ${n} photographed by FemStudio in Houston TX`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-24 md:py-28" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 font-sans text-xs tracking-[0.3em] text-gold">FAQ</p>
            <h2 id="faq-heading" className="mb-12 font-serif text-5xl italic text-cream md:text-7xl">
              Photography questions.
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
            Ready for a session that feels like you?
          </h2>
          <Link
            href="/contact?service=photography"
            className="focus-ring inline-flex rounded-full bg-gold px-10 py-4 font-sans text-xs tracking-[0.22em] text-darkGreen"
          >
            INQUIRE NOW
          </Link>
        </section>

        <Footer />
      </main>
    </>
  )
}
