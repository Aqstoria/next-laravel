'use client'

import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Hotspot from '@/components/hotspot'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

const GalleryWithFiltersFurniture = () => (
  <>
    <SimpleBar data-simplebar-auto-hide="false" className="mb-3">
      <Nav as="ul" variant="pills" defaultActiveKey="living" className="flex-nowrap text-nowrap pb-3">
        {[
          ['Living room', 'living'],
          ['Bedroom', 'bedroom'],
          ['Kitchen', 'kitchen'],
          ['Decoration', 'decor'],
          ['Office', 'office'],
        ].map((item, index) => (
          <Nav.Item key={index} as="li">
            <Nav.Link eventKey={item[1]}>{item[0]}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </SimpleBar>
    <Row className="g-4 g-sm-3 g-lg-4 mb-xxl-3">
      <Col sm={5} className="d-flex flex-column gap-4 gap-sm-3 gap-lg-4">
        <div className="position-relative bg-body-tertiary rounded-5 overflow-hidden">
          {[
            {
              href: '/shop/furniture/product',
              image: '/img/home/furniture/gallery/hotspot01.png',
              title: 'Indigo coushy low sofa',
              price: '$856.00',
              placement: 'top',
              position: { top: '63.4%', left: '75.8%' },
            },
            {
              href: '/shop/furniture/product',
              image: '/img/home/furniture/gallery/hotspot02.png',
              title: 'Ergonomic beige armchair',
              price: '$235.00',
              placement: 'bottom',
              position: { top: '60.2%', left: '15.7%' },
            },
            {
              href: '/shop/furniture/product',
              image: '/img/home/furniture/gallery/hotspot03.png',
              title: 'Waves modern painting',
              price: '$74.99',
              placement: 'top',
              position: { top: '25.8%', left: '47%' },
            },
          ].map(({ href, image, title, price, placement, position }, index) => (
            <Hotspot
              key={index}
              trigger="focus"
              placement={placement as 'bottom' | 'left' | 'right' | 'top'}
              href={href}
              image={{
                src: image,
                width: 64,
                height: 64,
                alt: 'Image',
              }}
              title={title}
              price={price}
              button={{
                size: 'sm',
              }}
              style={position}
            />
          ))}
          <Image src="/img/home/furniture/gallery/01.jpg" width={682} height={648} alt="Image" />
        </div>
        <Image
          src="/img/home/furniture/gallery/02.jpg"
          width={628}
          height={686}
          className="bg-body-tertiary rounded-5"
          alt="Image"
        />
      </Col>
      <Col sm={7} className="d-flex flex-column gap-4 gap-sm-3 gap-lg-4">
        <Image
          src="/img/home/furniture/gallery/03.jpg"
          width={1004}
          height={894}
          className="bg-body-tertiary rounded-5"
          alt="Image"
        />
        <Image
          src="/img/home/furniture/gallery/04.jpg"
          width={1006}
          height={492}
          className="bg-body-tertiary rounded-5"
          alt="Image"
        />
      </Col>
    </Row>
  </>
)

export default GalleryWithFiltersFurniture
