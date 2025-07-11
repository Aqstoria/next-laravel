'use client'

import Image from 'next/image'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const slides = [
  {
    image: '/img/home/grocery/hero-slider/01.jpg',
    title: 'Healthy Food Available to Everyone',
    eyebrowText: '🔥 Free shipping - order over 50$',
    background: '#6dafca',
    href: '/shop/grocery',
  },
  {
    image: '/img/home/grocery/hero-slider/02.jpg',
    title: 'Organic eggs from home-grown chicken',
    eyebrowText: '🥚 Organic products to your table',
    background: '#5a7978',
    href: '/shop/grocery',
  },
  {
    image: '/img/home/grocery/hero-slider/03.jpg',
    title: 'Enjoy refreshing summer drink',
    eyebrowText: '🥝 Only natural ingredients',
    background: '#f99c03',
    href: '/shop/grocery',
  },
]

const HeroSliderGrocery = () => {
  return (
    <section className="position-relative">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        loop={true}
        speed={400}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        className="position-absolute top-0 start-0 w-100 h-100"
        data-bs-theme="dark"
      >
        {slides.map(({ image, title, eyebrowText, background, href }, index) => (
          <SwiperSlide key={index} style={{ backgroundColor: background }}>
            <div className="position-absolute d-flex align-items-center w-100 h-100 z-2">
              <Container className="mt-lg-n4">
                <Row>
                  <Col xs={12} sm={10} md={7} lg={6}>
                    <p className="fs-sm text-white mb-lg-4">{eyebrowText}</p>
                    <h2 className="display-4 pb-2 pb-md-3 pb-lg-4">{title}</h2>
                    <Link href={href} className="btn btn-lg btn-outline-light rounded-pill">
                      Shop now
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
            <Image priority fill src={image} className="object-fit-cover rtl-flip" sizes="3840px" alt="Image" />
          </SwiperSlide>
        ))}

        <div className="swiper-pagination pb-sm-2"></div>
      </Swiper>
      <div className="d-md-none" style={{ height: 380 }} />
      <div className="d-none d-md-block d-lg-none" style={{ height: 420 }} />
      <div className="d-none d-lg-block d-xl-none" style={{ height: 500 }} />
      <div className="d-none d-xl-block d-xxl-none" style={{ height: 560 }} />
      <div className="d-none d-xxl-block" style={{ height: 624 }} />
    </section>
  )
}

export default HeroSliderGrocery
