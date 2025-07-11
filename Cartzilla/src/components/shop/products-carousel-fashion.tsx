'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { useToast } from '@/hooks/use-toast'
import type { Product } from '@/types/product'
import Link from 'next/link'
import ProductCardFashion from './product-card-fashion'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Placeholder from 'react-bootstrap/Placeholder'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface ProductsCarouselFashionProps {
  dataUrl: string
  heading?: string
  link?: {
    label: string
    href: string
  }
  sliderNavs?: boolean
  sliderBullets?: boolean
  loop?: boolean
  className?: string
  id?: string
}

const ProductsCarouselFashion = ({
  dataUrl,
  heading,
  link,
  sliderNavs,
  sliderBullets,
  loop,
  className,
  id,
}: ProductsCarouselFashionProps) => {
  const { data, error, isLoading } = useSWR<Product[]>(dataUrl, fetcher)
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

  if (isLoading)
    return (
      <div className={className}>
        {heading && <h2 className="pt-1 pt-lg-0 pb-3 mb-2 mb-sm-3">{heading}</h2>}
        <Row xs={2} md={3} lg={4} className={`g-4${className ? ` ${className}` : ''}`}>
          {Array.from({ length: 4 }, (_, index) => {
            const colClasses = ['', '', 'd-none d-md-block', 'd-none d-lg-block']
            return (
              <Col key={index} className={colClasses[index]}>
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
            )
          })}
        </Row>
      </div>
    )

  if (error)
    return (
      <div className={className}>
        {heading && <h2 className="pt-1 pt-lg-0 pb-3 mb-2 mb-sm-3">{heading}</h2>}
        <Alert variant="danger" className="d-inline-flex mb-0">
          <i className="ci-alert-triangle fs-lg pe-1 mt-1 me-2" />
          <div>
            <span className="fw-semibold">Error loading products:</span> {error.message}
          </div>
        </Alert>
      </div>
    )

  return (
    <>
      <div className={className}>
        {(heading || sliderNavs) && (
          <div className="d-flex align-items-center justify-content-between pt-1 pt-lg-0 pb-3 mb-2 mb-sm-3">
            {heading && <h2 className="mb-0">{heading}</h2>}
            {sliderNavs && (
              <div className="d-flex gap-2 ms-3">
                <Button
                  variant="outline-secondary"
                  className={`btn-prev${id ? `-${id}` : ''} btn-icon animate-slide-start rounded-circle me-1`}
                  aria-label="Previous slide"
                >
                  <i className="ci-chevron-left fs-lg animate-target" />
                </Button>
                <Button
                  variant="outline-secondary"
                  className={`btn-next${id ? `-${id}` : ''} btn-icon animate-slide-end rounded-circle`}
                  aria-label="Next slide"
                >
                  <i className="ci-chevron-right fs-lg animate-target" />
                </Button>
              </div>
            )}
            {link && (
              <Nav className="ms-3">
                <Nav.Link as={Link} href={link.href} className="animate-underline px-0 py-2">
                  <span className="animate-target text-nowrap">{link.label}</span>
                  <i className="ci-chevron-right fs-base ms-1" />
                </Nav.Link>
              </Nav>
            )}
          </div>
        )}

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={2}
          spaceBetween={24}
          loop={loop}
          navigation={
            sliderNavs && {
              prevEl: `.btn-prev${id ? `-${id}` : ''}`,
              nextEl: `.btn-next${id ? `-${id}` : ''}`,
            }
          }
          pagination={
            sliderBullets && {
              el: '.swiper-pagination',
              clickable: true,
            }
          }
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
            <SwiperSlide key={product.id} className="h-auto">
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
            </SwiperSlide>
          ))}
          {sliderBullets && <div className="swiper-pagination position-static mt-3 mt-md-4"></div>}
        </Swiper>
      </div>

      {/* Toast notification stack */}
      <ToastRenderer />
    </>
  )
}

export default ProductsCarouselFashion
