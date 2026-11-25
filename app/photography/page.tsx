import type { Metadata } from 'next'
import { Suspense } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import PhotographyHeroNew from '@/components/sections/PhotographyHeroNew'
import PhotographyGallery from '@/components/sections/PhotographyGallery'
import PhotographyCTA from '@/components/sections/PhotographyCTA'
import FAQSection from '@/components/sections/FAQSection'
import PhotographyIntro from '@/components/sections/PhotographyIntro'

export const metadata: Metadata = {
  title: { absolute: 'Headshot & Brand Photographer in Houston, TX | FemStudio' },
  description:
    'Headshot photographer in Houston, TX for professionals, founders and teams. Brand photography that looks like you. Sessions start at $175.',
  keywords: [
    'headshot photographer houston tx',
    'brand photographer houston',
    'wedding photographer houston',
    'professional headshots houston',
    'headshot photographer houston',
    'brand photography houston',
    'editorial photography houston',
    'houston photographer',
  ],
  alternates: { canonical: 'https://www.femsstudio.com/photography' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    url: 'https://www.femsstudio.com/photography',
    siteName: 'FemStudio',
    title: 'Headshot & Brand Photographer in Houston, TX | FemStudio',
    description: 'Headshot and brand photographer in Houston, TX for professionals, founders and teams. Sessions start at $175.',
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
    title: 'Headshot & Brand Photographer in Houston, TX | FemStudio',
    description: 'Headshot and brand photographer in Houston, TX for professionals, founders and teams. Sessions start at $175.',
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
    a: 'Most individual sessions run 30 to 45 minutes. That covers setup, an outfit change, and enough time for you to relax so your expressions look natural.',
  },
  {
    q: 'How many images will I receive?',
    a: 'You pick your favorites from an online proofing gallery, usually within a few days of the shoot. Individual sessions include 3 retouched high-resolution images, and extra images can be added. Team packages are quoted by headcount.',
  },
  {
    q: 'Do you offer retouching?',
    a: 'Yes. All headshots include professional retouching for skin tone, lighting balance, and overall polish. We keep retouching natural-looking.',
  },
  {
    q: 'Can I book a same-day session?',
    a: 'Availability depends on schedule. Contact us at info@femsstudio.com or call +1 (281) 818-3726 to check availability and book.',
  },
  {
    q: 'Do you photograph teams at their office?',
    a: 'Yes. We bring a portable lighting and backdrop setup to your Houston office, so your whole team gets a consistent look without leaving work.',
  },
  {
    q: 'Where do headshot sessions take place?',
    a: 'FemStudio is a Houston, TX headshot and brand photographer. Sessions happen on location at your office, home, or a spot that fits your brand, anywhere in Houston and nearby Katy, Sugar Land, The Woodlands, Pearland, and Bellaire.',
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
        <PhotographyHeroNew />
        <PhotographyIntro />
        <div id="portfolio" className="bg-darkGreen text-cream">
          <Suspense fallback={<div className="min-h-screen" />}>
            <PhotographyGallery />
          </Suspense>
          <PhotographyCTA />
        </div>
        <FAQSection
          items={photographyFaqs}
          heading="About Your Headshot Session."
          description="Everything you need to know before your session."
          buttonText="BOOK YOUR SESSION"
          buttonHref="/contact"
        />
        <Footer />
      </main>
    </>
  )
}
