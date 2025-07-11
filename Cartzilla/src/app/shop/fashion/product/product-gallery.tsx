'use client'

import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Lightbox from '@/components/lightbox'

const ProductGalleryFashion = ({ images, productTitle }: { images: string[]; productTitle: string }) => {
  const [wishlist, setWishlist] = useState(false)
  const [open, setOpen] = useState(false)
  const { createToast, ToastRenderer } = useToast()

  // Handle toggle wishlist with toast
  const handleToggleWishlist = () => {
    setWishlist(!wishlist)

    if (wishlist) {
      createToast(
        {
          action: 'Removed from wishlist: ',
          product: productTitle,
        },
        'wishlist'
      )
    } else {
      createToast(
        {
          action: 'Added to wishlist: ',
          product: productTitle,
        },
        'wishlist'
      )
    }
  }

  return (
    <>
      <div className="position-relative mb-3 mb-sm-4 mb-md-3 mb-lg-4">
        <Badge bg="danger" className="position-absolute top-0 start-0 z-2 mt-3 mt-sm-4 ms-3 ms-sm-4">
          Sale
        </Badge>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip className="tooltip-sm">{`${wishlist ? 'Remove from' : 'Add to'} Wishlist`}</Tooltip>}
        >
          <Button
            variant="secondary"
            className="btn-icon animate-pulse fs-lg bg-transparent border-0 position-absolute top-0 end-0 z-2 mt-2 mt-sm-3 me-2 me-sm-3"
            onClick={handleToggleWishlist}
          >
            <i className={`ci-heart${wishlist ? '-filled' : ''} animate-target`} />
          </Button>
        </OverlayTrigger>
        <Lightbox
          href={images[0]}
          gallery="productGallery"
          className="hover-effect-scale hover-effect-opacity position-relative d-flex rounded overflow-hidden"
        >
          <i className="ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2" />
          <Image
            src={images[0]}
            width={996}
            height={1106}
            className="hover-effect-target bg-body-tertiary rounded"
            alt="Image"
          />
        </Lightbox>
      </div>
      <Collapse in={open} className="d-md-block">
        <div id="morePictures">
          <Row xs={2} className="g-3 g-sm-4 g-md-3 g-lg-4 pb-3 pb-sm-4 pb-md-0">
            {images.slice(1, 5).map((image, index) => (
              <Col key={index}>
                <Lightbox
                  href={image}
                  gallery="productGallery"
                  className="hover-effect-scale hover-effect-opacity position-relative d-flex rounded overflow-hidden"
                >
                  <i className="ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2" />
                  <Image
                    src={image}
                    width={534}
                    height={596}
                    className="hover-effect-target bg-body-tertiary rounded"
                    alt="Image"
                  />
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

      {/* Toast notification stack */}
      <ToastRenderer />
    </>
  )
}

export default ProductGalleryFashion
