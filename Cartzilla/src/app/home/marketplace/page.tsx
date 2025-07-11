import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeaderMarketplace from '@/components/layout/header-marketplace'
import ProductsCarouselMarketplace from '@/components/shop/products-carousel-marketplace'
import ProductsGridMarketplace from '@/components/shop/products-grid-marketplace'
import CategoryCardVariantFive from '@/components/shop/category-card-variant-five'
import CollectionsGridMarketplace from '@/components/shop/collections-grid-marketplace'
import FooterMarketplace from '@/components/layout/footer-marketplace'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

export const metadata: Metadata = {
  title: 'Cartzilla | Marketplace',
}

const MarketplaceHomePage = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderMarketplace logoHref="/" />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Hero */}
      <section className="position-relative pb-5" style={{ marginTop: -76, paddingTop: 76 }}>
        <Container className="position-relative z-1 py-md-3 py-lg-4 py-xl-5">
          {/* Title */}
          <Row className="pt-4 pt-sm-5 pb-4 pb-md-5 my-2 mt-sm-0 mb-sm-3 mb-md-0 mb-xl-2 mb-xxl-4">
            <Col xl={10} className="pt-xxl-2">
              <h1 className="display-3 mb-md-4">High-quality design resources tailored for busy creatives</h1>
              <p className="fs-lg mb-0">
                Discover top-notch 3D and vector illustrations, photos images, designs and mockups.
              </p>
            </Col>
          </Row>

          {/* Categories */}
          <Row xs={2} sm={3} lg={6} className="g-4 g-lg-3 g-xl-4 pb-2 mb-4">
            {[
              { image: '/img/home/marketplace/categories/01.jpg', title: 'Vectors', href: '/shop/marketplace' },
              { image: '/img/home/marketplace/categories/02.jpg', title: 'Photos', href: '/shop/marketplace' },
              {
                image: '/img/home/marketplace/categories/03.jpg',
                title: '3D illustrations',
                href: '/shop/marketplace',
              },
              { image: '/img/home/marketplace/categories/04.jpg', title: 'AI images', href: '/shop/marketplace' },
              { image: '/img/home/marketplace/categories/05.jpg', title: 'Templates', href: '/shop/marketplace' },
              { image: '/img/home/marketplace/categories/06.jpg', title: 'Mockups', href: '/shop/marketplace' },
            ].map(({ image, title, href }, index) => (
              <Col key={index}>
                <CategoryCardVariantFive image={{ src: image, width: 268, height: 178 }} title={title} href={href} />
              </Col>
            ))}
          </Row>

          {/* Formats */}
          <div className="d-sm-flex align-items-center gap-4 pb-2 pb-sm-4">
            <h2 className="fs-sm fw-medium mb-sm-0">Browse by most popular formats</h2>
            <div className="d-flex gap-3">
              {[
                { image: '/img/home/marketplace/formats/figma.png', name: 'Figma', href: '#' },
                { image: '/img/home/marketplace/formats/framer.png', name: 'Framer', href: '#' },
                { image: '/img/home/marketplace/formats/illustrator.png', name: 'Illustrator', href: '#' },
                { image: '/img/home/marketplace/formats/webflow.png', name: 'Webflow', href: '#' },
                { image: '/img/home/marketplace/formats/photoshop.png', name: 'Photoshop', href: '#' },
              ].map(({ image, name, href }, index) => (
                <Link key={index} href={href} className="d-flex flex-shrink-0" style={{ width: 20 }}>
                  <Image src={image} width={40} height={40} alt={name} />
                </Link>
              ))}
            </div>
          </div>
        </Container>
        <span
          className="position-absolute top-0 start-0 w-100 h-100 d-none-dark"
          style={{
            background:
              'linear-gradient(90deg, rgba(203,201,233, .6) 0%, rgba(227,232,251, .6) 50%, rgba(255,224,244, .6) 100%)',
          }}
        />
        <span
          className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark"
          style={{
            background:
              'linear-gradient(90deg, rgba(51,51,59, .6) 0%, rgba(44,48,62, .6) 50%, rgba(57,43,52, .6) 100%)',
          }}
        />
      </section>

      {/* Latest products carousel */}
      <Container as="section" className="pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-5 my-xxl-3">
        <ProductsCarouselMarketplace
          dataUrl="/data/marketplace/latest-products.json"
          slidesPerView={2}
          heading="Latest products"
          className="pt-5"
        />
      </Container>

      {/* Design resources products grid */}
      <Container as="section" className="pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-5 my-xxl-3">
        <div className="d-md-flex align-items-center justify-content-between gap-4 mb-1 mb-sm-2 mb-md-3">
          <h2 className="h3">Explore design resources</h2>
          <div className="overflow-x-auto pb-3">
            <Nav as="ul" variant="pills" defaultActiveKey="bestsellers" className="flex-nowrap gap-2 text-nowrap">
              {[
                ['Bestsellers', 'bestsellers'],
                ['New arrivals', 'new'],
                ['Sale items', 'sale'],
              ].map((item, index) => (
                <NavItem key={index} as="li" className="me-1">
                  <NavLink eventKey={item[1]}>{item[0]}</NavLink>
                </NavItem>
              ))}
            </Nav>
          </div>
        </div>
        <ProductsGridMarketplace dataUrl="/data/marketplace/bestsellers.json" />
        <div className="text-center pt-3 mt-2 mt-sm-3">
          <Link href="/shop/marketplace" className="btn btn-lg btn-dark rounded-pill animate-slide-end">
            Explore all resources
            <i className="ci-chevron-right animate-target fs-lg ms-1 me-n1" />
          </Link>
        </div>
      </Container>

      {/* Collections */}
      <Container as="section" className="py-2 py-sm-3 py-md-4 py-lg-5 my-xxl-3">
        <h2 className="h3 pb-1 pb-sm-2 pb-md-3">Best collections</h2>
        <CollectionsGridMarketplace dataUrl="/data/marketplace/collections.json" />
        <div className="text-center pt-3 mt-2 mt-sm-3 pb-5">
          <Link href="#" className="btn btn-lg btn-dark rounded-pill animate-slide-end">
            Explore all collections
            <i className="ci-chevron-right animate-target fs-lg ms-1 me-n1" />
          </Link>
        </div>
      </Container>
    </main>

    {/* Page footer */}
    <FooterMarketplace />
  </>
)

export default MarketplaceHomePage
