'use client'

import CategoryCardVariantThree from '@/components/shop/category-card-variant-three'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const categories = [
  {
    image: '/img/home/grocery/featured/01.png',
    title: 'Only fresh fish to your table',
    eyebrowText: '124 products',
    href: '/shop/grocery',
    background: 'primary',
  },
  {
    image: '/img/home/grocery/featured/02.png',
    title: 'Products for Easter table',
    eyebrowText: '97 products',
    href: '/shop/grocery',
    background: 'success',
  },
  {
    image: '/img/home/grocery/featured/03.png',
    title: 'Berries from the garden',
    eyebrowText: '28 products',
    href: '/shop/grocery',
    background: 'info',
  },
]

const FeaturedCategoriesGrocery = () => (
  <Swiper
    modules={[Pagination]}
    slidesPerView={1}
    spaceBetween={24}
    pagination={{
      el: '.swiper-pagination',
      clickable: true,
    }}
    breakpoints={{
      '680': {
        slidesPerView: 2,
      },
      '992': {
        slidesPerView: 3,
      },
    }}
  >
    {categories.map(({ image, title, href, eyebrowText, background }, index) => (
      <SwiperSlide key={index} className="h-auto">
        <CategoryCardVariantThree
          image={{ src: image }}
          title={title}
          eyebrowText={eyebrowText}
          href={href}
          className={`bg-${background}-subtle`}
        />
      </SwiperSlide>
    ))}
    <div className="swiper-pagination position-static mt-3 mt-sm-4" />
  </Swiper>
)

export default FeaturedCategoriesGrocery
