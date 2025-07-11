'use client'

import useSWR from 'swr'
import BlogPostCard from './blog-post-card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Placeholder from 'react-bootstrap/Placeholder'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface BlogPostsCarouselProps {
  dataUrl: string
  className?: string
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
  date: string
}

const BlogPostsCarouselVariantOne = ({ dataUrl, className }: BlogPostsCarouselProps) => {
  const { data, error, isLoading } = useSWR<BlogPost[]>(dataUrl, fetcher)

  return (
    <div className={className}>
      {isLoading ? (
        <Row xs={1} sm={2} lg={3}>
          {Array.from({ length: 3 }, (_, index) => {
            const colClasses = ['', 'd-none d-sm-block', 'd-none d-lg-block']
            return (
              <Col key={index} className={colClasses[index]}>
                <Placeholder as="div" animation="wave" className="position-relative mb-3">
                  <Placeholder
                    className="ratio rounded"
                    style={{ '--cz-aspect-ratio': 'calc(305 / 416 * 100%)' } as React.CSSProperties}
                  />
                  <i className="ci-image position-absolute top-50 start-50 translate-middle fs-1 opacity-40" />
                </Placeholder>
                <Placeholder animation="glow" className="mb-2">
                  <Placeholder xs={4} size="xs" className="me-3" />
                  <Placeholder xs={4} size="xs" />
                </Placeholder>
                <Placeholder as="h5" animation="glow" className="mb-0">
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
            '900': {
              slidesPerView: 3,
            },
          }}
        >
          {(data || []).map(({ id, image, title, href, category, date }) => (
            <SwiperSlide key={id}>
              <BlogPostCard
                image={{ src: image, width: 624, height: 458, alt: 'Image' }}
                title={title}
                href={href}
                category={{ label: category.label, href: category.href }}
                date={date}
              />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination position-static mt-4" />
        </Swiper>
      )}
    </div>
  )
}

export default BlogPostsCarouselVariantOne
