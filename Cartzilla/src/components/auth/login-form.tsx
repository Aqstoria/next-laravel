'use client'

import React, { useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import { useRouter } from 'next/navigation'

interface LoginFormProps {
  onSuccess?: () => void
  onSwitchToRegister?: () => void
  redirectTo?: string
}

export default function LoginForm({ onSuccess, onSwitchToRegister, redirectTo }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const result = await login(email, password)
      
      if (result.success) {
        if (onSuccess) {
          onSuccess()
        } else if (redirectTo) {
          router.push(redirectTo)
        } else {
          router.push('/account')
        }
      } else {
        setError(result.message || 'Login failed')
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form onSubmit={handleSubmit} className="needs-validation" noValidate>
      {error && (
        <Alert variant="danger" dismissible onClose={() => setError('')}>
          {error}
        </Alert>
      )}

      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email address</Form.Label>
        <Form.Control
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email address.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={isSubmitting}
        />
        <Form.Control.Feedback type="invalid">
          Please enter your password.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          id="remember"
          label="Remember me"
        />
      </Form.Group>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-100 mb-3"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Signing in...' : 'Sign in'}
      </Button>

      {onSwitchToRegister && (
        <div className="text-center">
          <p className="mb-0">
            Don't have an account?{' '}
            <Button
              variant="link"
              className="p-0"
              onClick={onSwitchToRegister}
            >
              Sign up
            </Button>
          </p>
        </div>
      )}
    </Form>
  )
} 