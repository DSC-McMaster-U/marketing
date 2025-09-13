async function getEvent(slug: string) {
  const eventURL = `https://gdg.community.dev/api/event_slim/${slug}`
  try {
    // Fetch the past events data from the GDG event page in parallel with the upcoming events data
    const response = await fetch(eventURL, { cache: 'no-store' })

    if (!response.ok) {
      throw new Error('Failed to fetch event data')
    }

    const eventData = await response.json()

    // Return the data for the particular event
    return { event_data: eventData }
  } catch (error) {
    console.error(error)
    return { event_data: {} }
  }
}

export default getEvent
