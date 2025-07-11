'use client'

import Image from 'next/image'
import Button from 'react-bootstrap/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

interface BlogSinglePostImageSliderProps {
  images: string[]
  imageWidth: number
  imageHeight: number
  className?: string
}

const BlogSinglePostImageSlider = ({ images, imageWidth, imageHeight, className }: BlogSinglePostImageSliderProps) => (
  <div className={`position-relative px-5${className ? ` ${className}` : ''}`}>
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
      modules={[Navigation, Pagination, EffectFade]}
      effect="fade"
      loop={true}
      navigation={{
        prevEl: '#prev',
        nextEl: '#next',
      }}
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
      }}
      className="px-3"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image src={image} width={imageWidth} height={imageHeight} className="rounded-4" alt="Image" />
        </SwiperSlide>
      ))}
      <div className="swiper-pagination position-static mt-3" />
    </Swiper>
  </div>
)

export default BlogSinglePostImageSlider
