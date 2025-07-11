'use client'

import { useState } from 'react'
import { useStickyElement } from '@/hooks/use-sticky-element'
import { useCart } from '@/contexts/cart-context'
import { useToast } from '@/hooks/use-toast'
import type { Product } from '@/types/product'
import Image from 'next/image'
import Ratio from 'react-bootstrap/Ratio'
import Button from 'react-bootstrap/Button'

const StickyProductFashion = ({ product }: { product: Product }) => {
  const { stickyElementRef, isStuck } = useStickyElement<HTMLDivElement>()
  const { addToCart } = useCart('fashion')
  const { createToast, ToastRenderer } = useToast()
  const [wishlist, setWishlist] = useState(false)

  // Handle add to cart with toast
  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      image: product.image[1],
      title: product.title,
      href: product.href,
      price: product.price,
      quantity: 1,
      badge: product.badge,
    })

    createToast(
      {
        action: 'Added to cart:',
        product: product.title,
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

  return (
    <>
      <section ref={stickyElementRef} className={`sticky-product-banner sticky-top${isStuck ? ' is-stuck' : ''}`}>
        <div className="sticky-product-banner-inner pt-5">
          <div className="navbar container flex-nowrap align-items-center bg-body pt-4 pt-lg-5 mt-lg-n2">
            <div className="d-flex align-items-center min-w-0 ms-lg-2 me-3">
              <Ratio aspectRatio="1x1" className="flex-shrink-0" style={{ width: 50 }}>
                <Image src="/img/shop/fashion/product/thumb.png" width={100} height={100} alt="Image" />
              </Ratio>
              <h4 className="h6 fw-medium d-none d-lg-block ps-3 mb-0">{product.title}</h4>
              <div className="w-100 min-w-0 d-lg-none ps-2">
                <h4 className="fs-sm fw-medium text-truncate mb-1">{product.title}</h4>
                <div className="h6 mb-0">
                  ${product.price[0].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{' '}
                  {product.price[1] !== undefined && (
                    <del className="fs-xs fw-normal text-body-tertiary">
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
            <div className="h4 d-none d-lg-block mb-0 ms-auto me-4">
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
            <div className="d-flex gap-2">
              <Button
                variant="secondary"
                className="btn-icon animate-pulse"
                onClick={handleToggleWishlist}
                aria-label={`${wishlist ? 'Remove from' : 'Add to'} Wishlist`}
              >
                <i className={`ci-heart${wishlist ? '-filled' : ''} fs-base animate-target`} />
              </Button>
              <Button
                variant="dark"
                className="d-none d-md-inline-flex ms-auto px-4"
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </Button>
              <Button
                variant="dark"
                className="btn-icon animate-slide-end ms-auto d-md-none"
                aria-label="Add to Cart"
                onClick={() => handleAddToCart(product)}
              >
                <i className="ci-shopping-cart fs-base animate-target" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Toast notification stack */}
      <ToastRenderer />
    </>
  )
}

export default StickyProductFashion
