import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeaderElectronics from '@/components/layout/header-electronics'
import ValuesCarousel from './values-carousel'
import OpenPositions from './open-positions'
import SubscriptionVlogElectronics from '@/components/shop/subscription-vlog-electronics'
import FooterElectronics from '@/components/layout/footer-electronics'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import AccordionItem from 'react-bootstrap/AccordionItem'
import AccordionHeader from 'react-bootstrap/AccordionHeader'
import AccordionBody from 'react-bootstrap/AccordionBody'
import Lightbox from '@/components/lightbox'

export const metadata: Metadata = {
  title: 'Cartzilla | About v.1',
}

const About_V1_Page = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderElectronics />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Breadcrumb */}
      <Breadcrumb as={Container} className="pt-3 my-3 my-md-4">
        <li className="breadcrumb-item">
          <Link href="/home">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          About
        </li>
      </Breadcrumb>

      {/* Hero */}
      <Container as="section">
        <Row>
          <Col md={7} className="order-md-2 mb-4 mb-md-0">
            <div className="position-relative h-100">
              <div className="ratio ratio-16x9" />
              <Image
                priority
                fill
                src="/img/about/v1/hero.jpg"
                sizes="1000px"
                className="object-fit-cover rounded-5"
                alt="Image"
              />
            </div>
          </Col>
          <Col md={5} className="order-md-1">
            <div className="position-relative py-5 px-4 px-sm-5">
              <span
                className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip"
                style={{ background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' }}
              />
              <span
                className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip"
                style={{ background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' }}
              />
              <div className="position-relative z-1 py-md-2 py-lg-4 py-xl-5 px-xl-2 px-xxl-4 my-xxl-3">
                <h1 className="pb-1 pb-md-2 pb-lg-3">Cartzilla - More than a retailer</h1>
                <p className="text-dark-emphasis pb-sm-2 pb-lg-0 mb-4 mb-lg-5">
                  Since 2015, we have been fulfilling the small dreams and big plans of millions of people. You can find
                  literally everything here.
                </p>
                <Button href="#mission" variant="outline-dark" size="lg" className="animate-slide-down">
                  Learn more
                  <i className="ci-arrow-down fs-lg animate-target ms-2 me-n1" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Stats */}
      <Container as="section" className="py-5 mt-md-2 mt-lg-4">
        <Row xs={2} md={4} className="g-4">
          {[
            ['14k', 'products available for purchase'],
            ['120m', 'users visited site from 2015'],
            ['800+', 'employees around the world'],
            ['92%', 'of our customers return'],
          ].map((item, index) => (
            <Col key={index} className="text-center">
              <div className="display-4 text-dark-emphasis mb-2">{item[0]}</div>
              <p className="fs-sm mb-0">{item[1]}</p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CEO quotation (Mission) */}
      <Container
        as="section"
        id="mission"
        className="pt-3 pt-sm-4 pt-lg-5 mt-lg-2 mt-xl-4 mt-xxl-5"
        style={{ scrollMarginTop: 60 }}
      >
        <div className="text-center mx-auto" style={{ maxWidth: 690 }}>
          <h2 className="text-body fs-sm fw-normal">Mission</h2>
          <h3 className="h1 pb-2 pb-md-3 mx-auto" style={{ maxWidth: 400 }}>
            The best products at fair prices
          </h3>
          <p className="fs-xl pb-2 pb-md-3 pb-lg-4">
            &quot;We believe that things exist to make life easier, more pleasant and kinder. That&apos;s why the search
            for the right thing should be quick, convenient and enjoyable. We do not just sell household appliances and
            electronics, but comfort and accessibility.&quot;
          </p>
          <div className="d-inline-flex mb-3" style={{ width: 64 }}>
            <Image src="/img/about/v1/avatar.jpg" width={128} height={128} className="rounded-circle" alt="Avatar" />
          </div>
          <h6 className="mb-0">William Lacker, Cartzilla CEO</h6>
        </div>
      </Container>

      {/* Principles */}
      <Container as="section" className="pt-5">
        <Row className="pt-2 pt-sm-3 pt-md-4 pt-lg-5">
          <Col md={5} lg={6} className="pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
            <Image src="/img/about/v1/delivery.jpg" width={954} height={954} className="rounded-5" alt="Image" />
          </Col>
          <Col md={7} lg={6} className="pt-md-3 pt-xl-4 pt-xxl-5">
            <div className="ps-md-3 ps-lg-4 ps-xl-5 ms-xxl-4">
              <h2 className="text-body fs-sm fw-normal">Principles</h2>
              <h3 className="h1 pb-1 pb-sm-2 pb-lg-3">The main principles that will allow us to grow</h3>
              <p className="pb-xl-3">
                Cartzilla is a comprehensive solution to fulfill any customer&apos;s needs, serving as both the starting
                point and end destination of their search. It operates as a reliable assistant, dedicated to eliminating
                the need for any unpleasant compromises, making their dreams a reality, and empowering them to think
                big.
              </p>
              <Accordion defaultActiveKey="0" className="accordion-alt-icon">
                {[
                  [
                    'Customer focus',
                    "We prioritize understanding and anticipating our customers' needs, delivering an exceptional and personalized experience from start to finish.",
                  ],
                  [
                    'Betting on reputation',
                    'We value a solid reputation built on integrity, transparency, and quality - ensuring our customers trust and rely on our brand.',
                  ],
                  [
                    'Fast, convenient and enjoyable',
                    "We've streamlined our process for speed, convenience, and an enjoyable shopping experience, redefining online standards for our delighted customers.",
                  ],
                ].map((item, index) => (
                  <AccordionItem key={index} eventKey={`${index}`}>
                    <AccordionHeader as="h3" className="animate-underline">
                      <span className="animate-target me-2">{item[0]}</span>
                    </AccordionHeader>
                    <AccordionBody>{item[1]}</AccordionBody>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Values (Carousel of icon boxes) */}
      <ValuesCarousel />

      {/* Video + Blog post */}
      <Container as="section" className="pt-5 mt-2 mt-sm-3 mt-md-4 mt-lg-5">
        <Row xs={1} md={2} className="g-4">
          <Col>
            <div className="position-relative h-100">
              <div className="ratio ratio-16x9" />
              <Image
                src="/img/about/v1/video-cover.jpg"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-fit-cover rounded-5"
                alt="Image"
              />
              <div className="position-absolute start-0 bottom-0 d-flex align-items-end w-100 h-100 z-2 p-4">
                <Lightbox
                  href="https://www.youtube.com/watch?v=Sqqj_14wBxU"
                  gallery="video"
                  className="btn btn-lg btn-light rounded-pill m-md-2"
                >
                  <i className="ci-play fs-lg ms-n1 me-2" />
                  Play
                </Lightbox>
              </div>
            </div>
          </Col>
          <Col>
            <div className="bg-body-tertiary rounded-5 py-5 px-4 px-sm-5">
              <div className="py-md-3 py-lg-4 py-xl-5 px-lg-4 px-xl-5 my-lg-2 my-xl-4 my-xxl-5">
                <h2 className="h3 pb-sm-1 pb-lg-2">The role of philanthropy in building a better world</h2>
                <p className="pb-sm-2 pb-lg-0 mb-4 mb-lg-5">
                  Charitable contributions are a vital aspect of building a better world. These contributions come in
                  various forms, including monetary donations...
                </p>
                <Link href="#" className="btn btn-lg btn-outline-dark">
                  Learn more
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Open positions (Carousel of cards) */}
      <OpenPositions />

      {/* Subscription form + Vlog section */}
      <SubscriptionVlogElectronics />
    </main>

    {/* Page footer */}
    <FooterElectronics />
  </>
)

export default About_V1_Page
