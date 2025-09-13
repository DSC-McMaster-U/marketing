'use client'

import { useState } from 'react'
import { TfiAgenda } from 'react-icons/tfi'
import SectionCard from './SectionCard'

interface AgendaData {
  title: string
  agenda: Array<AgendaItem>
}

interface AgendaItem {
  time: string
  activity: string
  description: string
  audience_type: string
}

interface EventAgendaProps {
  agenda: {
    days: AgendaData[]
    empty: boolean
  }
}

export default function EventAgenda({ agenda }: EventAgendaProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  if (agenda.empty) {
    return null
  }

  return (
    <SectionCard
      title='Event Agenda'
      description=''
      id={'event-details-agenda-section'}
    >
      <div className='mb-8 flex flex-row items-center gap-4'>
        <div className='shrink-0 rounded-full bg-blue-400 p-3 text-white'>
          <TfiAgenda size={32} />
        </div>
        <div className='flex-1'>
          <ul className='flex flex-row gap-6 overflow-x-auto pb-2'>
            {agenda.days.map((agendaDay: AgendaData, index: number) => (
              <li
                key={index}
                className={`cursor-pointer whitespace-nowrap text-lg font-semibold hover:text-blue-400 ${
                  selectedIndex === index ? 'text-blue-400' : ''
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                {agendaDay.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='space-y-6'>
        {agenda.days.map((agendaDay: AgendaData, index: number) => (
          <div
            key={index}
            className={`space-y-4 ${selectedIndex === index ? 'block' : 'hidden'}`}
          >
            <ul className='space-y-6'>
              {agendaDay.agenda.map((item: AgendaItem, innerIndex: number) => (
                <li
                  key={innerIndex}
                  className='flex flex-col gap-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-800'
                >
                  <div className='flex items-center gap-3'>
                    <span className='text-lg font-bold'>{item.activity}</span>
                    <span className='font-medium text-gray-600 dark:text-gray-400'>
                      {item.time}
                    </span>
                  </div>
                  <p className='text-base leading-relaxed text-gray-700 dark:text-gray-300'>
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionCard>
  )
}
