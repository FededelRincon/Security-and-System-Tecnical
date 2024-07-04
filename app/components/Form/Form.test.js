import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import FormComponent from './Form'

describe('FormComponent', () => {
  test('renders form with correct elements', () => {
    render(<FormComponent />)
    
    expect(screen.getByText('Form')).toBeInTheDocument()
    
    expect(screen.getByRole('button', { name: 'Enviar Mensaje' })).toBeInTheDocument()
    
    // Verifica que los campos de entrada estén presentes
    expect(screen.getByLabelText('Nombre:')).toBeInTheDocument()
    expect(screen.getByLabelText('Email:')).toBeInTheDocument()
    expect(screen.getByLabelText('Mensaje:')).toBeInTheDocument()
  })
})