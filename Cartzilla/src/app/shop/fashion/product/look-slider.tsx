'use client'

import { useState, ReactNode } from 'react'
import useSWR from 'swr'
import { useToast } from '@/hooks/use-toast'
import type { Product } from '@/types/product'
import Image from 'next/image'
import ProductCardFashion from '@/components/shop/product-card-fashion'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Placeholder from 'react-bootstrap/Placeholder'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const LookSliderFashion = ({ mainImage, productsURL }: { mainImage: string; productsURL: string }) => {
  const { data, error, isLoading } = useSWR<Product[]>(productsURL, fetcher)
  const { createToast, ToastRenderer } = useToast()

  // Track wishlist items with state only
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

  // Create slides from products
  const renderProductSlides = () => {
    if (!data || data.length === 0) return null

    const slides: ReactNode[] = []

    for (let i = 0; i < data.length; i += 2) {
      const product1 = data[i]
      const product2 = i + 1 < data.length ? data[i + 1] : undefined

      slides.push(
        <SwiperSlide key={`slide-${i}`} className="h-auto">
          <Row xs={2}>
            <Col>
              <ProductCardFashion
                image={{ src: product1.image[0], width: 548, height: 616, alt: product1.title }}
                title={product1.title}
                href={product1.href}
                price={{
                  current: product1.price[0],
                  original: product1.price[1],
                }}
                sizes={product1.sizes && product1.sizes}
                colors={
                  product1.colors && {
                    toggles: product1.colors,
                  }
                }
                badge={
                  product1.badge && {
                    label: product1.badge[1],
                    bg: product1.badge[0],
                  }
                }
                wishlistButton={{
                  active: wishlistItems[product1.id] || false,
                  onClick: () => handleToggleWishlist(product1),
                }}
              />
            </Col>
            <Col>
              {product2 && (
                <ProductCardFashion
                  image={{ src: product2.image[0], width: 548, height: 616, alt: product2.title }}
                  title={product2.title}
                  href={product2.href}
                  price={{
                    current: product2.price[0],
                    original: product2.price[1],
                  }}
                  sizes={product2.sizes && product2.sizes}
                  colors={
                    product2.colors && {
                      toggles: product2.colors,
                    }
                  }
                  badge={
                    product2.badge && {
                      label: product2.badge[1],
                      bg: product2.badge[0],
                    }
                  }
                  wishlistButton={{
                    active: wishlistItems[product2.id] || false,
                    onClick: () => handleToggleWishlist(product2),
                  }}
                />
              )}
            </Col>
          </Row>
        </SwiperSlide>
      )
    }

    return slides
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-between pt-1 pt-lg-0 pb-3 mb-2 mb-sm-3">
        <h2 className="mb-0 me-3">Complete your look</h2>
        {!isLoading && !error && (
          <Stack direction="horizontal" gap={2}>
            <Button
              variant="outline-secondary"
              className="btn-icon animate-slide-start rounded-circle me-1"
              id="lookPrev"
              aria-label="Previous slide"
            >
              <i className="ci-chevron-left fs-lg animate-target"></i>
            </Button>
            <Button
              variant="outline-secondary"
              className="btn-icon animate-slide-end rounded-circle"
              id="lookNext"
              aria-label="Next slide"
            >
              <i className="ci-chevron-right fs-lg animate-target"></i>
            </Button>
          </Stack>
        )}
      </div>
      {error ? (
        <Alert variant="danger" className="d-inline-flex mb-0">
          <i className="ci-alert-triangle fs-lg pe-1 mt-1 me-2" />
          <div>
            <span className="fw-semibold">Error loading products:</span> {error.message}
          </div>
        </Alert>
      ) : isLoading ? (
        <Row>
          <Col md={6} className="order-md-2 mb-4 mb-md-0">
            <Row xs={2}>
              <Col>
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
              <Col>
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
            </Row>
          </Col>
          <Col md={6} className="order-md-1">
            <Placeholder as="div" animation="wave" className="position-relative">
              <Placeholder
                className="ratio rounded"
                style={{ '--cz-aspect-ratio': 'calc(706 / 636  * 100%)' } as React.CSSProperties}
              />
              <i className="ci-image position-absolute top-50 start-50 translate-middle fs-1 opacity-40" />
            </Placeholder>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col md={6} className="order-md-2 mb-4 mb-md-0">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={40}
              loop
              navigation={{
                prevEl: '#lookPrev',
                nextEl: '#lookNext',
              }}
            >
              {renderProductSlides()}
            </Swiper>
          </Col>
          <Col md={6} className="order-md-1">
            <div
              className="ratio bg-body-tertiary rounded overflow-hidden"
              style={{ '--cz-aspect-ratio': 'calc(706 / 636 * 100%)' } as React.CSSProperties}
            >
              <Image fill src={mainImage} sizes="1200px" className="object-fit-cover" alt="Image" />
            </div>
          </Col>
        </Row>
      )}

      {/* Toast notification stack */}
      <ToastRenderer />
    </>
  )
}

export default LookSliderFashion
