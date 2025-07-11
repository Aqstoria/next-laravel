import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeaderElectronics from '@/components/layout/header-electronics'
import BannersElectronics from '@/components/shop/banners-electronics'
import ProductsGridElectronics from '@/components/shop/products-grid-electronics'
import FilterSidebarElectronics from './filter-sidebar'
import ShopPagination from '@/components/shop/shop-pagination'
import SubscriptionVlogElectronics from '@/components/shop/subscription-vlog-electronics'
import FooterElectronics from '@/components/layout/footer-electronics'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Accordion from 'react-bootstrap/Accordion'
import AccordionItem from 'react-bootstrap/AccordionItem'
import AccordionButton from 'react-bootstrap/AccordionButton'
import AccordionCollapse from 'react-bootstrap/AccordionCollapse'
import Button from 'react-bootstrap/Button'
import FormLabel from 'react-bootstrap/FormLabel'
import SelectBox from '@/components/forms/select-box'

export const metadata: Metadata = {
  title: 'Cartzilla | Electronics Store - Catalog',
}

const ElectronicsCatalogPage = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderElectronics />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Breadcrumb */}
      <Breadcrumb as={Container} className="pt-3 my-3 my-md-4">
        <li className="breadcrumb-item">
          <Link href="/home">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Catalog with sidebar filters
        </li>
      </Breadcrumb>

      {/* Page title */}
      <h1 className="h3 container mb-4">Shop catalog</h1>

      {/* Banners that are turned into collaspse on screens < 768px wide (sm breakpoint) */}
      <Accordion as="section" className="container pb-4 pb-md-5 mb-xl-3">
        <AccordionItem eventKey="0" className="border-0">
          <div className="accordion-header d-md-none" id="offersHeading">
            <AccordionButton className="w-auto fw-medium collapsed border border-dashed border-danger border-opacity-50 rounded py-2 px-3">
              <i className="d-inline-flex ci-percent fs-lg text-danger rounded-circle me-2" />
              <span className="me-2">See latest offers</span>
            </AccordionButton>
          </div>
          <AccordionCollapse eventKey="0" className="d-md-block" aria-labelledby="offersHeading">
            <BannersElectronics className="pt-3 pt-md-0" />
          </AccordionCollapse>
        </AccordionItem>
      </Accordion>

      {/* Selected filters + Sorting */}
      <Container as="section" className="mb-4">
        <Row>
          <Col lg={9}>
            <div className="d-md-flex align-items-start">
              <div className="h6 fs-sm fw-normal text-nowrap translate-middle-y mt-3 mb-0 me-4">
                Found <span className="fw-semibold">732</span> items
              </div>
              <div className="d-flex flex-wrap gap-2">
                {['Sale', 'Asus', '1 TB', '$340 - $1,250'].map((item, index) => (
                  <Button key={index} variant="secondary" size="sm">
                    <i className="ci-close fs-sm ms-n1 me-1" />
                    {item}
                  </Button>
                ))}
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-transparent border-0 text-decoration-underline px-0 ms-2"
                >
                  Clear all
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={3} className="mt-3 mt-lg-0">
            <div className="d-flex align-items-center justify-content-lg-end text-nowrap">
              <FormLabel className="fw-semibold mb-0 me-2">Sort by:</FormLabel>
              <div style={{ width: 190 }}>
                <SelectBox
                  choices={[
                    { value: 'Relevance', label: 'Relevance' },
                    { value: 'Popularity', label: 'Popularity' },
                    { value: 'Price: Low to High', label: 'Price: Low to High' },
                    { value: 'Price: High to Low', label: 'Price: High to Low' },
                    { value: 'Newest Arrivals', label: 'Newest Arrivals' },
                  ]}
                  removeItemButton={false}
                  inputClassName="border-0 rounded-0 px-1"
                  aria-label="Sort"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Products grid + Sidebar with filters */}
      <Container as="section" className="pb-5 mb-sm-2 mb-md-3 mb-lg-4 mb-xl-5">
        <Row>
          {/* Filter sidebar that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
          <Col lg={3}>
            <FilterSidebarElectronics />
          </Col>

          {/* Products grid */}
          <Col lg={9}>
            <ProductsGridElectronics
              dataSlice={[0, 6]}
              className="pb-3 mb-3"
            />

            {/* Banner */}
            <div className="position-relative rounded-5 overflow-hidden mb-4">
              <span
                className="position-absolute top-0 start-0 w-100 h-100 d-none-dark rtl-flip"
                style={{ background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' }}
              />
              <span
                className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark rtl-flip"
                style={{ background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' }}
              ></span>
              <Row className="align-items-center position-relative z-1">
                <Col md={6} className="pt-5 pt-md-0 mb-2 mb-md-0">
                  <div className="text-center text-md-start py-md-5 px-4 ps-md-5 pe-md-0 me-md-n5">
                    <h3 className="text-uppercase fw-bold ps-xxl-3 pb-2 mb-1">Seasonal weekly sale 2025</h3>
                    <p className="text-body-emphasis ps-xxl-3 mb-0">
                      Use code{' '}
                      <span className="d-inline-block fw-semibold text-dark bg-white rounded-pill py-1 px-2">
                        Sale 2025
                      </span>{' '}
                      to get best offer
                    </p>
                  </div>
                </Col>
                <Col md={6} className="d-flex justify-content-center justify-content-md-end">
                  <div className="me-3 me-lg-4 me-xxl-5" style={{ width: 335 }}>
                    <Image
                      src="/img/shop/electronics/banners/iphone-2.png"
                      className="d-block rtl-flip"
                      width={670}
                      height={420}
                      alt="Phone"
                    />
                  </div>
                </Col>
              </Row>
            </div>

            <ProductsGridElectronics dataSlice={[6, 14]} bannerPosition={5}>
              <div
                className="position-relative d-flex flex-column align-items-center justify-content-end h-100 text-center overflow-hidden rounded-5 px-4 px-lg-3 pt-4 pb-4"
                style={{ background: '#1d2c41' }}
                data-bs-theme="dark"
              >
                <Image
                  fill
                  src="/img/shop/electronics/banners/background.jpg"
                  sizes="612px"
                  className="object-fit-cover"
                  alt="Background"
                />
                <div className="position-relative z-1">
                  <div
                    className="animate-up-down position-relative z-2 me-lg-4"
                    style={{ maxWidth: 320, marginBottom: '-22%' }}
                  >
                    <Image src="/img/shop/electronics/banners/laptop.png" width={520} height={512} alt="Laptop" />
                  </div>
                  <h3 className="display-5 mb-2">MacBook</h3>
                  <p className="text-body fs-sm fw-medium mb-3">Be Pro Anywhere</p>
                  <Link href="/shop/electronics/product?slug=macbook-pro" className="btn btn-sm btn-primary mb-2">
                    From $1,199
                  </Link>
                </div>
              </div>
            </ProductsGridElectronics>

            {/* Pagination */}
            <ShopPagination className="border-top mt-4 pt-3" />
          </Col>
        </Row>
      </Container>

      {/* Subscription CTA + Vlog */}
      <SubscriptionVlogElectronics />
    </main>

    {/* Page footer */}
    <FooterElectronics />
  </>
)

export default ElectronicsCatalogPage
