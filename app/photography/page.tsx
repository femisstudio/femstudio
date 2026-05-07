import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import PhotographyHeroNew from '@/components/sections/PhotographyHeroNew'
import PhotographyGallery from '@/components/sections/PhotographyGallery'
import HeadshotsHighlight from '@/components/sections/HeadshotsHighlight'
import PhotographyBookingCTA from '@/components/sections/PhotographyBookingCTA'

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

export default function PhotographyPage() {
  return (
    <main id="main-content" className="bg-cream text-forest">
      <PhotographyHeroNew />
      <div id="portfolio" className="bg-darkGreen text-cream">
        <PhotographyGallery />
        <HeadshotsHighlight />
        <PhotographyBookingCTA />
      </div>
      <Footer />
    </main>
  )
}
