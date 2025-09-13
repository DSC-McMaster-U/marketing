import LinkTitleCard from '@/app/components/LinkTitleCard' // Adjust the import path as necessary
import { render, screen } from '@testing-library/react'

describe('LinkTitleCard', () => {
  const title = 'Sample Title'
  const link = '/sample-link'
  const children = <p>Child content</p>

  it('renders correctly with given props', () => {
    render(
      <LinkTitleCard title={title} link={link}>
        {children}
      </LinkTitleCard>,
    )

    // Check if title is rendered
    expect(screen.getByText(title)).toBeInTheDocument()

    // Check if child content is rendered
    expect(screen.getByText('Child content')).toBeInTheDocument()

    // Check if "Read now" text is rendered
    expect(screen.getByText('Read now')).toBeInTheDocument()

    // Check if the link points to the correct URL
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('href', link)
  })
})
