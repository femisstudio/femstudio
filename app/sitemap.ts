import type { MetadataRoute } from 'next'

const routes = ['', '/about', '/photography', '/web-design', '/contact']

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://femsstudio.com${route}`,
    lastModified: new Date('2026-05-05'),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
