import { ChevronArrowButton } from '@/app/components/ChevronArrow'
import EventAgenda from '@/app/components/EventAgenda'
import Header from '@/app/components/Header'
import Map from '@/app/components/Map'
import SectionCard from '@/app/components/SectionCard'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendarAlt, FaRegCalendarCheck } from 'react-icons/fa'
import { FaLocationDot, FaRegClock } from 'react-icons/fa6'
import AnimatedHero from '../../components/AnimatedHero'
import Pill from '../../components/Pill'
import { extractTime, formatDate } from '../../lib/dateUtils'
import getEvent from '../../lib/getEvent'

interface Event {
  start_date_iso: string
  end_date_iso: string
  event_type: string
  title: string
  description_short: string
  description: string
  picture: string
  id: number
  total_attendees: number
  chapter_banner: string
  banner: string | null
  venue_name: string
  venue_address: string
  venue_city: string
  venue_zip_code: string
  is_virtual_event: boolean
  rsvp_only: boolean
  url: string
  completed: boolean
  tags: [string]
  agenda: string
}

const HeroSection = ({
  title,
  start_date,
  end_date,
  rsvpCount,
}: {
  title: string
  start_date: string
  end_date: string
  rsvpCount: number
}) => {
  const formattedStartDate = formatDate(start_date)
  const formattedEndDate = formatDate(end_date)
  let displayDate
  let displayTime

  if (formattedStartDate === formattedEndDate) {
    displayDate = formattedStartDate
    displayTime = extractTime(start_date, true).concat(
      ' - ',
      extractTime(end_date, false),
    )
  } else {
    displayDate = formattedStartDate.concat(' - ', formattedEndDate)
    displayTime = extractTime(start_date, false)
  }
  return (
    <AnimatedHero
      id='hero'
      className='mx-auto mt-8 flex max-w-full flex-col items-center gap-y-8 px-4 py-8 sm:px-6 sm:py-12 md:flex-row md:gap-y-0 lg:px-8 lg:py-16 xl:py-28'
    >
      <div className='flex w-full flex-col items-center'>
        <div className='flex max-w-2xl flex-col items-center justify-center gap-y-4 text-center'>
          <h2>{title}</h2>
          <div className='flex w-full flex-col items-center justify-center gap-y-4 sm:flex-row sm:gap-x-6'>
            <Pill>
              <span className='inline-flex items-center gap-2'>
                <FaCalendarAlt />
                {displayDate}
              </span>
            </Pill>
            <Pill>
              <span className='inline-flex items-center gap-2'>
                <FaRegClock />
                {displayTime}
              </span>
            </Pill>

            {rsvpCount > 0 && (
              <Pill>
                <span className='inline-flex items-center gap-2'>
                  <FaRegCalendarCheck />
                  {rsvpCount} RSVP&apos;d
                </span>
              </Pill>
            )}
          </div>
        </div>
      </div>
    </AnimatedHero>
  )
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { event_data }: { event_data: Event } = await getEvent(slug)
  const parsedAgenda = JSON.parse(event_data.agenda)

  return (
    <>
      <Header />
      <main>
        <HeroSection
          title={event_data.title}
          start_date={event_data.start_date_iso}
          end_date={event_data.end_date_iso}
          rsvpCount={event_data.total_attendees}
        />
        <SectionCard
          title='About This Event'
          description=''
          id={'event-details-section'}
        >
          <div>
            <Image
              width={2000}
              height={300}
              src={
                event_data.banner
                  ? event_data.banner
                  : event_data.chapter_banner
              }
              alt='Banner Image'
              className='mx-auto mb-20 h-auto w-auto rounded-lg'
            />
            {event_data.rsvp_only && !event_data.completed && (
              <ChevronArrowButton className='dark:bg-white-00 bg-black-00 dark:text-black-00 text-white-00 dark:border-black-00 border-white-00 mb-10 border-2'>
                <Link target='_blank' href={event_data.url}>
                  <span className='text-2xl font-semibold'>RSVP</span>
                </Link>
              </ChevronArrowButton>
            )}
            {event_data.tags && (
              <div className='mb-10'>
                <h2 className='mb-6 font-bold'>Key Themes</h2>
                <ul className='flex flex-col gap-4 sm:flex-row'>
                  {event_data.tags.map((theme, index) => (
                    <li key={index}>
                      <Pill>
                        <span>{theme}</span>
                      </Pill>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <h2 className='mb-10 font-bold'>About This Event</h2>

            <div
              className='event-description'
              dangerouslySetInnerHTML={{ __html: event_data.description }}
            />
          </div>
        </SectionCard>
        <EventAgenda agenda={parsedAgenda} />
        <SectionCard
          title=''
          description=''
          id={'event-details-location-section'}
        >
          {event_data.venue_name ? (
            <div className='flex max-w-full flex-col items-start justify-between gap-4 sm:flex-row'>
              <div className='my-auto flex flex-1 items-start gap-5'>
                <div className='rounded-full bg-blue-400 p-3 text-white'>
                  <FaLocationDot size={32} />
                </div>
                <div>
                  <h4 className='text-2xl font-bold sm:text-4xl'>Location</h4>
                  <h5 className='text-l font-light sm:text-2xl'>
                    {event_data.venue_name}, {event_data.venue_address},{' '}
                    {event_data.venue_city}, {event_data.venue_zip_code}
                  </h5>
                </div>
              </div>
              <div className='mx-auto min-w-[200px] flex-1'>
                <Map
                  address={`${event_data.venue_name}, ${event_data.venue_address}, ${event_data.venue_city}, ON`}
                />
              </div>
            </div>
          ) : (
            event_data.is_virtual_event && (
              <div className='flex max-w-full flex-row items-start justify-between gap-4'>
                <div className='rounded-full bg-blue-400 p-3'>
                  <FaLocationDot size={32} />
                </div>
                <div>
                  <h4 className='text-2xl font-bold sm:text-4xl'>Location</h4>
                  <h5 className='text-l font-light sm:text-2xl'>Virtual</h5>
                </div>
              </div>
            )
          )}
        </SectionCard>
      </main>
    </>
  )
}
