'use client'

import { useState } from 'react'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import AccordionItem from 'react-bootstrap/AccordionItem'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const FooterGrocery = ({ logoHref }: { logoHref?: string }) => {
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
    <footer className="footer bg-dark pb-4" data-bs-theme="dark">
      {/* Subscription */}
      <div className="border-bottom py-5">
        <Container className="py-sm-1 py-md-2 py-lg-3">
          <div className="text-center mx-auto" style={{ maxWidth: 580 }}>
            <h3 className="pb-1 mb-2">Stay in touch with us</h3>
            <p className="fs-sm text-body">Receive the latest updates about our products &amp; promotions</p>
            <Form
              noValidate
              className="position-relative d-flex flex-column flex-sm-row gap-2 pt-3"
              validated={validated}
              onSubmit={handleSubmit}
            >
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
              <Button type="submit" size="lg" className="rounded-pill">
                Subscribe
              </Button>
            </Form>
          </div>
        </Container>
      </div>

      <Container className="py-4 py-md-5">
        <Row className="pt-3 pb-4 py-md-1 py-lg-3">
          {/* Promo text + Social account links */}
          <Col lg={3} className="text-center text-lg-start pb-sm-2 pb-md-0 mb-4 mb-md-5 mb-lg-0">
            <h4 className="pb-2 mb-1">
              <Link href={logoHref ? logoHref : '/home/grocery'} className="text-dark-emphasis text-decoration-none">
                Cartzilla
              </Link>
            </h4>
            <p className="fs-sm text-body mx-auto" style={{ maxWidth: 480 }}>
              With a wide selection of fresh produce, pantry staples, and household essentials, we&apos;ve got all you
              need just a click away.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start gap-2 pt-2 pt-md-3">
              {[
                { name: 'Instagram', icon: 'ci-instagram', href: '#' },
                { name: 'Facebook', icon: 'ci-facebook', href: '#' },
                { name: 'Telegram', icon: 'ci-telegram', href: '#' },
                { name: 'WhatsApp', icon: 'ci-whatsapp', href: '#' },
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
          </Col>

          {/* Columns with links that are turned into accordion on screens < 500px wide (sm breakpoint) */}
          <Col lg={8} className="offset-lg-1">
            <Accordion>
              <Row xs={1} sm={4}>
                {[
                  {
                    id: 'categoriesLinks',
                    title: 'Categories',
                    links: [
                      { label: 'Weekly sale', href: '#weekly' },
                      { label: 'Special price', href: '#special' },
                      { label: 'Easter is coming', href: '#easter' },
                      { label: 'Italian dinner', href: '#italian' },
                      { label: 'Fresh fruits', href: '#fresh-fruits' },
                      { label: 'Exotic fruits', href: '#exotic-fruits' },
                    ],
                  },
                  {
                    id: 'companyLinks',
                    title: 'Company',
                    links: [
                      { label: 'Blog and news', href: '#blog' },
                      { label: 'About us', href: '#about' },
                      { label: 'FAQ page', href: '#faq' },
                      { label: 'Contact us', href: '#contact' },
                      { label: 'Careers', href: '#careers' },
                    ],
                  },
                  {
                    id: 'accountLinks',
                    title: 'Account',
                    links: [
                      { label: 'Your account', href: '#account' },
                      { label: 'Shipping rates & policies', href: '#shipping-rates' },
                      { label: 'Refunds & replacements', href: '#refunds' },
                      { label: 'Delivery info', href: '#delivery' },
                      { label: 'Order tracking', href: '#order-tracking' },
                      { label: 'Taxes & fees', href: '#taxes' },
                    ],
                  },
                  {
                    id: 'customerLinks',
                    title: 'Customer service',
                    links: [
                      { label: 'Payment methods', href: '#payment' },
                      { label: 'Money back guarantee', href: '#money-back' },
                      { label: 'Product returns', href: '#returns' },
                      { label: 'Support center', href: '#support' },
                      { label: 'Shipping', href: '#shipping' },
                      { label: 'Terms & conditions', href: '#terms' },
                    ],
                  },
                ].map(({ id, title, links }) => (
                  <Col key={id} as={AccordionItem} className="border-0" eventKey={id}>
                    <h6 className="accordion-header" id={id}>
                      <span className="text-dark-emphasis d-none d-sm-block">{title}</span>
                      <Accordion.Button className="py-3 d-sm-none">{title}</Accordion.Button>
                    </h6>
                    <Accordion.Collapse eventKey={id} className="d-sm-block" aria-labelledby={id}>
                      <Nav as="ul" className="flex-column gap-2 pt-sm-3 pb-3 pb-sm-0 mt-n1 mb-1 mb-sm-0">
                        {links.map(({ label, href }, index) => (
                          <Nav.Item key={index} as="li" className="d-flex w-100 pt-1">
                            <Nav.Link
                              as={Link}
                              href={href}
                              active={false}
                              className="animate-underline animate-target d-inline fw-normal text-truncate p-0"
                            >
                              {label}
                            </Nav.Link>
                          </Nav.Item>
                        ))}
                      </Nav>
                    </Accordion.Collapse>
                    <hr className="d-sm-none my-0" />
                  </Col>
                ))}
              </Row>
            </Accordion>
          </Col>
        </Row>
      </Container>

      {/* Copyright */}
      <Container as="p" className="fs-xs text-body text-center text-lg-start pb-md-3 mb-0">
        &copy; All rights reserved. Made with <i className="ci-heart-filled align-middle" /> by{' '}
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
      </Container>
    </footer>
  )
}

export default FooterGrocery
