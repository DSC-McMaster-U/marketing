import Header from '@/app/components/Header'
import { Metadata } from 'next'
import AnimatedHero from '../components/AnimatedHero'
import Pill from '../components/Pill'
import getEvents from '../lib/getEvents'
import FilteredEvents from './filtered.events'

export const metadata: Metadata = {
  title: 'Events | Google Developer Group on Campus | McMaster University',
  description:
    'Our events Google Developer Group on Campus | McMaster University',
}

const HeroSection = () => {
  return (
    <AnimatedHero
      id='hero'
      className='mx-auto mt-8 flex max-w-7xl flex-col items-center gap-y-8 px-4 py-8 sm:px-6 sm:py-12 md:flex-row md:gap-y-0 lg:px-8 lg:py-16 xl:py-28'
    >
      <div className='flex w-full flex-col items-center'>
        <div className='flex max-w-2xl flex-col items-center justify-center gap-y-4 text-center'>
          <Pill>Our Events</Pill>
          <h2>
            Explore a variety of exciting upcoming events and past highlights
          </h2>
        </div>
      </div>
    </AnimatedHero>
  )
}

export default async function eventsPage() {
  const { past_events, upcoming_events } = await getEvents()

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FilteredEvents
          pastEvents={past_events}
          upcomingEvents={upcoming_events}
        />
      </main>
    </>
  )
}
