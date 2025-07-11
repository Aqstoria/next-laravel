import type { Metadata } from 'next'
import Link from 'next/link'
import type { Product } from '@/types/product'
import HeaderFashion from '@/components/layout/header-fashion'
import ProductsGridFashion from '@/components/shop/products-grid-fashion'
import FilterSidebarFashion from './filter-sidebar'
import FooterFashion from '@/components/layout/footer-fashion'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'
import FormLabel from 'react-bootstrap/FormLabel'
import SelectBox from '@/components/forms/select-box'
import BannerFashion from '@/components/shop/banner-fashion'

export const metadata: Metadata = {
  title: 'Cartzilla | Fashion Store - Catalog',
}

const product: Product = {
  id: 'productFashion01',
  image: ['/img/shop/fashion/01.png', '/img/shop/fashion/thumbs/10.png'],
  title: 'Denim midi skirt with pockets',
  href: '/shop/fashion/product',
  price: [126.5, 156],
  badge: ['danger', 'Sale'],
}

const FashionCatalogPage = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderFashion />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Breadcrumb */}
      <Breadcrumb as={Container} className="pt-3 my-3 my-md-4">
        <li className="breadcrumb-item">
          <Link href="/home/fashion-v1">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Catalog with sidebar filters
        </li>
      </Breadcrumb>

      {/* Page title */}
      <h1 className="h3 container mb-4">Shop catalog</h1>

      {/* Products grid + Sidebar with filters */}
      <Container as="section" className="pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        <Row>
          {/* Filter sidebar that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
          <Col as="aside" lg={3}>
            <FilterSidebarFashion />
          </Col>

          {/* Products grid */}
          <Col lg={9}>
            {/* Sorting */}
            <div className="d-sm-flex align-items-center justify-content-between mt-n2 mb-3 mb-sm-4">
              <div className="fs-sm text-body-emphasis text-nowrap">
                Found <span className="fw-semibold">32</span> items
              </div>
              <div className="d-flex align-items-center text-nowrap">
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
            </div>

            <ProductsGridFashion dataUrl="/data/fashion/catalog.json" bannerPosition={6} className="pb-4 pb-md-5">
              <BannerFashion />
            </ProductsGridFashion>

            {/* Show more button */}
            <Button variant="outline-secondary" size="lg" className="w-100">
              Show more
              <i className="ci-chevron-down fs-xl ms-2 me-n1" />
            </Button>
          </Col>
        </Row>
      </Container>
    </main>

    {/* Page footer */}
    <FooterFashion />
  </>
)

export default FashionCatalogPage
