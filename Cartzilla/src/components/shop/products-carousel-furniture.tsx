'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { useCart } from '@/contexts/cart-context'
import { useToast } from '@/hooks/use-toast'
import type { Product } from '@/types/product'
import ProductCardFurniture from './product-card-furniture'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Placeholder from 'react-bootstrap/Placeholder'
import Button from 'react-bootstrap/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface ProductsCarouselFurnitureProps {
  dataUrl: string
  loop?: boolean
  className?: string
  id?: string
}

const ProductsCarouselFurniture = ({ dataUrl, loop, className, id }: ProductsCarouselFurnitureProps) => {
  const { data, error, isLoading } = useSWR<Product[]>(dataUrl, fetcher)
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
      <Row xs={2} md={3} lg={4} className={`g-4${className ? ` ${className}` : ''}`}>
        {Array.from({ length: 4 }, (_, index) => {
          const colClasses = ['', '', 'd-none d-md-block', 'd-none d-lg-block']
          return (
            <Col key={index} className={colClasses[index]}>
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
          )
        })}
      </Row>
    )

  if (error)
    return (
      <div className={className}>
        <Alert variant="danger" className="d-inline-flex">
          <i className="ci-alert-triangle fs-lg pe-1 mt-1 me-2" />
          <div>
            <span className="fw-semibold">Error loading products:</span> {error.message}
          </div>
        </Alert>
      </div>
    )

  return (
    <>
      <div className={`position-relative${className ? ` ${className}` : ''}`}>
        <Button
          variant="outline-secondary"
          className={`${id ? `btn-prev-${id}` : 'btn-prev'} btn-icon bg-body rounded-circle animate-slide-start position-absolute top-50 start-0 z-2 translate-middle mt-n5 d-none d-sm-inline-flex`}
          aria-label="Previous slide"
        >
          <i className="ci-chevron-left fs-lg animate-target" />
        </Button>
        <Button
          variant="outline-secondary"
          className={`${id ? `btn-next-${id}` : 'btn-next'} btn-icon bg-body rounded-circle animate-slide-end position-absolute top-50 start-100 z-2 translate-middle mt-n5 d-none d-sm-inline-flex`}
          aria-label="Next slide"
        >
          <i className="ci-chevron-right fs-lg animate-target" />
        </Button>
        <Swiper
          modules={[Navigation]}
          slidesPerView={2}
          spaceBetween={24}
          loop={loop}
          navigation={{
            prevEl: `.btn-prev${id ? `-${id}` : ''}`,
            nextEl: `.btn-next${id ? `-${id}` : ''}`,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
          }}
        >
          {(data || []).map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCardFurniture
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
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="d-flex justify-content-center gap-2 mt-1 pt-4 d-sm-none">
          <Button
            variant="outline-secondary"
            className={`${id ? `btn-prev-${id}` : 'btn-prev'} btn-icon bg-body rounded-circle animate-slide-start me-1`}
            aria-label="Previous slide"
          >
            <i className="ci-chevron-left fs-lg animate-target" />
          </Button>
          <Button
            variant="outline-secondary"
            className={`${id ? `btn-next-${id}` : 'btn-next'} btn-icon bg-body rounded-circle animate-slide-end`}
            aria-label="Next slide"
          >
            <i className="ci-chevron-right fs-lg animate-target" />
          </Button>
        </div>
      </div>

      {/* Toast notification stack */}
      <ToastRenderer />
    </>
  )
}

export default ProductsCarouselFurniture
