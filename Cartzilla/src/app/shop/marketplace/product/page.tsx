import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeaderMarketplace from '@/components/layout/header-marketplace'
import ProductCommentsMarketplace from './comments'
import ProductDetailsSidebarMarketplace from './product-details-sidebar'
import ProductsCarouselMarketplace from '@/components/shop/products-carousel-marketplace'
import Lightbox from '@/components/lightbox'
import FooterMarketplace from '@/components/layout/footer-marketplace'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownToggle from 'react-bootstrap/DropdownToggle'
import DropdownMenu from 'react-bootstrap/DropdownMenu'
import DropdownItem from 'react-bootstrap/DropdownItem'

export const metadata: Metadata = {
  title: 'Cartzilla | Marketplace - Digital Product Page',
}

const productGallery = [
  {
    image: {
      thumb: '/img/shop/marketplace/single/01.jpg',
      large: '/img/shop/marketplace/single/01.jpg',
      size: [1400, 928],
    },
    column: 'col-12',
  },
  {
    image: {
      thumb: '/img/shop/marketplace/single/th02.jpg',
      large: '/img/shop/marketplace/single/02.jpg',
      size: [720, 720],
    },
    column: 'col-6',
  },
  {
    image: {
      thumb: '/img/shop/marketplace/single/th03.jpg',
      large: '/img/shop/marketplace/single/03.jpg',
      size: [720, 720],
    },
    column: 'col-6',
  },
  {
    image: {
      thumb: '/img/shop/marketplace/single/04.jpg',
      large: '/img/shop/marketplace/single/04.jpg',
      size: [1400, 928],
    },
    column: 'col-12',
  },
]

const productInfo = {
  Format: (
    <div className="d-flex gap-3">
      <div className="ratio ratio-1x1 d-flex flex-shrink-0" style={{ width: 20 }}>
        <Image src="/img/home/marketplace/formats/figma.png" width={40} height={40} alt="Figma" />
      </div>
      <div className="ratio ratio-1x1 d-flex flex-shrink-0" style={{ width: 20 }}>
        <Image src="/img/home/marketplace/formats/photoshop.png" width={40} height={40} alt="Photoshop" />
      </div>
    </div>
  ),
  'Last update': '21 October 2025',
  Published: '0 August 2025',
  'High resolution': 'Yes',
  'File type': 'FIG, PSD, JPG',
  'File size': '140.8 MB',
}

const productTags: [string, string][] = [
  ['mockup tablet', '#'],
  ['device mockup', '#'],
  ['screen', '#'],
  ['application', '#'],
  ['app mockup', '#'],
  ['mobile', '#'],
  ['ui/ux', '#'],
  ['placeholder', '#'],
]

