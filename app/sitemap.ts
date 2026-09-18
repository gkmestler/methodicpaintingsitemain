import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const routes: { path: string; priority: number }[] = [
    { path: '/', priority: 1 },
    { path: '/how-we-partner', priority: 0.9 },
    { path: '/team', priority: 0.8 },
    { path: '/contact', priority: 0.9 },
    { path: '/privacy', priority: 0.2 },
  ]

  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority,
  }))
}
