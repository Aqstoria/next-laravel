'use client'

import { useState, type FormEvent } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SelectBox from '@/components/forms/select-box'
import Cleave from 'cleave.js/react'

const ContactV2Forms = () => {
  const [validatedCustomer, setValidatedCustomer] = useState(false)
  const [validatedRetailer, setValidatedRetailer] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>, formType: 'customer' | 'retailer') => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    if (formType === 'customer') {
      setValidatedCustomer(true)
    } else {
      setValidatedRetailer(true)
    }
  }

  return (
    <TabContainer defaultActiveKey="customer">
      {/* Nav pills */}
      <Nav as="ul" variant="pills" className="justify-content-center pb-2 pb-sm-3 mb-3">
        <NavItem as="li">
          <NavLink eventKey="customer">
            <i className="ci-shopping-bag fs-base me-2 ms-n1" />
            For Customers
          </NavLink>
        </NavItem>
        <NavItem as="li">
          <NavLink eventKey="retailer">
            <i className="ci-box fs-base me-2 ms-n1" />
            For Retailers
          </NavLink>
        </NavItem>
      </Nav>
      <Row className="justify-content-center">
        <Col md={11} lg={9} xl={8}>
          <TabContent className="bg-body rounded-5 py-3 py-sm-4 px-4 px-sm-5">
            <p className="text-center py-3 mx-auto" style={{ maxWidth: 450 }}>
              Fill out the form below and we will reply within 24 hours. You may also directly reach out to us at{' '}
              <a href="mailto:info@cartzilla.com" className="text-decoration-none">
                info@cartzilla.com
              </a>
            </p>

            {/* Customers form tab */}
            <TabPane eventKey="customer">
              <Form noValidate validated={validatedCustomer} onSubmit={(e) => handleSubmit(e, 'customer')}>
                <Row className="g-4">
                  <Col md={6} className="position-relative">
                    <Form.Label htmlFor="fn">First name *</Form.Label>
                    <Form.Control type="text" size="lg" className="rounded-pill" id="fn" required />
                    <Form.Control.Feedback tooltip type="invalid" className="bg-transparent z-0 py-0 ps-3">
                      Enter your first name!
                    </Form.Control.Feedback>
                  </Col>
                  <Col md={6} className="position-relative">
                    <Form.Label htmlFor="ln">Last name *</Form.Label>
                    <Form.Control type="text" size="lg" className="rounded-pill" id="ln" required />
                    <Form.Control.Feedback tooltip type="invalid" className="bg-transparent z-0 py-0 ps-3">
                      Enter your last name!
                    </Form.Control.Feedback>
                  </Col>
                  <Col md={6} className="position-relative">
                    <Form.Label htmlFor="email">Email *</Form.Label>
                    <Form.Control type="email" size="lg" className="rounded-pill" id="email" required />
                    <Form.Control.Feedback tooltip type="invalid" className="bg-transparent z-0 py-0 ps-3">
                      Enter your email address!
                    </Form.Control.Feedback>
                  </Col>
                  <Col md={6}>
                    <Form.Label htmlFor="phone">Phone number</Form.Label>
                    <Form.Control
                      as={Cleave}
                      type="tel"
                      size="lg"
                      className="rounded-pill"
                      id="phone"
                      options={{ numericOnly: true, delimiters: ['+1 ', ' ', ' '], blocks: [0, 3, 3, 2] }}
                      placeholder="+1 ___ ___ __"
                    />
                  </Col>
                  <Col xs={12} className="position-relative">
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
                  </Col>
                  <Col xs={12} className="position-relative">
                    <Form.Label htmlFor="message">Message *</Form.Label>
                    <Form.Control as="textarea" size="lg" className="rounded-6" id="message" rows={5} required />
                    <Form.Control.Feedback tooltip type="invalid" className="bg-transparent z-0 py-0 ps-3">
                      Write your message!
                    </Form.Control.Feedback>
                  </Col>
                  <Col xs={12} className="text-center pt-2 pb-3">
                    <Button type="submit" variant="dark" size="lg" className="rounded-pill">
                      Send message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </TabPane>

            {/* Retailers form tab */}
            <TabPane eventKey="retailer">
              <Form noValidate validated={validatedRetailer} onSubmit={(e) => handleSubmit(e, 'retailer')}>
                <Row className="g-4">
                  <Col md={6} className="position-relative">
                    <Form.Label htmlFor="company">Company name *</Form.Label>
                    <Form.Control type="text" size="lg" className="rounded-pill" id="company" required />
                    <Form.Control.Feedback tooltip type="invalid" className="bg-transparent z-0 py-0 ps-3">
                      Enter your company name!
                    </Form.Control.Feedback>
                  </Col>
                  <Col md={6} className="position-relative">
                    <Form.Label htmlFor="person">Contact person *</Form.Label>
                    <Form.Control type="text" size="lg" className="rounded-pill" id="person" required />
                    <Form.Control.Feedback tooltip type="invalid" className="bg-transparent z-0 py-0 ps-3">
                      Enter contact person name!
                    </Form.Control.Feedback>
                  </Col>
                  <Col md={6} className="position-relative">
                    <Form.Label htmlFor="email-r">Email *</Form.Label>
                    <Form.Control type="email" size="lg" className="rounded-pill" id="email-r" required />
                    <Form.Control.Feedback tooltip type="invalid" className="bg-transparent z-0 py-0 ps-3">
                      Enter company email address!
                    </Form.Control.Feedback>
                  </Col>
                  <Col md={6}>
                    <Form.Label htmlFor="phone-r">Phone number</Form.Label>
                    <Form.Control
                      as={Cleave}
                      type="tel"
                      size="lg"
                      className="rounded-pill"
                      id="phone-r"
                      options={{ numericOnly: true, delimiters: ['+1 ', ' ', ' '], blocks: [0, 3, 3, 2] }}
                      placeholder="+1 ___ ___ __"
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label htmlFor="website">Website</Form.Label>
                    <Form.Control type="text" size="lg" className="rounded-pill" id="website" />
                  </Col>
                  <Col md={6} className="position-relative">
                    <Form.Label>Subject *</Form.Label>
                    <SelectBox
                      choices={[
                        { value: '', label: 'Select subject', placeholder: true },
                        { value: 'General inquiry', label: 'General inquiry' },
                        { value: 'Product information', label: 'Product information' },
                        { value: 'Technical support', label: 'Technical support' },
                        { value: 'Affiliation program', label: 'Affiliation program' },
                        { value: 'Marketing and promotions', label: 'Marketing and promotions' },
                        { value: 'Press and media inquiries', label: 'Press and media inquiries' },
                      ]}
                      inputClassName="form-select-lg rounded-pill"
                      aria-label="Subject select"
                      required
                    />
                    <Form.Control.Feedback tooltip type="invalid" className="bg-transparent z-0 py-0 ps-3">
                      Select the subject of your message!
                    </Form.Control.Feedback>
                  </Col>
                  <Col xs={12} className="position-relative">
                    <Form.Label htmlFor="message-r">Message *</Form.Label>
                    <Form.Control as="textarea" size="lg" className="rounded-6" id="message-r" rows={5} required />
                    <Form.Control.Feedback tooltip type="invalid" className="bg-transparent z-0 py-0 ps-3">
                      Write your message!
                    </Form.Control.Feedback>
                  </Col>
                  <Col xs={12} className="text-center pt-2 pb-3">
                    <Button type="submit" variant="dark" size="lg" className="rounded-pill">
                      Send message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </TabContainer>
  )
}

export default ContactV2Forms
