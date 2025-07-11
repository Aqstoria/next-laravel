import type { Metadata } from 'next'
import HeaderFashion from '@/components/layout/header-fashion'
import HeroSliderFashion from './hero-slider'
import PopularProductsSliderFashion from './popular-products-slider'
import ProductsGridFashion from '@/components/shop/products-grid-fashion'
import CollectionSliderFashion from './collection-slider'
import BrandsCarouselFashion from './brands-carousel'
import ReviewsCarouselFashion from './reviews-carousel'
import FooterFashion from '@/components/layout/footer-fashion'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

export const metadata: Metadata = {
  title: 'Cartzilla | Fashion Store v.1',
}

const Fashion_V1_HomePage = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderFashion logoHref="/" />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Hero slider */}
      <HeroSliderFashion />

      {/* Popular products slider */}
      <Container as="section" className="py-5 my-2 my-sm-3 my-lg-4 my-xl-5">
        <PopularProductsSliderFashion />
      </Container>

      {/* Featured products */}
      <Container as="section" className="pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        <h2 className="text-center pb-2 pb-sm-3">This week&apos;s highlights</h2>
        <Row className="g-0 overflow-x-auto pb-2 pb-sm-3 mb-3">
          <Col xs="auto" className="pb-1 pb-sm-0 mx-auto">
            <Nav as="ul" variant="pills" defaultActiveKey="bestsellers" className="flex-nowrap text-nowrap">
              {[
                ['Best sellers', 'bestsellers'],
                ['New arrivals', 'new'],
                ['Sale items', 'sale'],
                ['Top rated', 'top'],
              ].map((item, index) => (
                <NavItem key={index} as="li">
                  <NavLink eventKey={item[1]}>{item[0]}</NavLink>
                </NavItem>
              ))}
            </Nav>
          </Col>
        </Row>
        <ProductsGridFashion
          dataUrl="/data/fashion/featured-products-v1.json"
          className="row-cols-lg-4 pb-xxl-3"
        ></ProductsGridFashion>
      </Container>

      {/* Special collection slider */}
      <Container as="section" className="pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        <CollectionSliderFashion />
      </Container>

      {/* Brands */}
      <Container as="section" className="pb-5 mb-1 mb-sm-3 mb-lg-4 mb-xl-5">
        <BrandsCarouselFashion />
      </Container>

      {/* Reviews carousel */}
      <section className="bg-body-tertiary py-5">
        <Container className="py-1 py-sm-2 py-md-3 py-lg-4 py-xl-5">
          <h2 className="text-center pb-2 pb-md-3 pb-lg-4 pt-xxl-3">Happy customers</h2>
          <ReviewsCarouselFashion />
        </Container>
      </section>
    </main>

    {/* Page footer */}
    <FooterFashion className="pt-5 mt-1 mt-sm-2 mt-md-3 mt-lg-4 mt-xl-5" />
  </>
)

export default Fashion_V1_HomePage
