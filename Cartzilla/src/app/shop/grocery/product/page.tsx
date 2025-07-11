import type { Metadata } from 'next'
import Link from 'next/link'
import type { Product } from '@/types/product'
import HeaderGrocery from '@/components/layout/header-grocery'
import ProductGalleryGrocery from './product-gallery'
import ProductDetailsSidebarGrocery from './product-details-sidebar'
import ProductsCarouselGrocery from '@/components/shop/products-carousel-grocery'
import RecipeCard from '@/components/blog/recipe-card'
import TopDepartmentsGrocery from './top-departments'
import BannersGrocery from '@/components/shop/banners-grocery'
import FooterGrocery from '@/components/layout/footer-grocery'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'

export const metadata: Metadata = {
  title: 'Cartzilla | Grocery Store - Product Page',
}

const product: Product = {
  id: 'productGrocery01',
  image: ['/img/shop/grocery/01.png', '/img/shop/grocery/thumbs/01.png'],
  title: 'Muesli Fitness Energy, gluten free',
  href: '/shop/grocery/product',
  price: [2.15, 4.5],
  description: '500g',
}

const thumbs = [
  '/img/shop/grocery/product/th01.png',
  '/img/shop/grocery/product/th02.png',
  '/img/shop/grocery/product/th03.png',
]

const slides = [
  '/img/shop/grocery/product/01.png',
  '/img/shop/grocery/product/02.png',
  '/img/shop/grocery/product/03.png',
]

const GroceryProductPage = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderGrocery />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Breadcrumb */}
      <Breadcrumb as={Container} className="position-relative z-2 pt-lg-2 mt-3 mt-lg-4 mb-0">
        <li className="breadcrumb-item">
          <Link href="/home/grocery">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link href="/shop/grocery">Shop</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Product page
        </li>
      </Breadcrumb>

      {/* Product gallery + Product details */}
      <Container as="section" className="pt-md-4 pb-5 mt-md-2 mt-lg-3 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        <Row className="align-items-start">
          {/* Product gallery */}
          <Col md={6} lg={7} className="sticky-md-top z-1 mb-4 mb-md-0" style={{ marginTop: -120 }}>
            <ProductGalleryGrocery thumbs={thumbs} slides={slides} />
          </Col>

          {/* Product details */}
          <Col as="aside" md={6} lg={5} className="position-relative">
            <ProductDetailsSidebarGrocery product={product} />
          </Col>
        </Row>
      </Container>

      {/* Bought together carousel */}
      <Container as="section" className="pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        <ProductsCarouselGrocery
          dataUrl="/data/grocery/recommended-products.json"
          heading="Often bought with"
          sliderNavs
          slidesPerView={5}
          loop
        />
      </Container>

      {/* Recipes + Top departments */}
      <Container as="section" className="pb-5 mb-2 mb-sm-3 mb-lg-4">
        <Row>
          {/* Recipes list */}
          <Col lg={5} className="pb-3 pb-lg-0 mb-4 mb-lg-0">
            <h2 className="h3 mb-4">Recipes</h2>
            <div className="d-flex flex-column gap-1 gap-md-2">
              {[
                {
                  href: '#',
                  image: '/img/home/grocery/recipes/01.jpg',
                  title: 'Garden salad with a mix of lettuce, cucumber and tomato',
                  timeToCook: '30 min',
                  difficulty: 'Easy',
                  servings: '4 por',
                },
                {
                  href: '#',
                  image: '/img/home/grocery/recipes/02.jpg',
                  title: 'Raspberry fresh lemonade with lemon, strawberry syrup and mint',
                  timeToCook: '50 min',
                  difficulty: 'Hard',
                  servings: '8 por',
                },
                {
                  href: '#',
                  image: '/img/home/grocery/recipes/03.jpg',
                  title: 'Penne pasta with spinach and zucchini in a creamy sauce',
                  timeToCook: '25 min',
                  difficulty: 'Easy',
                  servings: '2 por',
                },
              ].map(({ href, image, title, timeToCook, difficulty, servings }, index) => (
                <RecipeCard
                  key={index}
                  href={href}
                  image={{ src: image, alt: 'Image' }}
                  title={title}
                  timeToCook={timeToCook}
                  difficulty={difficulty}
                  servings={servings}
                  className="mb-4"
                />
              ))}
            </div>
            <Nav className="mt-n2 mt-lg-n1 mt-xxl-0">
              <NavLink as={Link} href="#" className="animate-underline px-0 py-2">
                <span className="animate-target text-nowrap">View all</span>
                <i className="ci-chevron-right fs-base ms-1" />
              </NavLink>
            </Nav>
          </Col>

          {/* Top departments */}
          <Col lg={7}>
            <h2 className="h3 mb-4">Top departments</h2>
            <TopDepartmentsGrocery />
          </Col>
        </Row>
      </Container>

      {/* CTA banners */}
      <Container as="section" className="pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        <BannersGrocery />
      </Container>
    </main>

    {/* Page footer */}
    <FooterGrocery />
  </>
)

export default GroceryProductPage
