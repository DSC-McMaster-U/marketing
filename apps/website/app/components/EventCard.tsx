import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '../lib/dateUtils'
import { ChevronArrowButton } from './ChevronArrow'

interface EventCardProps {
  date: string
  event_type: string
  event_name: string
  event_url: string
  short_description: string
  image: string
}

function generateSlug(url: string) {
  const basepath = 'https://gdg.community.dev/events/details/'
  const slug = url.replace(basepath, '')
  return slug
}

const EventCard = ({
  date,
  event_type,
  event_name,
  event_url,
  short_description,
  image,
}: EventCardProps) => {
  const slug = generateSlug(event_url)
  return (
    <div className='bg-white-02 dark:bg-black-02 mt-[0.5rem] flex w-full flex-col rounded-lg p-9 md:flex-row'>
      <div className='mx-auto flex flex-shrink-0 items-center p-8 md:ml-4'>
        <Image
          src={image}
          width={190}
          height={190}
          alt='Past Event Image'
          className='m-auto h-auto w-auto rounded-full'
        />
      </div>
      <div className='w-full flex-grow py-4 md:ml-4'>
        <div className='flex flex-row'>
          <h4 className='mr-8 text-[20px]'>{formatDate(date)}</h4>
          <h4 className='text-[18px] font-light'>{event_type}</h4>
        </div>
        <h2 className='mt-5'>{event_name}</h2>
        <p className='mb-8 mt-4 max-w-full break-words text-[18px]'>
          {short_description}
        </p>
        <Link rel='noreferrer' href={`/events/${slug}`}>
          <ChevronArrowButton className='dark:bg-white-00 bg-black-00 dark:text-black-00 text-white-00 dark:border-black-00 border-white-00 border-2'>
            <span className='font-semibold'>View Details</span>
          </ChevronArrowButton>
        </Link>
      </div>
    </div>
  )
}

export default EventCard
