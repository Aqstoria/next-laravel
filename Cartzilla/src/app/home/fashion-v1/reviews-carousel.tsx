'use client'

import useSWR from 'swr'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Placeholder from 'react-bootstrap/Placeholder'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import StarRating from '@/components/reviews/star-rating'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Controller, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface Review {
  image: string
  rating: number
  name: string
  review: string
}

const ReviewsCarouselFashion = () => {
  const { data, error, isLoading } = useSWR<Review[]>('/data/fashion/reviews.json', fetcher)

  if (isLoading)
    return (
      <Row xs={1} sm={2} lg={3}>
        {Array.from({ length: 3 }, (_, index) => (
          <Col key={index} className={index === 1 ? 'd-none d-sm-block' : index === 2 ? 'd-none d-lg-block' : ''}>
            <Card body className="h-100 border-0 rounded-4 p-sm-2">
              <div className="d-flex align-items-center mb-3">
                <Placeholder as="div" animation="wave" className="position-relative" style={{ width: 80 }}>
                  <Placeholder className="ratio ratio-1x1 rounded" />
                  <i className="ci-image position-absolute top-50 start-50 translate-middle fs-2 opacity-40" />
                </Placeholder>
                <div className="w-100 ps-2 ms-1">
                  <StarRating rating={5} dark className="fs-xs opacity-50 pb-2 mb-1" />
                  <Placeholder as="div" animation="glow" className="mb-0">
                    <Placeholder xs={6} size="sm" />
                  </Placeholder>
                </div>
              </div>
              <Placeholder animation="glow" className="mb-0">
                <Placeholder as="div" xs={12} size="xs" />
                <Placeholder as="div" xs={12} size="xs" />
                <Placeholder as="div" xs={12} size="xs" />
                <Placeholder as="div" xs={12} size="xs" />
              </Placeholder>
            </Card>
          </Col>
        ))}
      </Row>
    )

  if (error)
    return (
      <Alert variant="danger" className="d-inline-flex mb-0">
        <i className="ci-alert-triangle fs-lg pe-1 mt-1 me-2" />
        <div>
          <span className="fw-semibold">Error loading reviews:</span> {error.message}
        </div>
      </Alert>
    )

  return (
    <div className="position-relative pb-xxl-3">
      <Button
        variant="outline-secondary"
        className="btn-icon bg-body rounded-circle animate-slide-start position-absolute top-50 start-0 z-2 translate-middle d-none d-sm-inline-flex mt-n4"
        id="reviewsPrev"
        aria-label="Previous slide"
      >
        <i className="ci-chevron-left fs-lg animate-target" />
      </Button>
      <Button
        variant="outline-secondary"
        className="btn-icon bg-body rounded-circle animate-slide-end position-absolute top-50 start-100 z-2 translate-middle d-none d-sm-inline-flex mt-n4"
        id="reviewsNext"
        aria-label="Next slide"
      >
        <i className="ci-chevron-right fs-lg animate-target" />
      </Button>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={24}
        loop={true}
        navigation={{
          prevEl: '#reviewsPrev',
          nextEl: '#reviewsNext',
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
      >
        {(data || []).map(({ image, rating, name, review }, index) => (
          <SwiperSlide key={index} className="h-auto">
            <Card body className="h-100 border-0 rounded-4 p-sm-2">
              <div className="d-flex align-items-center mb-3">
                <div className="flex-shrink-0" style={{ width: 80 }}>
                  <Image src={image} width={160} height={160} alt="Image" />
                </div>
                <div className="ps-2 ms-1">
                  <StarRating rating={rating} className="fs-xs pb-2 mb-1" />
                  <h3 className="h6 mb-0">{name}</h3>
                </div>
              </div>
              <p className="mb-0">{review}</p>
            </Card>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination position-static pt-3 mt-sm-1 mt-md-2 mt-lg-3"></div>
      </Swiper>
    </div>
  )
}

export default ReviewsCarouselFashion
