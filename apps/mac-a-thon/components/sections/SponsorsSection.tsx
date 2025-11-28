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

  // Base design canvas: 1440x941 (from your SVG)
  const CANVAS_W = 1440
  const CANVAS_H = 1148

  // Convert your pixel positions to percentage of canvas
  // Example positions tuned to signs in the SVG (adjust to your design)
  const pxPositions = [
    { top: 140, left: 385, w: 160, h: 50, rotate: -10 }, // sign 1 plank 1
    { top: 240, left: 355, w: 210, h: 90, rotate: -5 }, // sign 1 plank 2
    { top: 370, left: 380, w: 180, h: 70, rotate: 4 }, // sign 1 plank 3
    { top: 265, left: 850, w: 190, h: 70, rotate: -5 }, // sign 2 plank 1
    { top: 540, left: 870, w: 180, h: 70, rotate: -5 }, // sign 2 plank 2
    { top: 400, left: 870, w: 190, h: 70, rotate: -5 }, // sign 2 plank 3
  ]

  const positions = pxPositions.slice(0, sponsors.length).map((p) => ({
    top: `${(p.top / CANVAS_H) * 100}%`,
    left: `${(p.left / CANVAS_W) * 100}%`,
    width: `${(p.w / CANVAS_W) * 100}%`,
    height: `${(p.h / CANVAS_H) * 100}%`,
    rotate: p.rotate,
  }))

  return (
    <section
      id='sponsors'
      className='relative flex min-h-screen w-full max-w-none items-center justify-center overflow-x-auto py-24 md:py-32'
      style={{
        minHeight: '1148px',
        backgroundColor: '#F3D4AA', // match your image background
      }}
    >
      <div className='relative h-[1148px] w-[1440px]'>
        <Image
          src='/assets/Sponsor_Background.png'
          alt='Beach background'
          fill
          priority
          className='pointer-events-none select-none overflow-x-auto object-contain object-cover object-center'
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
    </section>
  )
}

export default SponsorsSection
