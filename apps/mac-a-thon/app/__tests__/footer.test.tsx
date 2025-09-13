import Footer from '@/app/components/footer'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(<Footer />)
    const headerElement = screen.getByTestId('footer')
    expect(headerElement).toBeInTheDocument()
  })
})
