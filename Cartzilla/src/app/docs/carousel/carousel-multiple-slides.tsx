'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Button from 'react-bootstrap/Button'
import Ratio from 'react-bootstrap/Ratio'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const CarouselMultipleSlidesDemo = () => {
  const code = `'use client'

import Button from 'react-bootstrap/Button'
import Ratio from 'react-bootstrap/Ratio'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function CarouselMultipleSlidesDemo() {
  return (
    <div className="position-relative px-5">

      {/* External slider prev/next buttons */}
      <Button
        variant="outline-secondary"
        className="btn-icon animate-slide-start rounded-circle position-absolute top-50 start-0 translate-middle-y mt-n3"
        id="prev"
        aria-label="Prev"
      >
        <i className="ci-chevron-left fs-lg animate-target"/>
      </Button>
      <Button
        variant="outline-secondary"
        className="btn-icon animate-slide-end rounded-circle position-absolute top-50 end-0 translate-middle-y mt-n3"
        id="next"
        aria-label="Next"
      >
        <i className="ci-chevron-right fs-lg animate-target"/>
      </Button>

      {/* Slider */}
      <Swiper
        className="px-2"
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={16}
        loop={true}
        navigation={{
          prevEl: '#prev',
          nextEl: '#next',
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        breakpoints={{
          '600': {
            slidesPerView: 2,
          },
          '1000': {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <Ratio aspectRatio="4x3" className="bg-info-subtle rounded">
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-5">
              1
            </div>
          </Ratio>
        </SwiperSlide>
        <SwiperSlide>
          <Ratio aspectRatio="4x3" className="bg-success-subtle rounded">
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-5">
              2
            </div>
          </Ratio>
        </SwiperSlide>
        <SwiperSlide>
          <Ratio aspectRatio="4x3" className="bg-danger-subtle rounded">
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-5">
              3
            </div>
          </Ratio>
        </SwiperSlide>
        <SwiperSlide>
          <Ratio aspectRatio="4x3" className="bg-warning-subtle rounded">
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-5">
              4
            </div>
          </Ratio>
        </SwiperSlide>

        {/* Pagination (Bullets) */}
        <div className="swiper-pagination position-static mt-3" />
      </Swiper>
    </div>
  )
}`

  return (
    <section id="carousel-multiple-slides" className="docs-section pb-sm-2 mb-5">
      <h4>Multiple slides per view (Responsive)</h4>
      <DocsComponentDemo code={code}>
        <div className="position-relative px-5">
          <Button
            variant="outline-secondary"
            className="btn-icon animate-slide-start rounded-circle position-absolute top-50 start-0 translate-middle-y mt-n3"
            id="prev"
            aria-label="Prev"
          >
            <i className="ci-chevron-left fs-lg animate-target" />
          </Button>
          <Button
            variant="outline-secondary"
            className="btn-icon animate-slide-end rounded-circle position-absolute top-50 end-0 translate-middle-y mt-n3"
            id="next"
            aria-label="Next"
          >
            <i className="ci-chevron-right fs-lg animate-target" />
          </Button>
          <Swiper
            className="px-2"
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            navigation={{
              prevEl: '#prev',
              nextEl: '#next',
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            breakpoints={{
              '600': {
                slidesPerView: 2,
              },
              '1000': {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <Ratio aspectRatio="4x3" className="bg-info-subtle rounded">
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-5">
                  1
                </div>
              </Ratio>
            </SwiperSlide>
            <SwiperSlide>
              <Ratio aspectRatio="4x3" className="bg-success-subtle rounded">
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-5">
                  2
                </div>
              </Ratio>
            </SwiperSlide>
            <SwiperSlide>
              <Ratio aspectRatio="4x3" className="bg-danger-subtle rounded">
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-5">
                  3
                </div>
              </Ratio>
            </SwiperSlide>
            <SwiperSlide>
              <Ratio aspectRatio="4x3" className="bg-warning-subtle rounded">
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-5">
                  4
                </div>
              </Ratio>
            </SwiperSlide>
            <div className="swiper-pagination position-static mt-3" />
          </Swiper>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default CarouselMultipleSlidesDemo
