'use client'

import { useState } from 'react'
import useSWR from 'swr'
import { useCart } from '@/contexts/cart-context'
import { useToast } from '@/hooks/use-toast'
import type { Product } from '@/services/products'
import ProductCardElectronics from './product-card-electronics'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Placeholder from 'react-bootstrap/Placeholder'
import Button from 'react-bootstrap/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import { ProductService } from '@/services/products'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface ProductsCarouselElectronicsProps {
  className?: string
  id?: string
}

const ProductsCarouselElectronics = ({ className, id }: ProductsCarouselElectronicsProps) => {
  const { data, error, isLoading } = useSWR(
    'products-carousel',
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
      id: product.id.toString(),
      image: product.images[0],
      title: product.name,
      href: ProductService.getProductUrl(product),
      price: [ProductService.getProductPrice(product), ProductService.getProductOriginalPrice(product)],
      quantity: 1,
    })

    createToast(
      {
        action: 'Added to cart:',
        product: ` ${product.name}`,
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
          product: ` ${product.name}`,
        },
        'wishlist'
      )
    } else {
      createToast(
        {
          action: 'Added to wishlist:',
          product: ` ${product.name}`,
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
          product: ` ${product.name}`,
        },
        'comparison'
      )
    } else {
      createToast(
        {
          action: 'Added to comparison list:',
          product: ` ${product.name}`,
        },
        'comparison'
      )
    }
  }

  if (isLoading)
    return (
      <Row xs={2} md={3} lg={4} className={`g-4 py-4${className ? ` ${className}` : ''}`}>
        {Array.from({ length: 4 }, (_, index) => {
          const colClasses = ['', '', 'd-none d-md-block', 'd-none d-lg-block']
          return (
            <Col key={index} className={colClasses[index]}>
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
          )
        })}
      </Row>
    )

  if (error)
    return (
      <Alert variant="danger" className="d-inline-flex mt-4 mb-0">
        <i className="ci-alert-triangle fs-lg pe-1 mt-1 me-2" />
        <div>
          <span className="fw-semibold">Error loading products:</span> {error.message}
        </div>
      </Alert>
    )

  return (
    <>
      <div className={className}>
        <div className="position-relative mx-md-1">
          <Button
            variant="outline-secondary"
            className={`btn-prev${id ? `-${id}` : ''} btn-icon bg-body rounded-circle animate-slide-start position-absolute top-50 start-0 z-2 translate-middle-y ms-n1 d-none d-sm-inline-flex`}
            aria-label="Previous slide"
          >
            <i className="ci-chevron-left fs-lg animate-target" />
          </Button>
          <Button
            variant="outline-secondary"
            className={`btn-next${id ? `-${id}` : ''} btn-icon bg-body rounded-circle animate-slide-end position-absolute top-50 end-0 z-2 translate-middle-y me-n1 d-none d-sm-inline-flex`}
            aria-label="Next slide"
          >
            <i className="ci-chevron-right fs-lg animate-target" />
          </Button>
          <Swiper
            modules={[Navigation]}
            slidesPerView={2}
            spaceBetween={24}
            loop={true}
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
            className="py-4 px-sm-3"
          >
            {(data || []).map((product) => (
              <SwiperSlide key={product.id}>
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
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="d-flex justify-content-center gap-2 mt-n2 mb-3 pb-1 d-sm-none">
            <Button
              variant="outline-secondary"
              className={`btn-prev${id ? `-${id}` : ''} btn-icon bg-body rounded-circle animate-slide-start me-1`}
              aria-label="Previous slide"
            >
              <i className="ci-chevron-left fs-lg animate-target" />
            </Button>
            <Button
              variant="outline-secondary"
              className={`btn-next${id ? `-${id}` : ''} btn-icon bg-body rounded-circle animate-slide-end`}
              aria-label="Next slide"
            >
              <i className="ci-chevron-right fs-lg animate-target" />
            </Button>
          </div>
        </div>
      </div>

      {/* Toast notification stack */}
      <ToastRenderer />
    </>
  )
}

export default ProductsCarouselElectronics
