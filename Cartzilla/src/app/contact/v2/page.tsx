import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeaderFurniture from '@/components/layout/header-furniture'
import FooterFurniture from '@/components/layout/footer-furniture'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Lightbox from '@/components/lightbox'
import ContactV2Forms from './contact-forms'

export const metadata: Metadata = {
  title: 'Cartzilla | Contact v.2',
}

const Contact_V2_Page = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderFurniture />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Contact forms */}
      <section className="bg-body-tertiary pb-1 pb-sm-3 pb-md-4 pb-lg-5" style={{ marginTop: -110, paddingTop: 110 }}>
        <Container className="py-5 mb-xxl-3">
          <h1 className="text-center pb-2 pb-sm-3 mt-lg-3 mt-xl-4">Contact our specialists</h1>
          <ContactV2Forms />
        </Container>
      </section>

      {/* Contact info */}
      <Container as="section" className="pt-5 mt-xxl-3">
        <Row xs={1} sm={3} className="gy-4 gy-sm-0 pt-1 pt-sm-2 pt-md-3 pt-lg-4 pt-xl-5">
          {[
            { icon: 'ci-phone-outgoing', heading: 'Call us directly', link: ['+1 50 537 53 082', 'tel:+15053753082'] },
            {
              icon: 'ci-mail',
              heading: 'Send us a message',
              link: ['info@cartzilla.com', 'mailto:info@cartzilla.com'],
            },
            { icon: 'ci-help-circle', heading: 'Looking for support?', link: ['Help Center', '#'] },
          ].map(({ icon, heading, link }, index, arr) => (
            <Col key={index} className={`text-center${index === arr.length - 1 ? '' : ' mb-2 mb-sm-0'}`}>
              <i className={`${icon} bg-dark text-white fs-4 rounded-circle p-3 mb-3 d-inline-flex d-none-dark`} />
              <i
                className={`${icon} bg-body-secondary text-white fs-4 rounded-circle p-3 mb-3 d-none d-inline-flex-dark`}
              />
              <h3 className="text-body fs-sm fw-normal mb-2">{heading}</h3>
              <Nav className="animate-underline justify-content-center">
                <NavLink as={Link} href={link[1]} className="animate-target text-dark-emphasis fs-base p-0">
                  {link[0]}
                </NavLink>
              </Nav>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Store locations + Map in lightbox */}
      <Container as="section" className="py-1 py-sm-2 py-md-3 py-lg-4 py-xl-5 my-xxl-3">
        <Row xs={1} md={2} className="g-0 overflow-hidden rounded-5 my-5">
          <Col className="position-relative">
            <div className="ratio ratio-4x3" />
            <Image fill src="/img/blog/grid/v2/video01.jpg" sizes="972px" className="object-fit-cover" alt="Image" />
          </Col>
          <Col className="bg-body-tertiary order-md-1 py-5 px-4 px-xl-5">
            <div className="py-md-4 py-lg-5 px-md-4 px-lg-5">
              <h1 className="pb-2 pb-sm-3 pb-lg-0 mb-md-4 mb-lg-5">Our stores</h1>
              <ul className="list-unstyled pb-sm-2 mb-0">
                <li className="lh-lg">
                  New York 11741, USA
                  <br />
                  396 Lillian Bolavandy, Holbrook
                </li>
                <Nav as="li">
                  <Lightbox
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30908.594922615324!2d-73.07331970206108!3d40.788157341303005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8483b8bffed93%3A0x53467ceb834b7397!2s396%20Lillian%20Blvd%2C%20Holbrook%2C%20NY%2011741%2C%20USA!5e0!3m2!1sen!2s!4v1706086459668!5m2!1sen!2s"
                    className="nav-link animate-underline fw-semibold px-0"
                    gallery="map1"
                    fullscreen
                  >
                    <span className="animate-target">Show on map</span>
                    <i className="ci-chevron-right fs-lg ms-2" style={{ marginTop: '.1875rem' }} />
                  </Lightbox>
                </Nav>
              </ul>
              <hr />
              <ul className="list-unstyled pb-sm-2 mb-0">
                <li className="lh-lg pt-2">
                  California 32806, USA
                  <br />
                  514 S. Magnolia St., San Francisco
                </li>
                <Nav as="li">
                  <Lightbox
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.541405538252!2d-122.43545002315028!3d37.80078581065977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580da2de92663%3A0x343ead1106a153fa!2sMagnolia%20St%2C%20San%20Francisco%2C%20CA%2094123%2C%20USA!5e0!3m2!1sen!2s!4v1706785415174!5m2!1sen!2s"
                    className="nav-link animate-underline fw-semibold px-0"
                    gallery="map2"
                    fullscreen
                  >
                    <span className="animate-target">Show on map</span>
                    <i className="ci-chevron-right fs-lg ms-2" style={{ marginTop: '.1875rem' }} />
                  </Lightbox>
                </Nav>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </main>

    {/* Page footer */}
    <FooterFurniture />
  </>
)

export default Contact_V2_Page
