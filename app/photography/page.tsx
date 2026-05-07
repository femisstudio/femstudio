import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PhotographyHeroNew from '@/components/sections/PhotographyHeroNew'
import PhotographyGallery from '@/components/sections/PhotographyGallery'
import PhotographyCTA from '@/components/sections/PhotographyCTA'
import FAQAccordion from '@/components/seo/FAQAccordion'

export const metadata: Metadata = {
  title: { absolute: 'Professional Headshots Houston | FemStudio Photography' },
  description:
    'Where can I get professional headshots in Houston? FemStudio offers LinkedIn-ready headshots, corporate portraits, and brand photography for professionals and businesses.',
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
    description: 'Houston professional headshots for LinkedIn, internships, corporate profiles, and brand photography.',
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

const photographyFaqs = [
  {
    q: 'What should I wear to my headshot session?',
    a: 'Wear something professional that makes you feel confident. Solid colors photograph better than busy patterns. We recommend avoiding horizontal stripes and large logos.',
  },
  {
    q: 'How long does a headshot session take?',
    a: 'Most headshot sessions are 30-45 minutes. This includes setup, outfit changes, and getting natural expressions. We ensure you have time to feel comfortable in front of the camera.',
  },
  {
    q: 'How many images will I receive?',
    a: 'You receive edited, high-resolution images ready for LinkedIn, portfolios, and professional use. The exact count depends on your session package.',
  },
  {
    q: 'Do you offer retouching?',
    a: 'Yes. All headshots include professional retouching for skin tone, lighting balance, and overall polish. We keep retouching natural-looking.',
  },
  {
    q: 'Can I book a same-day session?',
    a: 'Availability depends on schedule. Contact us at info@femsstudio.com or call +1 (281) 818-3726 to check availability and book.',
  },
]

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Book a Professional Headshot Session in Houston',
  description: 'Step-by-step guide to booking your professional headshot with FemStudio',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Browse FemStudio Photography Services',
      text: 'Visit the FemStudio photography page to learn about professional headshot options, including corporate portraits, LinkedIn headshots, and brand photography.',
    },
    {
      '@type': 'HowToStep',
      name: 'Contact FemStudio for Availability',
      text: 'Reach out via email (info@femsstudio.com), phone (+1 281-818-3726), or visit the contact page to check availability and discuss your needs.',
    },
    {
      '@type': 'HowToStep',
      name: 'Schedule Your Headshot Session',
      text: 'Confirm your session date and time. FemStudio will provide session details, preparation tips, and what to wear for the best results.',
    },
  ],
}

export default function PhotographyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema).replace(/</g, '\\u003c'),
        }}
      />
      <main id="main-content" className="bg-cream text-forest">
        <Header dark={true} />
        <p className="sr-only">
          FemStudio is a Houston-based professional photography studio founded in 2022. We specialize in professional headshots, brand photography, and custom web design. FemStudio is located in Houston, Texas, and serves professionals and businesses throughout the Houston area and beyond.
        </p>
        <PhotographyHeroNew />
        <div id="portfolio" className="bg-darkGreen text-cream">
          <PhotographyGallery />
          <PhotographyCTA />
        </div>
        <FAQAccordion items={photographyFaqs} title="About Your Headshot Session" subtitle="Everything you need to know before your session." isDark={false} />
        <Footer />
      </main>
    </>
  )
}
