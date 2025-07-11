import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HeaderFashion from '@/components/layout/header-fashion'
import CategoriesFashion from './categories'
import ProductsGridFashion from '@/components/shop/products-grid-fashion'
import BannerFashion from '@/components/shop/banner-fashion'
import SpecialOffersSliderFashion from './special-offers-slider'
import FooterFashion from '@/components/layout/footer-fashion'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'
import Hotspot from '@/components/hotspot'

export const metadata: Metadata = {
  title: 'Cartzilla | Fashion Store v.2',
}

const Fashion_V2_HomePage = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderFashion logoHref="/" />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Hero banner with hotspots */}
      <Container as="section" className="pt-2 pt-lg-3">
        <div className="position-relative rounded-5 overflow-hidden">
          <Row className="align-items-center position-relative z-2">
            <Col md={5} lg={4} className="offset-lg-1 text-center text-md-start mb-4 mb-md-0">
              <div className="pt-5 pt-md-0 px-4 px-sm-5 pe-md-0 ps-md-5 ps-lg-0">
                <p className="fs-xl mb-lg-4">The new stylish collection</p>
                <h1 className="display-4 text-uppercase mb-4 mb-lg-5">
                  New fall <span className="text-nowrap">season 2025</span>
                </h1>
                <Link href="/shop/fashion" className="btn btn-lg btn-dark">
                  Shop now
                  <i className="ci-arrow-up-right fs-lg ms-2 me-n1" />
                </Link>
              </div>
            </Col>
            <Col md={7} className="mt-md-n5">
              <div className="d-flex justify-content-center justify-content-md-end">
                <div className="position-relative w-100 rtl-flip" style={{ maxWidth: 636 }}>
                  {[
                    {
                      href: '/shop/fashion/product',
                      image: '/img/home/fashion/v2/hero/hotspot01.png',
                      title: 'Women beige trench coat',
                      price: '$120.00',
                      placement: 'right',
                      position: { top: '30%', left: '46%' },
                    },
                    {
                      href: '/shop/fashion/product',
                      image: '/img/home/fashion/v2/hero/hotspot02.png',
                      title: 'White cotton blouset',
                      price: '$38.50',
                      placement: 'left',
                      position: { top: '51%', left: '26%' },
                    },
                    {
                      href: '/shop/fashion/product',
                      image: '/img/home/fashion/v2/hero/hotspot03.png',
                      title: 'Brown corduroy pants',
                      price: '$64.99',
                      placement: 'left',
                      position: { top: '81%', left: '40%' },
                    },
                  ].map(({ href, image, title, price, placement, position }, index) => (
                    <Hotspot
                      key={index}
                      trigger="focus"
                      placement={placement as 'bottom' | 'left' | 'right' | 'top'}
                      href={href}
                      image={{
                        src: image,
                        width: 64,
                        height: 64,
                        alt: 'Image',
                      }}
                      title={title}
                      price={price}
                      style={position}
                    />
                  ))}
                  <Image src="/img/home/fashion/v2/hero/image.png" width={1272} height={1296} alt="Image" />
                </div>
              </div>
            </Col>
          </Row>
          <span
            className="position-absolute top-0 start-0 w-100 h-100 d-none-dark rtl-flip"
            style={{ background: 'linear-gradient(102deg, #dad4ec 0%, #f3e7e9 80.43%)' }}
          />
          <span
            className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark rtl-flip"
            style={{ background: 'linear-gradient(102deg, #2a2735 0%, #312a2b 80.43%)' }}
          />
        </div>
      </Container>

      {/* Categories that turns into carousel on screen < 992px (lg breackpoint). Or if there are more than 3 items. */}
      <Container as="section" className="pt-4">
        <CategoriesFashion />
      </Container>

      {/* Featured products */}
      <Container as="section" className="pt-5 mt-2 mt-sm-3 mt-lg-4 mt-xl-5">
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
          dataUrl="/data/fashion/featured-products-v2.json"
          bannerPosition={4}
          bannerColumnClasses="col-12 col-md-8 col-lg-6"
          className="row-cols-lg-4"
        >
          <BannerFashion />
        </ProductsGridFashion>
      </Container>

      {/* Special offers slider */}
      <Container as="section" className="pt-5 mt-2 mt-sm-3 mt-lg-4 mt-xl-5">
        <h3 className="text-center pt-xxl-2 pb-2 pb-md-3">Special offers for you</h3>
        <SpecialOffersSliderFashion />
      </Container>

      {/* Brands */}
      <Container as="section" className="pt-5 mt-2 mt-sm-3 mt-lg-4 mt-xl-5">
        <h3 className="text-center pb-2 pb-md-3">Shop by brand</h3>
        <Row className="justify-content-center">
          <Col sm={10} md={12}>
            <Row className="g-0 border rounded-5 overflow-hidden">
              <Col xs={8} md={4} className="d-flex flex-column border-end">
                <Link
                  href="/shop/fashion"
                  className="hover-effect-opacity position-relative d-block text-body border-bottom"
                >
                  <Image
                    src="/img/home/fashion/v2/brands/zara-light.svg"
                    width={430}
                    height={302}
                    className="position-relative z-1 d-none-dark"
                    alt="Zara"
                  />
                  <Image
                    src="/img/home/fashion/v2/brands/zara-dark.svg"
                    width={430}
                    height={302}
                    className="position-relative z-1 d-none d-block-dark"
                    alt="Zara"
                  />
                  <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-body-tertiary opacity-0" />
                </Link>
                <Link href="/shop/fashion" className="hover-effect-opacity position-relative d-block h-100 text-body">
                  <Image
                    src="/img/home/fashion/v2/brands/brooks-light.svg"
                    width={430}
                    height={145}
                    className="position-relative z-1 d-none-dark"
                    alt="Brooks"
                  />
                  <Image
                    src="/img/home/fashion/v2/brands/brooks-dark.svg"
                    width={430}
                    height={145}
                    className="position-relative z-1 d-none d-block-dark"
                    alt="Brooks"
                  />
                  <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-body-tertiary opacity-0" />
                </Link>
              </Col>
              <Col xs={4} md={2} className="d-flex">
                <div className="d-flex flex-column w-100">
                  <Link
                    href="/shop/fashion"
                    className="hover-effect-opacity position-relative d-block border-bottom text-body"
                  >
                    <Image
                      src="/img/home/fashion/v2/brands/fila-light.svg"
                      width={215}
                      height={224}
                      className="position-relative z-1 d-none-dark"
                      alt="Fila"
                    />
                    <Image
                      src="/img/home/fashion/v2/brands/fila-dark.svg"
                      width={215}
                      height={224}
                      className="position-relative z-1 d-none d-block-dark"
                      alt="Fila"
                    />
                    <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-body-tertiary opacity-0" />
                  </Link>
                  <Link href="/shop/fashion" className="hover-effect-opacity position-relative d-block h-100 text-body">
                    <Image
                      src="/img/home/fashion/v2/brands/adidas-light.svg"
                      width={215}
                      height={224}
                      className="position-relative z-1 d-none-dark"
                      alt="Adidas"
                    />
                    <Image
                      src="/img/home/fashion/v2/brands/adidas-dark.svg"
                      width={215}
                      height={224}
                      className="position-relative z-1 d-none d-block-dark"
                      alt="Adidas"
                    />
                    <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-body-tertiary opacity-0" />
                  </Link>
                </div>
                <hr className="vr d-none d-md-block m-0" />
              </Col>
              <hr className="d-md-none m-0" />
              <Col xs={8} md={4}>
                <Row xs={2} className="g-0 border-bottom border-end">
                  <Col>
                    <Link href="/shop/fashion" className="hover-effect-opacity position-relative d-block text-body">
                      <Image
                        src="/img/home/fashion/v2/brands/hermes-light.svg"
                        width={215}
                        height={278}
                        className="position-relative z-1 d-none-dark"
                        alt="Hermes"
                      />
                      <Image
                        src="/img/home/fashion/v2/brands/hermes-dark.svg"
                        width={215}
                        height={278}
                        className="position-relative z-1 d-none d-block-dark"
                        alt="Hermes"
                      />
                      <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-body-tertiary opacity-0" />
                    </Link>
                  </Col>
                  <Col className="border-start">
                    <Link
                      href="/shop/fashion"
                      className="hover-effect-opacity position-relative d-block h-100 text-body"
                    >
                      <Image
                        src="/img/home/fashion/v2/brands/dior-light.svg"
                        width={214}
                        height={277}
                        className="position-relative z-1 d-none-dark"
                        alt="Dior"
                      />
                      <Image
                        src="/img/home/fashion/v2/brands/dior-dark.svg"
                        width={214}
                        height={277}
                        className="position-relative z-1 d-none d-block-dark"
                        alt="Dior"
                      />
                      <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-body-tertiary opacity-0" />
                    </Link>
                  </Col>
                </Row>
                <Link
                  href="/shop/fashion"
                  className="hover-effect-opacity position-relative d-block h-100 border-end text-body"
                >
                  <Image
                    src="/img/home/fashion/v2/brands/newbalance-light.svg"
                    width={430}
                    height={168}
                    className="position-relative z-1 d-none-dark"
                    alt="New Balance"
                  />
                  <Image
                    src="/img/home/fashion/v2/brands/newbalance-dark.svg"
                    width={430}
                    height={168}
                    className="position-relative z-1 d-none d-block-dark"
                    alt="New Balance"
                  />
                  <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-body-tertiary opacity-0" />
                </Link>
              </Col>
              <Col xs={4} md={2}>
                <Link
                  href="/shop/fashion"
                  className="hover-effect-opacity position-relative d-block text-body border-bottom"
                >
                  <Image
                    src="/img/home/fashion/v2/brands/puma-light.svg"
                    width={216}
                    height={201}
                    className="position-relative z-1 d-none-dark"
                    alt="Puma"
                  />
                  <Image
                    src="/img/home/fashion/v2/brands/puma-dark.svg"
                    width={216}
                    height={201}
                    className="position-relative z-1 d-none d-block-dark"
                    alt="Puma"
                  />
                  <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-body-tertiary opacity-0" />
                </Link>
                <Link href="/shop/fashion" className="hover-effect-opacity position-relative d-block text-body">
                  <Image
                    src="/img/home/fashion/v2/brands/hm-light.svg"
                    width={216}
                    height={254}
                    className="position-relative z-1 d-none-dark"
                    alt="H & M"
                  />
                  <Image
                    src="/img/home/fashion/v2/brands/hm-dark.svg"
                    width={216}
                    height={254}
                    className="position-relative z-1 d-none d-block-dark"
                    alt="H & M"
                  />
                  <span className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 bg-body-tertiary opacity-0" />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </main>

    {/* Page footer */}
    <FooterFashion className="pt-5 mt-2 mt-sm-3 mt-lg-4 mt-xl-5" />
  </>
)

export default Fashion_V2_HomePage
