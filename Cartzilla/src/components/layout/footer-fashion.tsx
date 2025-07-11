'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Ratio from 'react-bootstrap/Ratio'
import Accordion from 'react-bootstrap/Accordion'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

const FooterFashion = ({ className }: { className?: string }) => {
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
    <footer className={`footer${className ? ` ${className}` : ''}`}>
      {/* Instagram feed */}
      <Container as="section">
        <div className="text-center pt-xxl-3 pb-2 pb-md-3">
          <h2 className="pb-2 mb-1">
            <span className="animate-underline">
              <a className="animate-target text-dark-emphasis text-decoration-none" href="#">
                #cartzilla
              </a>
            </span>
          </h2>
          <p>Find more inspiration on our Instagram</p>
        </div>
        <SimpleBar className="pb-3 mb-n3">
          <div className="d-flex gap-2 gap-md-3 gap-lg-4" style={{ minWidth: 700 }}>
            {[
              { href: '#', src: '/img/instagram/01.jpg', alt: 'Instagram image' },
              { href: '#', src: '/img/instagram/02.jpg', alt: 'Instagram image' },
              { href: '#', src: '/img/instagram/03.jpg', alt: 'Instagram image' },
              { href: '#', src: '/img/instagram/04.jpg', alt: 'Instagram image' },
              { href: '#', src: '/img/instagram/05.jpg', alt: 'Instagram image' },
            ].map(({ href, src, alt }, index) => (
              <a
                key={index}
                className="hover-effect-scale hover-effect-opacity position-relative w-100 overflow-hidden"
                href={href}
              >
                <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 opacity-0 z-1"></span>
                <i className="ci-instagram hover-effect-target fs-4 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2" />
                <Ratio aspectRatio="1x1" className="hover-effect-target">
                  <Image src={src} width={320} height={320} alt={alt} />
                </Ratio>
              </a>
            ))}
          </div>
        </SimpleBar>
      </Container>

      {/* Main footer */}
      <Container as="section" className="pt-sm-2 pt-md-3 pt-lg-4 pb-4 mt-5">
        <Row className="pb-5 mb-lg-3">
          {/* Columns with links that are turned into accordion on screens < 500px wide (sm breakpoint) */}
          <Col md={8} xl={7} className="pb-2 pb-md-0 mb-4 mb-md-0 mt-n3 mt-sm-0">
            <Accordion>
              <Row xs={1} sm={3}>
                {[
                  {
                    id: 'categoriesLinks',
                    title: 'Categories',
                    links: [
                      { label: 'For women', href: '#women' },
                      { label: 'For men', href: '#men' },
                      { label: 'Home clothes', href: '#home-clothes' },
                      { label: 'Accessories', href: '#accessories' },
                      { label: 'Sale', href: '#sale' },
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
                  <Col key={id} as={Accordion.Item} className="border-0" eventKey={id}>
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

          {/* Subscription */}
          <Col md={4} className="offset-xl-1">
            <h6 className="mb-4">Join us and stay up to date</h6>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Check inline label="Woman" id="check-woman" defaultChecked />
              <Form.Check inline label="Man" id="check-man" />
              <Form.Check inline label="Sale" id="check-sale" />
              <div className="position-relative mt-3">
                <Form.Control
                  type="email"
                  size="lg"
                  className="bg-image-none text-start"
                  placeholder="Enter email"
                  aria-label="Your email address"
                  required
                />
                <Form.Control.Feedback tooltip type="invalid" className="bg-transparent p-0">
                  Please enter your email address!
                </Form.Control.Feedback>
                <Button
                  type="submit"
                  variant="secondary"
                  className="btn-icon btn-ghost fs-xl border-0 position-absolute top-0 end-0 mt-1 me-1"
                  aria-label="Submit your email address"
                >
                  <i className="ci-arrow-up-right" />
                </Button>
              </div>
            </Form>
          </Col>
        </Row>

        {/* Social account links */}
        <div className="d-flex justify-content-center justify-content-lg-start gap-2 mt-n2 mt-md-0">
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
              overlay={<Tooltip className="tooltip-transparent fs-xs mb-n2">{name}</Tooltip>}
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

        {/* Copyright + Payment methods */}
        <div className="d-lg-flex align-items-center border-top pt-4 mt-3">
          <div className="d-flex gap-2 gap-sm-3 justify-content-center ms-lg-auto mb-3 mb-md-4 mb-lg-0 order-lg-2">
            <div>
              <Image
                src="/img/payment-methods/visa-light-mode.svg"
                className="d-none-dark"
                width={58}
                height={40}
                alt="Visa"
              />
              <Image
                src="/img/payment-methods/visa-dark-mode.svg"
                className="d-none d-block-dark"
                width={58}
                height={40}
                alt="Visa"
              />
            </div>
            <div>
              <Image
                src="/img/payment-methods/paypal-light-mode.svg"
                className="d-none-dark"
                width={58}
                height={40}
                alt="PayPal"
              />
              <Image
                src="/img/payment-methods/paypal-dark-mode.svg"
                className="d-none d-block-dark"
                width={58}
                height={40}
                alt="PayPal"
              />
            </div>
            <div>
              <Image src="/img/payment-methods/mastercard.svg" width={58} height={40} alt="Mastercard" />
            </div>
            <div>
              <Image
                src="/img/payment-methods/google-pay-light-mode.svg"
                className="d-none-dark"
                width={58}
                height={40}
                alt="Google Pay"
              />
              <Image
                src="/img/payment-methods/google-pay-dark-mode.svg"
                className="d-none d-block-dark"
                width={58}
                height={40}
                alt="Google Pay"
              />
            </div>
            <div>
              <Image
                src="/img/payment-methods/apple-pay-light-mode.svg"
                className="d-none-dark"
                width={58}
                height={40}
                alt="Apple Pay"
              />
              <Image
                src="/img/payment-methods/apple-pay-dark-mode.svg"
                className="d-none d-block-dark"
                width={58}
                height={40}
                alt="Apple Pay"
              />
            </div>
          </div>
          <div className="d-md-flex justify-content-center order-lg-1">
            <Nav as="ul" className="justify-content-center gap-4 order-md-3 mb-4 mb-md-0">
              {[
                { label: 'Privacy', href: '#privacy' },
                { label: 'Affiliates', href: '#affiliates' },
                { label: 'Terms of use', href: '#terms' },
              ].map(({ label, href }, index) => (
                <Nav.Item key={index} as="li" className="animate-underline">
                  <Nav.Link as={Link} href={href} active={false} className="fs-xs fw-normal p-0 animate-target">
                    {label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
            <div className="vr text-body-secondary opacity-25 mx-4 d-none d-md-inline-block order-md-2"></div>
            <p className="fs-xs text-center text-lg-start mb-0 order-md-1">
              &copy; All rights reserved. Made by{' '}
              <span className="animate-underline">
                <a
                  className="animate-target text-dark-emphasis text-decoration-none"
                  href="https://createx.studio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Createx Studio
                </a>
              </span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default FooterFashion
