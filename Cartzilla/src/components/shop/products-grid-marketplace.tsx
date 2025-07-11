'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { useToast } from '@/hooks/use-toast'
import type { DigitalProduct } from '@/types/digital-product'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Placeholder from 'react-bootstrap/Placeholder'
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
import ProductCardMarketplace from './product-card-marketplace'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface ProductsGridMarketplaceProps {
  dataUrl: string
  dataSlice?: [number, number]
  className?: string
}

const ProductsGridMarketplace = ({ dataUrl, dataSlice, className }: ProductsGridMarketplaceProps) => {
  const { data, error, isLoading } = useSWR<DigitalProduct[]>(dataUrl, fetcher)
  const { createToast, ToastRenderer } = useToast()

  // Track wishlist items with state
  const [wishlistItems, setWishlistItems] = useState<Record<string, boolean>>({})

  // Handle toggle wishlist with toast
  const handleToggleWishlist = (product: DigitalProduct) => {
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
      <Row xs={2} md={3} lg={4} className={`g-3 g-sm-4 g-lg-3 g-xl-4${className ? ` ${className}` : ''}`}>
        {Array.from({ length: dataSlice ? dataSlice[1] - dataSlice[0] : 8 }, (_, index) => (
          <Col key={index}>
            <Card>
              <Placeholder as="div" animation="wave" className="position-relative mb-3">
                <Placeholder
                  className="ratio card-img-top"
                  style={{ '--cz-aspect-ratio': 'calc(220 / 304 * 100%)' } as React.CSSProperties}
                />
                <i className="ci-image position-absolute top-50 start-50 translate-middle fs-1 opacity-40" />
              </Placeholder>
              <Card.Body className="pt-0 pb-3">
                <Placeholder as="h6" animation="glow" className="mb-1">
                  <Placeholder xs={12} size="sm" />
                </Placeholder>
                <Placeholder as="p" animation="glow" className="mb-0">
                  <Placeholder xs={6} size="sm" />
                </Placeholder>
              </Card.Body>
            </Card>
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
      <Row xs={2} md={3} lg={4} className={`g-3 g-sm-4 g-lg-3 g-xl-4${className ? ` ${className}` : ''}`}>
        {(dataSlice ? (data || []).slice(dataSlice[0], dataSlice[1]) : data || []).map((product) => (
          <Col key={product.id}>
            <ProductCardMarketplace
              image={{ src: product.image, width: 608, height: 440, alt: product.title }}
              title={product.title}
              href={product.href}
              price={{
                current: product.price[0],
                original: product.price[1],
              }}
              author={{
                avatar: product.author.avatar,
                name: product.author.name,
                href: product.author.href,
              }}
              category={{
                label: product.category.label,
                href: product.category.href,
              }}
              sales={{
                count: product.sales,
              }}
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
        ))}
      </Row>

      {/* Toast notification stack */}
      <ToastRenderer />
    </>
  )
}

export default ProductsGridMarketplace
