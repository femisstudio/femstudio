import type { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import HeroSplitDivider from '@/components/sections/HeroSplitDivider'

export const metadata: Metadata = {
  title: { absolute: 'FemStudio | Houston Photography & Web Design' },
  description:
    'Need professional headshots or custom web design in Houston? FemStudio offers professional photography for LinkedIn and corporate use, plus premium web design for Houston businesses.',
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
      <p className="sr-only">
        FemStudio is a Houston-based creative studio founded in 2022, specializing in professional photography and web design. Located in Houston, Texas, FemStudio serves businesses and professionals with services including professional headshots, brand photography, editorial photography, and custom web design.
      </p>
      <Header dark={true} />
      <HeroSplitDivider />
      <Footer />
    </main>
  )
}
