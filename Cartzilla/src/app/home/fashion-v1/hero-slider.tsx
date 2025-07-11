'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Controller, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const slides = [
  {
    image: '/img/home/fashion/v1/hero-slider/01.png',
    title: 'New fall season 2025',
    eyebrowText: 'The new warm collection',
    href: '/shop/fashion',
  },
  {
    image: '/img/home/fashion/v1/hero-slider/02.png',
    title: 'Choose outfits for parties',
    eyebrowText: 'Ready for the party?',
    href: '/shop/fashion',
  },
  {
    image: '/img/home/fashion/v1/hero-slider/03.png',
    title: '-50% on gray Collection',
    eyebrowText: 'Shades of gray for your look',
    href: '/shop/fashion',
  },
]

const HeroSliderFashion = () => {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType | null>(null)

  return (
    <section className="bg-body-tertiary">
      <Container>
        <Row>
          {/* Titles master slider */}
          <Col md={6} lg={5} className="d-flex flex-column">
            <div className="py-4 mt-auto">
              <Swiper
                modules={[Controller, Autoplay, Pagination]}
                controller={{ control: controlledSwiper }}
                spaceBetween={24}
                loop={true}
                speed={400}
                pagination={{
                  el: '#sliderBullets',
                  clickable: true,
                }}
                autoplay={{
                  delay: 5500,
                  disableOnInteraction: false,
                }}
                className="pb-1 pt-3 pt-sm-4 py-md-4 py-lg-3"
              >
                {slides.map(({ title, eyebrowText, href }, index) => (
                  <SwiperSlide key={index} className="align-self-center text-center text-md-start">
                    <p className="fs-xl mb-2 mb-lg-3 mb-xl-4">{eyebrowText}</p>
                    <h2 className="display-4 text-uppercase mb-4 mb-xl-5">{title}</h2>
                    <Link href={href} className="btn btn-lg btn-outline-dark">
                      Shop now
                      <i className="ci-arrow-up-right fs-lg ms-2 me-n1" />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Slider bullets (pagination) */}
            <div className="d-flex justify-content-center justify-content-md-start pb-4 pb-xl-5 mt-n1 mt-md-auto mb-md-3 mb-lg-4">
              <div className="swiper-pagination position-static w-auto pb-1" id="sliderBullets"></div>
            </div>
          </Col>

          {/* Linked images (controlled slider) */}
          <Col md={6} lg={7} className="align-self-end">
            <div className="position-relative ms-md-n4">
              <div className="ratio" style={{ '--cz-aspect-ratio': 'calc(662 / 770 * 100%' } as React.CSSProperties} />
              <Swiper
                modules={[Controller, EffectFade]}
                onSwiper={setControlledSwiper}
                allowTouchMove={false}
                loop={true}
                effect="fade"
                fadeEffect={{
                  crossFade: true,
                }}
                className="position-absolute top-0 start-0 w-100 h-100 user-select-none"
              >
                {slides.map(({ image }, index) => (
                  <SwiperSlide key={index}>
                    <Image src={image} width={1540} height={1324} alt="Image" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSliderFashion
