'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { useToast } from '@/hooks/use-toast'
import type { Product } from '@/types/product'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Placeholder from 'react-bootstrap/Placeholder'
import Alert from 'react-bootstrap/Alert'
import ProductCardFashion from './product-card-fashion'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface ProductsGridFashionProps {
  dataUrl: string
  dataSlice?: [number, number]
  bannerPosition?: number
  bannerColumnClasses?: string
  className?: string
}

const ProductsGridFashion = ({
  dataUrl,
  dataSlice,
  bannerPosition,
  bannerColumnClasses,
  children,
  className,
}: React.PropsWithChildren<ProductsGridFashionProps>) => {
  const { data, error, isLoading } = useSWR<Product[]>(dataUrl, fetcher)
  const { createToast, ToastRenderer } = useToast()

  // Track wishlist items with state
  const [wishlistItems, setWishlistItems] = useState<Record<string, boolean>>({})

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
          product: ` ${product.title}`,
        },
        'wishlist'
      )
    } else {
      createToast(
        {
          action: 'Added to wishlist:',
          product: ` ${product.title}`,
        },
        'wishlist'
      )
    }
  }

  if (isLoading)
    return (
      <Row xs={2} md={3} className={`gy-4 gy-md-5${className ? ` ${className}` : ''}`}>
        {Array.from({ length: dataSlice ? dataSlice[1] - dataSlice[0] : 9 }, (_, index) => (
          <Col key={index} className="mb-2 mb-sm-3 mb-md-0">
            <Placeholder as="div" animation="wave" className="position-relative mb-3">
              <Placeholder
                className="ratio rounded"
                style={{ '--cz-aspect-ratio': 'calc(340 / 306 * 100%)' } as React.CSSProperties}
              />
              <i className="ci-image position-absolute top-50 start-50 translate-middle fs-1 opacity-40" />
            </Placeholder>
            <Placeholder as="h6" animation="glow" className="mb-2">
              <Placeholder xs={12} size="sm" />
            </Placeholder>
            <Placeholder as="p" animation="glow" className="mb-1">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as="p" animation="glow" className="mb-0">
              <Placeholder xs={4} size="xs" />
            </Placeholder>
          </Col>
        ))}
      </Row>
    )

  if (error)
    return (
      <Alert variant="danger" className="d-inline-flex mb-0">
        <i className="ci-alert-triangle fs-lg pe-1 mt-1 me-2" />
        <div>
          <span className="fw-semibold">Error loading products:</span> {error.message}
        </div>
      </Alert>
    )

  const products = dataSlice ? (data || []).slice(dataSlice[0], dataSlice[1]) : data || []

  // Create array of items with products and banner inserted at the correct position
  const finalItems: React.ReactNode[] = []

  products.forEach((product, index) => {
    // Insert banner at the specified position
    if (bannerPosition !== undefined && index === bannerPosition) {
      finalItems.push(
        <Col
          key="banner"
          className={`${bannerColumnClasses ? `${bannerColumnClasses}` : 'col-12 col-md-8'} mb-2 mb-sm-3 mb-md-0`}
        >
          {children}
        </Col>
      )
    }

    // Add the product
    finalItems.push(
      <Col key={product.id || `product-${index}`} className="mb-2 mb-sm-3 mb-md-0">
        <ProductCardFashion
          image={{ src: product.image[0], width: 548, height: 616, alt: product.title }}
          title={product.title}
          href={product.href}
          price={{
            current: product.price[0],
            original: product.price[1],
          }}
          sizes={product.sizes && product.sizes}
          colors={
            product.colors && {
              toggles: product.colors,
            }
          }
          badge={
            product.badge && {
              label: product.badge[1],
              bg: product.badge[0],
            }
          }
          wishlistButton={{
            active: wishlistItems[product.id] || false,
            onClick: () => handleToggleWishlist(product),
          }}
        />
      </Col>
    )
  })

  // If banner position is at the end or beyond the products array length
  if (bannerPosition !== undefined && bannerPosition >= products.length) {
    finalItems.push(
      <Col
        key="banner"
        className={`${bannerColumnClasses ? `${bannerColumnClasses}` : 'col-12 col-md-8'} mb-2 mb-sm-3 mb-md-0`}
      >
        {children}
      </Col>
    )
  }

  return (
    <>
      <Row xs={2} md={3} className={`gy-4 gy-md-5${className ? ` ${className}` : ''}`}>
        {finalItems}
      </Row>

      {/* Toast notification stack */}
      <ToastRenderer />
    </>
  )
}

export default ProductsGridFashion
