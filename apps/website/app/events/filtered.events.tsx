'use client'

import { useState } from 'react'
import EventCard from '@/app/components/EventCard'
import EventsSectionCard from '@/app/components/EventsSectionCard'

interface Event {
  start_date: string
  event_type_title: string
  title: string
  description_short: string
  cropped_picture_url: string
  url: string
  slug: string
}

interface FilteredEventsProps {
  pastEvents: Event[]
  upcomingEvents: Event[]
}

export default function FilteredEvents({
  pastEvents,
  upcomingEvents,
}: FilteredEventsProps) {
  const [selectedType, setSelectedType] = useState('All')
  const [selectedYear, setSelectedYear] = useState('All')

  const allEvents = [...upcomingEvents, ...pastEvents]

  const eventTypes = [
    ...new Set(allEvents.map((event) => event.event_type_title)),
  ]
    .filter(Boolean)
    .sort()

  const years = [
    ...new Set(
      allEvents
        .map((event) => event.start_date?.slice(0, 4))
        .filter((year) => year && /^\d{4}$/.test(year)),
    ),
  ].sort((a, b) => b.localeCompare(a))

  const filterEvents = (events: Event[]) => {
    return events.filter((event) => {
      const matchesType =
        selectedType === 'All' ||
        event.event_type_title === selectedType

      const matchesYear =
        selectedYear === 'All' ||
        event.start_date?.slice(0, 4) === selectedYear

      return matchesType && matchesYear
    })
  }

  const filteredUpcoming = filterEvents(upcomingEvents)
  const filteredPast = filterEvents(pastEvents)

  const renderEvents = (events: Event[], emptyMessage: string) => (
    <ul className='w-full space-y-4'>
      {events.length > 0 ? (
        events.map((event) => (
          <li key={event.slug || event.url} className='w-full'>
            <EventCard
              date={event.start_date}
              event_type={event.event_type_title}
              event_name={event.title}
              event_url={event.url}
              short_description={event.description_short}
              image={event.cropped_picture_url}
            />
          </li>
        ))
      ) : (
        <li className='text-center'>
          <p>{emptyMessage}</p>
        </li>
      )}
    </ul>
  )

  return (
    <>
      <div className='mx-auto flex w-full max-w-7xl flex-wrap gap-4 px-4 py-6 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='event-type' className='font-medium'>
            Event Type
          </label>
          <select
            id='event-type'
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className='rounded-lg border border-gray-300 bg-white px-4 py-2 text-black'
          >
            <option value='All'>All Types</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor='event-year' className='font-medium'>
            Year
          </label>
          <select
            id='event-year'
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className='rounded-lg border border-gray-300 bg-white px-4 py-2 text-black'
          >
            <option value='All'>All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <EventsSectionCard
        title='Upcoming Events'
        description=''
        id='upcoming-events'
      >
        {renderEvents(filteredUpcoming, 'No matching upcoming events.')}
      </EventsSectionCard>

      <EventsSectionCard
        title='Past Events'
        description=''
        id='past-events'
      >
        {renderEvents(filteredPast, 'No matching past events.')}
      </EventsSectionCard>
    </>
  )
}
