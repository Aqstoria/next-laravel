'use client'

import Link from 'next/link'
import Image from 'next/image'
import Nav from 'react-bootstrap/Nav'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const departments = [
  {
    image: '/img/shop/grocery/categories/09.png',
    title: 'Sauces and ketchup',
    href: '/shop/grocery',
    links: [
      ['Tomato ketchup', '/shop/grocery'],
      ['Hollandaise sauce', '/shop/grocery'],
      ['Mayonnaise', '/shop/grocery'],
      ['Caesar salad', '/shop/grocery'],
    ],
  },
  {
    image: '/img/shop/grocery/categories/10.png',
    title: 'Fresh fruits',
    href: '/shop/grocery',
    links: [
      ['Oranges', '/shop/grocery'],
      ['Apples', '/shop/grocery'],
      ['Watermelons', '/shop/grocery'],
      ['Exotic fruits', '/shop/grocery'],
    ],
  },
  {
    image: '/img/shop/grocery/categories/11.png',
    title: 'Meat products',
    href: '/shop/grocery',
    links: [
      ['Poultry', '/shop/grocery'],
      ['Kosher meat', '/shop/grocery'],
      ['Veal and beef', '/shop/grocery'],
      ['Turkey', '/shop/grocery'],
    ],
  },
]

const TopDepartmentsGrocery = () => (
  <div className="border rounded-5 p-4">
    <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      spaceBetween={24}
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
      }}
      breakpoints={{
        '450': {
          slidesPerView: 2,
        },
        '680': {
          slidesPerView: 3,
        },
        '991': {
          slidesPerView: 2,
        },
        '1160': {
          slidesPerView: 3,
        },
      }}
    >
      {departments.map(({ image, title, href, links }, index) => (
        <SwiperSlide key={index} className="text-center">
          <Link
            href={href}
            className="d-inline-flex align-items-center justify-content-center bg-body-secondary rounded-circle mb-3"
            style={{ width: 174, height: 174 }}
          >
            <div className="d-flex" style={{ width: 110 }}>
              <Image src={image} width={220} height={220} alt="Image" />
            </div>
          </Link>
          <h3 className="h6">{title}</h3>
          <ul className="list-unstyled fs-sm m-0 mb-1">
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link[1]} className="hover-effect-underline text-body text-decoration-none">
                  {link[0]}
                </Link>
              </li>
            ))}
          </ul>
          <Nav className="justify-content-center">
            <Nav.Link as={Link} href={href} className="animate-underline px-0">
              <span className="animate-target text-nowrap">View all</span>
              <i className="ci-chevron-right fs-base ms-1" />
            </Nav.Link>
          </Nav>
        </SwiperSlide>
      ))}
      <div className="swiper-pagination position-static mt-3" />
    </Swiper>
  </div>
)

export default TopDepartmentsGrocery
