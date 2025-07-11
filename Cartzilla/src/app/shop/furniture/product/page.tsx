import type { Metadata } from 'next'
import Link from 'next/link'
import type { Product } from '@/types/product'
import HeaderFurniture from '@/components/layout/header-furniture'
import ProductGalleryFurniture from './product-gallery'
import ProductDetailsSidebarFurniture from './product-details-sidebar'
import StickyProductFurniture from './sticky-product'
import ProductsCarouselFurniture from '@/components/shop/products-carousel-furniture'
import BlogPostsGridVariantTwo from '@/components/blog/blog-posts-grid-variant-two'
import ProductReviewsFurniture from './reviews'
import FooterFurniture from '@/components/layout/footer-furniture'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Accordion from 'react-bootstrap/Accordion'
import AccordionItem from 'react-bootstrap/AccordionItem'
import AccordionButton from 'react-bootstrap/AccordionButton'
import AccordionBody from 'react-bootstrap/AccordionBody'

export const metadata: Metadata = {
  title: 'Cartzilla | Furniture Store - Product Page',
}

const product: Product = {
  id: 'productFurniture17',
  image: '/img/shop/furniture/product/01.png',
  title: 'Chair with wooden legs 60x100 cm',
  href: '/shop/furniture/product',
  price: [357, 416],
  badge: ['danger', 'Sale'],
}

