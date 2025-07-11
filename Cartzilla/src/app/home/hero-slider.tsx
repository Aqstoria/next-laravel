'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Controller, Scrollbar, Autoplay, EffectFade } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'

const slides = [
  {
    image: '/img/home/electronics/hero-slider/01.png',
    title: 'Headphones ProMax',
    eyebrowText: 'Feel the real quality sound',
    href: '/shop/electronics/product?slug=headphones-promax',
  },
  {
    image: '/img/home/electronics/hero-slider/02.png',
    title: 'Powerful iPad Pro M2',
    eyebrowText: 'Deal of the week',
    href: '/shop/electronics/product?slug=ipad-pro-m2',
  },
  {
    image: '/img/home/electronics/hero-slider/03.png',
    title: 'Experience New Reality',
    eyebrowText: 'Virtual reality glasses',
    href: '/shop/electronics/product?slug=virtual-reality-glasses',
  },
]

const HeroSliderElectronics = () => {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType | null>(null)
  return (
    <Container as="section" className="pt-4">
      <Row>
        <Col lg={9} className="offset-lg-3">
          <div className="position-relative">
            <span
              className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip"
              style={{ background: 'linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)' }}
            />
            <span
              className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip"
              style={{ background: 'linear-gradient(90deg, #1b273a 0%, #1f2632 100%)' }}
            />
            <Row className="justify-content-center position-relative z-2">
              <Col xl={5} xxl={4} className="offset-xxl-1 d-flex align-items-center mt-xl-n3">
                <Swiper
                  modules={[Controller, Autoplay, Scrollbar]}
                  spaceBetween={64}
                  loop={true}
                  speed={400}
                  controller={{ control: controlledSwiper }}
                  autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                  }}
                  scrollbar={{
                    el: '.swiper-scrollbar',
                  }}
                  className="px-5 pe-xl-0 ps-xxl-0 me-xl-n5"
                >
                  {slides.map(({ title, eyebrowText, href }, index) => (
                    <SwiperSlide key={index} className="text-center text-xl-start pt-5 py-xl-5">
                      <p className="text-body">{eyebrowText}</p>
                      <h2 className="display-4 pb-2 pb-xl-4">{title}</h2>
                      <Link href={href} className="btn btn-lg btn-primary">
                        Shop now
                        <i className="ci-arrow-up-right fs-lg ms-2 me-n1" />
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Col>
              <Col xs={9} sm={7} md={6} lg={5} xl={7}>
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
                  {slides.map(({ image }, index) => (
                    <SwiperSlide key={index} className="d-flex justify-content-end">
                      <div style={{ maxWidth: 490 }}>
                        <Image src={image} width={980} height={1063} alt="Image" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Col>
            </Row>
            <Row className="justify-content-center" data-bs-theme="dark">
              <Col xxl={10}>
                <div className="position-relative mx-5 mx-xxl-0">
                  <div className="swiper-scrollbar mb-4" />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default HeroSliderElectronics
