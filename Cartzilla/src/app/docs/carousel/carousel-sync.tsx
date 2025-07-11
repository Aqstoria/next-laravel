'use client'

import { useState } from 'react'
import DocsComponentDemo from '@/components/docs/docs-component-demo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Ratio from 'react-bootstrap/Ratio'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Controller, Navigation, EffectFlip } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-flip'

const CarouselSyncDemo = () => {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType | null>(null)

  const code = `'use client'

import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Ratio from 'react-bootstrap/Ratio'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Controller, Navigation, EffectFlip } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-flip'

export default function CarouselSyncDemo() {
  // store controlled swiper instance
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType | null>(null)


  return (
    <Row className="align-items-center">
      <Col md={5} className="mb-4 mb-md-0 pb-1 pb-md-0">

        {/* Controlled Swiper -> store swiper instance */}
        <Swiper
          modules={[Controller, EffectFlip]}
          onSwiper={setControlledSwiper}
          allowTouchMove={false}
          loop={true}
          effect="flip"
          flipEffect={{
            slideShadows: false,
          }}
        >
          <SwiperSlide>
            <Ratio aspectRatio="4x3" className="bg-success-subtle rounded">
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-5">
                <i className="ci-image text-success opacity-75"/>
              </div>
            </Ratio>
          </SwiperSlide>
          <SwiperSlide>
            <Ratio aspectRatio="4x3" className="bg-warning-subtle rounded">
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-5">
                <i className="ci-image text-warning opacity-75"/>
              </div>
            </Ratio>
          </SwiperSlide>
          <SwiperSlide>
            <Ratio aspectRatio="4x3" className="bg-info-subtle rounded">
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-5">
                <i className="ci-image text-info opacity-75"/>
              </div>
            </Ratio>
          </SwiperSlide>
        </Swiper>

      </Col>
      <Col md={7} className="ps-xl-5">

        {/* Main Swiper -> pass controlled swiper instance */}
        <Swiper
          className="text-center text-md-start"
          modules={[Controller, Navigation]}
          controller={{ control: controlledSwiper }}
          spaceBetween={32}
          loop={true}
          speed={400}
          navigation={{
            prevEl: '#prev-btn',
            nextEl: '#next-btn',
          }}
        >
          <SwiperSlide>
            <h3>First slide</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius pulvinar dui eu
              ullamcorper. Donec a nisl sed felis pretium posuere ut vitae arcu.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h3>Second slide</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius pulvinar dui eu
              ullamcorper. Donec a nisl sed felis pretium posuere ut vitae arcu.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <h3>Third slide</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius pulvinar dui eu
              ullamcorper. Donec a nisl sed felis pretium posuere ut vitae arcu.
            </p>
          </SwiperSlide>
          <div className="d-flex justify-content-center justify-content-md-start gap-2 pt-2">
            <Button
              variant="outline-secondary"
              className="btn-icon animate-slide-start rounded-circle me-1"
              id="prev-btn"
              aria-label="Prev"
            >
              <i className="ci-chevron-left fs-lg animate-target"/>
            </Button>
            <Button
              variant="outline-secondary"
              className="btn-icon animate-slide-end rounded-circle"
              id="next-btn"
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
    <section id="carousel-sync" className="docs-section">
      <h4>Synchronized sliders</h4>
      <DocsComponentDemo code={code}>
        <Row className="align-items-center">
          <Col md={5} className="mb-4 mb-md-0 pb-1 pb-md-0">
            <Swiper
              modules={[Controller, EffectFlip]}
              onSwiper={setControlledSwiper}
              allowTouchMove={false}
              loop={true}
              effect="flip"
              flipEffect={{
                slideShadows: false,
              }}
            >
              <SwiperSlide>
                <Ratio aspectRatio="4x3" className="bg-success-subtle rounded">
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-5">
                    <i className="ci-image text-success opacity-75" />
                  </div>
                </Ratio>
              </SwiperSlide>
              <SwiperSlide>
                <Ratio aspectRatio="4x3" className="bg-warning-subtle rounded">
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-5">
                    <i className="ci-image text-warning opacity-75" />
                  </div>
                </Ratio>
              </SwiperSlide>
              <SwiperSlide>
                <Ratio aspectRatio="4x3" className="bg-info-subtle rounded">
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center display-5">
                    <i className="ci-image text-info opacity-75" />
                  </div>
                </Ratio>
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col md={7} className="ps-xl-5">
            <Swiper
              className="text-center text-md-start"
              modules={[Controller, Navigation]}
              controller={{ control: controlledSwiper }}
              spaceBetween={32}
              loop={true}
              speed={400}
              navigation={{
                prevEl: '#prev-btn',
                nextEl: '#next-btn',
              }}
            >
              <SwiperSlide>
                <h3>First slide</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius pulvinar dui eu
                  ullamcorper. Donec a nisl sed felis pretium posuere ut vitae arcu.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Second slide</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius pulvinar dui eu
                  ullamcorper. Donec a nisl sed felis pretium posuere ut vitae arcu.
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <h3>Third slide</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius pulvinar dui eu
                  ullamcorper. Donec a nisl sed felis pretium posuere ut vitae arcu.
                </p>
              </SwiperSlide>
              <div className="d-flex justify-content-center justify-content-md-start gap-2 pt-2">
                <Button
                  variant="outline-secondary"
                  className="btn-icon animate-slide-start rounded-circle me-1"
                  id="prev-btn"
                  aria-label="Prev"
                >
                  <i className="ci-chevron-left fs-lg animate-target" />
                </Button>
                <Button
                  variant="outline-secondary"
                  className="btn-icon animate-slide-end rounded-circle"
                  id="next-btn"
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

export default CarouselSyncDemo
