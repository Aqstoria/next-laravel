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

interface ProductGroup {
  look: string
  products: Product[]
}

const PopularProductsCarouselFashion = () => {
  const { data, error, isLoading } = useSWR<ProductGroup[]>('/data/fashion/popular-products.json', fetcher)
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType | null>(null)

  if (isLoading)
    return (
      <Row className="align-items-lg-center py-xxl-3">
        <Col md={6} xl={5} className="offset-xl-1 order-md-2 mb-4 mb-md-0">
          <div className="ps-md-3 ps-lg-4 ps-xl-0">
            <h2 className="pb-4 mb-md-1 mb-lg-2 mb-xl-3">Popular products</h2>
            <div className="d-flex flex-column gap-3 gap-lg-4">
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center bg-body-tertiary rounded overflow-hidden animate-underline"
                >
                  <Placeholder as="div" animation="wave" className="position-relative" style={{ width: 110 }}>
                    <Placeholder className="ratio ratio-1x1 rounded" />
                    <i className="ci-image position-absolute top-50 start-50 translate-middle fs-2 opacity-40" />
                  </Placeholder>
                  <div className="w-100 p-3">
                    <Placeholder as="div" animation="glow" className="mb-1">
                      <Placeholder xs={9} size="xs" />
                    </Placeholder>
                    <Placeholder as="div" animation="glow" className="mb-0">
                      <Placeholder xs={4} />
                    </Placeholder>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
        <Col md={6} className="order-md-1">
          <Placeholder as="div" animation="wave" className="position-relative">
            <Placeholder
              className="ratio d-none d-md-block rounded-5"
              style={{ '--cz-aspect-ratio': 'calc(720 / 636 * 100%)' } as React.CSSProperties}
            />
            <Placeholder className="ratio ratio-4x3 d-md-none rounded-5" />
            <i className="ci-image position-absolute top-50 start-50 translate-middle display-4 opacity-40 m-0" />
          </Placeholder>
        </Col>
      </Row>
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
    <Row className="align-items-lg-center py-xxl-3">
      <Col md={6} xl={5} className="offset-xl-1 order-md-2 mb-4 mb-md-0">
        <div className="ps-md-3 ps-lg-4 ps-xl-0">
          <div className="d-flex align-items-center justify-content-between pb-4 mb-md-1 mb-lg-2 mb-xl-3">
            <h2 className="me-3 mb-0">Popular products</h2>
            <div className="d-flex gap-2">
              <Button
                variant="outline-secondary"
                className="btn-icon animate-slide-start rounded-circle me-1"
                id="popularPrev"
                aria-label="Previous slide"
              >
                <i className="ci-chevron-left fs-lg animate-target" />
              </Button>
              <Button
                variant="outline-secondary"
                className="btn-icon animate-slide-end rounded-circle"
                id="popularNext"
                aria-label="Next slide"
              >
                <i className="ci-chevron-right fs-lg animate-target" />
              </Button>
            </div>
          </div>
          <Swiper
            modules={[Controller, Navigation]}
            controller={{ control: controlledSwiper }}
            spaceBetween={24}
            loop={true}
            speed={400}
            navigation={{
              prevEl: '#popularPrev',
              nextEl: '#popularNext',
            }}
          >
            {(data || []).map((productGroup, index) => (
              <SwiperSlide key={index}>
                <div className="d-flex flex-column gap-3 gap-lg-4">
                  {productGroup.products.map(({ id, image, title, price, href }) => (
                    <div
                      key={id}
                      className="d-flex align-items-center position-relative bg-body-tertiary rounded overflow-hidden animate-underline"
                    >
                      <div className="flex-shrink-0" style={{ width: 110 }}>
                        <Image src={image as string} width={220} height={220} alt="Thumbnail" />
                      </div>
                      <Nav className="flex-column gap-2 min-w-0 p-3">
                        <Nav.Link as={Link} href={href} className="text-dark-emphasis stretched-link w-100 min-w-0 p-0">
                          <span className="animate-target text-truncate">{title}</span>
                        </Nav.Link>
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
                      </Nav>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Col>
      <Col md={6} className="order-md-1">
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
          {(data || []).map(({ look }, index) => (
            <SwiperSlide key={index}>
              <div
                className="ratio d-none d-md-block"
                style={{ '--cz-aspect-ratio': 'calc(720 / 636 * 100%' } as React.CSSProperties}
              />
              <div className="ratio ratio-4x3 d-md-none" />
              <Image fill src={look} sizes="1000px" className="object-fit-cover rounded-5" alt="Image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
    </Row>
  )
}

export default PopularProductsCarouselFashion
