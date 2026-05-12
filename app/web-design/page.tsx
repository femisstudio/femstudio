import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WebDesignShowcase from '@/components/sections/WebDesignShowcase'
import FAQSection from '@/components/sections/FAQSection'
import { ProcessSectionHeader } from '@/components/sections/ProcessSectionHeader'
import { ProcessGridItem } from '@/components/sections/ProcessGridItem'
import { ProcessCTARow } from '@/components/sections/ProcessCTARow'

export const metadata: Metadata = {
  title: { absolute: 'Custom Web Design Houston | FemStudio' },
  description:
    'Looking for custom web design in Houston? FemStudio builds premium, responsive websites that convert visitors and support business growth. Learn about our web design process.',
  keywords: [
    'web design Houston',
    'custom website Houston',
    'web designer Houston',
    'small business website Houston',
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
    title: 'Custom Web Design Houston | FemStudio',
    description: 'Custom web design for Houston small businesses and creators.',
    images: [
      {
        url: '/images/og/og-web-design.jpg',
        width: 1200,
        height: 630,
        alt: 'FemStudio web design services in Houston',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Web Design Houston | FemStudio',
    description: 'Premium web design for Houston businesses that need to grow online.',
    creator: '@femstudio__',
    images: ['/images/og/og-web-design.jpg'],
  },
}

const faqs = [
  {
    q: 'How long does a typical web design project take?',
    a: 'Most projects take 4 to 8 weeks from discovery through launch depending on scope and complexity.',
  },
  {
    q: 'Do you provide ongoing support after launch?',
    a: 'Yes. We offer post-launch support and maintenance packages to keep your site secure and up to date.',
  },
  {
    q: 'Will the website be mobile responsive?',
    a: 'Absolutely. Every site we build is fully responsive and optimized for mobile, tablet, and desktop.',
  },
  {
    q: 'How much does a custom website cost?',
    a: 'Every project is scoped individually based on your goals and requirements. Contact us to discuss your project and get a custom quote.',
  },
  {
    q: 'Do you work with clients outside of Houston?',
    a: 'Yes. While FemStudio is based in Houston TX we work with web design clients remotely across the United States.',
  },
]

const processSteps = [
  {
    number: '01',
    phase: 'Week 1',
    title: 'Discovery & Strategy',
    description: 'We learn your business, your audience, and what success looks like before a single pixel is designed. This is where we align on goals, content, and the first impression your site needs to make.',
    pills: [
      { text: 'Brand Brief' },
      { text: 'Sitemap' },
      { text: 'Content Direction' },
      { text: 'Goals Document' },
    ],
  },
  {
    number: '02',
    phase: 'Week 2–3',
    title: 'Design & Prototyping',
    description: 'We shape the visual language and layout of every page. Typography, hierarchy, spacing - every decision is intentional. You see and approve before a line of code is written.',
    pills: [
      { text: 'Wireframes' },
      { text: 'UI Design' },
      { text: 'Mobile Mockups' },
      { text: 'Interactive Prototype' },
    ],
  },
  {
    number: '03',
    phase: 'Week 4–5',
    title: 'Development & Launch',
    description: 'Your design becomes a fast, responsive, production-ready site. We handle the build, deployment, and cross-device testing - then hand you a site that performs from day one.',
    pills: [
      { text: 'Next.js Build' },
      { text: 'Vercel Deployment' },
      { text: 'Cross-Device QA' },
    ],
    conditionalPill: {
      text: 'CMS Integration',
      label: 'CMS gives your team the ability to update content independently - no developer needed',
    },
  },
  {
    number: '04',
    phase: 'Ongoing',
    title: 'Support & Growth',
    description: "The relationship doesn't end at launch. We offer ongoing support for updates, new pages, and performance improvements - so your site grows as your business does.",
    pills: [
      { text: 'Priority Updates' },
      { text: 'New Pages' },
      { text: 'Performance Checks' },
    ],
  },
]

export default function WebDesignPage() {
  return (
    <main id="main-content" className="bg-darkGreen text-cream">
      <p className="sr-only">
        FemStudio is a web design studio in Houston, Texas that creates custom, responsive websites for Houston-based businesses. FemStudio&rsquo;s web design services include discovery and strategy, design and prototyping, and development and launch.
      </p>
      <Header dark={true} />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-darkGreen pt-24 md:pt-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-forest/80 via-transparent to-darkGreen/50" aria-hidden="true" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20 md:items-center">
            <div>
              <p className="mb-6 font-sans text-xs tracking-[0.32em] text-gold">OUR EXPERTISE</p>
              <h1 className="mb-8 font-serif text-5xl italic leading-tight text-cream md:text-7xl">
                Web Design
                <br />
                <span className="text-gold">&amp; Strategy</span>
              </h1>
              <p className="mb-8 max-w-xl font-serif text-lg italic leading-relaxed text-cream/75">
                Websites that don&apos;t just look premium. They work. We build for both aesthetics and outcomes.
              </p>
              <Link
                href="/contact?service=web-design"
                className="focus-ring inline-flex rounded-full border border-gold px-8 py-3 font-sans text-xs font-bold tracking-widest text-gold transition-colors hover:bg-gold hover:text-darkGreen"
              >
                START YOUR PROJECT
              </Link>
            </div>

            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden border border-cream/10">
              <Image
                src="/images/webdesign/web-design-houston-climtransformlab.webp"
                alt="ClimTransform Lab website designed by FemStudio Houston"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                style={{ objectPosition: 'top' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <WebDesignShowcase />

      {/* Process Section */}
      <section className="bg-forest px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <ProcessSectionHeader
            eyebrow="HOW WE WORK"
            heading="Our Process"
            subtext="Every project follows a deliberate sequence - designed to remove guesswork and deliver results that last."
          />

          <div>
            {processSteps.map((step, index) => (
              <ProcessGridItem
                key={index}
                number={step.number}
                phase={step.phase}
                title={step.title}
                description={step.description}
                pills={step.pills}
                conditionalPill={step.conditionalPill}
                index={index}
              />
            ))}
          </div>

          <ProcessCTARow />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        items={faqs}
        heading="Frequently Asked."
        description="Everything you need to know before starting your project."
        buttonText="START YOUR PROJECT"
        buttonHref="/contact"
      />

      <Footer />
    </main>
  )
}
