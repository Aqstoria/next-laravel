import Link from 'next/link'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import AccordionItem from 'react-bootstrap/AccordionItem'
import AccordionButton from 'react-bootstrap/AccordionButton'
import AccordionCollapse from 'react-bootstrap/AccordionCollapse'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

const FooterElectronics = ({ className, logoHref }: { className?: string; logoHref?: string }) => (
  <footer className={`footer position-relative bg-dark${className ? ` ${className}` : ''}`}>
    <span className="position-absolute top-0 start-0 w-100 h-100 bg-body d-none d-block-dark"></span>
    <Container className="position-relative z-1 pt-sm-2 pt-md-3 pt-lg-4" data-bs-theme="dark">
      {/* Columns with links that are turned into accordion on screens < 500px wide (sm breakpoint) */}
      <Accordion className="py-5">
        <Row>
          <Col md={4} className="d-sm-flex flex-md-column align-items-center align-items-md-start pb-3 mb-sm-4">
            <h4 className="mb-sm-0 mb-md-4 me-4">
              <Link href={logoHref ? logoHref : '/home'} className="text-dark-emphasis text-decoration-none">
                Cartzilla
              </Link>
            </h4>
            <p className="text-body fs-sm text-sm-end text-md-start mb-sm-0 mb-md-3 ms-0 ms-sm-auto ms-md-0 me-4">
              Got questions? Contact us 24/7
            </p>
            <Dropdown style={{ maxWidth: 250 }}>
              <DropdownToggle variant="secondary" className="justify-content-between w-100">
                Help and consultation
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="#">Help center &amp; FAQ</DropdownItem>
                <DropdownItem href="#">Support chat</DropdownItem>
                <DropdownItem href="#">Open support ticket</DropdownItem>
                <DropdownItem href="#">Call center</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col md={8}>
            <Row xs={1} sm={3} className="gx-3 gx-md-4">
              {[
                {
                  id: 'companyLinks',
                  title: 'Company',
                  links: [
                    { label: 'About company', href: '#about' },
                    { label: 'Our team', href: '#team' },
                    { label: 'Careers', href: '#careers' },
                    { label: 'Contact us', href: '#contact' },
                    { label: 'News', href: '#news' },
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
                    <AccordionButton className="py-3 d-sm-none">{title}</AccordionButton>
                  </h6>
                  <AccordionCollapse eventKey={id} className="d-sm-block" aria-labelledby={id}>
                    <Nav as="ul" className="flex-column gap-2 pt-sm-3 pb-3 mt-n1 mb-1">
                      {links.map(({ label, href }, index) => (
                        <NavItem key={index} as="li" className="d-flex w-100 pt-1">
                          <NavLink
                            as={Link}
                            href={href}
                            active={false}
                            className="animate-underline animate-target d-inline fw-normal text-truncate p-0"
                          >
                            {label}
                          </NavLink>
                        </NavItem>
                      ))}
                    </Nav>
                  </AccordionCollapse>
                  <hr className="d-sm-none my-0" />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Accordion>

      {/* Category / tag links */}
      <div className="d-flex flex-column gap-3 pb-3 pb-md-4 pb-lg-5 mt-n2 mt-sm-n4 mt-lg-0 mb-4">
        <Nav as="ul" className="align-items-center text-body-tertiary gap-2">
          {[
            { label: 'Computers', href: '#computers' },
            { label: 'Smartphones', href: '#smartphones' },
            { label: 'TV, Video', href: '#tv' },
            { label: 'Speakers', href: '#speakers' },
            { label: 'Cameras', href: '#cameras' },
            { label: 'Printers', href: '#printers' },
            { label: 'Video Games', href: '#games' },
            { label: 'Headphones', href: '#headphones' },
            { label: 'Wearable', href: '#wearable' },
            { label: 'HDD/SSD', href: '#hsd' },
            { label: 'Smart Home', href: '#smart-home' },
            { label: 'Apple Devices', href: '#apple' },
            { label: 'Tablets', href: '#tablets' },
          ].map(({ label, href }, index, array) => (
            <NavItem key={index} as="li" className="d-flex animate-underline gap-2">
              <NavLink as={Link} href={href} active={false} className="fw-normal p-0 animate-target">
                {label}
              </NavLink>
              {index < array.length - 1 && <span className="px-1">/</span>}
            </NavItem>
          ))}
        </Nav>
        <Nav as="ul" className="align-items-center text-body-tertiary gap-2">
          {[
            { label: 'Monitors', href: '#monitors' },
            { label: 'Scanners', href: '#scanners' },
            { label: 'Servers', href: '#servers' },
            { label: 'Heating and Cooling', href: '#heating' },
            { label: 'E-readers', href: '#ereaders' },
            { label: 'Data Storage', href: '#data-storage' },
            { label: 'Networking', href: '#networking' },
            { label: 'Power Strips', href: '#power-strips' },
            { label: 'Plugs and Outlets', href: '#plugs' },
            { label: 'Detectors and Sensors', href: '#detectors' },
            { label: 'Accessories', href: '#accessories' },
          ].map(({ label, href }, index, array) => (
            <NavItem key={index} as="li" className="d-flex animate-underline gap-2">
              <NavLink as={Link} href={href} active={false} className="fw-normal p-0 animate-target">
                {label}
              </NavLink>
              {index < array.length - 1 && <span className="px-1">/</span>}
            </NavItem>
          ))}
        </Nav>
      </div>

      {/* Copyright + Payment methods */}
      <div className="d-md-flex align-items-center border-top py-4">
        <div className="d-flex gap-2 gap-sm-3 justify-content-center ms-md-auto mb-4 mb-md-0 order-md-2">
          {[
            { src: '/img/payment-methods/visa-dark-mode.svg', alt: 'Visa' },
            { src: '/img/payment-methods/mastercard.svg', alt: 'Mastercard' },
            { src: '/img/payment-methods/paypal-dark-mode.svg', alt: 'PayPal' },
            { src: '/img/payment-methods/google-pay-dark-mode.svg', alt: 'Google Pay' },
            { src: '/img/payment-methods/apple-pay-dark-mode.svg', alt: 'Apple Pay' },
          ].map(({ src, alt }, index) => (
            <div key={index}>
              <Image src={src} width={58} height={40} alt={alt} />
            </div>
          ))}
        </div>
        <p className="text-body fs-xs text-center text-md-start mb-0 me-4 order-md-1">
          &copy; All rights reserved. Made by{' '}
          <span className="animate-underline">
            <a
              className="animate-target text-dark-emphasis fw-medium text-decoration-none"
              href="https://createx.studio/"
              target="_blank"
              rel="noreferrer"
            >
              Createx Studio
            </a>
          </span>
        </p>
      </div>
    </Container>
  </footer>
)

export default FooterElectronics
