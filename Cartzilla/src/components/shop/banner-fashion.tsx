'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

const BannerFashion = () => (
  <div className="position-relative bg-body-tertiary text-center rounded-4 p-4 p-sm-5 py-md-4 py-xl-5">
    <p className="fs-xs text-body-secondary mb-1">Sweatshirts</p>
    <h2 className="h4 mb-4">Colors for your mood</h2>
    <Swiper
      modules={[EffectFade, Autoplay]}
      allowTouchMove={false}
      loop={true}
      effect="fade"
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      className="user-select-none mb-4"
      style={{ maxWidth: 342 }}
    >
      {['/img/shop/fashion/banner01.png', '/img/shop/fashion/banner02.png', '/img/shop/fashion/banner03.png'].map(
        (image, index) => (
          <SwiperSlide key={index}>
            <Image src={image} width={684} height={460} alt="Image" />
          </SwiperSlide>
        )
      )}
    </Swiper>
    <Link href="/shop/fashion/product" className="btn btn-sm btn-dark stretched-link">
      Shop now
    </Link>
  </div>
)

export default BannerFashion
