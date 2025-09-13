import Dropdown, { DropdownItem } from '@/app/components/Dropdown'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Dropdown', () => {
  it('renders with the correct name', () => {
    render(<Dropdown name='Test Dropdown'>Content</Dropdown>)

    const button = screen.getByRole('button', { name: /test dropdown/i })
    expect(button).toBeInTheDocument()
  })

  it('toggles content visibility when clicked', () => {
    render(<Dropdown name='Test Dropdown'>Content</Dropdown>)

    const button = screen.getByRole('button', { name: /test dropdown/i })

    // Initially, the content should not be visible
    expect(screen.queryByText('Content')).not.toBeInTheDocument()

    // Click to open the dropdown
    fireEvent.click(button)
    expect(screen.getByText('Content')).toBeInTheDocument()

    // Click to close the dropdown
    fireEvent.click(button)
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it('shows children components', () => {
    render(
      <Dropdown name='Test Dropdown'>
        <DropdownItem href='/link' label='Item 1' />
      </Dropdown>,
    )

    const button = screen.getByRole('button', { name: /test dropdown/i })
    fireEvent.click(button) // Open the dropdown

    // Check if DropdownItem is rendered
    expect(screen.getByText('Item 1')).toBeInTheDocument()
  })

  it('shows description when provided', () => {
    render(
      <Dropdown name='Test Dropdown'>
        <DropdownItem
          href='/link'
          label='Item 1'
          description='Item 1 description'
        />
      </Dropdown>,
    )

    const button = screen.getByRole('button', { name: /test dropdown/i })
    fireEvent.click(button) // Open the dropdown

    // Check if the description is rendered
    expect(screen.getByText('Item 1 description')).toBeInTheDocument()
  })

  it('rotates the icon when opened', () => {
    render(<Dropdown name='Test Dropdown' />)

    const button = screen.getByRole('button', { name: /test dropdown/i })

    // Initially, the icon should not be rotated
    const icon = button.querySelector('svg')
    expect(icon).not.toHaveClass('rotate-180')

    // Click to open
    fireEvent.click(button)
    expect(icon).toHaveClass('rotate-180')

    // Click to close
    fireEvent.click(button)
    expect(icon).not.toHaveClass('rotate-180')
  })

  it('opens on mouse enter and closes on mouse leave', () => {
    render(<Dropdown name='Test Dropdown'>Content</Dropdown>)

    const dropdown = screen.getByText(/test dropdown/i)

    // Initially, the content should not be visible
    expect(screen.queryByText('Content')).not.toBeInTheDocument()

    // Simulate mouse enter
    fireEvent.mouseEnter(dropdown)
    expect(screen.getByText('Content')).toBeInTheDocument()

    // Simulate mouse leave
    fireEvent.mouseLeave(dropdown)
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })
})
