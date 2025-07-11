'use client'

import React, { useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import { useRouter } from 'next/navigation'

interface RegisterFormProps {
  onSuccess?: () => void
  onSwitchToLogin?: () => void
  redirectTo?: string
}

export default function RegisterForm({ onSuccess, onSwitchToLogin, redirectTo }: RegisterFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    phone: '',
    address: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const { register } = useAuth()
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    // Validate password confirmation
    if (formData.password !== formData.password_confirmation) {
      setError('Passwords do not match')
      setIsSubmitting(false)
      return
    }

    try {
      const result = await register(formData)
      
      if (result.success) {
        if (onSuccess) {
          onSuccess()
        } else if (redirectTo) {
          router.push(redirectTo)
        } else {
          router.push('/account')
        }
      } else {
        setError(result.message || 'Registration failed')
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
        <Form.Label htmlFor="name">Full Name</Form.Label>
        <Form.Control
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <Form.Control.Feedback type="invalid">
          Please enter your full name.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email address</Form.Label>
        <Form.Control
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email address.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="phone">Phone Number (Optional)</Form.Label>
        <Form.Control
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="address">Address (Optional)</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          disabled={isSubmitting}
          minLength={8}
        />
        <Form.Control.Feedback type="invalid">
          Password must be at least 8 characters long.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="password_confirmation">Confirm Password</Form.Label>
        <Form.Control
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <Form.Control.Feedback type="invalid">
          Please confirm your password.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          id="terms"
          label="I agree to the Terms of Service and Privacy Policy"
          required
        />
      </Form.Group>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-100 mb-3"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Creating account...' : 'Create account'}
      </Button>

      {onSwitchToLogin && (
        <div className="text-center">
          <p className="mb-0">
            Already have an account?{' '}
            <Button
              variant="link"
              className="p-0"
              onClick={onSwitchToLogin}
            >
              Sign in
            </Button>
          </p>
        </div>
      )}
    </Form>
  )
} 