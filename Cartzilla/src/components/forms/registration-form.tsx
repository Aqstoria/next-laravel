'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Form from 'react-bootstrap/Form'
import PasswordInput from './password-input'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { authService } from '@/services/auth'

const RegistrationForm = () => {
  const [validated, setValidated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const router = useRouter()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.stopPropagation()
    
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      setValidated(true)
      return
    }

    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const formData = new FormData(form)
      const email = formData.get('email') as string
      const password = formData.get('password') as string
      const name = formData.get('name') as string
      const passwordConfirmation = formData.get('password_confirmation') as string

      // Client-side validation
      if (password !== passwordConfirmation) {
        setError('Passwords do not match')
        setLoading(false)
        return
      }

      if (password.length < 8) {
        setError('Password must be at least 8 characters long')
        setLoading(false)
        return
      }

      const result = await authService.register({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation
      })

      if (result.success) {
        setSuccess('Registration successful! Redirecting to login...')
        setTimeout(() => {
          router.push('/account')
        }, 2000)
      } else {
        setError(result.message || 'Registration failed. Please try again.')
      }
    } catch (err: any) {
      console.error('Registration error:', err)
      if (err.message) {
        setError(err.message)
      } else {
        setError('An error occurred during registration. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {error && (
        <Alert variant="danger" dismissible onClose={() => setError('')}>
          {error}
        </Alert>
      )}
      
      {success && (
        <Alert variant="success" dismissible onClose={() => setSuccess('')}>
          {success}
        </Alert>
      )}

      <div className="position-relative mb-4">
        <Form.Label htmlFor="register-name">Full Name</Form.Label>
        <Form.Control 
          size="lg" 
          type="text" 
          id="register-name" 
          name="name"
          required 
        />
        <Form.Control.Feedback tooltip type="invalid" className="bg-transparent py-0">
          Please enter your full name!
        </Form.Control.Feedback>
      </div>

      <div className="position-relative mb-4">
        <Form.Label htmlFor="register-email">Email</Form.Label>
        <Form.Control 
          size="lg" 
          type="email" 
          id="register-email" 
          name="email"
          required 
        />
        <Form.Control.Feedback tooltip type="invalid" className="bg-transparent py-0">
          Enter a valid email address!
        </Form.Control.Feedback>
      </div>

      <div className="mb-4">
        <Form.Label htmlFor="register-password">Password</Form.Label>
        <PasswordInput
          size="lg"
          id="register-password"
          name="password"
          minLength={8}
          placeholder="Minimum 8 characters"
          feedback={{ type: 'text', status: 'error', text: 'Password does not meet the required criteria!' }}
          required
        />
      </div>

      <div className="mb-4">
        <Form.Label htmlFor="register-password-confirmation">Confirm Password</Form.Label>
        <PasswordInput
          size="lg"
          id="register-password-confirmation"
          name="password_confirmation"
          minLength={8}
          placeholder="Confirm your password"
          feedback={{ type: 'text', status: 'error', text: 'Passwords do not match!' }}
          required
        />
      </div>

      <div className="d-flex flex-column gap-2 mb-4">
        <Form.Check id="save-pass" label="Save the password" />
        <Form.Check id="privacy">
          <Form.Check.Input required />
          <Form.Check.Label>
            I have read and accept the{' '}
            <Link href="#" className="text-dark-emphasis">
              Privacy Policy
            </Link>
          </Form.Check.Label>
        </Form.Check>
      </div>

      <Button 
        type="submit" 
        size="lg" 
        className="w-100"
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Creating account...
          </>
        ) : (
          <>
            Create an account
            <i className="ci-chevron-right fs-lg ms-1 me-n1" />
          </>
        )}
      </Button>
    </Form>
  )
}

export default RegistrationForm
