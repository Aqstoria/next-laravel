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

const FooterMarketplace = () => {
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
      <Container className="pb-md-3">
        {/* Features */}
        <div className="border-bottom py-5">
          <Row xs={2} md={4} className="g-4 gx-sm-5 py-sm-1 py-md-2 py-lg-3 mb-n2 mb-md-0">
            {[
              {
                icon: 'ci-layers-2',
                title: 'Subscription-based access',
                description: 'Stay ahead of trends, always having fresh and modern assets.',
              },
              {
                icon: 'ci-click',
                title: 'Regularly updated content',
                description: 'Find everything you need in one place, saving time and effort.',
              },
              {
                icon: 'ci-grid-2',
                title: 'Exclusive collections',
                description: 'Partner with renowned designers and artists to create exclusive collections.',
              },
              {
                icon: 'ci-check-search',
                title: 'User-friendly search',
                description: 'Spend less time searching and more time creating.',
              },
            ].map(({ icon, title, description }, index) => (
              <Col key={index} className="mb-2 mb-md-0">
                <i className={`${icon} fs-xl text-dark-emphasis mb-3`} />
                <h6 className="pb-2 mb-1">{title}</h6>
                <p className="fs-sm text-body mb-0">{description}</p>
              </Col>
            ))}
          </Row>
        </div>

        {/* Subscription + Links */}
        <div className="py-5">
          <Row className="py-sm-1 py-md-2 py-lg-3">
            {/* Subscription + Social buttons */}
            <Col lg={5} className="mb-4 mb-sm-5 mb-lg-0">
              <h6 className="mb-4">Join our newsletter, get discounts 🔥</h6>
              <Form
                noValidate
                className="position-relative d-flex gap-2 pb-sm-2 pb-lg-0 mb-4 mb-lg-5"
                validated={validated}
                onSubmit={handleSubmit}
              >
                <Form.Control
                  type="email"
                  size="lg"
                  className="rounded-pill text-start"
                  placeholder="Your email"
                  aria-label="Your email address"
                  style={{ maxWidth: 340 }}
                  required
                />
                <Form.Control.Feedback tooltip type="invalid" className="bg-transparent p-0">
                  Please enter your email address!
                </Form.Control.Feedback>
                <Button type="submit" size="lg" className="rounded-pill">
                  Subscribe
                </Button>
              </Form>
              <div className="d-flex gap-3">
                {[
                  { name: 'Instagram', icon: 'ci-instagram', href: '#' },
                  { name: 'Facebook', icon: 'ci-facebook', href: '#' },
                  { name: 'YouTube', icon: 'ci-youtube', href: '#' },
                  { name: 'Telegram', icon: 'ci-telegram', href: '#' },
                ].map(({ name, icon, href }, index) => (
                  <Button
                    key={index}
                    href={href}
                    variant="secondary"
                    className="btn-icon rounded-circle"
                    aria-label={`Follow us on ${name}`}
                  >
                    <i className={icon} />
                  </Button>
                ))}
              </div>
            </Col>

            {/* Columns with links that are turned into accordion on screens < 500px wide (sm breakpoint) */}
            <Col lg={7}>
              <Accordion>
                <Row xs={1} sm={3}>
                  {[
                    {
                      id: 'categoriesLinks',
                      title: 'Categories',
                      links: [
                        { label: 'Vectors', href: '#vectors' },
                        { label: 'Photos', href: '#photos' },
                        { label: '3D illustrations', href: '#3d' },
                        { label: 'AI images', href: '#ai' },
                        { label: 'Templates', href: '#templates' },
                        { label: 'Mockups', href: '#mockups' },
                      ],
                    },
                    {
                      id: 'membersLinks',
                      title: 'For members',
                      links: [
                        { label: 'Licenses', href: '#licenses' },
                        { label: 'Return policy', href: '#return' },
                        { label: 'Payment methods', href: '#payment' },
                        { label: 'Become a vendor', href: '#vendor' },
                      ],
                    },
                    {
                      id: 'supportLinks',
                      title: 'Support',
                      links: [
                        { label: 'FAQs', href: '#faq' },
                        { label: 'Search guide', href: '#search' },
                        { label: 'Contact', href: '#contact' },
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
        </div>

        {/* Copyright */}
        <p className="fs-xs text-body text-center text-lg-start mb-0">
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
        </p>
      </Container>
    </footer>
  )
}

export default FooterMarketplace
