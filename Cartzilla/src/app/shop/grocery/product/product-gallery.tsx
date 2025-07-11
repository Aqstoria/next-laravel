'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from '@/components/lightbox'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

const ProductGalleryGrocery = ({ thumbs, slides }: { thumbs: string[]; slides: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  return (
    <div className="d-flex" style={{ paddingTop: 120 }}>
      {/* Thumbnails */}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        direction="vertical"
        watchSlidesProgress
        slidesPerView={4}
        spaceBetween={12}
        className="swiper-thumbs swiper-load d-none d-lg-block w-100 me-xl-3"
        style={{ maxWidth: 96, height: 420 }}
      >
        {thumbs.map((thumb, index) => (
          <SwiperSlide key={index} className="swiper-thumb">
            <div className="ratio ratio-1x1" style={{ maxWidth: 94 }}>
              <Image src={thumb} width={188} height={188} className="swiper-thumb-img" alt="Thumbnail" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Preview images */}
      <Swiper
        modules={[Thumbs, Pagination]}
        thumbs={{ swiper: thumbsSwiper }}
        loop={false}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        className="w-100"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Lightbox href={slide} gallery="productGallery" className="d-block cursor-zoom-in">
              <Image src={slide} width={1268} height={1268} alt="Image" />
            </Lightbox>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination mb-n3 d-lg-none"></div>
      </Swiper>
    </div>
  )
}

export default ProductGalleryGrocery
