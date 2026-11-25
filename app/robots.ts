import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/staging/', '/internal/', '/private/'],
    },
    sitemap: 'https://www.femsstudio.com/sitemap.xml',
    host: 'https://www.femsstudio.com',
  }
}
