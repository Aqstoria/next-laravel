'use client'

import useSWR from 'swr'
import BlogPostCard from './blog-post-card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Placeholder from 'react-bootstrap/Placeholder'
import Button from 'react-bootstrap/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/scrollbar'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface BlogPostsCarouselProps {
  heading: string
  dataUrl: string
  className?: string
  id?: string
}

interface BlogPost {
  id: string
  image: string
  title: string
  href: string
  category: {
    label: string
    href: string
  }
  author: {
    name: string
    href: string
  }
  date: string
}

const BlogPostsCarouselVariantTwo = ({ heading, dataUrl, className, id }: BlogPostsCarouselProps) => {
  const { data, error, isLoading } = useSWR<BlogPost[]>(dataUrl, fetcher)

  return (
    <Container as="section" className={className}>
      <Row className="py-2 py-xxl-3">
        <Col lg={3} className="pb-2 mb-4">
          <h2 className="text-center text-lg-start mb-lg-5">{heading}</h2>
          {!isLoading && !error && (
            <div className="d-flex justify-content-center justify-content-lg-start gap-2">
              <Button
                variant="outline-secondary"
                size="lg"
                className={`btn-prev${id ? `-${id}` : ''} btn-icon animate-slide-start rounded-circle me-1`}
                aria-label="Prev"
              >
                <i className="ci-chevron-left fs-xl animate-target" />
              </Button>
              <Button
                variant="outline-secondary"
                size="lg"
                className={`btn-next${id ? `-${id}` : ''} btn-icon animate-slide-end rounded-circle`}
                aria-label="Next"
              >
                <i className="ci-chevron-right fs-xl animate-target" />
              </Button>
            </div>
          )}
        </Col>
        <Col lg={9}>
          {isLoading ? (
            <Row xs={1} sm={2} md={3}>
              {Array.from({ length: 3 }, (_, index) => {
                const colClasses = ['', 'd-none d-sm-block', 'd-none d-md-block']
                return (
                  <Col key={index} className={colClasses[index]}>
                    <Placeholder as="div" animation="wave" className="position-relative mb-3">
                      <Placeholder
                        className="ratio rounded-4"
                        style={{ '--cz-aspect-ratio': 'calc(260 / 306 * 100%)' } as React.CSSProperties}
                      />
                      <i className="ci-image position-absolute top-50 start-50 translate-middle fs-1 opacity-40" />
                    </Placeholder>
                    <Placeholder as="div" animation="glow" className="mb-2">
                      <Placeholder xs={4} size="xs" />
                    </Placeholder>
                    <Placeholder as="h6" animation="glow" className="mb-2">
                      <Placeholder xs={12} size="sm" />
                      <Placeholder xs={8} size="sm" />
                    </Placeholder>
                    <Placeholder animation="glow" className="mb-0">
                      <Placeholder xs={4} size="xs" className="me-3" />
                      <Placeholder xs={4} size="xs" />
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
              modules={[Navigation, Scrollbar]}
              slidesPerView={1}
              spaceBetween={24}
              navigation={{
                prevEl: `.btn-prev${id ? `-${id}` : ''}`,
                nextEl: `.btn-next${id ? `-${id}` : ''}`,
              }}
              scrollbar={{
                el: '.swiper-scrollbar',
              }}
              breakpoints={{
                '500': {
                  slidesPerView: 2,
                },
                '768': {
                  slidesPerView: 3,
                },
              }}
            >
              {(data || []).map(({ id, image, title, href, category, author, date }) => (
                <SwiperSlide key={id}>
                  <BlogPostCard
                    small
                    image={{ src: image, width: 480, height: 408, alt: 'Image' }}
                    title={title}
                    href={href}
                    category={{ label: category.label, href: category.href }}
                    author={{ name: author.name, href: author.href }}
                    date={date}
                    rounded={4}
                  />
                </SwiperSlide>
              ))}
              <div className="pt-3 mt-2 mt-sm-3 mt-md-4">
                <div className="swiper-scrollbar position-static" style={{ height: '.125rem' }}></div>
              </div>
            </Swiper>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default BlogPostsCarouselVariantTwo
