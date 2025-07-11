'use client'

import Link from 'next/link'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

const brands = [
  {
    image: [
      '/img/shop/electronics/brands/apple-light-mode.svg',
      '/img/shop/electronics/brands/apple-dark-mode.svg',
      'Apple',
    ],
    href: '/shop/electronics',
  },
  {
    image: [
      '/img/shop/electronics/brands/motorola-light-mode.svg',
      '/img/shop/electronics/brands/motorola-dark-mode.svg',
      'Motorola',
    ],
    href: '/shop/electronics',
  },
  {
    image: [
      '/img/shop/electronics/brands/xiaomi-light-mode.svg',
      '/img/shop/electronics/brands/xiaomi-dark-mode.svg',
      'Xiaomi',
    ],
    href: '/shop/electronics',
  },
  {
    image: [
      '/img/shop/electronics/brands/canon-light-mode.svg',
      '/img/shop/electronics/brands/canon-dark-mode.svg',
      'Canon',
    ],
    href: '/shop/electronics',
  },
  {
    image: [
      '/img/shop/electronics/brands/samsung-light-mode.svg',
      '/img/shop/electronics/brands/samsung-dark-mode.svg',
      'Samsung',
    ],
    href: '/shop/electronics',
  },
  {
    image: [
      '/img/shop/electronics/brands/sony-light-mode.svg',
      '/img/shop/electronics/brands/sony-dark-mode.svg',
      'Sony',
    ],
    href: '/shop/electronics',
  },
]

const BrandsCategoriesElectronics = () => (
  <SimpleBar data-simplebar-auto-hide="false">
    <Row xs={6} className="g-0" style={{ minWidth: 960 }}>
      {brands.map(({ image, href }, index) => (
        <Col key={index}>
          <Link href={href} className="d-flex justify-content-center py-3 px-2 px-xl-3">
            <Image src={image[0]} width={164} height={80} className="d-none-dark" alt={image[2]} />
            <Image src={image[1]} width={164} height={80} className="d-none d-block-dark" alt={image[2]} />
          </Link>
        </Col>
      ))}
    </Row>
  </SimpleBar>
)

export default BrandsCategoriesElectronics
