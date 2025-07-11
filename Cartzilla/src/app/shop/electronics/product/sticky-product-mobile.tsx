'use client'

import { useState } from 'react'
import { useStickyElement } from '@/hooks/use-sticky-element'
import { useCart } from '@/contexts/cart-context'
import { useToast } from '@/hooks/use-toast'
import type { Product } from '@/types/product'
import Image from 'next/image'
import Ratio from 'react-bootstrap/Ratio'
import Button from 'react-bootstrap/Button'

const StickyProductMobileElectronics = ({ product, className }: { product: Product; className?: string }) => {
  const { stickyElementRef, isStuck } = useStickyElement<HTMLDivElement>()
  const { addToCart } = useCart('electronics')
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
      specs: product.specs,
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
      <section
        ref={stickyElementRef}
        className={`sticky-product-banner sticky-top d-md-none${isStuck ? ' is-stuck' : ''}${className ? ` ${className}` : ''}`}
      >
        <div className="sticky-product-banner-inner start-0 pt-5">
          <div className="vw-100 bg-body border-bottom border-light border-opacity-10 shadow pt-4 pb-2">
            <div className="container d-flex align-items-center">
              <div className="d-flex align-items-center min-w-0 ms-n2 me-3">
                <Ratio aspectRatio="1x1" className="flex-shrink-0" style={{ width: 50 }}>
                  <Image src={product.image[1]} width={100} height={100} alt="Image" />
                </Ratio>
                <div className="w-100 min-w-0 ps-2">
                  <h4 className="fs-sm fw-medium text-truncate mb-1">{product.title}</h4>
                  <div className="h6 mb-0">
                    $
                    {product.price[0].toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}{' '}
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
              <div className="d-flex gap-2 ms-auto">
                <Button
                  variant="secondary"
                  className="btn-icon animate-pulse"
                  onClick={handleToggleWishlist}
                  aria-label={`${wishlist ? 'Remove from' : 'Add to'} Wishlist`}
                >
                  <i className={`ci-heart${wishlist ? '-filled' : ''} fs-base animate-target`} />
                </Button>
                <Button className="animate-slide-end d-none d-sm-inline-flex" onClick={() => handleAddToCart(product)}>
                  <i className="ci-shopping-cart fs-base animate-target ms-n1 me-2" />
                  Add to cart
                </Button>
                <Button
                  className="btn-icon animate-slide-end d-sm-none"
                  aria-label="Add to Cart"
                  onClick={() => handleAddToCart(product)}
                >
                  <i className="ci-shopping-cart fs-lg animate-target" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toast notification stack */}
      <ToastRenderer />
    </>
  )
}

export default StickyProductMobileElectronics
