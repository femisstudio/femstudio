import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export const metadata: Metadata = {
  title: { absolute: 'FemStudio | Houston Photographer & Web Designer' },
  description:
    'Houston-based professional headshots, editorial photography, celebration photography, and custom web design by FemStudio.',
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
    title: 'FemStudio | Houston Photographer & Web Designer',
    description:
      'Houston-based professional headshots, editorial photography, celebration photography, and custom web design by FemStudio.',
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
    title: 'FemStudio | Houston Photographer & Web Designer',
    description: 'Houston photography and web design for people and businesses ready to show up clearly.',
    creator: '@femstudio__',
    images: ['/images/og/og-femstudio.jpg'],
  },
}

const services = [
  {
    title: 'Professional Headshots',
    copy: 'LinkedIn, internship, corporate, and executive portraits for Houston professionals.',
    href: '/photography',
  },
  {
    title: 'Editorial & Brand Photography',
    copy: 'Campaign imagery and visual stories for brands, creators, and businesses.',
    href: '/photography',
  },
  {
    title: 'Web Design',
    copy: 'Custom landing pages, portfolio websites, e-commerce experiences, and business websites.',
    href: '/web-design',
  },
]

const selectedWorks = [
  {
    title: 'Porsche Editorial',
    src: '/images/editorial/porsche-editorial-houston-photographer-03.jpg',
    alt: 'Porsche editorial brand photography with model and car in Houston TX by FemStudio',
  },
  {
    title: 'Professional Headshots',
    src: '/images/headshots/professional-headshot-houston-01.jpg',
    alt: 'Professional headshot in Houston TX by FemStudio',
  },
  {
    title: 'Milestones',
    src: '/images/celebrations/prom-photography-houston-01.jpg',
    alt: 'Prom milestone photography in Houston TX by FemStudio',
  },
]

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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema).replace(/</g, '\\u003c'),
        }}
      />
      <main id="main-content" className="bg-darkGreen">
        <Header />

        <section className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 grid md:grid-cols-2" aria-hidden="true">
            <div className="relative bg-forest">
              <Image
                src="/images/editorial/porsche-editorial-brand-photography-houston-model-car-hero.jpg"
                alt=""
                fill
                preload
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-[62%_center] opacity-70 md:object-contain"
              />
            </div>
            <div className="relative bg-darkGreen">
              <Image
                src="/images/webdesign/client-website-example.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-45"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-darkGreen via-darkGreen/35 to-darkGreen/30" />
          <div className="relative z-10 flex min-h-screen items-end px-6 pb-20 pt-36 md:px-24 md:pb-28">
            <div className="max-w-4xl">
              <p className="mb-5 font-sans text-xs tracking-[0.32em] text-gold">HOUSTON PHOTOGRAPHY & WEB DESIGN</p>
              <h1 className="mb-6 font-serif text-6xl italic leading-tight text-cream md:text-8xl">
                Images and websites that help you show up.
              </h1>
              <p className="mb-10 max-w-2xl text-xl leading-relaxed text-cream/75 md:text-2xl">
                FemStudio creates professional headshots, editorial brand photography, celebration portraits, and custom websites for Houston clients.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="focus-ring rounded-full bg-gold px-8 py-4 text-center font-sans text-xs tracking-[0.22em] text-darkGreen"
                >
                  START PROJECT
                </Link>
                <Link
                  href="/photography"
                  className="focus-ring rounded-full border border-cream/60 px-8 py-4 text-center font-sans text-xs tracking-[0.22em] text-cream"
                >
                  VIEW WORK
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-24 md:py-28" aria-labelledby="services-heading">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 font-sans text-xs tracking-[0.3em] text-gold">SERVICES</p>
            <h2 id="services-heading" className="mb-14 font-serif text-5xl italic text-cream md:text-7xl">
              Built around first impressions.
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="focus-ring rounded-lg border border-cream/15 bg-cream/[0.03] p-8 transition-colors hover:border-gold/60"
                >
                  <h3 className="mb-4 font-serif text-3xl italic text-cream">{service.title}</h3>
                  <p className="leading-relaxed text-cream/70">{service.copy}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-forest px-6 py-20 md:px-24 md:py-28" aria-labelledby="work-heading">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-4 font-sans text-xs tracking-[0.3em] text-gold">SELECTED WORK</p>
                <h2 id="work-heading" className="font-serif text-5xl italic text-cream md:text-7xl">
                  Recent frames.
                </h2>
              </div>
              <Link href="/photography" className="focus-ring rounded-sm font-sans text-xs tracking-[0.22em] text-gold">
                SEE PHOTOGRAPHY
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {selectedWorks.map((work) => (
                <article key={work.title} className="portfolio-card relative aspect-[4/5] overflow-hidden rounded-lg bg-darkGreen">
                  <Image src={work.src} alt={work.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-darkGreen/90 to-transparent p-6">
                    <h3 className="font-serif text-2xl italic text-cream">{work.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
