import type { Metadata } from 'next'
import Image from 'next/image'
import HeaderFashion from '@/components/layout/header-fashion'
import FooterFashion from '@/components/layout/footer-fashion'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import PopoverBody from 'react-bootstrap/PopoverBody'
import Accordion from 'react-bootstrap/Accordion'
import AccordionItem from 'react-bootstrap/AccordionItem'
import AccordionHeader from 'react-bootstrap/AccordionHeader'
import AccordionBody from 'react-bootstrap/AccordionBody'
import Lightbox from '@/components/lightbox'

export const metadata: Metadata = {
  title: 'Cartzilla | Contact v.1',
}

const Contact_V1_Page = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderFashion />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Page title */}
      <section className="position-relative bg-body-tertiary py-4">
        <Image
          priority
          fill
          src="/img/contact/title-bg.png"
          sizes="3840px"
          className="object-fit-cover rtl-flip"
          alt="Background image"
        />
        <Container className="position-relative z-2 py-4 py-md-5 my-lg-3 my-xl-4 my-xxl-5">
          <Row className="pt-lg-2 pb-2 pb-sm-3 pb-lg-4">
            <Col xs={9} md={8} lg={6}>
              <h1 className="display-4 mb-lg-4">Contact us</h1>
              <p className="mb-0">Feel free to contact us and we will be happy to help you!</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact detaisl */}
      <Container as="section" className="pt-5 mt-2 mt-sm-3 mt-lg-4 mt-xl-5 mb-n3">
        <Row xs={1} sm={2} lg={4} className="g-4 pt-lg-2 pt-xl-0">
          {[
            {
              icon: 'ci-map-pin',
              title: 'Store location',
              details: ['New York 11741, USA', '396 Lillian Bolavandy, Holbrook'],
            },
            {
              icon: 'ci-phone-outgoing',
              title: 'Call us directly',
              details: ['Customers: 1 50 537 53 082', 'Franchise: 1 50 537 53 000'],
            },
            {
              icon: 'ci-mail',
              title: 'Send a message',
              details: ['Customers: help@cartzilla.com', 'Franchise: franchise@catzilla.com'],
            },
            {
              icon: 'ci-clock',
              title: 'Working hours',
              details: ['Mon - Fri 8:00 - 18:00', 'Sut - Sun 10:00 - 16:00'],
            },
          ].map(({ icon, title, details }, index) => (
            <Col key={index}>
              <div className="d-flex align-items-center">
                <i className={`${icon} fs-lg text-dark-emphasis`} />
                <h3 className="h6 ps-2 ms-1 mb-0">{title}</h3>
              </div>
              <hr className="text-dark-emphasis opacity-50 my-3 my-md-4" />
              <ul className="list-unstyled">
                {details.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Support / Help center */}
      <Container as="section" className="py-5 my-2 my-sm-3 my-lg-4 my-xl-5">
        <div className="d-sm-flex align-items-center justify-content-between py-xxl-3">
          <div className="mb-4 mb-sm-0 me-sm-4">
            <h2 className="h3">Looking for support?</h2>
            <p className="mb-0">
              We might already have what you&apos;re looking for. See our FAQs or head to our dedicated Help Center.
            </p>
          </div>
          <Button href="#" variant="outline-dark" size="lg">
            Help center
          </Button>
        </div>
      </Container>

      {/* Map */}
      <section className="position-relative bg-body-tertiary">
        <OverlayTrigger
          placement="top"
          overlay={
            <Popover>
              <PopoverBody>Click to view the map</PopoverBody>
            </Popover>
          }
        >
          <Lightbox
            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30908.594922615324!2d-73.07331970206108!3d40.788157341303005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8483b8bffed93%3A0x53467ceb834b7397!2s396%20Lillian%20Blvd%2C%20Holbrook%2C%20NY%2011741%2C%20USA!5e0!3m2!1sen!2s!4v1706086459668!5m2!1sen!2"
            gallery="map"
            fullscreen
            className="position-absolute top-50 start-50 translate-middle z-2 mt-lg-n4"
            style={{ width: 50 }}
            aria-label="Toggle map"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.5 54.6">
              <path
                d="M42.5 19.2C42.5 8.1 33.2-.7 22 0 12.4.7 4.7 8.5 4.2 18c-.2 2.7.3 5.3 1.1 7.7h0s3.4 10.4 17.4 25c.4.4 1 .4 1.4 0 13.6-13.3 17.4-25 17.4-25h0c.6-2 1-4.2 1-6.5z"
                fill="#ffffff"
              />
              <g fill="#222934">
                <path d="M20.4 31.8c-4.5 0-8.1-3.6-8.1-8.1s3.6-8.1 8.1-8.1 8.1 3.6 8.1 8.1-3.7 8.1-8.1 8.1zm0-14.2a6.06 6.06 0 0 0-6.1 6.1 6.06 6.06 0 0 0 6.1 6.1c3.3 0 6.1-2.7 6.1-6.1s-2.8-6.1-6.1-6.1z" />
                <circle cx="20.4" cy="23.7" r="3" />
                <path d="M20.4 54.5c-.6 0-1.1-.2-1.4-.6C5 39.3 1.5 29 1.4 28.5a21.92 21.92 0 0 1-1.2-8c.6-10.1 8.6-18.3 18.7-19C24.6 1.1 30 3 34.1 6.9c4.1 3.8 6.4 9.2 6.4 14.8 0 2.4-.4 4.7-1.2 6.9-.1.5-4 12-17.6 25.3-.3.4-.8.6-1.3.6zm-17-26.2c.8 2 4.9 11.6 17 24.2 13.2-13 17-24.5 17.1-24.6.7-2 1.1-4.1 1.1-6.3 0-5-2.1-9.9-5.8-13.3-3.7-3.5-8.6-5.2-13.7-4.8-9.1.6-16.4 8-16.9 17.1-.1 2.5.2 5 1.1 7.3l.1.4z" />
              </g>
            </svg>
          </Lightbox>
        </OverlayTrigger>
        <Image src="/img/contact/map.jpg" fill sizes="3840px" className="object-fit-cover" alt="Map" />
        <div className="d-none d-xxl-block" style={{ height: 600 }} />
        <div className="d-none d-xl-block d-xxl-none" style={{ height: 500 }} />
        <div className="d-none d-lg-block d-xl-none" style={{ height: 420 }} />
        <div className="d-none d-md-block d-lg-none" style={{ height: 350 }} />
        <div className="d-md-none" style={{ height: 300 }} />
        <span className="position-absolute top-0 start-0 z-1 w-100 h-100 bg-body opacity-25" />
      </section>

      {/* FAQ accordion */}
      <Container as="section" className="pt-5 mt-2 mt-sm-3 mt-lg-4 mt-xl-5">
        <h2 className="text-center pt-xxl-3 pb-lg-2 pb-xl-3">Popular questions</h2>
        <Row className="justify-content-center">
          <Col md={10} lg={9} xl={8}>
            <Accordion className="accordion-alt-icon">
              {[
                [
                  'How long will delivery take?',
                  'Delivery times vary based on your location and the chosen shipping method. Generally, our standard delivery takes up to 5 days, while our Express Delivery ensures your order reaches you within 1 day. Please note that these times may be subject to occasional variations due to unforeseen circumstances, but we do our best to meet these estimates.',
                ],
                [
                  'What payment methods do you accept?',
                  'We offer a range of secure payment options to provide you with flexibility and convenience. Accepted methods include major credit/debit cards, PayPal, and other secure online payment gateways. You can find the complete list of accepted payment methods during the checkout process.',
                ],
                [
                  'Do you ship internationally?',
                  'Yes, we proudly offer international shipping to cater to our global customer base. Shipping costs and delivery times will be automatically calculated at the checkout based on your selected destination. Please note that any customs duties or taxes applicable in your country are the responsibility of the customer.',
                ],
                [
                  'Do I need an account to place an order?',
                  'While you can place an order as a guest, creating an account comes with added benefits. By having an account, you can easily track your orders, manage your preferences, and enjoy a quicker checkout process for future purchases. It also allows us to provide you with personalized recommendations and exclusive offers.',
                ],
                [
                  'How can I track my order?',
                  'Once your order is dispatched, you will receive a confirmation email containing a unique tracking number. You can use this tracking number on our website to monitor the real-time status of your shipment. Additionally, logging into your account will grant you access to a comprehensive order history, including tracking information.',
                ],
                [
                  'What are the product refund conditions?',
                  'Our refund policy is designed to ensure customer satisfaction. Details can be found in our [refund policy page](insert link). In essence, we accept returns within [insert number] days of receiving the product, provided it is in its original condition with all tags and packaging intact. Refunds are processed promptly once the returned item is inspected and approved.',
                ],
                [
                  'Do I need to create an account to shop with you?',
                  'While guest checkout is available for your convenience, creating an account enhances your overall shopping experience. With an account, you can easily track your order status, save multiple shipping addresses, and enjoy a streamlined checkout process. Moreover, account holders receive early access to promotions and exclusive offers. Signing up is quick and hassle-free!',
                ],
                [
                  'Is there a minimum order value for free shipping?',
                  'Yes, we offer free shipping on orders exceeding $250. Orders below this threshold are subject to standard shipping fees, which will be displayed during the checkout process.',
                ],
              ].map((item, index) => (
                <AccordionItem key={index} eventKey={`${index}`}>
                  <AccordionHeader as="h3">
                    <span className="hover-effect-underline me-2">{item[0]}</span>
                  </AccordionHeader>
                  <AccordionBody>{item[1]}</AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </main>

    {/* Page footer */}
    <FooterFashion className="pt-5 mt-2 mt-sm-3 mt-lg-4 mt-xl-5" />
  </>
)

export default Contact_V1_Page
