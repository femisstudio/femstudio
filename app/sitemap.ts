import { MetadataRoute } from 'next'

// Must match the canonical host used in page metadata (apex, no www).
// Only list real, indexable pages: /services and /portfolio do not exist.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://femsstudio.com'
  const lastModified = new Date()

  return [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/photography`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/web-design`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
