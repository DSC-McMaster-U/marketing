import HeroBackground from '@/components/assets/hero-background'
import MacAThonLogo from '@/components/assets/mac-a-thon-logo'
import { Button } from '@/components/ui/button'
import { client } from '@/sanity/lib/client'
import type { GeneralInfo } from '@/types/sanity'
import { formatTimeline } from '@/utils/date'
import Link from 'next/link'

const HeroSection = async () => {
  const generalInfo: GeneralInfo = await client.fetch(`
    *[_type == "generalInfo"][0]
  `)

  if (!generalInfo) return null

  return (
    <section
      id='hero'
      className='relative min-h-screen w-full max-w-none py-24 md:py-32'
    >
      <HeroBackground className='pointer-events-none absolute -bottom-36 left-1/2 w-full -translate-x-1/2' />

      <div className='relative mx-auto flex max-w-7xl flex-col items-center gap-y-8 px-6 text-center'>
        <MacAThonLogo className='h-fit w-full' />

        {generalInfo.application.status === 'open' &&
        generalInfo.startDate &&
        generalInfo.endDate ? (
          <>
            <Button variant='hero' size='hero' asChild>
              <Link
                href={generalInfo.application.link ?? '#'}
                target='_blank'
                rel='noreferrer'
                className='inline-block'
              >
                Apply Now
              </Link>
            </Button>

            <span>
              {formatTimeline({
                startDate: new Date(generalInfo.startDate),
                endDate: new Date(generalInfo.endDate),
              })}
            </span>
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
