'use client'
import { urlFor } from '@/sanity/lib/image'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface StickyScrollProps {
  data: {
    title: string
    description: string
    value: string
    image: { asset: { _ref: string } }
  }[]
}

const StickyScroll = ({ data }: StickyScrollProps) => {
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    const observerOptions = { rootMargin: '0px', threshold: [0.25, 0.5, 0.75] }
    const observers: IntersectionObserver[] = []

    const featureVisibility: Record<number, number> = {}

    const updateActiveFeature = () => {
      const maxVisibileFeature = Object.entries(featureVisibility).reduce(
        (maxFeature, [featureIndex, visibility]) =>
          visibility > maxFeature[1]
            ? [parseInt(featureIndex), visibility]
            : maxFeature,
        [-1, 0],
      )
      if (maxVisibileFeature[0] !== -1) {
        setActiveFeature(maxVisibileFeature[0])
      }
    }

    data.forEach((_, index) => {
      const element = document.getElementById(`key-feature-${index}`)
      if (element) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            featureVisibility[index] = entry.intersectionRatio
          })
          updateActiveFeature()
        }, observerOptions)
        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [data])

  return (
    <section className='relative'>
      <div className='grid grid-cols-1 gap-x-8 md:grid-cols-2'>
        {/* Left: Key Features */}
        <div className='flex flex-col gap-y-16'>
          {data.map((feature, index) => (
            <div
              key={index}
              id={`key-feature-${index}`}
              className='flex h-fit flex-col justify-center gap-y-8 md:min-h-60 md:gap-y-4'
            >
              {/* Mobile: Mockups */}
              <div
                id='key-feature-image'
                className='bg-google-grey flex max-h-fit w-full items-center justify-center overflow-hidden rounded-3xl bg-opacity-10 md:hidden'
              >
                {feature.image && (
                  <Image
                    src={urlFor(feature.image.asset._ref).url()}
                    alt={feature.title}
                    className='max-h-full max-w-full'
                    width={500}
                    height={500}
                  />
                )}
              </div>
              {/* Text */}
              <div
                id='key-feature-text'
                className='flex flex-col justify-center gap-y-4 md:h-fit md:py-32'
              >
                <div className='flex flex-row items-center gap-x-2'>
                  <h3 className='flex flex-row items-center gap-x-2 text-2xl font-semibold md:text-4xl'>
                    <div>{feature.value}</div>
                    <div>{feature.title}</div>
                  </h3>
                </div>
                <p className='text-base md:text-lg'>{feature.description}</p>
              </div>
            </div>
          ))}
          <div className='my-12 hidden md:flex' />
        </div>

        {/* Right: Mockups */}
        <div className='bg-google-grey sticky top-0 hidden h-screen w-full items-center justify-center overflow-hidden rounded-3xl bg-opacity-10 md:flex'>
          {data.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeFeature === index ? 1 : 0 }}
              transition={{ duration: 1 }}
              exit={{
                opacity: 0.5,
                transition: { duration: 1 },
              }}
              className={`absolute flex h-full w-full items-center justify-center overflow-hidden ${
                activeFeature === index ? 'block' : 'hidden'
              }`}
            >
              {feature.image && (
                <Image
                  src={urlFor(feature.image.asset._ref).url()}
                  alt={feature.title}
                  className='max-h-full max-w-full rounded-3xl'
                  width={500}
                  height={500}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StickyScroll
