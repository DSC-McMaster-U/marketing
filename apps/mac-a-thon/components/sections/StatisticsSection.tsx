import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import type { Statistic } from '@/types/sanity'
import Image from 'next/image'

const StatisticsSection = async () => {
  const statistics: Statistic[] = await client.fetch(`*[_type == "statistic"]`)

  if (!statistics?.length) return null

  return (
    <section id='statistics' className='py-16'>
      <div className='container mx-auto max-w-6xl space-y-8 text-center'>
        <h2>Statistics</h2>
        <Separator className='mx-auto w-16' />

        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {statistics.map((stat) => (
            <Card
              key={stat._id}
              className='border-border/40 shadow-sm transition-transform hover:scale-[1.02] hover:shadow-md'
            >
              {stat.image?.asset && (
                <div className='relative h-40 w-full overflow-hidden rounded-t-lg'>
                  <Image
                    src={urlFor(stat.image.asset).url()}
                    alt={stat.title}
                    fill
                    className='object-cover'
                  />
                </div>
              )}

              <CardHeader>
                <CardTitle>
                  <h4>{stat.title}</h4>
                </CardTitle>
              </CardHeader>

              <CardContent className='space-y-2'>
                <h3>{stat.value}</h3>
                {stat.description && <p>{stat.description}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection
