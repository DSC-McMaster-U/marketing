import Link from 'next/link'
import React from 'react'
import { ChevronArrowButton } from './ChevronArrow'

interface BannerProps {
  heading: string
  link: string
  buttonText: string
}

const Banner: React.FC<BannerProps> = ({ heading, link, buttonText }) => {
  return (
    <div className='rounded-lg bg-green-500 px-8 py-6 text-white shadow-lg dark:bg-blue-500'>
      <div className='flex flex-col items-center justify-between gap-4 md:flex-row md:justify-center md:gap-24'>
        <h1 className='text-center text-2xl font-bold md:text-left md:text-4xl'>
          {heading}
        </h1>
        <Link href={link} target='_blank'>
          <ChevronArrowButton className='text-white-00 dark:border-black-00 border-white-00 items-center border-2 bg-blue-500 transition-all duration-300 hover:scale-[101%] hover:bg-blue-600 md:min-w-44 dark:bg-red-500 dark:hover:bg-red-600'>
            <span className='p-1 px-2 text-lg font-semibold'>{buttonText}</span>
          </ChevronArrowButton>
        </Link>
      </div>
    </div>
  )
}

export default Banner
