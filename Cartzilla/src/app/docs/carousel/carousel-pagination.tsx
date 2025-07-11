'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Ratio from 'react-bootstrap/Ratio'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const CarouselPaginationDemo = () => {
  const code = `'use client'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Ratio from 'react-bootstrap/Ratio'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function CarouselPaginationDemo() {
  return (
    <Row xs={1} md={2} className="g-4">
      <Col>

        {/* Pagination: Bullets */}
        <Swiper
          className="hover-effect-opacity"
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          loop={true}
          navigation={{
            prevEl: '.btn-prev',
            nextEl: '.btn-next',
          }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <Ratio aspectRatio="16x9" className="bg-body-tertiary">
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                1
              </div>
            </Ratio>
          </SwiperSlide>
          <SwiperSlide>
            <Ratio aspectRatio="16x9" className="bg-body-tertiary">
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                2
              </div>
            </Ratio>
          </SwiperSlide>
          <SwiperSlide>
            <Ratio aspectRatio="16x9" className="bg-body-tertiary">
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                3
              </div>
            </Ratio>
          </SwiperSlide>
          <div className="position-absolute top-50 start-0 z-2 translate-middle-y ms-3 hover-effect-target opacity-0">
            <Button
              variant="outline-secondary"
              className="btn-prev btn-icon animate-slide-start rounded-circle me-1"
              aria-label="Prev"
            >
              <i className="ci-chevron-left fs-lg animate-target"/>
            </Button>
          </div>
          <div className="position-absolute top-50 end-0 z-2 translate-middle-y me-3 hover-effect-target opacity-0">
            <Button
              variant="outline-secondary"
              className="btn-next btn-icon animate-slide-end rounded-circle"
              aria-label="Next"
            >
              <i className="ci-chevron-right fs-lg animate-target"/>
            </Button>
          </div>
        </Swiper>

      </Col>
      <Col>

        {/* Pagination: Progress bar */}
        <Swiper
          className="hover-effect-opacity"
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          navigation={{
            prevEl: '.btn-prev',
            nextEl: '.btn-next',
          }}
          pagination={{ type: 'progressbar' }}
        >
          <SwiperSlide>
            <Ratio aspectRatio="16x9" className="bg-body-tertiary">
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                1
              </div>
            </Ratio>
          </SwiperSlide>
          <SwiperSlide>
            <Ratio aspectRatio="16x9" className="bg-body-tertiary">
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                2
              </div>
            </Ratio>
          </SwiperSlide>
          <SwiperSlide>
            <Ratio aspectRatio="16x9" className="bg-body-tertiary">
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                3
              </div>
            </Ratio>
          </SwiperSlide>
          <div className="position-absolute top-50 start-0 z-2 translate-middle-y ms-3 hover-effect-target opacity-0">
            <Button
              variant="outline-secondary"
              className="btn-prev btn-icon animate-slide-start rounded-circle me-1"
              aria-label="Prev"
            >
              <i className="ci-chevron-left fs-lg animate-target"/>
            </Button>
          </div>
          <div className="position-absolute top-50 end-0 z-2 translate-middle-y me-3 hover-effect-target opacity-0">
            <Button
              variant="outline-secondary"
              className="btn-next btn-icon animate-slide-end rounded-circle"
              aria-label="Next"
            >
              <i className="ci-chevron-right fs-lg animate-target"/>
            </Button>
          </div>
        </Swiper>

      </Col>
      <Col>

        {/* Pagination: Fraction */}
        <Swiper
          className="hover-effect-opacity"
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          navigation={{
            prevEl: '.btn-prev',
            nextEl: '.btn-next',
          }}
          pagination={{
            el: '.swiper-pagination',
            type: 'fraction',
          }}
        >
          <SwiperSlide>
            <Ratio aspectRatio="16x9" className="bg-body-tertiary">
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                1
              </div>
            </Ratio>
          </SwiperSlide>
          <SwiperSlide>
            <Ratio aspectRatio="16x9" className="bg-body-tertiary">
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                2
              </div>
            </Ratio>
          </SwiperSlide>
          <SwiperSlide>
            <Ratio aspectRatio="16x9" className="bg-body-tertiary">
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                3
              </div>
            </Ratio>
          </SwiperSlide>
          <div className="position-absolute top-50 start-0 z-2 translate-middle-y ms-3 hover-effect-target opacity-0">
            <Button
              variant="outline-secondary"
              className="btn-prev btn-icon animate-slide-start rounded-circle me-1"
              aria-label="Prev"
            >
              <i className="ci-chevron-left fs-lg animate-target"/>
            </Button>
          </div>
          <div className="position-absolute top-50 end-0 z-2 translate-middle-y me-3 hover-effect-target opacity-0">
            <Button
              variant="outline-secondary"
              className="btn-next btn-icon animate-slide-end rounded-circle"
              aria-label="Next"
            >
              <i className="ci-chevron-right fs-lg animate-target"/>
            </Button>
          </div>
          <div className="swiper-pagination text-body-secondary fs-6 opacity-50 fw-semibold mb-2" />
        </Swiper>

      </Col>
      <Col>

        {/* Pagination: Scrollbar */}
        <Swiper
          className="hover-effect-opacity"
          modules={[Navigation, Scrollbar]}
          spaceBetween={20}
          navigation={{
            prevEl: '.btn-prev',
            nextEl: '.btn-next',
          }}
          scrollbar={{ draggable: true }}
          mousewheel={true}
        >
          <SwiperSlide>
            <Ratio aspectRatio="16x9" className="bg-body-tertiary">
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                1
              </div>
            </Ratio>
          </SwiperSlide>
          <SwiperSlide>
            <Ratio aspectRatio="16x9" className="bg-body-tertiary">
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                2
              </div>
            </Ratio>
          </SwiperSlide>
          <SwiperSlide>
            <Ratio aspectRatio="16x9" className="bg-body-tertiary">
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                3
              </div>
            </Ratio>
          </SwiperSlide>
          <div className="position-absolute top-50 start-0 z-2 translate-middle-y ms-3 hover-effect-target opacity-0">
            <Button
              variant="outline-secondary"
              className="btn-prev btn-icon animate-slide-start rounded-circle me-1"
              aria-label="Prev"
            >
              <i className="ci-chevron-left fs-lg animate-target"/>
            </Button>
          </div>
          <div className="position-absolute top-50 end-0 z-2 translate-middle-y me-3 hover-effect-target opacity-0">
            <Button
              variant="outline-secondary"
              className="btn-next btn-icon animate-slide-end rounded-circle"
              aria-label="Next"
            >
              <i className="ci-chevron-right fs-lg animate-target"/>
            </Button>
          </div>
        </Swiper>

      </Col>
    </Row>
  )
}`

  return (
    <section id="carousel-pagination" className="docs-section pb-sm-2 mb-5">
      <h4>Pagination</h4>
      <DocsComponentDemo code={code}>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Swiper
              className="hover-effect-opacity"
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              loop={true}
              navigation={{
                prevEl: '.btn-prev',
                nextEl: '.btn-next',
              }}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <Ratio aspectRatio="16x9" className="bg-body-tertiary">
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                    1
                  </div>
                </Ratio>
              </SwiperSlide>
              <SwiperSlide>
                <Ratio aspectRatio="16x9" className="bg-body-tertiary">
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                    2
                  </div>
                </Ratio>
              </SwiperSlide>
              <SwiperSlide>
                <Ratio aspectRatio="16x9" className="bg-body-tertiary">
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                    3
                  </div>
                </Ratio>
              </SwiperSlide>
              <div className="position-absolute top-50 start-0 z-2 translate-middle-y ms-3 hover-effect-target opacity-0">
                <Button
                  variant="outline-secondary"
                  className="btn-prev btn-icon animate-slide-start rounded-circle me-1"
                  aria-label="Prev"
                >
                  <i className="ci-chevron-left fs-lg animate-target" />
                </Button>
              </div>
              <div className="position-absolute top-50 end-0 z-2 translate-middle-y me-3 hover-effect-target opacity-0">
                <Button
                  variant="outline-secondary"
                  className="btn-next btn-icon animate-slide-end rounded-circle"
                  aria-label="Next"
                >
                  <i className="ci-chevron-right fs-lg animate-target" />
                </Button>
              </div>
            </Swiper>
          </Col>
          <Col>
            <Swiper
              className="hover-effect-opacity"
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              navigation={{
                prevEl: '.btn-prev',
                nextEl: '.btn-next',
              }}
              pagination={{ type: 'progressbar' }}
            >
              <SwiperSlide>
                <Ratio aspectRatio="16x9" className="bg-body-tertiary">
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                    1
                  </div>
                </Ratio>
              </SwiperSlide>
              <SwiperSlide>
                <Ratio aspectRatio="16x9" className="bg-body-tertiary">
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                    2
                  </div>
                </Ratio>
              </SwiperSlide>
              <SwiperSlide>
                <Ratio aspectRatio="16x9" className="bg-body-tertiary">
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                    3
                  </div>
                </Ratio>
              </SwiperSlide>
              <div className="position-absolute top-50 start-0 z-2 translate-middle-y ms-3 hover-effect-target opacity-0">
                <Button
                  variant="outline-secondary"
                  className="btn-prev btn-icon animate-slide-start rounded-circle me-1"
                  aria-label="Prev"
                >
                  <i className="ci-chevron-left fs-lg animate-target" />
                </Button>
              </div>
              <div className="position-absolute top-50 end-0 z-2 translate-middle-y me-3 hover-effect-target opacity-0">
                <Button
                  variant="outline-secondary"
                  className="btn-next btn-icon animate-slide-end rounded-circle"
                  aria-label="Next"
                >
                  <i className="ci-chevron-right fs-lg animate-target" />
                </Button>
              </div>
            </Swiper>
          </Col>
          <Col>
            <Swiper
              className="hover-effect-opacity"
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              navigation={{
                prevEl: '.btn-prev',
                nextEl: '.btn-next',
              }}
              pagination={{
                el: '.swiper-pagination',
                type: 'fraction',
              }}
            >
              <SwiperSlide>
                <Ratio aspectRatio="16x9" className="bg-body-tertiary">
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                    1
                  </div>
                </Ratio>
              </SwiperSlide>
              <SwiperSlide>
                <Ratio aspectRatio="16x9" className="bg-body-tertiary">
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                    2
                  </div>
                </Ratio>
              </SwiperSlide>
              <SwiperSlide>
                <Ratio aspectRatio="16x9" className="bg-body-tertiary">
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                    3
                  </div>
                </Ratio>
              </SwiperSlide>
              <div className="position-absolute top-50 start-0 z-2 translate-middle-y ms-3 hover-effect-target opacity-0">
                <Button
                  variant="outline-secondary"
                  className="btn-prev btn-icon animate-slide-start rounded-circle me-1"
                  aria-label="Prev"
                >
                  <i className="ci-chevron-left fs-lg animate-target" />
                </Button>
              </div>
              <div className="position-absolute top-50 end-0 z-2 translate-middle-y me-3 hover-effect-target opacity-0">
                <Button
                  variant="outline-secondary"
                  className="btn-next btn-icon animate-slide-end rounded-circle"
                  aria-label="Next"
                >
                  <i className="ci-chevron-right fs-lg animate-target" />
                </Button>
              </div>
              <div className="swiper-pagination text-body-secondary fs-6 opacity-50 fw-semibold mb-2" />
            </Swiper>
          </Col>
          <Col>
            <Swiper
              className="hover-effect-opacity"
              modules={[Navigation, Scrollbar]}
              spaceBetween={20}
              navigation={{
                prevEl: '.btn-prev',
                nextEl: '.btn-next',
              }}
              scrollbar={{ draggable: true }}
              mousewheel={true}
            >
              <SwiperSlide>
                <Ratio aspectRatio="16x9" className="bg-body-tertiary">
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                    1
                  </div>
                </Ratio>
              </SwiperSlide>
              <SwiperSlide>
                <Ratio aspectRatio="16x9" className="bg-body-tertiary">
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                    2
                  </div>
                </Ratio>
              </SwiperSlide>
              <SwiperSlide>
                <Ratio aspectRatio="16x9" className="bg-body-tertiary">
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                    3
                  </div>
                </Ratio>
              </SwiperSlide>
              <div className="position-absolute top-50 start-0 z-2 translate-middle-y ms-3 hover-effect-target opacity-0">
                <Button
                  variant="outline-secondary"
                  className="btn-prev btn-icon animate-slide-start rounded-circle me-1"
                  aria-label="Prev"
                >
                  <i className="ci-chevron-left fs-lg animate-target" />
                </Button>
              </div>
              <div className="position-absolute top-50 end-0 z-2 translate-middle-y me-3 hover-effect-target opacity-0">
                <Button
                  variant="outline-secondary"
                  className="btn-next btn-icon animate-slide-end rounded-circle"
                  aria-label="Next"
                >
                  <i className="ci-chevron-right fs-lg animate-target" />
                </Button>
              </div>
            </Swiper>
          </Col>
        </Row>
      </DocsComponentDemo>
    </section>
  )
}

export default CarouselPaginationDemo
