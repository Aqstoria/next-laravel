'use client'

import { useState } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Button from 'react-bootstrap/Button'
import Ratio from 'react-bootstrap/Ratio'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

const CarouselThumbnailsDemo = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  const code = `'use client'

import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Ratio from 'react-bootstrap/Ratio'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

export default function CarouselThumbnailsDemo() {
  // store thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  return (
    <>
      {/* Main Swiper -> pass thumbs swiper instance */}
      <Swiper
        className="hover-effect-opacity"
        modules={[Thumbs, Navigation]}
        loop={true}
        navigation={{
          prevEl: '.btn-prev',
          nextEl: '.btn-next',
        }}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {['primary', 'success', 'warning', 'danger', 'info', 'secondary', 'warning'].map((color, index) => (
          <SwiperSlide key={index}>
            <Ratio aspectRatio="16x9" className={\`bg-\${color}-subtle rounded\`}>
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                {index + 1}
              </div>
            </Ratio>
          </SwiperSlide>
        ))}
        <div className="position-absolute top-50 start-0 z-2 translate-middle-y ms-3 ms-sm-4 hover-effect-target opacity-0">
          <Button
            variant="secondary"
            className="btn-prev btn-icon bg-body border-0 rounded-circle animate-slide-start"
            aria-label="Prev"
          >
            <i className="ci-chevron-left fs-lg animate-target"/>
          </Button>
        </div>
        <div className="position-absolute top-50 end-0 z-2 translate-middle-y me-3 me-sm-4 hover-effect-target opacity-0">
          <Button
            variant="secondary"
            className="btn-next btn-icon bg-body border-0 rounded-circle animate-slide-end"
            aria-label="Next"
          >
            <i className="ci-chevron-right fs-lg animate-target"/>
          </Button>
        </div>
      </Swiper>

      {/* Thumbs Swiper -> store swiper instance */}
      {/* It is also required to set watchSlidesProgress prop */ }
      <Swiper
        className="swiper-load swiper-thumbs pt-2 mt-1"
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={12}
        slidesPerView={3}
        breakpoints={{
          '340': {
            slidesPerView: 4,
          },
          '500': {
            slidesPerView: 5,
          },
          '600': {
            slidesPerView: 6,
          },
          '768': {
            slidesPerView: 4,
          },
          '992': {
            slidesPerView: 5,
          },
          '1200': {
            slidesPerView: 6,
          },
        }}
      >
        {['primary', 'success', 'warning', 'danger', 'info', 'secondary', 'warning'].map((color, index) => (
          <SwiperSlide key={index} className="swiper-thumb">
            <Ratio aspectRatio="1x1" className={\`bg-\${color}-subtle rounded\`}>
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center fs-3 fw-semibold">
                {index + 1}
              </div>
            </Ratio>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}`

  return (
    <section id="carousel-thumbnails" className="docs-section pb-sm-2 mb-5">
      <h4>Thumbnails</h4>
      <DocsComponentDemo code={code}>
        <div style={{ maxWidth: 636 }}>
          <Swiper
            className="hover-effect-opacity"
            modules={[Thumbs, Navigation]}
            loop={true}
            navigation={{
              prevEl: '.btn-prev',
              nextEl: '.btn-next',
            }}
            thumbs={{ swiper: thumbsSwiper }}
          >
            {['primary', 'success', 'warning', 'danger', 'info', 'secondary', 'warning'].map((color, index) => (
              <SwiperSlide key={index}>
                <Ratio aspectRatio="16x9" className={`bg-${color}-subtle rounded`}>
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-4">
                    {index + 1}
                  </div>
                </Ratio>
              </SwiperSlide>
            ))}
            <div className="position-absolute top-50 start-0 z-2 translate-middle-y ms-3 ms-sm-4 hover-effect-target opacity-0">
              <Button
                variant="secondary"
                className="btn-prev btn-icon bg-body border-0 rounded-circle animate-slide-start"
                aria-label="Prev"
              >
                <i className="ci-chevron-left fs-lg animate-target" />
              </Button>
            </div>
            <div className="position-absolute top-50 end-0 z-2 translate-middle-y me-3 me-sm-4 hover-effect-target opacity-0">
              <Button
                variant="secondary"
                className="btn-next btn-icon bg-body border-0 rounded-circle animate-slide-end"
                aria-label="Next"
              >
                <i className="ci-chevron-right fs-lg animate-target" />
              </Button>
            </div>
          </Swiper>
          <Swiper
            className="swiper-load swiper-thumbs pt-2 mt-1"
            modules={[Thumbs]}
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={12}
            slidesPerView={3}
            breakpoints={{
              '340': {
                slidesPerView: 4,
              },
              '500': {
                slidesPerView: 5,
              },
              '600': {
                slidesPerView: 6,
              },
              '768': {
                slidesPerView: 4,
              },
              '992': {
                slidesPerView: 5,
              },
              '1200': {
                slidesPerView: 6,
              },
            }}
          >
            {['primary', 'success', 'warning', 'danger', 'info', 'secondary', 'warning'].map((color, index) => (
              <SwiperSlide key={index} className="swiper-thumb">
                <Ratio aspectRatio="1x1" className={`bg-${color}-subtle rounded`}>
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center fs-3 fw-semibold">
                    {index + 1}
                  </div>
                </Ratio>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </DocsComponentDemo>
    </section>
  )
}

export default CarouselThumbnailsDemo
