import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'], // Add any paths you don’t want indexed
      },
    ],
    sitemap: 'https://gdgmcmasteru.ca/sitemap.xml',
  }
}
