import { ChevronArrowSpan } from '@/app/components/ChevronArrow'
import Link from 'next/link'
import { ReactNode } from 'react'

interface LinkTitleCardProps {
  title: string
  link: string
  children: ReactNode
}

const LinkTitleCard = ({ title, link, children }: LinkTitleCardProps) => {
  return (
    <Link
      href={link}
      key={link}
      className='button-arrow dark:bg-google-grey dark:border-google-black border-b-google-lightGrey group relative flex w-full flex-col overflow-hidden rounded-md border bg-white p-1 shadow-lg transition-all duration-200 hover:shadow-2xl dark:bg-opacity-10'
    >
      <div className='bg-google-lightGrey dark:bg-google-black p-4'>
        <h5>{title}</h5>
      </div>
      <div className='flex h-full flex-col justify-between gap-y-4 p-4'>
        {children}
        <ChevronArrowSpan>Read now</ChevronArrowSpan>
      </div>
    </Link>
  )
}

export default LinkTitleCard
