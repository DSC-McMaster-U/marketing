import SponsorBackground from '@/components/assets/sponsor-background'
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

  // Base design canvas: 1440x941 (from your SVG)
  const CANVAS_W = 1440
  const CANVAS_H = 1148

  // Convert your pixel positions to percentage of canvas
  // Example positions tuned to signs in the SVG (adjust to your design)
  const pxPositions = [
    { top: 90, left: 395, w: 180, h: 50, rotate: -10}, // sign 1 plank 1
    { top: 170, left: 390, w: 180, h: 70,rotate: -5 }, // sign 1 plank 2
    { top: 274, left: 390, w: 180, h: 70,rotate: 4 }, // sign 1 plank 3
    { top: 150, left: 800, w: 190, h: 70,rotate: -5 }, // sign 2 plank 1
    { top: 270, left: 810, w: 180, h: 70,rotate: -5 }, // sign 2 plank 2
    { top: 390, left: 810, w: 190, h: 70,rotate: -5 }, // sign 2 plank 3
  ]

  const positions = pxPositions.slice(0, sponsors.length).map(p => ({
    top: `${(p.top / CANVAS_H) * 100}%`,
    left: `${(p.left / CANVAS_W) * 100}%`,
    width: `${(p.w / CANVAS_W) * 100}%`,
    height: `${(p.h / CANVAS_H) * 100}%`,
    rotate: p.rotate,
  }))

  return (
    <section
  id="sponsors"
  className="relative min-h-screen w-full max-w-none overflow-x-clip py-24 md:py-32"
>
  <div className='absolute inset-0 left-1/2 -translate-x-1/2 w-[1440px]'>
  

    {/* Centered content container */}
    <div className="relative w-[1440px] h-[1148px] mx-auto overflow-visible">
  <SponsorBackground className="absolute inset-0" />

  {sponsors.map((sponsor, index) => {
    const pos = positions[index]
    if (!pos) return null
    return (
      <Link
        key={sponsor._id}
        href={sponsor.website ?? '#'}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${sponsor.name}`}
        className="absolute"
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
          className="object-contain"
          sizes="(max-width: 1024px) 90vw, 60vw"
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

