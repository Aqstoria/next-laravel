'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Product as CartzillaProduct } from '@/types/product'
import { Product as BotbleProduct } from '@/services/products'
import ProductGalleryOptionsElectronics from './product-gallery-options'
import ProductBundleSaleElectronics, { type BundleProduct } from './product-bundle-sale'
import ProductDetailsElectronics from './product-details'
import ProductReviewsElectronics from './product-reviews'
import StickyProductDesktopElectronics from './sticky-product-desktop'
import StickyProductMobileElectronics from './sticky-product-mobile'
import ProductsCarouselElectronics from '@/components/shop/products-carousel-electronics'
import StarRating from '@/components/reviews/star-rating'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

interface ProductTabsElectronicsProps {
  product?: BotbleProduct
}

const defaultProduct: CartzillaProduct = {
  id: 'productElectronics14',
  image: ['/img/shop/electronics/14.png', '/img/shop/electronics/thumbs/10.png'],
  title: 'Apple iPhone 15 64GB Blue',
  href: '/shop/electronics/product',
  price: [799],
  reviews: [4.5, 287],
  specs: {
    Display: '6.1" XDR',
    Capacity: '64 GB',
    Chip: 'A16 Bionic',
    Camera: '12 + 12 MP',
    Weight: '180 grams',
  },
}

const thumbs = [
  '/img/shop/electronics/product/gallery/th01.png',
  '/img/shop/electronics/product/gallery/th02.png',
  '/img/shop/electronics/product/gallery/th03.png',
  '/img/shop/electronics/product/gallery/th04.png',
  '/img/shop/electronics/product/gallery/th05.png',
  '/img/shop/electronics/product/gallery/th06.png',
  '/img/shop/electronics/product/gallery/th07.png',
]

const slides = [
  '/img/shop/electronics/product/gallery/01.png',
  '/img/shop/electronics/product/gallery/02.png',
  '/img/shop/electronics/product/gallery/03.png',
  '/img/shop/electronics/product/gallery/04.png',
  '/img/shop/electronics/product/gallery/05.png',
  '/img/shop/electronics/product/gallery/06.png',
  '/img/shop/electronics/product/gallery/07.png',
]

const specs = [
  {
    category: 'General specs',
    items: [
      { label: 'Model', value: 'iPhone 14 Plus' },
      { label: 'Manufacturer', value: 'Apple Inc.' },
      {
        label: 'Finish',
        value: 'Ceramic, Glass, Aluminium',
        info: 'Ceramic shield front, Glass back and Aluminium design',
      },
      { label: 'Capacity', value: '128GB' },
      { label: 'Chip', value: 'A15 Bionic chip' },
    ],
  },
  {
    category: 'Display',
    items: [
      { label: 'Diagonal', value: '6.1"' },
      {
        label: 'Screen type',
        value: 'Super Retina XDR',
        info: 'HDR display, True Tone, Wide color (P3), Haptic Touch, 800 nits brightness',
      },
      { label: 'Resolution', value: '2778x1284px at 458ppi' },
      { label: 'Refresh rate', value: '120 Hz' },
    ],
  },
  {
    category: 'Camera',
    items: [
      { label: 'Front camera', value: '12MP' },
      { label: 'Main camera', value: '12MP Ultra Wide' },
      { label: 'Zoom', value: '2x optical, 5x digital' },
      {
        label: 'Video',
        value: '4K video recording',
        info: '4K video, 1080p HD video, 720p HD video, Cinematic mode, Action mode',
      },
    ],
  },
  {
    category: 'Power and Battery',
    items: [
      { label: 'Fast charging', value: 'Yes' },
      { label: 'Wireless charging', value: 'Yes' },
      { label: 'Charging power', value: 'up to 15W' },
      { label: 'Video playback', value: 'Up to 26 hours' },
      { label: 'Audio playback', value: 'Up to 100 hours' },
    ],
  },
  {
    category: 'Size and Weight',
    items: [
      { label: 'Height', value: '160.8 mm' },
      { label: 'Width', value: '78.1 mm' },
      { label: 'Weight', value: '203 grams' },
    ],
  },
]

const bundleProducts: BundleProduct[] = [
  {
    id: 'productElectronics14',
    image: ['/img/shop/electronics/14.png', '/img/shop/electronics/thumbs/10.png'],
    title: 'Apple iPhone 15 64GB Blue',
    href: '/shop/electronics/product',
    price: [799],
    selected: true,
  },
  {
    id: 'productElectronics05',
    image: ['/img/shop/electronics/06.png', '/img/shop/electronics/thumbs/04.png'],
    title: 'Headphones Apple AirPods 2 Pro',
    href: '/shop/electronics/product',
    price: [224, 330],
    badge: ['danger', '-32%'],
    selected: true,
  },
  {
    id: 'productElectronics15',
    image: ['/img/shop/electronics/15.png', '/img/shop/electronics/thumbs/27.png'],
    title: 'Wireless charger fro iPhone',
    href: '/shop/electronics/product',
    price: [26, 50],
    badge: ['danger', '-48%'],
    selected: false,
  },
]

