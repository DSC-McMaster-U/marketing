import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import CardGradientBackground from './svgs/CardGradientBackground'

interface CardProps {
  title?: string
  description?: string
  icon?: React.ReactNode
  image?: {
    src: string
    alt: string
  }
  children?: React.ReactNode
  CTA?: React.ReactNode
  className?: string
  imageWidth?: number
  imageHeight?: number
}

const Card = ({
  title,
  description,
  icon,
  image,
  children,
  CTA,
  className,
  imageHeight,
  imageWidth,
}: CardProps) => {
  return (
    <div
      className={`${className} ${CTA && 'pb-12'} card-group bg-white-02 dark:bg-black-02 relative flex h-full w-full flex-col items-center justify-start overflow-hidden rounded-lg p-4 shadow-sm`}
    >
      {image && (
        <div className='relative flex h-full w-full items-center justify-center'>
          <CardGradientBackground className='relativew-full z-0 h-fit' />
          <Image
            src={urlFor(image.src).url()}
            alt={image.alt}
            width={imageWidth ? imageWidth : 200}
            height={imageHeight ? imageHeight : 100}
            className='absolute z-10'
          />
        </div>
      )}
      {(icon || title || description) && (
        <div className='grid h-fit w-full grid-cols-[auto_1fr] grid-rows-[auto_auto] gap-x-2 gap-y-1 p-4 text-start'>
          {icon && (
            <div className='col-start-1 row-start-1 w-8 items-center'>
              {icon}
            </div>
          )}
          {title && (
            <span className='col-start-2 row-start-1 text-lg font-semibold'>
              {title}
            </span>
          )}
          {description && (
            <span className='text-black-03 dark:text-white-03 col-start-2 row-start-2'>
              {description}
            </span>
          )}
        </div>
      )}
      {children}
      {CTA && (
        <div className='card-group-hover:translate-y-0 hover-none:translate-y-0 absolute bottom-0 left-0 w-fit translate-y-full transform p-4 transition-transform duration-300 ease-in-out'>
          {CTA}
        </div>
      )}
    </div>
  )
}

export default Card