const FurnitureProductPage = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderFurniture />

    {/* Page content */}
    <main className="content-wrapper">
      <Container>
        {/* Breadcrumb */}
        <Breadcrumb className="position-relative pt-3 mt-3 mt-md-4 mb-4">
          <li className="breadcrumb-item">
            <Link href="/home/furniture">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/shop/furniture">Shop</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Product page
          </li>
        </Breadcrumb>

        {/* Product gallery and details */}
        <Row className="pb-4 pb-md-5 mb-2 mb-md-0 mb-xl-3">
          {/* Gallery */}
          <Col md={7} xl={8} className="pb-4 pb-md-0 mb-2 mb-sm-3 mb-md-0">
            <ProductGalleryFurniture
              images={[
                '/img/shop/furniture/product/01.png',
                '/img/shop/furniture/product/02.jpg',
                '/img/shop/furniture/product/03.jpg',
                '/img/shop/furniture/product/04.jpg',
                '/img/shop/furniture/product/05.jpg',
                '/img/shop/furniture/product/06.jpg',
              ]}
            />
          </Col>

          {/* Product details and options */}
          <Col md={5} xl={4}>
            <ProductDetailsSidebarFurniture product={product} />
          </Col>
        </Row>

        {/* Sticky product preview + Add to cart CTA */}
        <StickyProductFurniture product={product} />

        {/* Product description */}
        <Row as="section" className="pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
          <Col md={7} xl={8} className="mb-xxl-3">
            <p>
              The chair will bring a stylish retro atmosphere to your room, inspired by the Scandinavian design. The
              classic look fits anywhere in your home and provides a sturdy and durable place to sit for years to come.
            </p>
            <ul className="list-unstyled pb-md-2 pb-lg-3">
              {[
                ['Backrest height', '46 cm'],
                ['Width', '64 cm'],
                ['Depth', '78 cm'],
                ['Height under furniture', '22 cm'],
                ['Seat width', '56 cm'],
                ['Armrest height', '63 cm'],
              ].map((item, index) => (
                <li key={index} className="mt-1">
                  <span className="h6 mb-0">{item[0]}:</span> {item[1]}
                </li>
              ))}
            </ul>
            <Accordion className="accordion-alt-icon">
              <AccordionItem eventKey="info">
                <AccordionButton as="h3" className="animate-underline fs-5 cursor-pointer mb-0">
                  <span className="animate-target me-2">Product info</span>
                </AccordionButton>
                <AccordionBody className="fs-base">
                  Introducing our Scandinavian-inspired chair, meticulously designed to infuse your living space with a
                  touch of retro elegance. Crafted with the finest materials and attention to detail, this chair
                  embodies the timeless charm of Scandinavian design, making it a versatile addition to any home decor.
                  With its classic silhouette and understated sophistication, it seamlessly integrates into various
                  interior styles, bringing both style and functionality to your room.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey="features">
                <AccordionButton as="h3" className="animate-underline fs-5 cursor-pointer mb-0">
                  <span className="animate-target me-2">Features</span>
                </AccordionButton>
                <AccordionBody className="fs-base">
                  <ul className="m-0">
                    {[
                      [
                        'Timeless design',
                        'Inspired by Scandinavian aesthetics, this chair boasts a sleek and retro-inspired silhouette that adds a touch of elegance to any space.',
                      ],
                      [
                        'Durable construction',
                        'Crafted with high-quality materials, the chair is built to last, providing sturdy and reliable seating for years to come.',
                      ],
                      [
                        'Versatile placement',
                        'Whether as a focal point in your living room, a cozy reading corner in your study, or an inviting seat around the dining table, this chair effortlessly adapts to different settings.',
                      ],
                      [
                        'Comfortable seating',
                        'The chair features a well-padded seat and backrest, ensuring optimal comfort for extended periods of relaxation or conversation.',
                      ],
                      [
                        'Easy maintenance',
                        "Designed for convenience, the chair's upholstery is easy to clean, allowing for hassle-free maintenance and care.",
                      ],
                    ].map((item, index) => (
                      <li key={index}>
                        <span className="text-body-emphasis fw-semibold">{item[0]}:</span> {item[1]}
                      </li>
                    ))}
                  </ul>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey="warranty">
                <AccordionButton as="h3" className="animate-underline fs-5 cursor-pointer mb-0">
                  <span className="animate-target me-2">Warranty information</span>
                </AccordionButton>
                <AccordionBody className="fs-base">
                  We stand behind the quality of our products. Our chair comes with a 10-year warranty, guaranteeing
                  against defects in materials and workmanship under normal use. In the unlikely event that you
                  encounter any issues with your chair, contact our customer service team, and we will be happy to
                  assist you with a replacement or repair.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey="delivery">
                <AccordionButton as="h3" className="animate-underline fs-5 cursor-pointer mb-0">
                  <span className="animate-target me-2">Delivery and shipping</span>
                </AccordionButton>
                <AccordionBody className="fs-base">
                  We understand the importance of timely delivery and strive to provide a seamless shipping experience
                  for our customers. Upon placing your order, our team will process it promptly, and you will receive a
                  notification once your chair is ready for shipment. We offer various shipping options to accommodate
                  your preferences, with estimated delivery times provided at checkout. Rest assured, your chair will be
                  carefully packaged to ensure it arrives safely at your doorstep, ready to enhance your home with its
                  timeless charm.
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </Col>
        </Row>

        {/* Popular products carousel */}
        <section className="pb-5 mb-1 mb-sm-3 mb-lg-4 mb-xl-5">
          <h2 className="h3 pb-2 pb-sm-3">Popular products</h2>
          <ProductsCarouselFurniture dataUrl="/data/furniture/popular-products.json" loop className="pb-xxl-3" />
        </section>

        {/* Blog articles */}
        <section className="pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
          <h2 className="h3 pb-2 pb-sm-3">From the blog</h2>
          <BlogPostsGridVariantTwo dataUrl="/data/furniture/product-blog-posts.json" columns={4} className="mb-xxl-3" />
        </section>

        {/* Reviews */}
        <ProductReviewsFurniture />

        {/* Viewed products carousel */}
        <section className="pb-5 mb-2 mb-sm-3 mb-md-4 mb-lg-5">
          <h2 className="h3 pb-2 pb-sm-3">Viewed products</h2>
          <ProductsCarouselFurniture
            dataUrl="/data/furniture/viewed-products.json"
            id="viewedProducts"
            className="pb-xxl-3"
          />
        </section>
      </Container>
    </main>

    {/* Page footer */}
    <FooterFurniture />
  </>
)

export default FurnitureProductPage
