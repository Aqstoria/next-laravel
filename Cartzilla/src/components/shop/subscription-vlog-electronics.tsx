'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

const SubscriptionVlogElectronics = () => {
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
    <section className="bg-body-tertiary py-5">
      <Container className="pt-sm-2 pt-md-3 pt-lg-4 pt-xl-5">
        <Row>
          <Col md={6} lg={5} className="mb-5 mb-md-0">
            <h2 className="h4 mb-2">Sign up to our newsletter</h2>
            <p className="text-body pb-2 pb-ms-3">Receive our latest updates about our products &amp; promotions</p>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="d-flex pb-1 pb-sm-2 pb-md-3 pb-lg-0 mb-4 mb-lg-5"
            >
              <Form.Control type="email" size="lg" className="w-100 me-2" placeholder="Your email" required />
              <Button type="submit" size="lg">
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
                  <i className={`${icon} fs-base`} />
                </Button>
              ))}
            </div>
          </Col>
          <Col md={6} lg={5} xl={4} className="offset-lg-1 offset-xl-2">
            <ul className="list-unstyled d-flex flex-column gap-4 ps-md-4 ps-lg-0 mb-3">
              {[
                {
                  image: '/img/home/electronics/vlog/01.jpg',
                  title: '5 New Cool Gadgets You Must See on Cartzilla - Cheap Budget',
                  time: '6:16',
                  href: '#',
                },
                {
                  image: '/img/home/electronics/vlog/02.jpg',
                  title: '5 Super Useful Gadgets on Cartzilla You Must Have in 2025',
                  time: '10:20',
                  href: '#',
                },
                {
                  image: '/img/home/electronics/vlog/03.jpg',
                  title: 'Top 5 New Amazing Gadgets on Cartzilla You Must See',
                  time: '8:40',
                  href: '#',
                },
              ].map(({ image, title, time, href }, index) => (
                <Nav key={index} as="li" className="flex-nowrap align-items-center position-relative">
                  <div className="flex-shrink-0" style={{ width: 140 }}>
                    <Image src={image} width={280} height={172} className="rounded" alt="Cover image" />
                  </div>
                  <div className="ps-3">
                    <div className="fs-xs text-body-secondary lh-sm mb-2">{time}</div>
                    <Nav.Link as={Link} href={href} className="fs-sm hover-effect-underline stretched-link p-0">
                      {title}
                    </Nav.Link>
                  </div>
                </Nav>
              ))}
            </ul>
            <Nav className="ps-md-4 ps-lg-0">
              <Nav.Link as={Link} href="#" className="btn animate-underline text-decoration-none px-0">
                <span className="animate-target">View all</span>
                <i className="ci-chevron-right fs-base ms-1" />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SubscriptionVlogElectronics
