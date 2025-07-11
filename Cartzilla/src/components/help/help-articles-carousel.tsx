'use client'

import useSWR from 'swr'
import Link from 'next/link'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface HelpArticleProps {
  image: string
  date: string
  title: string
  href: string
}

const HelpArticlesCarousel = ({ heading, className }: { heading: string; className?: string }) => {
  const { data, error, isLoading } = useSWR<HelpArticleProps[]>('/data/help/popular-articles.json', fetcher)

  if (isLoading)
    return (
      <section className={className}>
        <Container className="text-center py-5">
          <h2 className="text-center pb-3 pb-lg-4">{heading}</h2>
          <Spinner animation="border" variant="body-tertiary" role="status" style={{ width: '3rem', height: '3rem' }} />
          <div className="pt-2">Loading...</div>
        </Container>
      </section>
    )

  if (error)
    return (
      <section className={className}>
        <Container className="text-center py-5">
          <h2 className="text-center pb-3 pb-lg-4">{heading}</h2>
          <Alert variant="danger" className="d-inline-flex mb-0">
            <i className="ci-alert-triangle fs-lg pe-1 mt-1 me-2" />
            <div>
              <span className="fw-semibold">Error loading articles:</span> {error.message}
            </div>
          </Alert>
        </Container>
      </section>
    )

  return (
    <section className={className}>
      <Container className="py-5">
        <h2 className="text-center pb-2 pb-sm-3 pb-lg-4">{heading}</h2>
        <Row className="g-0 overflow-x-auto pb-3 mb-2 mb-md-3 mb-lg-4">
          <Col xs="auto" className="mx-auto">
            <Nav as="ul" variant="pills" className="flex-nowrap text-nowrap">
              {['Delivery', 'Returns & refunds', 'Payment', 'Order issues', 'Products & stock', 'Account'].map(
                (item, index) => (
                  <Nav.Item key={index} as="li">
                    <Nav.Link active={index === 0} className="rounded">
                      {item}
                    </Nav.Link>
                  </Nav.Item>
                )
              )}
            </Nav>
          </Col>
        </Row>
        <div className="position-relative mx-2 mx-sm-0">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            autoHeight={true}
            navigation={{
              prevEl: '.btn-prev',
              nextEl: '.btn-next',
            }}
            breakpoints={{
              '500': {
                slidesPerView: 2,
              },
              '992': {
                slidesPerView: 3,
              },
            }}
          >
            {(data || []).map(({ image, date, title, href }, index) => (
              <SwiperSlide key={index}>
                <Link href={href} className="d-flex hover-effect-scale bg-body-secondary rounded overflow-hidden">
                  <Image src={image} width={624} height={459} className="hover-effect-target" alt="Image" />
                </Link>
                <div className="pt-4">
                  <div className="text-body-tertiary fs-xs pb-2 mt-n1 mb-1">{date}</div>
                  <h3 className="h5 mb-0">
                    <Link href={href} className="hover-effect-underline">
                      {title}
                    </Link>
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="position-absolute top-50 start-0 z-2 translate-middle hover-effect-target mt-n5">
            <Button
              variant="outline-secondary"
              className="btn-prev btn-icon bg-body animate-slide-start rounded-circle"
              aria-label="Prev"
            >
              <i className="ci-chevron-left fs-lg animate-target" />
            </Button>
          </div>
          <div className="position-absolute top-50 start-100 z-2 translate-middle hover-effect-target mt-n5">
            <Button
              variant="outline-secondary"
              className="btn-next btn-icon bg-body animate-slide-end rounded-circle"
              aria-label="Next"
            >
              <i className="ci-chevron-right fs-lg animate-target" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HelpArticlesCarousel
