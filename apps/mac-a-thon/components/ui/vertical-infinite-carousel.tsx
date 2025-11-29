'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface SlideCarouselProps {
  images: string[]
  duration?: number
}

// Inspiration code for carousel from: https://flowbite.com/docs/components/carousel/,
// modified for vertical scrolling and infinite loop

export default function VerticalInfiniteCarousel({
  images,
  duration = 3000,
}: SlideCarouselProps) {
  const hasImages = images && images.length > 0

  // Duplicate slides for infinite scroll -- iff images exist
  const slides = hasImages ? [...images, ...images] : []

  const [current, setCurrent] = useState(0)
  const [noTransition, setNoTransition] = useState(false)

  useEffect(() => {
    if (!hasImages) return

    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1)
    }, duration)

    return () => clearInterval(interval)
  }, [duration, hasImages])

  useEffect(() => {
    if (!hasImages) return

    // When we reach the end of duplicated slides,
    // jump back to the original position without animation.
    if (current === images.length) {
      setTimeout(() => {
        setNoTransition(true)
        setCurrent(0)

        // Re-enable transition on next frame
        requestAnimationFrame(() => {
          setNoTransition(false)
        })
      }, 700)
    }
  }, [current, images?.length, hasImages])

  if (!hasImages) {
    return <div className='relative h-72 w-full overflow-hidden rounded-lg' />
  }

  return (
    <div className='relative h-72 w-full overflow-hidden rounded-lg'>
      <div
        className={`absolute left-0 top-0 h-full w-full ${
          noTransition ? '' : 'transition-transform duration-700 ease-in-out'
        }`}
        style={{
          transform: `translateY(-${current * 100}%)`,
        }}
      >
        {/* Render duplicated slides */}
        {slides.map((src, i) => (
          <div key={i} className='h-72 w-full'>
            <Image
              src={src}
              alt={`slide-${i}`}
              width={800}
              height={400}
              className='h-full w-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  )
}
