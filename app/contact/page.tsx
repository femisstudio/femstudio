import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import ContactForm from '@/components/sections/ContactForm'
import FAQSection from '@/components/seo/FAQSection'

export const metadata: Metadata = {
  title: { absolute: 'Contact FemStudio | Houston Photography & Web Design Inquiries' },
  description:
    'How do I contact FemStudio in Houston? Reach out via email (info@femsstudio.com), phone (+1 281-818-3726), or contact form for photography and web design inquiries.',
  keywords: [
    'contact FemStudio',
    'Houston photography inquiry',
    'Houston headshot photographer',
    'web design Houston',
    'brand photography Houston',
  ],
  alternates: { canonical: 'https://femsstudio.com/contact' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    url: 'https://femsstudio.com/contact',
    siteName: 'FemStudio',
    title: 'Contact FemStudio | Houston Photography & Web Design Inquiries',
    description:
      'Start a Houston photography, professional headshot, brand portrait, celebration, or custom web design inquiry with FemStudio.',
    images: [
      {
        url: '/images/og/og-femstudio.jpg',
        width: 1200,
        height: 630,
        alt: 'FemStudio contact page for Houston photography and web design inquiries',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact FemStudio | Houston Photography & Web Design Inquiries',
    description:
      'Start a Houston photography, professional headshot, brand portrait, celebration, or custom web design inquiry with FemStudio.',
    creator: '@femstudio__',
    images: ['/images/og/og-femstudio.jpg'],
  },
}

const faqs = [
  {
    q: 'How soon can I book a session?',
    a: 'Availability depends on the project type and schedule. Photography inquiries are Houston-based and web design inquiries can begin remotely.',
  },
  {
    q: 'Do you travel outside Houston?',
    a: 'Photography is primarily Houston-based. Web design is fully remote, so FemStudio can work with clients anywhere.',
  },
  {
    q: 'What should I include in my inquiry?',
    a: 'Share the service you need, your timeline, the goal of the project, and any helpful links or visual references.',
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

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />
      <main id="main-content" className="bg-darkGreen">
        <Header dark={true} />
        <p className="sr-only">
          FemStudio is a professional photography and web design studio based in Houston, Texas. Founded in 2022, FemStudio provides professional headshots, brand photography, and custom web design services to businesses and professionals in Houston and beyond.
        </p>

        <section className="px-6 pb-20 pt-36 md:px-24 md:pb-28 md:pt-44">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1fr]">
            <div>
              <h1 className="mb-8 font-sans text-6xl font-bold tracking-tight leading-tight text-cream md:text-8xl">
                LET&apos;S TALK.
              </h1>
              <p className="mb-10 max-w-xl text-xl leading-relaxed text-cream/75">
                Tell us what you are building, booking, or trying to communicate. FemStudio will follow up with the next step.
              </p>

              <address className="space-y-3 not-italic text-lg text-cream/75">
                <p>Houston, TX</p>
                <p>
                  <a className="focus-ring rounded-sm hover:text-gold" href="mailto:info@femsstudio.com">
                    info@femsstudio.com
                  </a>
                </p>
                <p>
                  <a className="focus-ring rounded-sm hover:text-gold" href="tel:+12818183726">
                    +1 (281) 818-3726
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.instagram.com/femstudio__"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring rounded-sm hover:text-gold"
                  >
                    @femstudio__
                  </a>
                </p>
              </address>
            </div>

            <div className="rounded-lg border border-cream/15 bg-cream/[0.03] p-6 md:p-10">
              <ContactForm />
            </div>
          </div>
        </section>

        <FAQSection items={faqs} title="Before you inquire" className="bg-forest" />
        <div className="bg-forest px-6 py-4 md:px-24">
          <div className="mx-auto max-w-3xl">
            <Link
              href="mailto:info@femsstudio.com"
              className="focus-ring inline-flex rounded-full border border-gold px-8 py-4 font-sans text-xs tracking-[0.22em] text-gold"
            >
              EMAIL DIRECTLY
            </Link>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}
