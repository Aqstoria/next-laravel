'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { useProductView } from '@/contexts/product-view-context'
import { useCart } from '@/contexts/cart-context'
import { useToast } from '@/hooks/use-toast'
import type { Product } from '@/types/product'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Placeholder from 'react-bootstrap/Placeholder'
import Alert from 'react-bootstrap/Alert'
import ProductCardFurniture from './product-card-furniture'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface ProductsGridFurnitureProps {
  dataUrl: string
  dataSlice?: [number, number]
  className?: string
}

const ProductsGridFurniture = ({ dataUrl, dataSlice, className }: ProductsGridFurnitureProps) => {
  const { data, error, isLoading } = useSWR<Product[]>(dataUrl, fetcher)
  const { isRoomView } = useProductView()
  const { addToCart } = useCart('furniture')
  const { createToast, ToastRenderer } = useToast()

  // Track wishlist items with state only
  const [wishlistItems, setWishlistItems] = useState<Record<string, boolean>>({})

  // Handle add to cart with toast
  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      image: product.image[0],
      title: product.title,
      href: product.href,
      price: product.price,
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
      <Row xs={2} md={3} lg={4} className={`gy-5${className ? ` ${className}` : ''}`}>
        {Array.from({ length: dataSlice ? dataSlice[1] - dataSlice[0] : 8 }, (_, index) => (
          <Col key={index}>
            <Placeholder as="div" animation="wave" className="position-relative mb-2">
              <Placeholder className="ratio ratio-1x1 rounded" />
              <i className="ci-image position-absolute top-50 start-50 translate-middle fs-1 opacity-40" />
            </Placeholder>
            <Placeholder as="p" animation="glow" className="mb-0">
              <Placeholder xs={5} size="xs" />
            </Placeholder>
            <Placeholder as="h6" animation="glow" className="mb-0">
              <Placeholder xs={12} size="xs" />
            </Placeholder>
            <Placeholder as="p" animation="glow" className="mb-3">
              <Placeholder xs={5} size="sm" />
            </Placeholder>
            <div className="d-flex gap-2 opacity-50">
              <Placeholder.Button variant="dark" animation="wave" className="w-100 rounded-pill">
                &nbsp;
              </Placeholder.Button>
              <Placeholder.Button variant="dark" animation="wave" className="btn-icon rounded-pill">
                &nbsp;
              </Placeholder.Button>
            </div>
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

  return (
    <>
      <Row xs={2} md={3} lg={4} className={`gy-5${className ? ` ${className}` : ''}`}>
        {(dataSlice ? (data || []).slice(dataSlice[0], dataSlice[1]) : data || []).map((product) => (
          <Col key={product.id}>
            <ProductCardFurniture
              active={isRoomView}
              outOfStock={product.outOfStock}
              image={{ src: [product.image[0], product.image[1]], width: 516, height: 480, alt: product.title }}
              title={product.title}
              href={product.href}
              price={{
                current: product.price[0],
                original: product.price[1],
              }}
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
              cartButton={{
                onClick: () => handleAddToCart(product),
              }}
              wishlistButton={{
                active: wishlistItems[product.id] || false,
                onClick: () => handleToggleWishlist(product),
              }}
            />
          </Col>
        ))}
      </Row>

      {/* Toast notification stack */}
      <ToastRenderer />
    </>
  )
}

export default ProductsGridFurniture
