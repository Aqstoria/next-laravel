'use client'

import { useState } from 'react'
import { useCart } from '@/contexts/cart-context'
import { useToast } from '@/hooks/use-toast'
import type { Product } from '@/types/product'
import StarRating from '@/components/reviews/star-rating'
import Image from 'next/image'
import Ratio from 'react-bootstrap/Ratio'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const StickyProductDesktopElectronics = ({ product }: { product: Product }) => {
  const { addToCart } = useCart('electronics')
  const { createToast, ToastRenderer } = useToast()
  const [wishlist, setWishlist] = useState(false)
  const [comparison, setComparison] = useState(false)

  // Handle add to cart with toast
  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      image: product.image[1],
      title: product.title,
      href: product.href,
      price: product.price,
      specs: product.specs,
      quantity: 1,
      badge: product.badge,
    })

    createToast(
      {
        action: 'Added to cart:',
        product: ` ${product.title}`,
      },
      'cart'
    )
  }

  // Handle toggle wishlist with toast
  const handleToggleWishlist = () => {
    setWishlist(!wishlist)

    if (wishlist) {
      createToast(
        {
          action: 'Removed from wishlist: ',
          product: product.title,
        },
        'wishlist'
      )
    } else {
      createToast(
        {
          action: 'Added to wishlist: ',
          product: product.title,
        },
        'wishlist'
      )
    }
  }

  // Handle toggle comparison with toast
  const handleToggleCompare = () => {
    setComparison(!comparison)

    if (comparison) {
      createToast(
        {
          action: 'Removed from comparison list: ',
          product: product.title,
        },
        'comparison'
      )
    } else {
      createToast(
        {
          action: 'Added to comparison list: ',
          product: product.title,
        },
        'comparison'
      )
    }
  }

  return (
    <>
      <div className="position-sticky top-0 ps-md-3 ps-lg-4 ps-xl-0" style={{ paddingTop: 100 }}>
        <div className="border rounded p-3 p-lg-4">
          <div className="d-flex align-items-center mb-3">
            <Ratio aspectRatio="1x1" className="flex-shrink-0" style={{ width: 110 }}>
              <Image src="/img/shop/electronics/thumbs/10.png" width={220} height={220} alt="iPhone 14" />
            </Ratio>
            <div className="w-100 min-w-0 ps-2 ps-sm-3">
              <div className="d-flex align-items-center gap-2 mb-2">
                <StarRating rating={product.reviews ? product.reviews[0] : 0} className="fs-xs" />
                {product.reviews && <span className="text-body-tertiary fs-xs">{product.reviews[1]}</span>}
              </div>
              <h4 className="fs-sm fw-medium mb-2">{product.title}</h4>
              <div className="h5 mb-0">
                ${product.price[0].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{' '}
                {product.price[1] !== undefined && (
                  <del className="fs-sm fw-normal text-body-tertiary">
                    $
                    {product.price[1]?.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </del>
                )}
              </div>
            </div>
          </div>
          <div className="d-flex gap-2 gap-lg-3">
            <Button className="w-100 animate-slide-end" onClick={() => handleAddToCart(product)}>
              <i className="ci-shopping-cart fs-base animate-target ms-n1 me-2" />
              Add to cart
            </Button>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip className="tooltip-sm">{`${wishlist ? 'Remove from' : 'Add to'} Wishlist`}</Tooltip>}
            >
              <Button variant="secondary" className="btn-icon animate-pulse" onClick={handleToggleWishlist}>
                <i className={`ci-heart${wishlist ? '-filled' : ''} fs-base animate-target`} />
              </Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip className="tooltip-sm">{comparison ? 'Remove from Comparison' : 'Compare'}</Tooltip>}
            >
              <Button
                variant="secondary"
                className={`btn-icon animate-${comparison ? 'scale' : 'rotate'}`}
                onClick={handleToggleCompare}
              >
                <i className={`ci-${comparison ? 'check-circle' : 'refresh-cw'} fs-base animate-target`} />
              </Button>
            </OverlayTrigger>
          </div>
        </div>
      </div>

      {/* Toast notification stack */}
      <ToastRenderer />
    </>
  )
}

export default StickyProductDesktopElectronics
