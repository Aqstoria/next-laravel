'use client'

import { useState } from 'react'
import useSWR from 'swr'
import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/types/product'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Placeholder from 'react-bootstrap/Placeholder'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Controller, Navigation, EffectFade } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const CollectionSliderFashion = () => {
  const { data, error, isLoading } = useSWR<Product[]>('/data/fashion/collection-products.json', fetcher)
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType | null>(null)

  if (isLoading)
    return (
      <>
        <div className="d-md-none text-center pb-3 mb-3">
          <p className="mb-2">New arrivals</p>
          <h2 className="mb-0">Meet the Cartzilla collection</h2>
        </div>
        <Row className="align-items-center pb-xxl-3">
          <Col md={7} className="order-md-2 mb-4 mb-md-0">
            <Placeholder as="div" animation="wave" className="position-relative">
              <Placeholder
                className="ratio rounded-5"
                style={{ '--cz-aspect-ratio': 'calc(720 / 746 * 100%)' } as React.CSSProperties}
              />
              <i className="ci-image position-absolute top-50 start-50 translate-middle display-4 opacity-40 m-0" />
            </Placeholder>
          </Col>
          <Col md={5} className="order-md-1 text-center">
            <div className="d-none d-md-block pb-3 mb-2 mb-lg-3 mx-auto" style={{ maxWidth: 306 }}>
              <p className="mb-2">New arrivals</p>
              <h2 className="mb-0">Meet the Cartzilla collection</h2>
            </div>
            <div className="px-4 px-lg-5">
              <div className="mx-auto" style={{ maxWidth: 306 }}>
                <Placeholder as="div" animation="wave" className="position-relative mb-2">
                  <Placeholder
                    className="ratio rounded"
                    style={{ '--cz-aspect-ratio': 'calc(308 / 274 * 100%)' } as React.CSSProperties}
                  />
                  <i className="ci-image position-absolute top-50 start-50 translate-middle fs-2 opacity-40" />
                </Placeholder>
                <div className="d-flex flex-column justify-content-center">
                  <Placeholder as="div" animation="glow" className="mb-1">
                    <Placeholder xs={9} size="xs" />
                  </Placeholder>
                  <Placeholder as="div" animation="glow" className="mb-0">
                    <Placeholder xs={4} />
                  </Placeholder>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </>
    )

  if (error)
    return (
      <Alert variant="danger" className="d-inline-flex mb-0">
        <i className="ci-alert-triangle fs-lg pe-1 mt-1 me-2" />
        <div>
          <span className="fw-semibold">Error loading products:</span> {error.message}
        </div>
      </Alert>
    )

  return (
    <>
      <div className="d-md-none text-center pb-3 mb-3">
        <p className="mb-2">New arrivals</p>
        <h2 className="mb-0">Meet the Cartzilla collection</h2>
      </div>
      <Row className="align-items-center pb-xxl-3">
        <Col md={7} className="order-md-2 mb-4 mb-md-0">
          <Swiper
            modules={[Controller, EffectFade]}
            onSwiper={setControlledSwiper}
            allowTouchMove={false}
            loop={true}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            className="user-select-none"
          >
            {(data || []).map(({ image }, index) => (
              <SwiperSlide key={index}>
                <Image src={image[1]} width={1100} height={1062} className="rounded-5" alt="Image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
        <Col md={5} className="order-md-1 text-center">
          <div className="d-none d-md-block pb-3 mb-2 mb-lg-3 mx-auto" style={{ maxWidth: 306 }}>
            <p className="mb-2">New arrivals</p>
            <h2 className="mb-0">Meet the Cartzilla collection</h2>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <Button
              variant="outline-secondary"
              className="btn-icon animate-slide-start rounded-circle mt-n5"
              id="collectionPrev"
              aria-label="Previous slide"
            >
              <i className="ci-chevron-left fs-lg animate-target" />
            </Button>
            <Swiper
              modules={[Controller, Navigation]}
              controller={{ control: controlledSwiper }}
              spaceBetween={24}
              loop={true}
              speed={400}
              navigation={{
                prevEl: '#collectionPrev',
                nextEl: '#collectionNext',
              }}
              className="mx-3 mx-lg-4"
              style={{ maxWidth: 306 }}
            >
              {(data || []).map(({ id, image, title, price, href }) => (
                <SwiperSlide key={id}>
                  <div className="animate-underline hover-effect-opacity">
                    <Link href={href} className="d-flex bg-body-tertiary rounded p-3 mb-3">
                      <Image src={image[0]} width={548} height={616} alt="Image" />
                    </Link>
                    <Nav className="justify-content-center mb-2">
                      <Nav.Link as={Link} href={href} className="animate-target min-w-0 text-dark-emphasis p-0">
                        <span className="text-truncate">{title}</span>
                      </Nav.Link>
                    </Nav>
                    <div className="h6 mb-0">
                      ${price[0].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      {price[1] && (
                        <del className="fs-sm fw-normal text-body-tertiary ms-1">
                          $
                          {price[1].toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </del>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Button
              variant="outline-secondary"
              className="btn-icon animate-slide-end rounded-circle mt-n5"
              id="collectionNext"
              aria-label="Next slide"
            >
              <i className="ci-chevron-right fs-lg animate-target" />
            </Button>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default CollectionSliderFashion
