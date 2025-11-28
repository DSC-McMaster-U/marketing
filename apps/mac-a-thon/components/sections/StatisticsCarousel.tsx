"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

interface SlideCarouselProps {
  images: string[]
  duration?: number // ms per slide
}

export default function StatisticsCarousel({
  images,
  duration = 3000,
}: SlideCarouselProps) {
  if (!images || images.length === 0) return null

  // Duplicate slides for infinite scroll
  const slides = [...images, ...images]

  const [current, setCurrent] = useState(0)
  const [noTransition, setNoTransition] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1)
    }, duration)

    return () => clearInterval(interval)
  }, [duration])

  useEffect(() => {
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
      }, 700) // match transition duration
    }
  }, [current, images.length])

  return (
    <div className="relative w-full h-72 overflow-hidden rounded-lg">
      <div
        className={`absolute top-0 left-0 w-full h-full ${
          noTransition ? "" : "transition-transform duration-700 ease-in-out"
        }`}
        style={{
          transform: `translateY(-${current * 100}%)`,
        }}
      >
        {/* Render duplicated slides */}
        {slides.map((src, i) => (
          <div key={i} className="w-full h-72">
            <Image
              src={src}
              alt={`slide-${i}`}
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
