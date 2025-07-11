'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { useCart } from '@/contexts/cart-context'
import { useToast } from '@/hooks/use-toast'
import type { Product } from '@/types/product'
import Link from 'next/link'
import ProductCardGrocery from './product-card-grocery'
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

interface ProductsCarouselGroceryProps {
  dataUrl: string
  slidesPerView?: 4 | 5
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

const ProductsCarouselGrocery = ({
  dataUrl,
  slidesPerView = 5,
  heading,
  link,
  sliderNavs,
  sliderBullets,
  loop,
  className,
  id,
}: ProductsCarouselGroceryProps) => {
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
      <div className={className}>
        {heading && <h2 className="h3 border-bottom pb-3 pb-md-4 mb-3 mb-lg-4">{heading}</h2>}
        <Row
          xs={2}
          sm={slidesPerView === 4 ? 2 : 3}
          md={slidesPerView === 4 ? 3 : 4}
          lg={slidesPerView === 4 ? 4 : 5}
          className={`g-4${className ? ` ${className}` : ''}`}
        >
          {Array.from({ length: slidesPerView }, (_, index) => {
            const colClasses =
              slidesPerView === 4
                ? ['', '', 'd-none d-md-block', 'd-none d-lg-block']
                : ['', '', 'd-none d-sm-block', 'd-none d-md-block', 'd-none d-lg-block']
            return (
              <Col key={index} className={colClasses[index]}>
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
            )
          })}
        </Row>
      </div>
    )

  if (error)
    return (
      <div className={className}>
        {heading && <h2 className="h3 border-bottom pb-3 pb-md-4 mb-3 mb-lg-4">{heading}</h2>}
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
          <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4 mb-3 mb-lg-4">
            {heading && <h2 className="h3 mb-0">{heading}</h2>}
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
          breakpoints={
            slidesPerView === 4
              ? {
                  840: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                }
              : {
                  500: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1100: {
                    slidesPerView: 5,
                  },
                }
          }
        >
          {(data || []).map((product) => (
            <SwiperSlide key={product.id} className="h-auto">
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
            </SwiperSlide>
          ))}
          {sliderBullets && <div className="swiper-pagination position-static mt-2 mt-md-3"></div>}
        </Swiper>
      </div>

      {/* Toast notification stack */}
      <ToastRenderer />
    </>
  )
}

export default ProductsCarouselGrocery
