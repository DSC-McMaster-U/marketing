import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import type { Statistic } from '@/types/sanity'
import Image from 'next/image'
import VerticalInfiniteCarousel from '../ui/vertical-infinite-carousel'

const StatisticsSection = async () => {
  const statistics: Statistic[] = await client.fetch(`
    *[_type == "statistic"]
  `)

  if (!statistics) return null

  const images = statistics.flatMap((s) =>
    s.image?.asset ? [urlFor(s.image.asset).url()] : [],
  )

  return (
    <section
      id='statistics'
      className='relative h-fit w-full max-w-none overflow-x-hidden pb-64'
    >
      <Image
        src={'/assets/statistics-background.png'}
        alt='Statistics Background'
        fill
        priority
        className='object-cover object-center'
      />
      <div className='relative mx-auto flex w-full max-w-7xl flex-col items-center gap-x-20 gap-y-10 py-10 sm:min-h-[200px] md:min-h-[400px] lg:min-h-[600px] xl:min-h-[800px] 2xl:min-h-[1000px]'>
        <div className='flex w-full flex-col gap-y-10'>
          {statistics.map((item, idx) => (
            <Card
              key={idx}
              className='w-full rounded-lg border-none bg-[#6ecad9]/95 shadow-md'
            >
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className='text-2xl font-bold'>
                {item.value && item.value}
              </CardContent>
              <CardFooter>{item.description && item.description}</CardFooter>
            </Card>
          ))}
        </div>
        <div className='w-full rounded-lg border-none bg-[#6ecad9]/95 p-1 shadow-md'>
          <VerticalInfiniteCarousel images={images} />
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection
