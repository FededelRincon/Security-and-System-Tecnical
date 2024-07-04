import { render, screen } from '@testing-library/react'
import NavbarComponent from './Navbar'


// Mockea el módulo next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, priority, ...props }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src.src || src} alt={alt} {...props} />
  },
}))

describe('NavbarComponent', () => {
  test('renders "Navbar" correctamente', () => {
    render(<NavbarComponent />)
    
    expect(screen.getByText(/Logo/i)).toBeInTheDocument()
    expect(screen.getByText(/Lionel Messi/i)).toBeInTheDocument()

    const image = screen.getByAltText('Profile Picture')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src')
    expect(image.getAttribute('src')).not.toBe('[object Object]')
    expect(image).toHaveAttribute('width', '100')
    expect(image).toHaveAttribute('height', '25')
    expect(image).toHaveClass('picture')
  })
})