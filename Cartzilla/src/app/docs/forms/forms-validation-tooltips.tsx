'use client'

import { useState, type FormEvent } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const FormsValidationTooltipsDemo = () => {
  const code = `'use client'

import { useState, type FormEvent } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function FormsValidationTooltipsDemo() {
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
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Col md={4} className="position-relative mb-4">
          <Form.Label htmlFor="validationTooltip01">First name</Form.Label>
          <Form.Control
            type="text"
            id="validationTooltip01"
            placeholder="First name"
            defaultValue="John"
            required
          />
          <Form.Control.Feedback tooltip type="invalid">
            Please enter your first name.
          </Form.Control.Feedback>
          <Form.Control.Feedback tooltip type="valid">
            Looks good!
          </Form.Control.Feedback>
        </Col>
        <Col md={4} className="position-relative mb-4">
          <Form.Label htmlFor="validationTooltip02">Last name</Form.Label>
          <Form.Control type="text" id="validationTooltip02" placeholder="Last name" defaultValue="Doe" required />
          <Form.Control.Feedback tooltip type="invalid">
            Please enter your last name.
          </Form.Control.Feedback>
          <Form.Control.Feedback tooltip type="valid">
            Looks good!
          </Form.Control.Feedback>
        </Col>
        <Col md={4} className="position-relative mb-4">
          <Form.Label htmlFor="validationTooltip03">Username</Form.Label>
          <Form.Control type="text" id="validationTooltip03" placeholder="Username" required />
          <Form.Control.Feedback tooltip type="invalid">
            Please choose a username.
          </Form.Control.Feedback>
          <Form.Control.Feedback tooltip type="valid">
            Looks good!
          </Form.Control.Feedback>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="position-relative mb-4">
          <Form.Label htmlFor="validationTooltip04">City</Form.Label>
          <Form.Select id="validationTooltip04" defaultValue="" required>
            <option value="" disabled>
              Choose city...
            </option>
            <option value="Dallas">Dallas</option>
            <option value="Houston">Houston</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Miami">Miami</option>
            <option value="New York">New York</option>
          </Form.Select>
          <Form.Control.Feedback tooltip type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
          <Form.Control.Feedback tooltip type="valid">
            Looks good!
          </Form.Control.Feedback>
        </Col>
        <Col md={3} className="position-relative mb-4">
          <Form.Label htmlFor="validationTooltip05">State</Form.Label>
          <Form.Select id="validationTooltip05" defaultValue="" required>
            <option value="" disabled>
              Choose state...
            </option>
            <option value="Arizona">Arizona</option>
            <option value="Colorado">Colorado</option>
            <option value="Florida">Florida</option>
            <option value="Indiana">Indiana</option>
            <option value="Kentucky">Kentucky</option>
            <option value="Texas">Texas</option>
          </Form.Select>
          <Form.Control.Feedback tooltip type="invalid">
            Please provide a valid State.
          </Form.Control.Feedback>
          <Form.Control.Feedback tooltip type="valid">
            Looks good!
          </Form.Control.Feedback>
        </Col>
        <Col md={3} className="position-relative mb-4">
          <Form.Label htmlFor="validationTooltip06">Zip</Form.Label>
          <Form.Control type="text" id="validationTooltip06" placeholder="Zip" required />
          <Form.Control.Feedback tooltip type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
          <Form.Control.Feedback tooltip type="valid">
            Looks good!
          </Form.Control.Feedback>
        </Col>
      </Row>
      <Form.Check
        id="validationTooltip07"
        label="Agree to terms and conditions"
        feedback="You must agree before submitting."
        feedbackType="invalid"
        feedbackTooltip
        required
        className="position-relative mb-4"
      />
      <Button type="submit">Submit form</Button>
    </Form>
  )
}`

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
    <section id="forms-validation-tooltips" className="docs-section">
      <h4>Validation: status tooltips</h4>
      <DocsComponentDemo code={code}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col md={4} className="position-relative mb-4">
              <Form.Label htmlFor="validationTooltip01">First name</Form.Label>
              <Form.Control
                type="text"
                id="validationTooltip01"
                placeholder="First name"
                defaultValue="John"
                required
              />
              <Form.Control.Feedback tooltip type="invalid">
                Please enter your first name.
              </Form.Control.Feedback>
              <Form.Control.Feedback tooltip type="valid">
                Looks good!
              </Form.Control.Feedback>
            </Col>
            <Col md={4} className="position-relative mb-4">
              <Form.Label htmlFor="validationTooltip02">Last name</Form.Label>
              <Form.Control type="text" id="validationTooltip02" placeholder="Last name" defaultValue="Doe" required />
              <Form.Control.Feedback tooltip type="invalid">
                Please enter your last name.
              </Form.Control.Feedback>
              <Form.Control.Feedback tooltip type="valid">
                Looks good!
              </Form.Control.Feedback>
            </Col>
            <Col md={4} className="position-relative mb-4">
              <Form.Label htmlFor="validationTooltip03">Username</Form.Label>
              <Form.Control type="text" id="validationTooltip03" placeholder="Username" required />
              <Form.Control.Feedback tooltip type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
              <Form.Control.Feedback tooltip type="valid">
                Looks good!
              </Form.Control.Feedback>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="position-relative mb-4">
              <Form.Label htmlFor="validationTooltip04">City</Form.Label>
              <Form.Select id="validationTooltip04" defaultValue="" required>
                <option value="" disabled>
                  Choose city...
                </option>
                <option value="Dallas">Dallas</option>
                <option value="Houston">Houston</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Miami">Miami</option>
                <option value="New York">New York</option>
              </Form.Select>
              <Form.Control.Feedback tooltip type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
              <Form.Control.Feedback tooltip type="valid">
                Looks good!
              </Form.Control.Feedback>
            </Col>
            <Col md={3} className="position-relative mb-4">
              <Form.Label htmlFor="validationTooltip05">State</Form.Label>
              <Form.Select id="validationTooltip05" defaultValue="" required>
                <option value="" disabled>
                  Choose state...
                </option>
                <option value="Arizona">Arizona</option>
                <option value="Colorado">Colorado</option>
                <option value="Florida">Florida</option>
                <option value="Indiana">Indiana</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Texas">Texas</option>
              </Form.Select>
              <Form.Control.Feedback tooltip type="invalid">
                Please provide a valid State.
              </Form.Control.Feedback>
              <Form.Control.Feedback tooltip type="valid">
                Looks good!
              </Form.Control.Feedback>
            </Col>
            <Col md={3} className="position-relative mb-4">
              <Form.Label htmlFor="validationTooltip06">Zip</Form.Label>
              <Form.Control type="text" id="validationTooltip06" placeholder="Zip" required />
              <Form.Control.Feedback tooltip type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
              <Form.Control.Feedback tooltip type="valid">
                Looks good!
              </Form.Control.Feedback>
            </Col>
          </Row>
          <Form.Check
            id="validationTooltip07"
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            feedbackTooltip
            required
            className="position-relative mb-4"
          />
          <Button type="submit">Submit form</Button>
        </Form>
      </DocsComponentDemo>
    </section>
  )
}

export default FormsValidationTooltipsDemo
