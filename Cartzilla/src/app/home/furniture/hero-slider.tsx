'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Controller, Navigation, EffectCoverflow, EffectFade } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-fade'

const slides = [
  {
    images: {
      main: '/img/home/furniture/hero-slider/01.png',
      thumb: '/img/home/furniture/hero-slider/th01.png',
    },
    title: 'Navy blue low sofa for relaxation',
    price: [1250],
    href: '/shop/furniture/product',
  },
  {
    images: {
      main: '/img/home/furniture/hero-slider/02.png',
      thumb: '/img/home/furniture/hero-slider/th02.png',
    },
    title: 'Armchair with wooden legs 70x120 cm',
    price: [269.99],
    href: '/shop/furniture/product',
  },
  {
    images: {
      main: '/img/home/furniture/hero-slider/03.png',
      thumb: '/img/home/furniture/hero-slider/th03.png',
    },
    title: 'Bed frame light gray 140x200 cm',
    price: [760],
    href: '/shop/furniture/product',
  },
  {
    images: {
      main: '/img/home/furniture/hero-slider/04.png',
      thumb: '/img/home/furniture/hero-slider/th04.png',
    },
    title: 'Blue armchair with iron legs',
    price: [220],
    href: '/shop/furniture/product',
  },
]

const HeroSliderFurniture = () => {
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null)
  const [prevSwiper, setPrevSwiper] = useState<SwiperType | null>(null)
  const [nextSwiper, setNextSwiper] = useState<SwiperType | null>(null)
  const [captionsSwiper, setCaptionsSwiper] = useState<SwiperType | null>(null)

  // Set up controller relationships when swipers are ready
  useEffect(() => {
    if (mainSwiper && prevSwiper && nextSwiper && captionsSwiper) {
      mainSwiper.controller.control = [prevSwiper, nextSwiper, captionsSwiper]
    }
  }, [mainSwiper, prevSwiper, nextSwiper, captionsSwiper])

  // Dynamic prev thumbnails - start from the last slide
  const prevThumbs = [slides[slides.length - 1].images.thumb, ...slides.slice(0, -1).map((slide) => slide.images.thumb)]

  // Dynamic next thumbnails - start from the second slide, rotate to first
  const nextThumbs = [...slides.slice(1, slides.length).map((slide) => slide.images.thumb), slides[0].images.thumb]

  return (
    <section
      className="bg-body-tertiary min-vh-100 d-flex align-items-center overflow-hidden"
      style={{ marginTop: -110, paddingTop: 110 }}
    >
      <Container className="h-100 py-5 my-md-2 my-lg-3 my-xl-4 mb-xxl-5">
        <h1 className="display-4 text-center mx-auto mb-4" style={{ maxWidth: 680 }}>
          Everything You Need for a Modern Interior
        </h1>
        <Row className="align-items-center justify-content-center gx-3 gx-sm-4 mb-3 mb-sm-4">
          {/* Prev slide preview (controlled slider) */}
          <Col lg={1} xl={2} className="d-none d-lg-flex justify-content-end">
            <div className="position-relative user-select-none" style={{ width: 262 }}>
              <span className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-50 rounded-circle d-none-dark" />
              <span
                className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-circle d-none-dark d-none d-block-dark"
                style={{ opacity: 0.05 }}
              />
              <Swiper
                modules={[Controller, EffectCoverflow]}
                onSwiper={setPrevSwiper}
                allowTouchMove={false}
                loop={true}
                effect="coverflow"
                coverflowEffect={{
                  rotate: 0,
                  scale: 1.3,
                  depth: -200,
                  stretch: -100,
                  slideShadows: false,
                }}
                className="position-relative z-2 opacity-60 rounded-circle pe-none"
              >
                {prevThumbs.map((thumb, index) => (
                  <SwiperSlide key={`prev-thumb-${index}`}>
                    <Image priority src={thumb} width={524} height={524} alt="Thumbnail" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>

          {/* Prev button */}
          <Col xs="auto" sm={1} className="order-1 order-lg-2 d-flex align-items-center justify-content-center">
            <Button
              variant="outline-secondary"
              size="lg"
              className="btn-icon rounded-circle animate-slide-start"
              id="heroPrev"
              aria-label="Previous slide"
            >
              <i className="ci-chevron-left fs-xl animate-target" />
            </Button>
          </Col>

          {/* Main slider */}
          <Col sm={10} lg={8} xl={6} className="order-3">
            <Swiper
              modules={[Controller, EffectCoverflow, Navigation]}
              onSwiper={setMainSwiper}
              loop={true}
              speed={600}
              grabCursor={true}
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                scale: 1.3,
                depth: -200,
                stretch: -100,
                slideShadows: false,
              }}
              navigation={{
                prevEl: '#heroPrev',
                nextEl: '#heroNext',
              }}
              className="user-select-none rounded-pill"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={`main-slide-${index}`}>
                  <Image priority src={slide.images.main} width={1272} height={800} alt={slide.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>

          {/* Next button */}
          <Col
            xs="auto"
            sm={1}
            className="order-2 order-sm-3 order-lg-4 d-flex align-items-center justify-content-center"
          >
            <Button
              variant="outline-secondary"
              size="lg"
              className="btn-icon rounded-circle animate-slide-end"
              id="heroNext"
              aria-label="Next slide"
            >
              <i className="ci-chevron-right fs-xl animate-target" />
            </Button>
          </Col>

          {/* Next slide preview (controlled slider) */}
          <Col lg={1} xl={2} className="order-lg-5 d-none d-lg-block">
            <div className="position-relative user-select-none" style={{ width: 262 }}>
              <span className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-50 rounded-circle d-none-dark" />
              <span
                className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-circle d-none-dark d-none d-block-dark"
                style={{ opacity: 0.05 }}
              />
              <Swiper
                modules={[Controller, EffectCoverflow]}
                onSwiper={setNextSwiper}
                allowTouchMove={false}
                loop={true}
                effect="coverflow"
                coverflowEffect={{
                  rotate: 0,
                  scale: 1.3,
                  depth: -200,
                  stretch: -100,
                  slideShadows: false,
                }}
                className="position-relative z-2 opacity-60 rounded-circle pe-none"
              >
                {nextThumbs.map((thumb, index) => (
                  <SwiperSlide key={`prev-thumb-${index}`}>
                    <Image priority src={thumb} width={524} height={524} alt="Thumbnail" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>

        {/* Linked captions (controlled slider) */}
        <Swiper
          modules={[Controller, EffectFade]}
          onSwiper={setCaptionsSwiper}
          allowTouchMove={false}
          loop={true}
          effect="fade"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={`caption-slide-${index}`} className="bg-body-tertiary text-center">
              <h3 className="text-secondary-emphasis fs-base fw-normal mb-2">{slide.title}</h3>
              <p className="h4 mb-4">
                ${slide.price[0].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                {slide.price[1] && (
                  <del className="text-body-tertiary fs-base fw-normal ms-1">
                    ${slide.price[1].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </del>
                )}
              </p>
              <Link href={slide.href} className="btn btn-lg btn-dark rounded-pill">
                Shop now
                <i className="ci-chevron-right fs-lg ms-2 me-n2" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  )
}

export default HeroSliderFurniture
