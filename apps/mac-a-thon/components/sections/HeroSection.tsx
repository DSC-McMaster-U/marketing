import { Button } from '@/components/ui/button'
import { client } from '@/sanity/lib/client'
import type { GeneralInfo } from '@/types/sanity'
import { formatTimeline } from '@/utils/date'
import Link from 'next/link'
import MacAThonLogo from '../assets/mac-a-thon-logo'

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
      <MacAThonLogo />
      {generalInfo.application.status === 'open' &&
      generalInfo.startDate &&
      generalInfo.endDate ? (
        <div className='flex flex-col items-center gap-3'>
          <Button>
            <Link
              href={generalInfo.application.link ?? '#'}
              target='_blank'
              rel='noreferrer'
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
        </div>
      ) : (
        <div className='space-y-2'>
          <p>
            Applications for Mac-a-thon are now{' '}
            <span>{generalInfo.application.status}</span>.
          </p>
          <p>Stay tuned for updates on our next event!</p>
        </div>
      )}
    </section>
  )
}

export default HeroSection
