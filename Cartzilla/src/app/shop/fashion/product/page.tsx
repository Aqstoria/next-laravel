import type { Metadata } from 'next'
import Link from 'next/link'
import type { Product } from '@/types/product'
import HeaderFashion from '@/components/layout/header-fashion'
import ProductGalleryFashion from './product-gallery'
import ProductDetailsSidebarFashion from './product-details-sidebar'
import StickyProductFashion from './sticky-product'
import ProductDetailsTabsFashion from './product-detail-tabs'
import LookSliderFashion from './look-slider'
import ProductsCarouselFashion from '@/components/shop/products-carousel-fashion'
import FooterFashion from '@/components/layout/footer-fashion'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

export const metadata: Metadata = {
  title: 'Cartzilla | Fashion Store - Product Page',
}

const product: Product = {
  id: 'productFashion01',
  image: ['/img/shop/fashion/01.png', '/img/shop/fashion/thumbs/10.png'],
  title: 'Denim midi skirt with pockets',
  href: '/shop/fashion/product',
  price: [126.5, 156],
  badge: ['danger', 'Sale'],
}

const FashionProductPage = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderFashion />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Breadcrumb */}
      <Breadcrumb as={Container} className="pt-2 pt-xxl-3 my-3 my-md-4">
        <li className="breadcrumb-item">
          <Link href="/home/fashion-v1">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link href="/shop/fashion">Shop</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Product page
        </li>
      </Breadcrumb>

      {/* Product gallery and details */}
      <Container as="section">
        <Row>
          {/* Product gallery */}
          <Col md={6} className="pb-4 pb-md-0 mb-2 mb-sm-3 mb-md-0">
            <ProductGalleryFashion
              images={[
                '/img/shop/fashion/product/01.png',
                '/img/shop/fashion/product/02.png',
                '/img/shop/fashion/product/03.png',
                '/img/shop/fashion/product/04.png',
                '/img/shop/fashion/product/05.png',
              ]}
              productTitle="Denim midi skirt with pockets"
            />
          </Col>

          {/* Product details and options */}
          <Col md={6}>
            <ProductDetailsSidebarFashion product={product} />
          </Col>
        </Row>
      </Container>

      {/* Sticky product preview + Add to cart CTA */}
      <StickyProductFashion product={product} />

      {/* Product details tabs */}
      <Container as="section" className="pt-5 mt-2 mt-sm-3 mt-lg-4 mt-xl-5">
        <ProductDetailsTabsFashion />
      </Container>

      {/* Complete look (carousel) */}
      <Container as="section" className="pt-5 mt-2 mt-sm-3 mt-lg-4 mt-xl-5">
        <LookSliderFashion
          mainImage="/img/shop/fashion/product/01.png"
          productsURL="/data/fashion/look-products.json"
        />
      </Container>

      {/* Viewed products (carousel) */}
      <Container as="section" className="py-5 my-2 my-sm-3 my-lg-4 my-xl-5">
        <ProductsCarouselFashion
          dataUrl="/data/fashion/viewed-products.json"
          heading="Viewed products"
          sliderNavs
          loop
        />
      </Container>
    </main>

    {/* Page footer */}
    <FooterFashion />
  </>
)

export default FashionProductPage
