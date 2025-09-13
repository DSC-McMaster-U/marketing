import Accordion, { AccordionItem } from '@/app/components/Accordion'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Accordion', () => {
  it('renders with the correct title', () => {
    render(<Accordion title='Test Accordion'>Content</Accordion>)

    const button = screen.getByRole('button', { name: /test accordion/i })
    expect(button).toBeInTheDocument()
  })

  it('toggles content visibility when clicked', () => {
    render(<Accordion title='Test Accordion'>Content</Accordion>)

    const button = screen.getByRole('button', { name: /test accordion/i })

    // Initially, the content should not be visible
    expect(screen.queryByText('Content')).not.toBeInTheDocument()

    // Click to open the accordion
    fireEvent.click(button)
    expect(screen.getByText('Content')).toBeInTheDocument()

    // Click to close the accordion
    fireEvent.click(button)
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it('renders children components', () => {
    render(
      <Accordion title='Test Accordion'>
        <AccordionItem href='/link' label='Item 1' />
      </Accordion>,
    )

    const button = screen.getByRole('button', { name: /test accordion/i })
    fireEvent.click(button) // Open the accordion

    // Check if AccordionItem is rendered
    expect(screen.getByText('Item 1')).toBeInTheDocument()
  })

  it('shows the icon when provided', () => {
    const TestIcon = () => <span data-testid='test-icon'>Icon</span>

    render(
      <Accordion title='Test Accordion'>
        <AccordionItem href='/link' label='Item 1' icon={<TestIcon />} />
      </Accordion>,
    )

    const button = screen.getByRole('button', { name: /test accordion/i })
    fireEvent.click(button) // Open the accordion

    // Check if the icon is rendered
    expect(screen.getByTestId('test-icon')).toBeInTheDocument()
  })

  it('rotates the icon when opened', () => {
    render(<Accordion title='Test Accordion' />)

    const button = screen.getByRole('button', { name: /test accordion/i })

    // Initially, icon should not be rotated
    const icon = button.querySelector('svg')
    expect(icon).not.toHaveClass('rotate-180')

    // Click to open
    fireEvent.click(button)
    expect(icon).toHaveClass('rotate-180')

    // Click to close
    fireEvent.click(button)
    expect(icon).not.toHaveClass('rotate-180')
  })
})
