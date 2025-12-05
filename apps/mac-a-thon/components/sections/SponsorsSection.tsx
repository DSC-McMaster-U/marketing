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

  // Base design canvas: 1440x1148
  const CANVAS_W = 1440
  const CANVAS_H = 1148

  const pxPositions = [
    { top: 140, left: 385, w: 160, h: 50, rotate: -10 }, // sign 1 plank 1
    { top: 240, left: 355, w: 210, h: 90, rotate: -5 }, // sign 1 plank 2
    { top: 370, left: 380, w: 180, h: 70, rotate: 4 }, // sign 1 plank 3
    { top: 265, left: 850, w: 190, h: 70, rotate: -5 }, // sign 2 plank 1
    { top: 540, left: 870, w: 180, h: 70, rotate: -5 }, // sign 2 plank 2
    { top: 400, left: 870, w: 190, h: 70, rotate: -5 }, // sign 2 plank 3
    { top: 520, left: 375, w: 160, h: 50, rotate: 0 }, // sign 1 plank 4
    { top: 625, left: 345, w: 210, h: 90, rotate: -5 }, // sign 1 plank 5
    { top: 765, left: 360, w: 180, h: 70, rotate: 4 }, // sign 1 plank 6
    { top: 880, left: 350, w: 190, h: 70, rotate: -5 }, // sign 1 plank 7
    { top: 670, left: 880, w: 180, h: 70, rotate: -5 }, // sign 2 plank 4
  ]

  const positions = pxPositions.slice(0, sponsors.length).map((p) => ({
    top: `${(p.top / CANVAS_H) * 100}%`,
    left: `${(p.left / CANVAS_W) * 100}%`,
    width: `${(p.w / CANVAS_W) * 100}%`,
    height: `${(p.h / CANVAS_H) * 100}%`,
    rotate: p.rotate,
  }))

  const MOBILE_W = 414
  const MOBILE_H = 600

  const mobilePxPositions = [
    { top: 55, left: 100, w: 180, h: 30, rotate: -5 }, // plank 1
    { top: 120, left: 100, w: 190, h: 70, rotate: -3 }, // plank 2
    { top: 183, left: 105, w: 150, h: 50, rotate: 5 }, // plank 3
    { top: 245, left: 110, w: 130, h: 50, rotate: 3 }, // plank 4
    { top: 337, left: 125, w: 110, h: 30, rotate: -5 }, // plank 5
    { top: 420, left: 85, w: 180, h: 50, rotate: 3 }, // plank 6
    { top: 480, left: 80, w: 190, h: 70, rotate: -3 }, // plank 7
  ]

  const mobilePositions = mobilePxPositions.map((p) => ({
    top: `${(p.top / MOBILE_H) * 100}%`,
    left: `${(p.left / MOBILE_W) * 100}%`,
    width: `${(p.w / MOBILE_W) * 100}%`,
    height: `${(p.h / MOBILE_H) * 100}%`,
    rotate: p.rotate,
  }))
  return (
    <section
      id='sponsors'
      className='relative flex min-h-screen w-full max-w-none items-center justify-center overflow-x-hidden py-0 md:py-0'
      style={{
        minHeight: '1148px',
        backgroundColor: '#F3D4AA', // match your image background
      }}
    >
      <div className='relative hidden h-[1148px] w-[1440px] md:block'>
        <Image
          src='/assets/sponsor-background.png'
          alt='Beach background'
          fill
          priority
          className='pointer-events-none select-none overflow-x-auto object-cover object-center'
        />
        {sponsors.map((sponsor, index) => {
          const pos = positions[index]
          if (!pos) return null
          return (
            <Link
              key={sponsor._id}
              href={sponsor.website ?? '#'}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Visit ${sponsor.name}`}
              className='absolute'
              style={{
                top: pos.top,
                left: pos.left,
                width: pos.width,
                height: pos.height,
                transform: `rotate(${pos.rotate}deg)`,
              }}
            >
              <Image
                src={urlFor(sponsor.logo.asset).url()}
                alt={sponsor.name}
                fill
                className='object-contain'
                sizes='(max-width: 1024px) 90vw, 60vw'
              />
            </Link>
          )
        })}
      </div>
      {/* Mobile layout */}
      <div className='flex w-full flex-col items-center gap-6 md:hidden'>
        {/*Sign as base image*/}
        <div className='-mt-62 relative mx-auto aspect-[70/194] w-full max-w-[1500px]'>
          <Image
            src='/assets/sponsor-sign.png' // your mobile sign image
            alt='Sponsor sign'
            fill
            priority
            className='pointer-events-none select-none'
          />

          {sponsors.map((sponsor, index) => {
            const pos = mobilePositions[index] // define separately for mobile
            if (!pos) return null
            return (
              <Link
                key={sponsor._id}
                href={sponsor.website ?? '#'}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`Visit ${sponsor.name}`}
                className='absolute'
                style={{
                  top: pos.top,
                  left: pos.left,
                  width: pos.width,
                  height: pos.height,
                  transform: `rotate(${pos.rotate}deg)`,
                }}
              >
                <Image
                  src={urlFor(sponsor.logo.asset).url()}
                  alt={sponsor.name}
                  width={300}
                  height={100}
                  className='mx-auto object-contain'
                />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SponsorsSection
