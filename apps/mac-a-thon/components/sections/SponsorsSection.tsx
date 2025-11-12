import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import type { Sponsor } from '@/types/sanity'
import Image from 'next/image'
import Link from 'next/link'

const SponsorsSection = async () => {
  const sponsors: Sponsor[] = await client.fetch(`
    *[_type == "sponsor"]{
      _id,
      name,
      logo,
      website,
      tier
    }
  `)

  if (!sponsors.length) return null

  // Group sponsors by tier
  const groupedSponsors = sponsors.reduce(
    (acc, sponsor) => {
      if (!acc[sponsor.tier]) acc[sponsor.tier] = []
      acc[sponsor.tier].push(sponsor)
      return acc
    },
    {} as Record<string, Sponsor[]>,
  )

  // Grid columns per tier
  const getGridCols = (tier: string) => {
    switch (tier) {
      case 'gold':
        return 'grid-cols-1 sm:grid-cols-2'
      case 'silver':
        return 'grid-cols-2 md:grid-cols-3'
      case 'bronze':
        return 'grid-cols-3 md:grid-cols-4'
      default:
        return 'grid-cols-1'
    }
  }

  // Card height per tier
  const getCardHeight = (tier: string) => {
    switch (tier) {
      case 'gold':
        return 'h-44 md:h-56'
      case 'silver':
        return 'h-36 md:h-44'
      case 'bronze':
        return 'h-28 md:h-36'
      default:
        return 'h-40'
    }
  }

  const tierOrder = ['gold', 'silver', 'bronze']

  return (
    <section id='sponsors' className='py-16'>
      <div className='container mx-auto max-w-6xl space-y-8 text-center'>
        <h2>Sponsors</h2>
        <Separator className='mx-auto w-16' />

        {tierOrder.map((tier) => {
          const sponsorsForTier = groupedSponsors[tier]
          if (!sponsorsForTier?.length) return null

          return (
            <div key={tier} className='space-y-6'>
              <div
                className={`grid ${getGridCols(tier)} place-items-center gap-8`}
              >
                {sponsorsForTier.map((sponsor) => (
                  <Link
                    key={sponsor._id}
                    href={sponsor.website ?? '#'}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-full'
                    aria-label={`Visit ${sponsor.name}`}
                  >
                    <Card>
                      <CardContent
                        className={`relative w-full ${getCardHeight(
                          tier,
                        )} flex items-center justify-center`}
                      >
                        <Image
                          src={urlFor(sponsor.logo.asset).url()}
                          alt={sponsor.name}
                          fill
                          className='object-contain p-6'
                        />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SponsorsSection
