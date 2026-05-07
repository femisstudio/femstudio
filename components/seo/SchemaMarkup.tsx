interface SchemaMarkupProps {
  schema: Record<string, unknown>
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
      }}
    />
  )
}

export const LocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'FemStudio',
  description: 'Houston brand photography and custom web design studio',
  url: 'https://femsstudio.com',
  telephone: '+12818183726',
  email: 'info@femsstudio.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Houston',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '29.7604',
    longitude: '-95.3698',
  },
  areaServed: 'Houston, TX',
  priceRange: '$$',
  openingHours: 'Mo-Fr 09:00-18:00',
  sameAs: ['https://www.instagram.com/femsstudio__'],
}

export const PhotographyServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Brand Photography Houston TX',
  provider: { '@type': 'LocalBusiness', name: 'FemStudio' },
  areaServed: 'Houston, TX',
  serviceType: 'Photography',
  description:
    'Professional brand photography, corporate headshots, and portrait sessions in Houston TX',
}

export const WebDesignServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom Web Design Houston TX',
  provider: { '@type': 'LocalBusiness', name: 'FemStudio' },
  areaServed: 'Houston, TX',
  serviceType: 'Web Design',
  description: 'Custom website design and development for businesses and professionals in Houston TX',
}

interface FAQItem {
  question: string
  answer: string
}

export function FAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

interface BreadcrumbItem {
  name: string
  href: string
}

export function BreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `https://femsstudio.com${item.href}`,
    })),
  }
}
