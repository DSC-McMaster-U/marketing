import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { client } from '@/sanity/lib/client'
import type { GeneralInfo } from '@/types/sanity'
import { formatTimeline } from '@/utils/date'
import { capitalizeFirstLetter } from '@/utils/string'
import Link from 'next/link'

const HeroSection = async () => {
  const generalInfo: GeneralInfo = await client.fetch(`
    *[_type == "generalInfo"][0]
  `)

  if (!generalInfo) return null

  return (
    <section
      id='hero'
      className='relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center md:py-32'
    >
      {generalInfo.club && <h2>{generalInfo.club}</h2>}
      {generalInfo.title && <h1>{generalInfo.title}</h1>}
      <Separator className='mx-auto my-4 w-16 opacity-60' />
      {generalInfo.startDate && generalInfo.endDate && (
        <div className='flex flex-col items-center gap-x-2 md:flex-row md:gap-x-4'>
          <span>
            {formatTimeline({
              startDate: new Date(generalInfo.startDate),
              endDate: new Date(generalInfo.endDate),
            })}
          </span>
          <span className='hidden md:inline'>•</span>
          <span>{capitalizeFirstLetter(generalInfo.locationType)}</span>
        </div>
      )}
      <div className='mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-6'>
        {generalInfo.application.status === 'open' ? (
          <>
            <Button>
              <Link
                href={generalInfo.application.link ?? '#'}
                target='_blank'
                rel='noreferrer'
              >
                Apply Now
              </Link>
            </Button>
            <Button>
              <Link href='#about'>Learn More</Link>
            </Button>
          </>
        ) : (
          <div className='space-y-2'>
            <p>
              Applications for Mac-a-thon are now{' '}
              <span>{generalInfo.application.status}</span>.
            </p>
            <p>Stay tuned for updates on our next event!</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default HeroSection
