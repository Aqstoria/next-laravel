'use client'

import { useState } from 'react'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import Lightbox from '@/components/lightbox'

const ProductGalleryFurniture = ({ images }: { images: string[] }) => {
  const [open, setOpen] = useState(false)

  return (
    <Row xs={2} className="g-3 g-sm-4 g-md-3 g-lg-4">
      <Col>
        <Lightbox
          href={images[0]}
          gallery="productGallery"
          className="hover-effect-scale hover-effect-opacity position-relative d-flex rounded-4 overflow-hidden"
        >
          <i className="ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2" />
          <Image src={images[0]} width={624} height={624} className="hover-effect-target" alt="Image" />
        </Lightbox>
      </Col>
      <Col>
        <Lightbox
          href={images[1]}
          gallery="productGallery"
          className="hover-effect-scale hover-effect-opacity position-relative d-flex rounded-4 overflow-hidden"
        >
          <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 opacity-0 z-1" />
          <i className="ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2" />
          <Image src={images[1]} width={624} height={624} className="hover-effect-target" alt="Image" />
        </Lightbox>
      </Col>
      <Col xs={12}>
        <Collapse in={open} className="d-md-block">
          <div id="morePictures">
            <Row xs={2} className="g-3 g-sm-4 g-md-3 g-lg-4 pb-3 pb-sm-4 pb-md-0">
              {images.slice(2, 6).map((image, index) => (
                <Col key={index}>
                  <Lightbox
                    href={image}
                    gallery="productGallery"
                    className="hover-effect-scale hover-effect-opacity position-relative d-flex rounded-4 overflow-hidden"
                  >
                    <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-25 opacity-0 z-1" />
                    <i className="ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2" />
                    <Image src={image} width={534} height={596} className="hover-effect-target" alt="Image" />
                  </Lightbox>
                </Col>
              ))}
            </Row>
          </div>
        </Collapse>
        <Button
          variant="outline-secondary"
          size="lg"
          className={`w-100 d-md-none${!open ? ' collapsed' : ''} `}
          data-label-collapsed="Show more pictures"
          data-label-expanded="Show less pictures"
          onClick={() => setOpen(!open)}
        >
          <i className="collapse-toggle-icon ci-chevron-down fs-lg ms-2 me-n2" />
        </Button>
      </Col>
    </Row>
  )
}

export default ProductGalleryFurniture
