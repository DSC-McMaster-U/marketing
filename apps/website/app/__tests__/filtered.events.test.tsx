import FilteredEvents from '@/app/events/filtered.events'
import { fireEvent, render, screen, within } from '@testing-library/react'

// Mock the event cards so we can test filtering independently
jest.mock('@/app/components/EventCard', () => {
  return function MockEventCard({ event_name }: { event_name: string }) {
    return <div>{event_name}</div>
  }
})

// Mock the section wrapper
jest.mock('@/app/components/EventsSectionCard', () => {
  return function MockEventsSectionCard({
    title,
    children,
  }: {
    title: string
    children: React.ReactNode
  }) {
    return (
      <section aria-label={title}>
        <h2>{title}</h2>
        {children}
      </section>
    )
  }
})

const pastEvents = [
  {
    start_date: '2025-05-10T10:00:00Z',
    event_type_title: 'Hackathon',
    title: 'Mac-a-thon 2025',
    description_short: 'Hackathon event',
    cropped_picture_url: '/test.png',
    url: '/events/macathon',
    slug: 'macathon',
  },
  {
    start_date: '2024-10-15T10:00:00Z',
    event_type_title: 'Workshop',
    title: 'Python Workshop',
    description_short: 'Python event',
    cropped_picture_url: '/test.png',
    url: '/events/python',
    slug: 'python',
  },
]

const upcomingEvents = [
  {
    start_date: '2026-12-05T10:00:00Z',
    event_type_title: 'Networking',
    title: 'Networking Night',
    description_short: 'Networking event',
    cropped_picture_url: '/test.png',
    url: '/events/networking',
    slug: 'networking',
  },
  {
    start_date: '2026-12-10T10:00:00Z',
    event_type_title: 'Workshop',
    title: 'AI Workshop',
    description_short: 'AI event',
    cropped_picture_url: '/test.png',
    url: '/events/ai',
    slug: 'ai',
  },
]

describe('FilteredEvents', () => {
  beforeEach(() => {
    render(
      <FilteredEvents
        pastEvents={pastEvents}
        upcomingEvents={upcomingEvents}
      />,
    )
  })

  it('displays all events by default', () => {
    expect(screen.getByText('Mac-a-thon 2025')).toBeInTheDocument()
    expect(screen.getByText('Python Workshop')).toBeInTheDocument()
    expect(screen.getByText('Networking Night')).toBeInTheDocument()
    expect(screen.getByText('AI Workshop')).toBeInTheDocument()
  })

  it('filters events by event type', () => {
    fireEvent.change(screen.getByLabelText('Event Type'), {
      target: { value: 'Workshop' },
    })

    expect(screen.getByText('Python Workshop')).toBeInTheDocument()
    expect(screen.getByText('AI Workshop')).toBeInTheDocument()
    expect(screen.queryByText('Networking Night')).not.toBeInTheDocument()
    expect(screen.queryByText('Mac-a-thon 2025')).not.toBeInTheDocument()
  })

  it('filters events by year', () => {
    fireEvent.change(screen.getByLabelText('Year'), {
      target: { value: '2026' },
    })

    expect(screen.getByText('Networking Night')).toBeInTheDocument()
    expect(screen.getByText('AI Workshop')).toBeInTheDocument()
    expect(screen.queryByText('Python Workshop')).not.toBeInTheDocument()
    expect(screen.queryByText('Mac-a-thon 2025')).not.toBeInTheDocument()
  })

  it('applies event type and year filters together', () => {
    fireEvent.change(screen.getByLabelText('Event Type'), {
      target: { value: 'Workshop' },
    })

    fireEvent.change(screen.getByLabelText('Year'), {
      target: { value: '2026' },
    })

    expect(screen.getByText('AI Workshop')).toBeInTheDocument()
    expect(screen.queryByText('Python Workshop')).not.toBeInTheDocument()
    expect(screen.queryByText('Networking Night')).not.toBeInTheDocument()
  })

  it('shows a message when no events match', () => {
    fireEvent.change(screen.getByLabelText('Event Type'), {
      target: { value: 'Hackathon' },
    })

    fireEvent.change(screen.getByLabelText('Year'), {
      target: { value: '2026' },
    })

    const upcomingSection = screen.getByRole('region', {
      name: 'Upcoming Events',
    })

    expect(
      within(upcomingSection).getByText('No matching upcoming events.'),
    ).toBeInTheDocument()

    expect(screen.getByText('No matching past events.')).toBeInTheDocument()
  })

  it('restores all events when filters are reset', () => {
    fireEvent.change(screen.getByLabelText('Event Type'), {
      target: { value: 'Workshop' },
    })

    fireEvent.change(screen.getByLabelText('Event Type'), {
      target: { value: 'All' },
    })

    expect(screen.getByText('Mac-a-thon 2025')).toBeInTheDocument()
    expect(screen.getByText('Networking Night')).toBeInTheDocument()
  })
})
