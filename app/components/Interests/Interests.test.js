import { render, screen } from '@testing-library/react'
import InterestsComponent from './Interests'


describe('InterestsComponent', () => {
  test('renders "Intereses" correctamente', () => {
    render(<InterestsComponent />)
    
    expect(screen.getByText(/Intereses/i)).toBeInTheDocument()
    expect(screen.getByText(/Barcelona/i)).toBeInTheDocument()
    expect(screen.getByText(/Viajar/i)).toBeInTheDocument()
  })
})