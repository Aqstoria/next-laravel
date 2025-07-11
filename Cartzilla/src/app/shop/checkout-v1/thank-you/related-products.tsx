'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { useCart } from '@/contexts/cart-context'
import { useToast } from '@/hooks/use-toast'
import { ProductService } from '@/services/products'
import type { Product } from '@/services/products'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Placeholder from 'react-bootstrap/Placeholder'
import Alert from 'react-bootstrap/Alert'
import ProductCardElectronics from '@/components/shop/product-card-electronics'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const RelatedProductsCheckout_V1 = () => {
  const { data, error, isLoading } = useSWR(
    'related-products',
    async () => {
      const res = await ProductService.getProducts()
      return res.data
    }
  )
  const { addToCart } = useCart('electronics')
  const { createToast, ToastRenderer } = useToast()

  // Track wishlist and comparison items with state only
  const [wishlistItems, setWishlistItems] = useState<Record<string, boolean>>({})
  const [comparisonItems, setComparisonItems] = useState<Record<string, boolean>>({})

  // Handle add to cart with toast
  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id.toString(),
      image: product.images[0],
      title: product.name,
      href: ProductService.getProductUrl(product),
      price: [ProductService.getProductPrice(product), ProductService.getProductOriginalPrice(product)],
      quantity: 1,
    })

    createToast(
      {
        action: 'Added to cart:',
        product: ` ${product.name}`,
      },
      'cart'
    )
  }

  // Handle toggle wishlist with toast
  const handleToggleWishlist = (product: Product) => {
    const isCurrentlyInWishlist = wishlistItems[product.id] || false

    setWishlistItems((prev) => ({
      ...prev,
      [product.id]: !isCurrentlyInWishlist,
    }))

    if (isCurrentlyInWishlist) {
      createToast(
        {
          action: 'Removed from wishlist:',
          product: ` ${product.name}`,
        },
        'wishlist'
      )
    } else {
      createToast(
        {
          action: 'Added to wishlist:',
          product: ` ${product.name}`,
        },
        'wishlist'
      )
    }
  }

  // Handle toggle compare with toast
  const handleToggleCompare = (product: Product) => {
    const isCurrentlyInComparison = comparisonItems[product.id] || false

    setComparisonItems((prev) => ({
      ...prev,
      [product.id]: !isCurrentlyInComparison,
    }))

    if (isCurrentlyInComparison) {
      createToast(
        {
          action: 'Removed from comparison list:',
          product: ` ${product.name}`,
        },
        'comparison'
      )
    } else {
      createToast(
        {
          action: 'Added to comparison list:',
          product: ` ${product.name}`,
        },
        'comparison'
      )
    }
  }

  return (
    <>
      <div className="position-relative d-flex align-items-center h-100 py-5 px-3 px-sm-4 px-xl-5">
        <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-tertiary rounded-5 d-none d-md-block" />
        <span className="position-absolute top-0 start-0 w-100 h-100 bg-body-tertiary d-md-none" />
        <div className="position-relative w-100 z-2 mx-auto pb-2 pb-sm-3 pb-md-0" style={{ maxWidth: 636 }}>
          <h2 className="h4 text-center pb-3">You may also like</h2>
          {isLoading ? (
            <Row xs={2} className="g-3 g-sm-4 mb-4">
              {Array.from({ length: 2 }, (_, index) => (
                <Col key={index}>
                  <div className="bg-body rounded p-3 pb-4">
                    <Placeholder as="div" animation="wave" className="position-relative mb-3">
                      <Placeholder
                        className="ratio rounded"
                        style={{ '--cz-aspect-ratio': 'calc(282 / 306 * 100%)' } as React.CSSProperties}
                      />
                      <i className="ci-image position-absolute top-50 start-50 translate-middle fs-1 opacity-40" />
                    </Placeholder>
                    <Placeholder as="p" animation="glow" className="mb-1">
                      <Placeholder xs={5} size="xs" />
                    </Placeholder>
                    <Placeholder as="h6" animation="glow" className="mb-2">
                      <Placeholder xs={12} size="sm" />
                    </Placeholder>
                    <Placeholder as="p" animation="glow" className="mb-0">
                      <Placeholder xs={5} />
                    </Placeholder>
                  </div>
                </Col>
              ))}
            </Row>
          ) : error ? (
            <Alert variant="danger" className="d-inline-flex mb-0">
              <i className="ci-alert-triangle fs-lg pe-1 mt-1 me-2" />
              <div>
                <span className="fw-semibold">Error loading products:</span> {error.message}
              </div>
            </Alert>
          ) : (
            <Row xs={2} className="g-3 g-sm-4 mb-4">
              {(data || []).map((product) => (
                <Col key={product.id}>
                  <ProductCardElectronics
                    image={{ src: product.images[0], width: 516, height: 480, alt: product.name }}
                    title={product.name}
                    href={ProductService.getProductUrl(product)}
                    price={{
                      current: ProductService.getProductPrice(product),
                      original: ProductService.getProductOriginalPrice(product),
                    }}
                    reviews={product.average_rating !== undefined && product.total_reviews !== undefined ? {
                      rating: product.average_rating,
                      count: product.total_reviews,
                    } : undefined}
                    cartButton={{
                      onClick: () => handleAddToCart(product),
                    }}
                    wishlistButton={{
                      active: wishlistItems[product.id] || false,
                      onClick: () => handleToggleWishlist(product),
                    }}
                    compareButton={{
                      active: comparisonItems[product.id] || false,
                      onClick: () => handleToggleCompare(product),
                    }}
                  />
                </Col>
              ))}
            </Row>
          )}

          <Link href="/shop/electronics" className="btn btn-lg btn-primary w-100">
            Continue shopping
            <i className="ci-chevron-right fs-lg ms-1 me-n1" />
          </Link>
        </div>
      </div>

      {/* Toast notification stack */}
      <ToastRenderer />
    </>
  )
}

export default RelatedProductsCheckout_V1
