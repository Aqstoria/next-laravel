import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeaderFurniture from '@/components/layout/header-furniture'
import FooterFurniture from '@/components/layout/footer-furniture'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ContactV3Form from './contact-form'

export const metadata: Metadata = {
  title: 'Cartzilla | Contact v.3',
}

const Contact_V3_Page = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderFurniture />

    {/* Page content */}
    <main className="content-wrapper">
      <Container className="py-5 mb-2 mb-sm-3 mb-md-4 mb-lg-5 mt-lg-3 mt-xl-4">
        <h1 className="text-center">Contact us</h1>
        <p className="text-center pb-2 pb-sm-3">Fill out the form below and we will reply within 24 hours</p>

        {/* Form + Image */}
        <Row as="section" xs={1} md={2} className="g-0 overflow-hidden rounded-5">
          <Col className="bg-body-tertiary py-5 px-4 px-xl-5">
            <ContactV3Form />
          </Col>
          <Col className="position-relative">
            <Image
              priority
              fill
              src="/img/contact/form-image.jpg"
              sizes="972px"
              className="object-fit-cover"
              alt="Image"
            />
          </Col>
        </Row>

        {/* Contacts */}
        <Row as="section" xs={1} sm={2} lg={4} className="g-4 pt-5 pb-3 pb-md-4 pb-lg-3 mt-lg-0 mt-xxl-4">
          {[
            {
              icon: 'ci-phone-outgoing',
              heading: 'Call us directly',
              list: [
                ['Customers:', '+1 50 537 53 082', 'tel:+15053753082'],
                ['Franchise:', '+1 50 537 53 000', 'tel:+15053753000'],
              ],
            },
            {
              icon: 'ci-mail',
              heading: 'Send a message',
              list: [
                ['Customers:', 'info@cartzilla.com', 'mailto:info@cartzilla.com'],
                ['Franchise:', 'franchise@cartzilla.com', 'mailto:franchise@cartzilla.com'],
              ],
            },
            {
              icon: 'ci-map-pin',
              heading: 'Store location',
              list: [['New York 11741, USA'], ['396 Lillian Bolavandy, Holbrook']],
            },
            {
              icon: 'ci-clock',
              heading: 'Working hours',
              list: [['Mon - Fri 8:00 - 18:00'], ['Sut - Sun 10:00 - 16:00']],
            },
          ].map(({ icon, heading, list }, index) => (
            <Col key={index} className="text-center pt-1 pt-sm-2 pt-md-3">
              <div className="position-relative d-inline-block bg-body-tertiary text-dark-emphasis fs-xl rounded-circle p-4 mb-3">
                <i className={`${icon} position-absolute top-50 start-50 translate-middle`} />
              </div>
              <h3 className="h6">{heading}</h3>
              <ul className="list-unstyled m-0">
                {list.map((item, index) => (
                  <li key={index} className={item[1] ? 'nav animate-underline justify-content-center' : ''}>
                    {item[0]}
                    {item[1] && (
                      <a href={item[2]} className="nav-link animate-target fs-base ms-1 p-0">
                        {item[1]}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
        <hr className="my-lg-5" />

        {/* Help center CTA */}
        <section className="text-center pb-xxl-3 pt-4 pt-lg-3">
          <h2 className="pt-md-2 pt-lg-0">Looking for support?</h2>
          <p className="pb-2 pb-sm-3">
            We might already have what you&apos;re looking for. See our FAQs or head to our dedicated Help Center.
          </p>
          <Link href="#" className="btn btn-lg btn-outline-dark rounded-pill">
            Help Center
          </Link>
        </section>
      </Container>
    </main>

    {/* Page footer */}
    <FooterFurniture />
  </>
)

export default Contact_V3_Page
