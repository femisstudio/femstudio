import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Syncopate } from 'next/font/google'
import './globals.css'

const siteUrl = 'https://femsstudio.com'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const syncopate = Syncopate({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-syncopate',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'FemStudio',
  title: {
    default: 'FemStudio | Houston Photography & Web Design Studio',
    template: '%s | FemStudio',
  },
  description:
    'FemStudio is a Houston, TX photography and web design studio creating professional headshots, editorial brand photography, celebration portraits, and custom websites.',
  keywords: [
    'houston photographer',
    'professional headshots houston',
    'web design houston',
    'brand photography houston',
    'femstudio',
  ],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'FemStudio',
    title: 'FemStudio | Houston Photography & Web Design Studio',
    description:
      'Houston, TX photography and web design studio for headshots, editorial brand photography, celebrations, and custom business websites.',
    locale: 'en_US',
    images: [
      {
        url: '/images/og/og-femstudio.jpg',
        width: 1200,
        height: 630,
        alt: 'FemStudio photography and web design studio in Houston TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FemStudio | Houston Photography & Web Design Studio',
    description:
      'Houston, TX photography and web design studio for professional headshots, brand photography, and custom websites.',
    creator: '@femstudio__',
    images: ['/images/og/og-femstudio.jpg'],
  },
  icons: {
    icon: [{ url: '/icon.png', sizes: '512x512', type: 'image/png' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a1f19',
  colorScheme: 'dark',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': `${siteUrl}/#localbusiness`,
  name: 'FemStudio',
  url: siteUrl,
  logo: `${siteUrl}/images/brand/femstudio-logo-horizontal.png`,
  image: [
    `${siteUrl}/images/editorial/porsche-editorial-brand-photography-houston-model-car-hero.jpg`,
    `${siteUrl}/images/headshots/professional-headshot-houston-01.jpg`,
    `${siteUrl}/images/celebrations/prom-photography-houston-01.jpg`,
  ],
  description:
    'FemStudio is a Houston photography and web design studio founded by John Adeniran, offering professional headshots, editorial brand photography, celebration photography, and custom websites.',
  telephone: '+12818183726',
  email: 'info@femsstudio.com',
  foundingDate: '2022',
  founder: {
    '@type': 'Person',
    name: 'John Adeniran',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Houston',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'City',
    name: 'Houston',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer inquiries',
      email: 'info@femsstudio.com',
      telephone: '+12818183726',
      areaServed: 'US',
      availableLanguage: ['English'],
    },
  ],
  sameAs: ['https://www.instagram.com/femstudio__'],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: 'FemStudio',
  url: siteUrl,
  publisher: {
    '@id': `${siteUrl}/#localbusiness`,
  },
  inLanguage: 'en-US',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${syncopate.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, '\\u003c'),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, '\\u003c'),
          }}
        />
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
