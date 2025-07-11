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
import ProductCardElectronics from './product-card-electronics'
import { ProductService } from '@/services/products'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface ProductsGridElectronicsProps {
  dataSlice?: [number, number]
  bannerPosition?: number
  className?: string
}

const ProductsGridElectronics = ({
  dataSlice,
  bannerPosition,
  children,
  className,
}: React.PropsWithChildren<ProductsGridElectronicsProps>) => {
  const { data, error, isLoading } = useSWR(
    'products',
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
          product: ` ${product.title}`,
        },
        'comparison'
      )
    } else {
      createToast(
        {
          action: 'Added to comparison list:',
          product: ` ${product.title}`,
        },
        'comparison'
      )
    }
  }

  if (isLoading)
    return (
      <Row xs={2} md={3} className={`g-4${className ? ` ${className}` : ''}`}>
        {Array.from({ length: dataSlice ? dataSlice[1] - dataSlice[0] : 9 }, (_, index) => (
          <Col key={index}>
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
      finalItems.push(<Col key="banner">{children}</Col>)
    }

    // Add the product
    finalItems.push(
      <Col key={product.id || `product-${index}`}>
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
          specs={undefined}
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
    )
  })

  // If banner position is at the end or beyond the products array length
  if (bannerPosition !== undefined && bannerPosition >= products.length) {
    finalItems.push(<Col key="banner">{children}</Col>)
  }

  return (
    <>
      <Row xs={2} md={3} className={`g-4${className ? ` ${className}` : ''}`}>
        {finalItems}
      </Row>

      {/* Toast notification stack */}
      <ToastRenderer />
    </>
  )
}

export default ProductsGridElectronics
