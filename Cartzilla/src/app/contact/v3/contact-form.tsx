'use client'

import { useState, type FormEvent } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SelectBox from '@/components/forms/select-box'

const ContactV3Form = () => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <Form noValidate className="py-md-2 px-md-1 px-lg-3 mx-lg-3" validated={validated} onSubmit={handleSubmit}>
      <div className="position-relative mb-4">
        <Form.Label htmlFor="name">First name *</Form.Label>
        <Form.Control type="text" size="lg" className="rounded-pill" id="name" required />
        <Form.Control.Feedback tooltip type="invalid" className="bg-transparent z-0 py-0 ps-3">
          Enter your name!
        </Form.Control.Feedback>
      </div>
      <div className="position-relative mb-4">
        <Form.Label htmlFor="email">Email *</Form.Label>
        <Form.Control type="email" size="lg" className="rounded-pill" id="email" required />
        <Form.Control.Feedback tooltip type="invalid" className="bg-transparent z-0 py-0 ps-3">
          Enter your email address!
        </Form.Control.Feedback>
      </div>
      <div className="position-relative mb-4">
        <Form.Label>Subject *</Form.Label>
        <SelectBox
          choices={[
            { value: '', label: 'Select subject', placeholder: true },
            { value: 'General inquiry', label: 'General inquiry' },
            { value: 'Order status', label: 'Order status' },
            { value: 'Product information', label: 'Product information' },
            { value: 'Technical support', label: 'Technical support' },
            { value: 'Website feedback', label: 'Website feedback' },
            { value: 'Account assistance', label: 'Account assistance' },
            { value: 'Security concerns', label: 'Security concerns' },
          ]}
          inputClassName="form-select-lg rounded-pill"
          aria-label="Subject select"
          required
        />
        <Form.Control.Feedback tooltip type="invalid" className="bg-transparent z-0 py-0 ps-3">
          Select the subject of your message!
        </Form.Control.Feedback>
      </div>
      <div className="position-relative mb-4">
        <Form.Label htmlFor="message">Message *</Form.Label>
        <Form.Control as="textarea" size="lg" className="rounded-6" id="message" rows={5} required />
        <Form.Control.Feedback tooltip type="invalid" className="bg-transparent z-0 py-0 ps-3">
          Write your message!
        </Form.Control.Feedback>
      </div>
      <div className="pt-2">
        <Button type="submit" variant="dark" size="lg" className="rounded-pill">
          Send message
        </Button>
      </div>
    </Form>
  )
}

export default ContactV3Form
