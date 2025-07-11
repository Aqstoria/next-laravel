'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Form from 'react-bootstrap/Form'
import PasswordInput from './password-input'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Nav from 'react-bootstrap/Nav'
import { useAuth } from '@/contexts/auth-context'

const LoginForm = ({ labels }: { labels?: boolean }) => {
  const [validated, setValidated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const router = useRouter()
  const { login } = useAuth()

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

      const result = await login(email, password)

      if (result.success) {
        setSuccess('Login successful! Redirecting...')
        setTimeout(() => {
          router.push('/account/dashboard')
        }, 1500)
      } else {
        setError(result.message || 'Login failed. Please check your credentials.')
      }
    } catch (err: any) {
      console.error('Login error:', err)
      if (err.message) {
        setError(err.message)
      } else {
        setError('An error occurred during login. Please try again.')
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
        {labels && <Form.Label htmlFor="loginEmail">Email</Form.Label>}
        <Form.Control 
          size="lg" 
          type="email" 
          {...(labels && { id: 'loginEmail' })} 
          name="email"
          placeholder="Email" 
          required 
        />
        <Form.Control.Feedback tooltip type="invalid" className="bg-transparent py-0">
          Enter a valid email address!
        </Form.Control.Feedback>
      </div>
      
      <div className="mb-4">
        {labels && <Form.Label htmlFor="loginPassword">Password</Form.Label>}
        <PasswordInput
          size="lg"
          {...(labels && { id: 'loginPassword' })}
          name="password"
          placeholder="Password"
          feedback={{ type: 'text', status: 'error', text: 'Password is incorrect!' }}
          required
        />
      </div>
      
      <div className="d-flex align-items-center justify-content-between mb-4">
        <Form.Check id="remember-30" label="Remember for 30 days" className="me-2" />
        <Nav>
          <Nav.Link as={Link} href="/account/password-recovery" className="animate-underline p-0">
            <span className="animate-target">Forgot password?</span>
          </Nav.Link>
        </Nav>
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
            Signing in...
          </>
        ) : (
          'Sign In'
        )}
      </Button>
    </Form>
  )
}

export default LoginForm
