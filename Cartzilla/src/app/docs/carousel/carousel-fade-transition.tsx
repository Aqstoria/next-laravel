'use client'

import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Button from 'react-bootstrap/Button'
import Ratio from 'react-bootstrap/Ratio'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

const CarouselFadeTransitionDemo = () => {
  const code = `'use client'

import Button from 'react-bootstrap/Button'
import Ratio from 'react-bootstrap/Ratio'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

export default function CarouselFadeTransitionDemo() {
  return (
    <Swiper
      className="hover-effect-opacity"
      modules={[EffectFade, Navigation]}
      effect="fade"
      loop={true}
      navigation={{
        prevEl: '.btn-prev',
        nextEl: '.btn-next',
      }}
    >
      <SwiperSlide>
        <Ratio aspectRatio="16x9" className="bg-info-subtle rounded">
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-5">
            First
          </div>
        </Ratio>
      </SwiperSlide>
      <SwiperSlide>
        <Ratio aspectRatio="16x9" className="bg-danger-subtle rounded">
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-5">
            Second
          </div>
        </Ratio>
      </SwiperSlide>
      <SwiperSlide>
        <Ratio aspectRatio="16x9" className="bg-warning-subtle rounded">
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-5">
            Third
          </div>
        </Ratio>
      </SwiperSlide>

      {/* Prev button */}
      <div className="position-absolute top-50 start-0 z-2 translate-middle-y ms-3 ms-sm-4 hover-effect-target opacity-0">
        <Button
          variant="secondary"
          className="btn-prev btn-icon bg-body border-0 rounded-circle animate-slide-start"
          aria-label="Prev"
        >
          <i className="ci-chevron-left fs-lg animate-target"/>
        </Button>
      </div>

      {/* Next button */}
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
  )
}`

  return (
    <section id="carousel-fade" className="docs-section pb-sm-2 mb-5">
      <h4>Fade transition</h4>
      <DocsComponentDemo code={code}>
        <Swiper
          className="hover-effect-opacity"
          modules={[EffectFade, Navigation]}
          effect="fade"
          loop={true}
          navigation={{
            prevEl: '.btn-prev',
            nextEl: '.btn-next',
          }}
        >
          <SwiperSlide>
            <Ratio aspectRatio="16x9" className="bg-info-subtle rounded">
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-5">
                First
              </div>
            </Ratio>
          </SwiperSlide>
          <SwiperSlide>
            <Ratio aspectRatio="16x9" className="bg-danger-subtle rounded">
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-5">
                Second
              </div>
            </Ratio>
          </SwiperSlide>
          <SwiperSlide>
            <Ratio aspectRatio="16x9" className="bg-warning-subtle rounded">
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-5">
                Third
              </div>
            </Ratio>
          </SwiperSlide>
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
      </DocsComponentDemo>
    </section>
  )
}

export default CarouselFadeTransitionDemo
