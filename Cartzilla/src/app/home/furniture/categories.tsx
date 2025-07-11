'use client'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CategoryCardVariantFour from '@/components/shop/category-card-variant-four'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

const categories = [
  {
    image: '/img/home/furniture/categories/01.png',
    title: 'Bedroom',
    href: '/shop/furniture',
    list: [
      { label: 'Beds and mattresses', href: '/shop/furniture' },
      { label: 'Dressing tables', href: '/shop/furniture' },
      { label: 'Pillowcases', href: '/shop/furniture' },
    ],
  },
  {
    image: '/img/home/furniture/categories/02.png',
    title: 'Living room',
    href: '/shop/furniture',
    list: [
      { label: 'Bookcases and storage', href: '/shop/furniture' },
      { label: 'Coffee tables', href: '/shop/furniture' },
      { label: 'Cabinets', href: '/shop/furniture' },
    ],
  },
  {
    image: '/img/home/furniture/categories/03.png',
    title: 'Bathroom',
    href: '/shop/furniture',
    list: [
      { label: 'Mirrors', href: '/shop/furniture' },
      { label: 'Bathroom rugs', href: '/shop/furniture' },
      { label: 'Bathrobes and slippers', href: '/shop/furniture' },
    ],
  },
  {
    image: '/img/home/furniture/categories/04.png',
    title: 'Decoration',
    href: '/shop/furniture',
    list: [
      { label: 'Flowerpots', href: '/shop/furniture' },
      { label: 'Glassware', href: '/shop/furniture' },
      { label: 'Home fragrance', href: '/shop/furniture' },
    ],
  },
  {
    image: '/img/home/furniture/categories/05.png',
    title: 'Office',
    href: '/shop/furniture',
    list: [
      { label: 'Desks and bureaus', href: '/shop/furniture' },
      { label: 'Office chairs', href: '/shop/furniture' },
      { label: 'Filing cabinets', href: '/shop/furniture' },
    ],
  },
  {
    image: '/img/home/furniture/categories/06.png',
    title: 'Kitchen',
    href: '/shop/furniture',
    list: [
      { label: 'Cupboards', href: '/shop/furniture' },
      { label: 'Chest of drawers', href: '/shop/furniture' },
      { label: 'Dining tables', href: '/shop/furniture' },
    ],
  },
]

const CategoriesFurniture = () => (
  <SimpleBar data-simplebar-auto-hide="false" className="pt-xxl-3">
    <Row className="flex-nowrap flex-md-wrap justify-content-md-center g-0 gap-4 gap-md-0">
      {categories.map(({ image, title, href, list }, index) => (
        <Col key={index} xs={true} md={4} lg={3} xl={2} className="mb-4">
          <CategoryCardVariantFour image={{ src: image }} title={title} href={href} list={list} />
        </Col>
      ))}
    </Row>
  </SimpleBar>
)

export default CategoriesFurniture
