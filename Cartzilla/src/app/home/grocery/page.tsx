import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeaderGrocery from '@/components/layout/header-grocery'
import HeroSliderGrocery from './hero-slider'
import FeaturedCategoriesGrocery from './featured-categories'
import CategoryList from '@/components/shop/category-list'
import ProductsGridGrocery from '@/components/shop/products-grid-grocery'
import LifestyleCategoriesGrocery from './lifestyle-categories'
import ProductsCarouselGrocery from '@/components/shop/products-carousel-grocery'
import RecipeCard from '@/components/blog/recipe-card'
import BannersGrocery from '@/components/shop/banners-grocery'
import FooterGrocery from '@/components/layout/footer-grocery'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Badge from 'react-bootstrap/Badge'

export const metadata: Metadata = {
  title: 'Cartzilla | Grocery Store',
}

const GroceryHomePage = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderGrocery logoHref="/" />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Hero slider */}
      <HeroSliderGrocery />

      {/* Featured categories that turns into carousel on screen < 992px (lg breackpoint) */}
      <Container as="section" className="pt-4 pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        <FeaturedCategoriesGrocery />
      </Container>

      {/* Categories + Popular products */}
      <Container as="section" className="pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        <Row>
          {/* Categories list */}
          <Col lg={3} className="pb-2 pb-sm-3 pb-md-4 mb-5 mb-lg-0">
            <h2 className="h3 border-bottom pb-3 pb-md-4 mb-4">Categories</h2>
            <Row className="g-3 g-sm-4">
              {[
                {
                  image: '/img/shop/grocery/categories/01.png',
                  title: 'Bakery & bread',
                  subtitle: '230 products',
                  href: '/shop/grocery',
                },
                {
                  image: '/img/shop/grocery/categories/02.png',
                  title: 'Vegetables',
                  subtitle: '180 products',
                  href: '/shop/grocery',
                },
                {
                  image: '/img/shop/grocery/categories/03.png',
                  title: 'Fresh fruits',
                  subtitle: '205 products',
                  href: '/shop/grocery',
                },
                {
                  image: '/img/shop/grocery/categories/04.png',
                  title: 'Meet Italian dinner',
                  subtitle: '309 products',
                  href: '/shop/grocery',
                },
                {
                  image: '/img/shop/grocery/categories/05.png',
                  title: 'Beverages',
                  subtitle: '372 products',
                  href: '/shop/grocery',
                },
                {
                  image: '/img/shop/grocery/categories/06.png',
                  title: 'Meat products',
                  subtitle: '124 products',
                  href: '/shop/grocery',
                },
                {
                  image: '/img/shop/grocery/categories/07.png',
                  title: 'Sauces and ketchup',
                  subtitle: '219 products',
                  href: '/shop/grocery',
                },
                {
                  image: '/img/shop/grocery/categories/08.png',
                  title: 'Dairy and eggs',
                  subtitle: '146 products',
                  href: '/shop/grocery',
                },
              ].map(({ image, title, subtitle, href }, index) => (
                <Col key={index} sm={6} md={4} lg={12}>
                  <CategoryList image={{ src: image }} title={title} subtitle={subtitle} href={href} />
                </Col>
              ))}
            </Row>
          </Col>

          {/* Popular products grid */}
          <Col lg={9}>
            <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4 mb-3 mb-lg-4">
              <h2 className="h3 mb-0">Popular products</h2>
              <Nav className="ms-3">
                <NavLink as={Link} href="/shop/grocery" className="animate-underline px-0 py-2">
                  <span className="animate-target">View all</span>
                  <i className="ci-chevron-right fs-base ms-1" />
                </NavLink>
              </Nav>
            </div>
            <ProductsGridGrocery dataUrl="/data/grocery/catalog.json" dataSlice={[0, 8]} />
          </Col>
        </Row>
      </Container>

      {/* Lifestyle categories that turns into carousel on screen < 992px (lg breackpoint) */}
      <Container as="section" className="pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        <h2 className="h3 text-center pb-1 pb-sm-2 pb-md-3 pb-lg-0 mb-4 mb-lg-5">Shop by lifestyle</h2>
        <LifestyleCategoriesGrocery />
      </Container>

      {/* Banner + Special products */}
      <Container as="section" className="pt-xl-2 pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        <Row>
          {/* Banner */}
          <Col sm={5} md={4} lg={3} className="mb-5 mb-sm-0">
            <div className="pe-lg-2 pe-xl-4">
              <div className="rounded-4 overflow-hidden" style={{ backgroundColor: '#a6cddc' }} data-bs-theme="light">
                <div className="pt-3 px-3 mt-3 mx-3">
                  <h4 className="mb-2 mb-xl-3">Make breakfast healthy and easy</h4>
                  <Nav>
                    <NavLink as={Link} href="#" className="animate-underline stretched-link px-0">
                      <span className="animate-target">Shop now</span>
                      <i className="ci-chevron-right fs-base mt-1 ms-1" />
                    </NavLink>
                  </Nav>
                </div>
                <div className="mt-n2">
                  <Image src="/img/shop/grocery/banner.jpg" width={546} height={480} alt="Banner" />
                </div>
              </div>
            </div>
          </Col>

          {/* Special products carousel */}
          <Col sm={7} md={8} lg={9}>
            <ProductsCarouselGrocery
              dataUrl="/data/grocery/special-products.json"
              heading="Special products"
              link={{
                label: 'View all',
                href: '/shop/grocery',
              }}
              slidesPerView={4}
              sliderBullets
            />
          </Col>
        </Row>
      </Container>

      {/* Recipes */}
      <Container as="section" className="pb-5 mb-2 mb-sm-3 mb-lg-4">
        <h2 className="h3 mb-4">Recipes</h2>
        <Row>
          {/* Recipes list */}
          <Col lg={5} className="mb-4 mb-lg-0">
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

          {/* Book */}
          <Col lg={7}>
            <div className="border rounded-5 p-4">
              <div className="d-sm-flex align-items-start align-items-md-center align-items-lg-start align-items-xl-center p-md-2 p-lg-0 p-xl-2 p-xxl-3">
                <Link href="#" className="d-block w-100 mb-4 mb-sm-0" style={{ maxWidth: 286 }}>
                  <Image
                    src="/img/home/grocery/recipes/book-cover.jpg"
                    width={572}
                    height={808}
                    className="body-bg-tertiary rounded-4"
                    alt="Book cover"
                  />
                </Link>
                <div className="w-100 ps-sm-4 ms-md-2 ms-lg-0 ms-xl-2 ms-xxl-3">
                  <Badge pill bg="body-secondary" text="body-emphasis" className="mb-3">
                    Cookbook
                  </Badge>
                  <h3 className="h4 mb-2">The Best in Gastronomy</h3>
                  <div className="fs-sm mb-3">
                    Author: <span className="text-dark-emphasis fw-medium">Dana Chambers</span>
                  </div>
                  <p className="fs-sm pb-1 pb-xl-3">
                    An exquisite cookbook that takes readers on a culinary journey around the world. With stunning
                    photography and detailed instructions ...
                  </p>
                  <div className="h4">$12.40</div>
                  <Link href="#" className="btn btn-dark rounded-pill">
                    Shop Book
                    <i className="ci-chevron-right fs-base ms-1 me-n1" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* CTA banners */}
      <Container as="section" className="pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        <BannersGrocery />
      </Container>
    </main>

    {/* Page footer */}
    <FooterGrocery logoHref="/" />
  </>
)

export default GroceryHomePage