const reviews = [
  {
    author: 'Rafael Marquez',
    verified: true,
    rating: 5,
    date: 'June 28, 2025',
    product: {
      Color: 'Blue',
      Model: '128GB',
    },
    text: 'The phone has a new A15 Bionic chip, which makes it lightning-fast and responsive. The camera system has also been upgraded, and it now includes a 12-megapixel ultra-wide lens and a 12-megapixel wide lens.',
    pros: ['Powerful A15 Bionic chip', 'improved camera'],
    cons: ['High price tag'],
    likes: 0,
    dislikes: 0,
  },
  {
    author: 'Daniel Adams',
    verified: false,
    rating: 4,
    date: 'May 15, 2025',
    product: {
      Color: 'Midnight',
      Model: '256GB',
    },
    text: 'Overall, the iPhone 14 Plus was a solid upgrade for me. However, potential buyers should weigh the high price against the incremental nature of the upgrades and consider their specific needs before making a purchase.',
    pros: ['Elegant design', 'great storage capacity'],
    cons: ['Battery life', 'overpriced'],
    likes: 18,
    dislikes: 2,
  },
  {
    author: 'Andrew Richards',
    verified: true,
    rating: 5,
    date: 'May 7, 2025',
    product: {
      Color: 'Purple',
      Model: '128GB',
    },
    text: "The iPhone 14 is nothing short of exceptional, combining cutting-edge technology with a design that continues to set the standard for premium smartphones. That's why it deserves a perfect 5-star rating.",
    pros: ['Unparalleled performance', 'great camera', 'stunning design'],
    cons: ['No in my opinion'],
    likes: 29,
    dislikes: 5,
    replies: [
      {
        author: 'Cartzilla Company',
        date: 'May 8, 2025',
        text: 'Thank you for your feedback! We are glad that you were satisfied with your purchase :)',
      },
    ],
  },
  {
    author: 'Jenny Wilson',
    verified: true,
    rating: 4,
    date: 'April 26, 2025',
    product: {
      Color: 'Blue',
      Model: '64GB',
    },
    text: (
      <>
        iPhone 14 is a reliable upgrade with notable improvements in performance and camera quality. However, the higher
        price and the lack of groundbreaking design changes might make potential buyers pause. If you&apos;re due for an
        upgrade and prioritize performance and camera enhancements, the iPhone 14 is a solid choice, but
        budget-conscious consumers may want to weigh their options.
        <span className="d-flex gap-2 pt-3 mt-1">
          {[
            '/img/shop/electronics/product/reviews/01.png',
            '/img/shop/electronics/product/reviews/02.png',
            '/img/shop/electronics/product/reviews/03.png',
          ].map((image, index) => (
            <span key={index} className="me-1" style={{ width: 86 }}>
              <Image src={image} width={172} height={212} className="rounded-2" alt="Image" />
            </span>
          ))}
        </span>
      </>
    ),
    likes: 13,
    dislikes: 1,
  },
  {
    author: 'Kristin Watson',
    verified: false,
    rating: 4,
    date: 'April 19, 2025',
    product: {
      Color: 'Starlight',
      Model: '128GB',
    },
    text: 'iPhone 14 impresses with its camera prowess, delivering high-quality images. However, the decision to eliminate the 3.5mm headphone jack may impact users who rely on wired audio accessories, requiring them to adapt to wireless alternatives or use an adapter.',
    pros: ['12-megapixel ultra-wide lens and a 12-megapixel wide lens'],
    cons: ['Does not have a headphone jack'],
    likes: 32,
    dislikes: 7,
  },
]

