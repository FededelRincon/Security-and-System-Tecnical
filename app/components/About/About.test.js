import { render, screen } from '@testing-library/react'
import AboutComponent from './About'

describe('AboutComponent', () => {
  test('renders "Sobre mi" correctamente', () => {
    render(<AboutComponent />)
    
    expect(screen.getByText(/Sobre mi/i)).toBeInTheDocument()
    expect(screen.getByText(/Hola, soy Lionel Messi/i)).toBeInTheDocument()
    expect(screen.getByText(/Inter Miami/i)).toBeInTheDocument()
  })
})