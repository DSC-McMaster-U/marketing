import getEvents from '@/app/lib/getEvents'
import { client } from '@/sanity/lib/client'
import { Newsletter } from '@/types/sanity'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://gdgmcmasteru.ca'

  const newsletters = await getNewsletters()
  const eventsData = await getEvents()
  const events = [...eventsData.past_events, ...eventsData.upcoming_events].map(
    (event) => event.slug,
  )

  const staticRoutes = ['', '/team', '/newsletter', '/events']

  const dynamicRoutes = [
    ...newsletters.map((slug) => `/newsletter/${slug}`),
    ...events.map((slug) => `/events/${slug}`),
  ]

  const routes = [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
  }))

  return routes
}

async function getNewsletters(): Promise<string[]> {
  const newsletters = await client.fetch(`*[_type == 'newsletter']{ slug }`)
  return newsletters.map((newsletter: Newsletter) => newsletter.slug.current)
}
