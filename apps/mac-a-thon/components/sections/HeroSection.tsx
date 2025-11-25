import MacAThonLogo from '@/components/assets/mac-a-thon-logo'
import { Button } from '@/components/ui/button'
import { client } from '@/sanity/lib/client'
import type { GeneralInfo } from '@/types/sanity'
import { formatTimeline } from '@/utils/date'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = async () => {
  const generalInfo: GeneralInfo = await client.fetch(`
    *[_type == "generalInfo"][0]
  `)

  if (!generalInfo) return null

  return (
    <section
      id='hero'
      className='relative w-full max-w-none overflow-hidden overflow-x-clip bg-gradient-to-b from-white via-white to-[#f9f0b1] py-32 md:min-h-screen'
    >
      {/* FULL BACKGROUND IMAGE */}
      <Image
        src='/assets/hero-background.png'
        alt='Beach background'
        fill
        priority
        className='pointer-events-none min-w-full select-none object-cover object-bottom'
      />
      {/* <HeroBackground className='pointer-events-none absolute -bottom-36 left-1/2 w-full min-w-max -translate-x-1/2' /> */}

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
