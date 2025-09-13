import Ticker from '@/app/components/Ticker'
import { render, screen } from '@testing-library/react'

describe('Ticker', () => {
  test('renders children correctly', () => {
    render(
      <Ticker>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </Ticker>,
    )

    // Check if all list items are in the document
    const items = screen.getAllByText(/Item/) // Get all items that match "Item"
    expect(items).toHaveLength(6) // There should be 2 of each item (for duplicate rendering)
    expect(items[0]).toHaveTextContent('Item 1')
    expect(items[1]).toHaveTextContent('Item 2')
    expect(items[2]).toHaveTextContent('Item 3')
    expect(items[3]).toHaveTextContent('Item 1') // duplicate instance
    expect(items[4]).toHaveTextContent('Item 2') // duplicate instance
    expect(items[5]).toHaveTextContent('Item 3') // duplicate instance
  })

  test('renders duplicate list for infinite scroll effect', () => {
    render(
      <Ticker>
        <li>Item 1</li>
        <li>Item 2</li>
      </Ticker>,
    )

    // Check if the duplicate list items are rendered
    expect(screen.getAllByText('Item 1').length).toBe(2)
    expect(screen.getAllByText('Item 2').length).toBe(2)
  })
})
