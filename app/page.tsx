import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSplitDivider from '@/components/sections/HeroSplitDivider'
import DigitalAlchemy from '@/components/sections/DigitalAlchemy'

export const metadata: Metadata = {
  title: { absolute: 'FemStudio | Houston Photography & Web Design' },
  description:
    'FemStudio Houston offers professional headshots, brand photography, and custom web design for businesses and creators.',
  keywords: [
    'photography Houston',
    'web design Houston',
    'professional headshots',
    'brand photography',
    'custom website design',
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
    title: 'FemStudio | Houston Photography & Web Design',
    description: 'Professional photography and web design services in Houston.',
    images: [
      {
        url: '/images/og/og-femstudio.jpg',
        width: 1200,
        height: 630,
        alt: 'FemStudio Houston',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FemStudio | Houston Photography & Web Design',
    description: 'Professional photography and web design services in Houston.',
    creator: '@femstudio__',
    images: ['/images/og/og-femstudio.jpg'],
  },
}

export default function HomePage() {
  return (
    <main id="main-content" className="bg-darkGreen text-cream">
      <Header />
      <HeroSplitDivider />
      <DigitalAlchemy />
      <Footer />
    </main>
  )
}
