'use client'

import { useState } from 'react'
import useSWR from 'swr'
import Image from 'next/image'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Placeholder from 'react-bootstrap/Placeholder'
import PlaceholderButton from 'react-bootstrap/PlaceholderButton'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Controller, Navigation, EffectFade } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface Post {
  id: string
  image: string
  title: string
  excerpt: string
  href: string
}

const BlogContributorsPostsSlider = () => {
  const { data, error, isLoading } = useSWR<Post[]>('/data/blog/contributors-posts.json', fetcher)
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType | null>(null)

  return (
    <div className="py-5 my-1 my-sm-2 my-md-3 my-lg-4 my-xl-5">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h2 className="h3 mb-0">Charitable contributions</h2>
        {!isLoading && !error && (
          <Stack direction="horizontal" gap={2}>
            <Button
              variant="outline-secondary"
              id="prev-post"
              className="btn-icon rounded-circle animate-slide-start me-1"
              aria-label="Previous slide"
            >
              <i className="ci-chevron-left fs-lg animate-target" />
            </Button>
            <Button
              variant="outline-secondary"
              id="next-post"
              className="btn-icon rounded-circle animate-slide-end"
              aria-label="Next slide"
            >
              <i className="ci-chevron-right fs-lg animate-target" />
            </Button>
          </Stack>
        )}
      </div>
      {isLoading ? (
        <Row xs={1} md={2} className="g-0 overflow-hidden rounded-5">
          <Col className="order-md-2 user-select-none">
            <Placeholder as="div" animation="wave" className="position-relative h-100">
              <Placeholder className="ratio ratio-16x9 d-md-none" />
              <Placeholder className="position-absolute top-0 start-0 w-100 h-100" />
              <i className="ci-image position-absolute top-50 start-50 translate-middle display-4 opacity-40 mb-0" />
            </Placeholder>
          </Col>
          <Col className="bg-dark order-md-1 py-5 px-4 px-sm-5" data-bs-theme="dark">
            <div className="py-sm-2 py-md-3 my-xl-2 my-xxl-3">
              <Placeholder as="h5" animation="glow">
                <Placeholder xs={12} size="sm" />
                <Placeholder xs={8} size="sm" />
              </Placeholder>
              <Placeholder as="p" animation="glow" className="mb-4">
                <Placeholder xs={12} size="xs" />
                <Placeholder xs={12} size="xs" />
                <Placeholder xs={12} size="xs" />
                <Placeholder xs={8} size="xs" />
              </Placeholder>
              <PlaceholderButton variant="light" animation="wave" xs={5} sm={4} md={5}>
                &nbsp;
              </PlaceholderButton>
            </div>
          </Col>
        </Row>
      ) : error ? (
        <Alert variant="danger" className="d-inline-flex fs-sm mb-0">
          <i className="ci-alert-triangle fs-nase pe-1 mt-1 me-2" />
          <div>
            <span className="fw-semibold">Error loading posts:</span> {error.message}
          </div>
        </Alert>
      ) : (
        <Row xs={1} md={2} className="g-0 overflow-hidden rounded-5">
          <Col className="order-md-2 user-select-none">
            <Swiper
              modules={[Controller, EffectFade]}
              onSwiper={setControlledSwiper}
              allowTouchMove={false}
              loop={true}
              effect="fade"
              className="h-100"
            >
              {(data || []).map(({ id, image }) => (
                <SwiperSlide key={id}>
                  <div className="ratio ratio-16x9" />
                  <Image fill src={image} className="object-fit-cover" sizes="880px" alt="Image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col className="bg-dark order-md-1 py-5 px-4 px-sm-5" data-bs-theme="dark">
            <Swiper
              modules={[Controller, Navigation]}
              controller={{ control: controlledSwiper }}
              spaceBetween={40}
              loop={true}
              speed={400}
              navigation={{
                prevEl: '#prev-post',
                nextEl: '#next-post',
              }}
              className="py-sm-2 py-md-3 my-xl-2 my-xxl-3"
            >
              {(data || []).map(({ id, title, excerpt, href }) => (
                <SwiperSlide key={id}>
                  <h3 className="h5">{title}</h3>
                  <p className="text-body fs-sm pb-4">{excerpt}</p>
                  <Link href={href} className="btn btn-outline-light">
                    Read more
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default BlogContributorsPostsSlider
