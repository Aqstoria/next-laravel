'use client'

import CategoryCardVariantTwo from '@/components/shop/category-card-variant-two'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const categories = [
  {
    image: '/img/home/fashion/v2/categories/01.png',
    title: 'For men',
    href: '/shop/fashion',
    list: [
      { label: 'Sports suits', href: '/shop/fashion' },
      { label: 'Trousers', href: '/shop/fashion' },
      { label: 'Jackets and coats', href: '/shop/fashion' },
      { label: 'Shirts', href: '/shop/fashion' },
    ],
    background: [
      'linear-gradient(124deg, #e2daec -29.7%, #e4eefd 65.5%)',
      'linear-gradient(124deg, #37343b -29.7%, #222a36 65.5%)',
    ],
  },
  {
    image: '/img/home/fashion/v2/categories/02.png',
    title: 'For women',
    href: '/shop/fashion',
    list: [
      { label: 'Dresses', href: '/shop/fashion' },
      { label: 'Pants and jeans', href: '/shop/fashion' },
      { label: 'Shirts and blousers', href: '/shop/fashion' },
      { label: 'Sweatshirts', href: '/shop/fashion' },
    ],
    background: [
      'linear-gradient(119deg, #e9e0eb 0%, #f8eff1 52.24%)',
      'linear-gradient(119deg, #2f2c3a 0%, #372e2f 52.24%)',
    ],
  },
  {
    image: '/img/home/fashion/v2/categories/03.png',
    title: 'Accessories',
    href: '/shop/fashion',
    list: [
      { label: 'Caps and hats', href: '/shop/fashion' },
      { label: 'Sunglasses', href: '/shop/fashion' },
      { label: 'Handbags', href: '/shop/fashion' },
      { label: 'Jewelry', href: '/shop/fashion' },
    ],
    background: [
      'linear-gradient(118deg, #e9e8e8 0%, #e2ecea 51.13%)',
      'linear-gradient(118deg, #323232 0%, #252928 51.13%)',
    ],
  },
]

const CategoriesFashion = () => (
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
    {categories.map(({ image, title, href, list, background }, index) => (
      <SwiperSlide key={index}>
        <CategoryCardVariantTwo image={{ src: image }} title={title} href={href} list={list}>
          <span
            className="position-absolute top-0 start-0 w-100 h-100 d-none-dark"
            style={{ background: background[0] }}
          ></span>
          <span
            className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark"
            style={{ background: background[1] }}
          ></span>
        </CategoryCardVariantTwo>
      </SwiperSlide>
    ))}
    <div className="swiper-pagination position-static mt-3 mt-sm-4" />
  </Swiper>
)

export default CategoriesFashion