const ProductTabsElectronics = ({ product: botbleProduct }: ProductTabsElectronicsProps) => {
  const searchParams = useSearchParams()
  const activeTab = searchParams.get('tab') || 'general'
  
  // Debug log to see what we're getting
  console.log('ProductTabsElectronics received product:', botbleProduct)
  console.log('Product ID:', botbleProduct?.id)
  console.log('Product ID type:', typeof botbleProduct?.id)
  
  // Check for different possible ID field names
  const productId = botbleProduct?.id || (botbleProduct as any)?.product_id || (botbleProduct as any)?.ID || 'unknown'
  
  // Additional safety check - if productId is still 'unknown', use a fallback
  const safeProductId = productId === 'unknown' ? 'fallback-id' : productId
  
  // Use the passed product or fall back to default
  const product = botbleProduct ? {
    id: safeProductId.toString(),
    image: botbleProduct.images && botbleProduct.images.length > 0 
      ? [botbleProduct.images[0], botbleProduct.images[0]] as [string, string]
      : ['/img/shop/electronics/14.png', '/img/shop/electronics/14.png'] as [string, string],
    title: botbleProduct.name || 'Product',
    href: '/shop/electronics/product',
    price: [botbleProduct.price || 0] as [number],
    reviews: [botbleProduct.average_rating || 4.5, botbleProduct.total_reviews || 287] as [number, number],
    specs: {
      'Product ID': safeProductId.toString(),
      'SKU': botbleProduct.sku || 'N/A',
      'Brand': botbleProduct.brand?.name || 'N/A',
      'Stock Status': botbleProduct.stock_status || 'N/A',
      'Weight': botbleProduct.weight ? `${botbleProduct.weight}g` : 'N/A',
    },
  } : defaultProduct

  // Render the content based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'details':
        return (
          <>
            {/* Product details tab */}
            <Container as="section" className="pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
              <Row>
                <Col
                  as="aside"
                  md={5}
                  xl={4}
                  className="offset-xl-1 order-md-2 mb-5 mb-md-0"
                  style={{ marginTop: -100 }}
                >
                  <StickyProductDesktopElectronics product={product} />
                </Col>
                <StickyProductMobileElectronics product={product} className="start-0 ms-n4" />
                <Col md={7} className="order-md-1">
                  <ProductDetailsElectronics data={specs} />
                </Col>
              </Row>
            </Container>
          </>
        )
      case 'reviews':
        return (
          <>
            {/* Reviews tab */}
            <Container as="section" className="pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
              <Row>
                <Col
                  as="aside"
                  md={5}
                  xl={4}
                  className="offset-xl-1 order-md-2 mb-5 mb-md-0"
                  style={{ marginTop: -100 }}
                >
                  <StickyProductDesktopElectronics product={product} />
                </Col>
                <StickyProductMobileElectronics product={product} className="start-0 ms-n4" />
                <Col md={7} className="order-md-1">
                  <ProductReviewsElectronics data={reviews} />
                </Col>
              </Row>
            </Container>
          </>
        )
      default:
        return (
          <>
            {/* General info tab */}
            <ProductGalleryOptionsElectronics product={product} gallery={{ thumbs: thumbs, slides: slides }} />
            <StickyProductMobileElectronics product={product} />
            <ProductBundleSaleElectronics bundle={bundleProducts} />
            <Container as="section" className="pb-4 pb-md-5 mb-2 mb-sm-0 mb-lg-2 mb-xl-4">
              <h2 className="h3 border-bottom pb-4 mb-0">Trending products</h2>
              <ProductsCarouselElectronics />
            </Container>
            <Container as="section" className="pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
              <Row>
                <Col md={7}>
                  <ProductDetailsElectronics data={specs} dataSlice={[0, 2]} />
                  <div className="pt-5 mt-2 mt-md-3 mt-lg-4">
                    <ProductReviewsElectronics data={reviews} dataSlice={[0, 2]} />
                  </div>
                </Col>
                <Col as="aside" md={5} xl={4} className="offset-xl-1 d-none d-md-block" style={{ marginTop: -100 }}>
                  <StickyProductDesktopElectronics product={product} />
                </Col>
              </Row>
            </Container>
          </>
        )
    }
  }

  return (
    <>
      {/* Page title */}
      <h1 className="h3 container mb-4">{product.title}</h1>

      {/* Nav links */}
      <Container
        as="section"
        className={`position-relative z-2 ${activeTab !== 'general' ? 'pb-4 pb-md-5 mb-2 mb-md-0' : 'pb-2 pb-lg-4'}`}
      >
        <div className="d-flex align-items-center border-bottom">
          <Nav as="ul" variant="underline" className="flex-nowrap gap-4">
            <NavItem as="li" className="me-sm-2">
              <NavLink as={Link} href="./product" active={activeTab === 'general'}>
                General info
              </NavLink>
            </NavItem>
            <NavItem as="li" className="me-sm-2">
              <NavLink as={Link} href="./product?tab=details" active={activeTab === 'details'}>
                Product details
              </NavLink>
            </NavItem>
            <NavItem as="li">
              <NavLink as={Link} href="./product?tab=reviews" active={activeTab === 'reviews'}>
                Reviews {product.reviews && `(${product.reviews[1]})`}
              </NavLink>
            </NavItem>
          </Nav>
          <a href="#reviews" className="d-none d-md-flex align-items-center gap-2 text-decoration-none ms-auto mb-1">
            <StarRating rating={product.reviews ? product.reviews[0] : 0} className="fs-sm" />
            {product.reviews && <span className="text-body-tertiary fs-xs">{product.reviews[1]} reviews</span>}
          </a>
        </div>
      </Container>

      {/* Render tab content based on the active tab */}
      {renderTabContent()}
    </>
  )
}

export default ProductTabsElectronics
