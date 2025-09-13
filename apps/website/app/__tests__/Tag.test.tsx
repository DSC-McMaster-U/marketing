import Tag from '@/app/components/Tag'
import { render, screen } from '@testing-library/react'

describe('Tag', () => {
  test('renders children correctly', () => {
    render(<Tag className='custom-class'>Hello, World!</Tag>)

    // Check if the text "Hello, World!" is in the document
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  })

  test('renders with multiple children', () => {
    render(
      <Tag className='custom-class'>
        <span>Child 1</span>
        <span>Child 2</span>
      </Tag>,
    )

    // Check if both children are in the document
    expect(screen.getByText('Child 1')).toBeInTheDocument()
    expect(screen.getByText('Child 2')).toBeInTheDocument()
  })
})
