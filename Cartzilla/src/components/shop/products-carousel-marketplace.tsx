'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { useToast } from '@/hooks/use-toast'
import type { DigitalProduct } from '@/types/digital-product'
import ProductCardMarketplace from '@/components/shop/product-card-marketplace'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Placeholder from 'react-bootstrap/Placeholder'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface ProductsCarouselMarketplaceProps {
  dataUrl: string
  slidesPerView?: 4 | 2
  heading: string
  className?: string
  id?: string
}

const ProductsCarouselMarketplace = ({
  dataUrl,
  slidesPerView = 4,
  heading,
  className,
  id,
}: ProductsCarouselMarketplaceProps) => {
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
      <div className={className}>
        <h2 className="h3 pb-3 mb-1 mb-sm-2 mb-md-3">{heading}</h2>
        <Row
          xs={slidesPerView === 2 ? 1 : 2}
          sm={2}
          md={slidesPerView === 2 ? 2 : 3}
          lg={slidesPerView === 2 ? 2 : 4}
          className={slidesPerView !== 2 ? 'gx-3 gx-sm-4 gx-lg-3 gx-xl-4' : undefined}
        >
          {Array.from({ length: slidesPerView }, (_, index) => {
            const colClasses =
              slidesPerView === 2 ? ['', 'd-none d-sm-block'] : ['', '', 'd-none d-md-block', 'd-none d-lg-block']
            return (
              <Col key={index} className={colClasses[index]}>
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
                      <Placeholder xs={12} />
                    </Placeholder>
                    <Placeholder as="p" animation="glow" className="mb-0">
                      <Placeholder xs={6} size="sm" />
                    </Placeholder>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </div>
    )

  if (error)
    return (
      <div className={className}>
        <h2 className="h3 pb-3 mb-1 mb-sm-2 mb-md-3">{heading}</h2>
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
        <div className="d-flex align-items-center justify-content-between gap-4 pb-3 mb-1 mb-sm-2 mb-md-3">
          <h2 className="h3 mb-0">{heading}</h2>
          <div className="d-flex gap-2">
            <Button
              variant="outline-secondary"
              className={`btn-prev${id ? `-${id}` : ''} btn-icon animate-slide-start bg-body rounded-circle me-1`}
              aria-label="Previous slide"
            >
              <i className="ci-chevron-left fs-lg animate-target" />
            </Button>
            <Button
              variant="outline-secondary"
              className={`btn-next${id ? `-${id}` : ''} btn-icon animate-slide-end bg-body rounded-circle`}
              aria-label="Next slide"
            >
              <i className="ci-chevron-right fs-lg animate-target" />
            </Button>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={slidesPerView === 2 ? 1 : 2}
          spaceBetween={slidesPerView === 2 ? 24 : 16}
          loop={true}
          navigation={{
            prevEl: `.btn-prev${id ? `-${id}` : ''}`,
            nextEl: `.btn-next${id ? `-${id}` : ''}`,
          }}
          breakpoints={
            slidesPerView === 2
              ? {
                  '600': {
                    slidesPerView: 2,
                  },
                }
              : {
                  '500': {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  '768': {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                  '992': {
                    slidesPerView: 4,
                    spaceBetween: 16,
                  },
                  '1200': {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                }
          }
        >
          {(data || []).map((product) => (
            <SwiperSlide key={product.id} className="h-auto">
              <ProductCardMarketplace
                large={slidesPerView === 2}
                image={{ src: product.image, width: 986, height: 710, alt: product.title }}
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Toast notification stack */}
      <ToastRenderer />
    </>
  )
}

export default ProductsCarouselMarketplace
