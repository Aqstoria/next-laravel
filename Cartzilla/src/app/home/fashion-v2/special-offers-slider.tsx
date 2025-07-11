'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { Timezz } from 'timezz/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Controller, Navigation, Pagination, EffectFade } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const offers = [
  {
    image: ['/img/home/fashion/v2/offers-slider/product01.png', '/img/home/fashion/v2/offers-slider/preview01.png'],
    title: 'Polarized sunglasses for men',
    price: [56, 80],
    href: '/shop/fashion/product',
    badge: '-30%',

    background: ['#dceee7', '#1b282c'],
  },
  {
    image: ['/img/home/fashion/v2/offers-slider/product02.png', '/img/home/fashion/v2/offers-slider/preview02.png'],
    title: 'Fashionalble women fedora hat',
    price: [43, 50],
    href: '/shop/fashion/product',
    badge: '-17%',
    background: ['#dddad7', '#272729'],
  },
]

const demoDate = () => {
  const currentDate = new Date()

  currentDate.setDate(currentDate.getDate() + 13)

  const year = currentDate.getFullYear()
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
  const day = currentDate.getDate().toString().padStart(2, '0')
  const hours = '12'
  const minutes = '00'
  const seconds = '00'

  const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`

  return formattedDate
}

const SpecialOffersSliderFashion = () => {
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null)
  const [previewSwiper, setPreviewSwiper] = useState<SwiperType | null>(null)
  const [backgroundSwiper, setBackgroundSwiper] = useState<SwiperType | null>(null)

  // Set up controller relationships when swipers are ready
  useEffect(() => {
    if (mainSwiper && previewSwiper && backgroundSwiper) {
      mainSwiper.controller.control = [previewSwiper, backgroundSwiper]
    }
  }, [mainSwiper, previewSwiper, backgroundSwiper])

  return (
    <>
      <div className="position-relative px-4 px-md-3 px-lg-4">
        <Row className="position-relative z-2 justify-content-center">
          {/* Products master slider */}
          <Col
            md={4}
            xl={5}
            className="order-md-2 d-flex justify-content-center justify-content-md-end py-4 py-md-3 py-lg-4"
          >
            <Swiper
              modules={[Controller, Navigation, Pagination]}
              onSwiper={setMainSwiper}
              spaceBetween={24}
              loop={true}
              speed={400}
              pagination={{
                el: '#bullets',
                clickable: true,
              }}
              navigation={{
                prevEl: '#offerPrev',
                nextEl: '#offerNext',
              }}
              className="m-0"
              style={{ maxWidth: 416 }}
            >
              {offers.map(({ image, title, price, href, badge }, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <Card className="animate-underline h-100 rounded-5 border-0">
                    <div className="pt-3 px-3">
                      <Badge bg="danger" className="position-absolute top-0 start-0 z-2 mt-2 mt-sm-3 ms-2 ms-sm-3">
                        {badge}
                      </Badge>
                      <Image src={image[0]} width={768} height={508} alt="Image" />
                    </div>
                    <Card.Body className="text-center py-3">
                      <div className="d-flex justify-content-center min-w-0 fs-sm fw-medium text-dark-emphasis mb-2">
                        <span className="animate-target text-truncate">{title}</span>
                      </div>
                      <div className="h6 mb-3">
                        ${price[0].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{' '}
                        <del className="fs-sm fw-normal text-body-tertiary">
                          ${price[1].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </del>
                      </div>
                      <Link href={href} className="btn btn-sm btn-dark stretched-link">
                        Shop now
                      </Link>
                    </Card.Body>

                    {/* Replace "demoDate" inside date prop value attribute with the real date, ex: "10/15/2025 12:00:00" */}
                    <Card.Footer className="bg-transparent border-0 pb-4">
                      <Timezz
                        date={demoDate()}
                        pause={false}
                        stopOnZero={true}
                        onUpdate={() => {}}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <div className="btn btn-secondary pe-none px-2">
                          <span data-days />
                          <span>d</span>
                        </div>
                        <div className="animate-blinking text-body-tertiary fs-lg fw-medium mx-2">:</div>
                        <div className="btn btn-secondary pe-none px-2">
                          <span data-hours />
                          <span>h</span>
                        </div>
                        <div className="animate-blinking text-body-tertiary fs-lg fw-medium mx-2">:</div>
                        <div className="btn btn-secondary pe-none px-2">
                          <span data-minutes />
                          <span>m</span>
                        </div>
                      </Timezz>
                    </Card.Footer>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>

          {/* Slider pagination (bullets) */}
          <div id="bullets" className="swiper-pagination position-static d-md-none mt-n3 mb-2" />

          {/* Preview images (controlled slider) */}
          <Col sm={9} md={8} xl={7} className="order-md-1 align-self-end">
            <Swiper
              modules={[Controller, EffectFade]}
              onSwiper={setPreviewSwiper}
              allowTouchMove={false}
              loop={true}
              effect="fade"
              fadeEffect={{
                crossFade: true,
              }}
            >
              {offers.map(({ image }, index) => (
                <SwiperSlide key={index}>
                  <Image src={image[1]} width={1436} height={1084} alt="Image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>

        {/* Backgrounds (controlled slider) */}
        <Swiper
          modules={[Controller, EffectFade]}
          onSwiper={setBackgroundSwiper}
          allowTouchMove={false}
          loop={true}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          className="position-absolute top-0 start-0 w-100 h-100 user-select-none"
        >
          {offers.map(({ background }, index) => (
            <SwiperSlide key={index}>
              <span
                className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark"
                style={{ backgroundColor: background[0] }}
              />
              <span
                className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark"
                style={{ backgroundColor: background[1] }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Slider prev/next buttons */}
      <div className="d-none d-md-flex justify-content-center gap-2 pt-3 mt-2 mt-lg-3">
        <Button
          variant="outline-secondary"
          className="btn-icon animate-slide-start rounded-circle me-1"
          id="offerPrev"
          aria-label="Previous slide"
        >
          <i className="ci-chevron-left fs-lg animate-target" />
        </Button>
        <Button
          variant="outline-secondary"
          className="btn-icon animate-slide-end rounded-circle"
          id="offerNext"
          aria-label="Next slide"
        >
          <i className="ci-chevron-right fs-lg animate-target" />
        </Button>
      </div>
    </>
  )
}

export default SpecialOffersSliderFashion
