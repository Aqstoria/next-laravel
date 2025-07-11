'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { useToast } from '@/hooks/use-toast'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Placeholder from 'react-bootstrap/Placeholder'
import Alert from 'react-bootstrap/Alert'
import CategoryCardVariantSix from '@/components/shop/category-card-variant-six'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface CollectionsGridMarketplaceProps {
  dataUrl: string
  dataSlice?: [number, number]
  className?: string
}

interface Collection {
  id: string
  images: [string, string, string]
  title: string
  subtitle: string
  href: string
}

const CollectionsGridMarketplace = ({ dataUrl, dataSlice, className }: CollectionsGridMarketplaceProps) => {
  const { data, error, isLoading } = useSWR<Collection[]>(dataUrl, fetcher)
  const { createToast, ToastRenderer } = useToast()

  // Track wishlist items with state
  const [wishlistItems, setWishlistItems] = useState<Record<string, boolean>>({})

  // Handle toggle wishlist with toast
  const handleToggleWishlist = (collection: Collection) => {
    const isCurrentlyInWishlist = wishlistItems[collection.id] || false

    setWishlistItems((prev) => ({
      ...prev,
      [collection.id]: !isCurrentlyInWishlist,
    }))

    if (isCurrentlyInWishlist) {
      createToast(
        {
          action: 'Removed from wishlist:',
          product: ` ${collection.title} collection`,
        },
        'wishlist'
      )
    } else {
      createToast(
        {
          action: 'Added to wishlist:',
          product: ` ${collection.title} collection`,
        },
        'wishlist'
      )
    }
  }

  if (isLoading)
    return (
      <Row xs={2} md={4} className={`gy-4 gx-3 gx-sm-4 gx-md-3 gx-xl-4${className ? ` ${className}` : ''}`}>
        {Array.from({ length: dataSlice ? dataSlice[1] - dataSlice[0] : 4 }, (_, index) => (
          <Col key={index}>
            <Placeholder as="div" animation="wave" className="position-relative mb-1">
              <Placeholder
                className="ratio rounded m-0"
                style={{ '--cz-aspect-ratio': 'calc(160 / 306 * 100%)' } as React.CSSProperties}
              />
              <i className="ci-image position-absolute top-50 start-50 translate-middle fs-2 opacity-40" />
            </Placeholder>
            <div className="d-flex gap-1 mb-3">
              <Placeholder animation="wave" className="position-relative w-100">
                <Placeholder
                  className="ratio rounded m-0"
                  style={{ '--cz-aspect-ratio': 'calc(160 / 151 * 100%)' } as React.CSSProperties}
                />
                <i className="ci-image position-absolute top-50 start-50 translate-middle fs-3 opacity-40" />
              </Placeholder>
              <Placeholder animation="wave" className="position-relative w-100">
                <Placeholder
                  className="ratio rounded m-0"
                  style={{ '--cz-aspect-ratio': 'calc(160 / 151 * 100%)' } as React.CSSProperties}
                />
                <i className="ci-image position-absolute top-50 start-50 translate-middle fs-3 opacity-40" />
              </Placeholder>
            </div>
            <Placeholder as="h6" animation="glow" className="mb-0">
              <Placeholder xs={12} size="sm" />
            </Placeholder>
            <Placeholder as="p" animation="glow" className="mb-0">
              <Placeholder xs={6} size="xs" />
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
          <span className="fw-semibold">Error loading collections:</span> {error.message}
        </div>
      </Alert>
    )

  return (
    <>
      <Row xs={2} md={4} className={`gy-4 gx-3 gx-sm-4 gx-md-3 gx-xl-4${className ? ` ${className}` : ''}`}>
        {(dataSlice ? (data || []).slice(dataSlice[0], dataSlice[1]) : data || []).map((collection) => (
          <Col key={collection.id}>
            <CategoryCardVariantSix
              images={[
                [collection.images[0], 'Image'],
                [collection.images[1], 'Image'],
                [collection.images[2], 'Image'],
              ]}
              title={collection.title}
              subtitle={collection.subtitle}
              href={collection.href}
              wishlistButton={{
                active: wishlistItems[collection.id] || false,
                onClick: () => handleToggleWishlist(collection),
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

export default CollectionsGridMarketplace
