'use client'

import { useState } from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const FooterFurniture = () => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <footer className="footer bg-dark pb-4 py-lg-5" data-bs-theme="dark">
      <Container className="pt-5 pt-lg-4 mt-sm-2 mt-md-3">
        <Row className="pb-5">
          {/* Subscription + Social account links */}
          <Col md={true} xl={8} className="order-md-2">
            <div className="text-center px-sm-4 mx-auto" style={{ maxWidth: 568 }}>
              <h3 className="pb-1 mb-2">Stay in touch with us</h3>
              <p className="fs-sm text-body pb-2 pb-sm-3">
                Receive the latest updates about our products &amp; promotions
              </p>

              {/* Subscription form */}
              <Form noValidate className="position-relative" validated={validated} onSubmit={handleSubmit}>
                <Form.Control
                  type="email"
                  size="lg"
                  className="rounded-pill text-start"
                  placeholder="Your email"
                  aria-label="Your email address"
                  required
                />
                <Form.Control.Feedback tooltip type="invalid" className="bg-transparent p-0">
                  Please enter your email address!
                </Form.Control.Feedback>
                <Button
                  type="submit"
                  variant="dark"
                  className="btn-icon fs-xl rounded-circle position-absolute top-0 end-0 mt-1 me-1"
                  aria-label="Submit your email address"
                  data-bs-theme="light"
                >
                  <i className="ci-arrow-up-right" />
                </Button>
              </Form>

              {/* Social account links */}
              <div className="d-flex justify-content-center gap-2 pt-4 pt-md-5 mt-1 mt-md-0">
                {[
                  { name: 'YouTube', icon: 'ci-youtube', href: '#' },
                  { name: 'Facebook', icon: 'ci-facebook', href: '#' },
                  { name: 'Instagram', icon: 'ci-instagram', href: '#' },
                  { name: 'Telegram', icon: 'ci-telegram', href: '#' },
                  { name: 'Pinterest', icon: 'ci-pinterest', href: '#' },
                ].map(({ name, icon, href }, index) => (
                  <OverlayTrigger
                    key={index}
                    placement="top"
                    overlay={
                      <Tooltip className="tooltip-transparent fs-xs mb-n2">
                        <span className="text-white">{name}</span>
                      </Tooltip>
                    }
                  >
                    <Button
                      href={href}
                      variant="outline-secondary"
                      className="btn-icon fs-base border-0"
                      aria-label={`Follow us on ${name}`}
                    >
                      <i className={icon} />
                    </Button>
                  </OverlayTrigger>
                ))}
              </div>
            </div>
          </Col>

          {/* Category links */}
          <Col md="auto" xl={2} className="text-center order-md-1 pt-4 pt-md-0">
            <Nav as="ul" className="d-inline-flex flex-md-column justify-content-center align-items-center gap-md-2">
              {[
                { label: 'Bedroom', href: '#bedroom' },
                { label: 'Living room', href: '#living-room' },
                { label: 'Bathroom', href: '#bathroom' },
                { label: 'Decoration', href: '#decoration' },
                { label: 'Kitchen', href: '#kitchen' },
                { label: 'Sale', href: '#sale' },
              ].map(({ label, href }, index) => (
                <Nav.Item key={index} as="li" className="animate-underline my-1 mx-2 m-md-0">
                  <Nav.Link as={Link} href={href} active={false} className="d-inline-flex fw-normal p-0 animate-target">
                    {label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>

          {/* Customer links */}
          <Col md="auto" xl={2} className="text-center order-md-3 pt-3 pt-md-0">
            <Nav as="ul" className="d-inline-flex flex-md-column justify-content-center align-items-center gap-md-2">
              {[
                { label: 'Shipping options', href: '#shipping' },
                { label: 'Tracking a package', href: '#tracking' },
                { label: 'Help center', href: '#help' },
                { label: 'Contact us', href: '#contact' },
                { label: 'Product returns', href: '#returns' },
                { label: 'Locations', href: '#locations' },
              ].map(({ label, href }, index) => (
                <Nav.Item key={index} as="li" className="animate-underline my-1 mx-2 m-md-0">
                  <Nav.Link as={Link} href={href} active={false} className="d-inline-flex fw-normal p-0 animate-target">
                    {label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        </Row>

        {/* Copyright */}
        <p className="fs-xs text-body text-center pt-lg-4 mt-n2 mt-md-0 mb-0">
          &copy; All rights reserved. Made by{' '}
          <span className="animate-underline">
            <a
              className="animate-target text-white text-decoration-none"
              href="https://createx.studio/"
              target="_blank"
              rel="noreferrer"
            >
              Createx Studio
            </a>
          </span>
        </p>
      </Container>
    </footer>
  )
}

export default FooterFurniture
