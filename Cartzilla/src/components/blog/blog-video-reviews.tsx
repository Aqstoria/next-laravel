'use client'

import useSWR from 'swr'
import Link from 'next/link'
import VlogPostCard from '@/components/blog/vlog-post-card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Alert from 'react-bootstrap/Alert'
import Placeholder from 'react-bootstrap/Placeholder'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface Post {
  id: string
  image: string
  title: string
  time: string
  href: string
}

const BlogVideoReviews = () => {
  const { data, error, isLoading } = useSWR<Post[]>('/data/blog/video-reviews.json', fetcher)

  return (
    <Container as="section" className="pb-5 mb-1 mb-sm-2 mb-md-3 mb-lg-4 mb-xl-5">
      <div className="d-flex align-items-center justify-content-between pb-2 pb-sm-3 mb-3">
        <h2 className="h3 mb-0">Video reviews</h2>
        {!isLoading && !error && (
          <Nav className="ms-3">
            <Nav.Link as={Link} href="#" className="animate-underline px-0 py-2">
              <span className="animate-target">View all</span>
              <i className="ci-chevron-right fs-base ms-1" />
            </Nav.Link>
          </Nav>
        )}
      </div>
      {isLoading ? (
        <Row xs={1} sm={2} md={3} lg={4}>
          {Array.from({ length: 4 }, (_, index) => {
            const colClasses = ['', 'd-none d-sm-block', 'd-none d-md-block', 'd-none d-lg-block']
            return (
              <Col key={index} className={colClasses[index]}>
                <Placeholder as="div" animation="wave" className="position-relative mb-2">
                  <Placeholder
                    className="ratio rounded"
                    style={{ '--cz-aspect-ratio': 'calc(200 / 306 * 100%)' } as React.CSSProperties}
                  />
                  <i className="ci-play position-absolute top-50 start-50 translate-middle fs-1 opacity-40" />
                </Placeholder>
                <Placeholder animation="glow" className="mb-2">
                  <Placeholder xs={3} size="xs" />
                </Placeholder>
                <Placeholder as="h6" animation="glow" className="mb-0">
                  <Placeholder xs={12} size="sm" />
                  <Placeholder xs={8} size="sm" />
                </Placeholder>
              </Col>
            )
          })}
        </Row>
      ) : error ? (
        <Alert variant="danger" className="d-inline-flex mb-0">
          <i className="ci-alert-triangle fs-lg pe-1 mt-1 me-2" />
          <div>
            <span className="fw-semibold">Error loading posts:</span> {error.message}
          </div>
        </Alert>
      ) : (
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          breakpoints={{
            '500': {
              slidesPerView: 2,
            },
            '768': {
              slidesPerView: 3,
            },
            '992': {
              slidesPerView: 4,
            },
          }}
        >
          {(data || []).map(({ id, image, title, time, href }) => (
            <SwiperSlide key={id}>
              <VlogPostCard
                image={{
                  src: image,
                  width: 500,
                  height: 326,
                  alt: 'Image',
                }}
                href={href}
                title={title}
                time={time}
              />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination position-static mt-4" />
        </Swiper>
      )}
    </Container>
  )
}

export default BlogVideoReviews
