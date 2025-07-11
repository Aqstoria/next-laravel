'use client'

import { useState, type FormEvent } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const PasswordRecoveryForm = () => {
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
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="pb-4 mb-3 mb-lg-4">
      <div className="position-relative mb-4">
        <i className="ci-mail position-absolute top-50 start-0 translate-middle-y fs-lg ms-3" />
        <Form.Control type="email" size="lg" className="form-icon-start" placeholder="Email address" required />
        <Form.Control.Feedback tooltip type="invalid" className="bg-transparent py-0">
          Please enter a valid email address!
        </Form.Control.Feedback>
      </div>
      <Button type="submit" size="lg" className="w-100">
        Reset password
      </Button>
    </Form>
  )
}

export default PasswordRecoveryForm
