// Photographer + LocalBusiness schema for /photography (Phase 2 task).
// Lives in a route layout so it doesn't touch the page's copy.
const siteUrl = 'https://www.femsstudio.com'

const photographerSchema = {
  '@context': 'https://schema.org',
  '@type': ['Photographer', 'LocalBusiness'],
  '@id': `${siteUrl}/photography#photographer`,
  name: 'FemStudio Photography',
  url: `${siteUrl}/photography`,
  image: [
    `${siteUrl}/images/headshots/professional-headshot-houston-01.jpg`,
    `${siteUrl}/images/wedding-guest/wedding-guest-photography-houston-06.jpg`,
  ],
  description:
    'Houston photographer for professional headshots, LinkedIn and corporate portraits, brand photography, and celebration portraits.',
  telephone: '+12818183726',
  email: 'info@femsstudio.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Houston',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Houston' },
    { '@type': 'City', name: 'Katy' },
    { '@type': 'City', name: 'Sugar Land' },
    { '@type': 'City', name: 'The Woodlands' },
    { '@type': 'City', name: 'Pearland' },
    { '@type': 'City', name: 'Bellaire' },
  ],
  founder: { '@type': 'Person', name: 'John Adeniran' },
  parentOrganization: { '@id': `${siteUrl}/#localbusiness` },
  sameAs: ['https://www.instagram.com/femstudio__', 'https://www.linkedin.com/company/femstudio/'],
}

export default function PhotographyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(photographerSchema).replace(/</g, '\\u003c'),
        }}
      />
      {children}
    </>
  )
}
