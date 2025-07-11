'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { useCart } from '@/contexts/cart-context'
import { useToast } from '@/hooks/use-toast'
import type { Product } from '@/types/product'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Placeholder from 'react-bootstrap/Placeholder'
import Alert from 'react-bootstrap/Alert'
import ProductCardGrocery from './product-card-grocery'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface ProductsGridGroceryProps {
  dataUrl: string
  dataSlice?: [number, number]
  className?: string
}

const ProductsGridGrocery = ({ dataUrl, dataSlice, className }: ProductsGridGroceryProps) => {
  const { data, error, isLoading } = useSWR<Product[]>(dataUrl, fetcher)
  const { addToCart, decreaseQuantity } = useCart('grocery')
  const { createToast, ToastRenderer } = useToast()

  // Track wishlist items with state only
  const [wishlistItems, setWishlistItems] = useState<Record<string, boolean>>({})

  // Handle add to cart with toast
  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      image: product.image[1],
      title: product.title,
      href: product.href,
      price: product.price,
      description: product.description,
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

  // Handle remove from cart with toast
  const handleRemoveFromCart = (product: Product) => {
    decreaseQuantity(product.id)

    createToast(
      {
        action: 'Removed from cart:',
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
      <Row xs={2} sm={3} md={4} lg={3} xl={4} className={`g-4${className ? ` ${className}` : ''}`}>
        {Array.from({ length: dataSlice ? dataSlice[1] - dataSlice[0] : 8 }, (_, index) => (
          <Col key={index}>
            <Placeholder as="div" animation="wave" className="position-relative mb-2">
              <Placeholder
                className="ratio rounded"
                style={{ '--cz-aspect-ratio': 'calc(160 / 191 * 100%)' } as React.CSSProperties}
              />
              <i className="ci-image position-absolute top-50 start-50 translate-middle fs-1 opacity-40" />
            </Placeholder>
            <Placeholder as="p" animation="glow" className="mb-0">
              <Placeholder xs={5} size="sm" />
            </Placeholder>
            <Placeholder as="h6" animation="glow" className="mb-0">
              <Placeholder xs={12} size="xs" />
              <Placeholder xs={8} size="xs" />
            </Placeholder>
            <Placeholder as="p" animation="glow" className="mb-0">
              <Placeholder xs={5} size="xs" />
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

  return (
    <>
      <Row xs={2} sm={3} md={4} lg={3} xl={4} className={`g-4${className ? ` ${className}` : ''}`}>
        {(dataSlice ? (data || []).slice(dataSlice[0], dataSlice[1]) : data || []).map((product) => (
          <Col key={product.id}>
            <ProductCardGrocery
              image={{ src: product.image[0], width: 282, height: 236, alt: product.title }}
              title={product.title}
              href={product.href}
              price={{
                current: product.price[0],
                original: product.price[1],
              }}
              description={product.description}
              badge={
                product.badge && {
                  label: product.badge[1],
                  bg: product.badge[0],
                }
              }
              cartButton={{
                onIncrement: () => handleAddToCart(product),
                onDecrement: () => handleRemoveFromCart(product),
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

export default ProductsGridGrocery
