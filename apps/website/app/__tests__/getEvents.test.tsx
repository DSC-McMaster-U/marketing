import getEvents from '@/app/lib/getEvents'

// Simulate fetch function response
global.fetch = jest.fn((url) => {
  if (url.includes('status=Completed')) {
    // Mock past events response
    return Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          results: [{ name: 'Past Event', date: 'December 3, 2024' }],
        }),
    })
  } else if (url.includes('status=Live')) {
    // Mock upcoming events response
    return Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          results: [{ name: 'Upcoming Event', date: 'March 17, 2025' }],
        }),
    })
  } else {
    return Promise.reject(new Error('Unexpected URL in fetch'))
  }
}) as jest.Mock

test('getEvents returns past and upcoming events', async () => {
  const events = await getEvents()

  // Check that events has two properties, past events and upcoming events
  expect(events).toHaveProperty('past_events')
  expect(events).toHaveProperty('upcoming_events')

  // Check that the events properties are arrays
  expect(Array.isArray(events.past_events)).toBe(true)
  expect(Array.isArray(events.upcoming_events)).toBe(true)

  // If past events is not an empty array, check that it contains objects
  if (events.past_events.length > 0) {
    expect(typeof events.past_events[0]).toBe('object')
  }
  // If upcoming events is not an empty array, check that it contains objects
  if (events.upcoming_events.length > 0) {
    expect(typeof events.upcoming_events[0]).toBe('object')
  }

  // We make two fetch calls in getEvents
  expect(fetch).toHaveBeenCalledTimes(2)
})
