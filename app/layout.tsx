import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://femsstudio.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'FemStudio | Photography & Web Design - Houston, TX',
    template: '%s | FemStudio',
  },
  description:
    'Houston-based photography and web design studio for professional headshots, editorial brand photography, celebration photography, and custom business websites.',
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
    title: 'FemStudio | Photography & Web Design - Houston, TX',
    description:
      'Houston photography and web design studio for headshots, editorial brand photography, celebrations, and custom business websites.',
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
    title: 'FemStudio | Photography & Web Design - Houston, TX',
    description:
      'Houston photography and web design studio for professional headshots, brand photography, and custom websites.',
    creator: '@femstudio__',
    images: ['/images/og/og-femstudio.jpg'],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
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
    <html lang="en">
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