const MarketplaceProductPage = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderMarketplace />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Product details */}
      <Container as="section" className="pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3">
        {/* Breadcrumb */}
        <Breadcrumb className="pt-3 mt-2 mt-md-3 mb-md-4">
          <li className="breadcrumb-item">
            <Link href="/home/marketplace">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/shop/marketplace">Catalog</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Digital product page
          </li>
        </Breadcrumb>

        {/* Page title + Product meta */}
        <Row>
          <Col lg={8} xl={9}>
            <h1 className="h3 mb-sm-4">A stunning set of tablet pro mockups for professionals</h1>
            <div className="d-flex flex-column flex-md-row align-items-md-center gap-3 gap-md-4">
              <Nav className="align-items-center gap-2 fs-sm">
                <NavLink as={Link} href="/shop/marketplace" className="text-body gap-1 p-0">
                  <div className="flex-shrink-0 border rounded-circle" style={{ width: 32 }}>
                    <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                      <Image src="/img/shop/marketplace/single/avatar.png" width={60} height={60} alt="Avatar" />
                    </div>
                  </div>
                  Createx Studio
                </NavLink>
                <div className="text-body-secondary">in</div>
                <NavLink as={Link} href="/shop/marketplace" className="text-body p-0">
                  Mockups
                </NavLink>
              </Nav>
              <div className="d-flex justify-content-between flex-grow-1 gap-4">
                <Badge bg="info-subtle" text="info" className="d-inline-flex align-items-center fs-sm">
                  <i className="ci-download fs-base me-1" />
                  65 sales
                </Badge>
                <div className="d-flex gap-2">
                  <Button variant="secondary" size="sm" className="rounded-pill animate-pulse" aria-label="Likes">
                    <i className="ci-heart animate-target fs-sm ms-n1 me-1" />
                    12
                  </Button>
                  <Button
                    href="#comments"
                    variant="secondary"
                    size="sm"
                    className="rounded-pill animate-scale"
                    aria-label="Comments"
                  >
                    <i className="ci-message-circle animate-target fs-sm ms-n1 me-1" />3
                  </Button>
                  <Dropdown align="end">
                    <DropdownToggle
                      variant="secondary"
                      size="sm"
                      className="btn-icon animate-scale rounded-circle"
                      aria-label="Share"
                    >
                      <i className="ci-share-2 animate-target fs-sm" />
                    </DropdownToggle>
                    <DropdownMenu style={{ '--cz-dropdown-min-width': '8.5rem' } as React.CSSProperties}>
                      {[
                        ['ci-facebook', 'Facebook', '#'],
                        ['ci-instagram', 'Instagram', '#'],
                        ['ci-linkedin', 'LinkedIn', '#'],
                      ].map((item, index) => (
                        <DropdownItem key={index} href={item[2]}>
                          <i className={`${item[0]} fs-base me-2`}></i>
                          {item[1]}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="pt-4 pb-5">
          {/* Product gallery + Description */}
          <Col lg={8} xl={9}>
            {/* Gallery */}
            <Row className="g-3">
              {productGallery.map(({ image, column }, index) => (
                <Col key={index} className={column}>
                  <Lightbox
                    href={image.large}
                    gallery="productGallery"
                    className="hover-effect-scale hover-effect-opacity position-relative d-flex rounded-4 overflow-hidden"
                  >
                    <i className="ci-zoom-in hover-effect-target fs-3 text-white position-absolute top-50 start-50 translate-middle opacity-0 z-2" />
                    <Image
                      priority
                      src={image.thumb}
                      width={image.size[0]}
                      height={image.size[1]}
                      className="hover-effect-target bg-body-tertiary"
                      alt="Image"
                    />
                  </Lightbox>
                </Col>
              ))}
            </Row>

            {/* Product info visible on screens < 992px wide (lg breakpoint) */}
            <h2 className="h4 d-lg-none pt-5 mt-md-2 mb-lg-4">Product info</h2>
            <table className="table table-borderless table-sm d-lg-none mb-0">
              <tbody>
                {Object.entries(productInfo).map(([key, value], index) => (
                  <tr key={index}>
                    <td className="text-body-secondary ps-0">{key}</td>
                    <td className="text-dark-emphasis pe-0">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Overview */}
            <h2 className="h4 pt-5 mt-md-2 mb-lg-4">Overview</h2>
            <p>
              Elevate your presentations and design projects with this meticulously crafted set of Tablet Pro Mockups.
              Designed with professionals in mind, these mockups are perfect for showcasing your apps, websites, or
              digital products in a sleek and modern way. Here&apos;s what makes this set stand out.
            </p>
            <p className="mb-0">
              This Tablet Pro Mockup Set is an essential tool for designers who want to present their work
              professionally and impress clients or audiences with stunning, high-quality visuals.
            </p>

            {/* Highlights */}
            <h2 className="h4 pt-5 mt-md-2 mb-lg-4">Highlights</h2>
            <ul className="mb-0">
              <li>The set includes a variety of angles and perspectives</li>
              <li>Easily insert your designs into the mockups using smart objects in Adobe Photoshop</li>
              <li>These mockups feature professionally crafted lighting and shadow effects</li>
              <li>The backgrounds of these mockups are fully customizable</li>
              <li>Choose from different color options for the tablet device</li>
            </ul>

            {/* Tags visible on screens < 992px wide (lg breakpoint) */}
            <h2 className="h4 d-lg-none pt-5 mt-md-2 mb-lg-4">Tags</h2>
            <div className="d-flex d-lg-none flex-wrap gap-2 mt-n1">
              {productTags.map((tag, index) => (
                <Badge
                  key={index}
                  as={Link}
                  href={tag[1]}
                  bg="body-secondary"
                  text="body-emphasis"
                  className="fs-sm text-decoration-none mt-1 me-1"
                >
                  {tag[0]}
                </Badge>
              ))}
            </div>

            {/* Comments */}
            <ProductCommentsMarketplace />
          </Col>

          {/* Sidebar: Licenses + Info visible on screens > 991px wide (lg breakpoint) */}
          <Col as="aside" lg={4} xl={3}>
            <ProductDetailsSidebarMarketplace
              standardPrice={16}
              extendedPrice={99}
              productInfo={productInfo}
              productTags={productTags}
            />
          </Col>
        </Row>
      </Container>

      {/* Similar products carousel */}
      <Container as="section" className="pb-2 pb-sm-3 pb-md-4 pb-lg-5 mb-xxl-3">
        <ProductsCarouselMarketplace dataUrl="/data/marketplace/similar-products.json" heading="You may like this" />
      </Container>
    </main>

    {/* Page footer */}
    <FooterMarketplace />
  </>
)

export default MarketplaceProductPage
