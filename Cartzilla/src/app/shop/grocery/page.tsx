import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderGrocery from '@/components/layout/header-grocery'
import FilterSidebarGrocery from './filter-sidebar'
import ProductsGridGrocery from '@/components/shop/products-grid-grocery'
import ShopPagination from '@/components/shop/shop-pagination'
import FooterGrocery from '@/components/layout/footer-grocery'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import FormLabel from 'react-bootstrap/FormLabel'
import Button from 'react-bootstrap/Button'
import SelectBox from '@/components/forms/select-box'

export const metadata: Metadata = {
  title: 'Cartzilla | Grocery Store - Catalog',
}

const GroceryCatalogPage = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderGrocery />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Breadcrumb */}
      <Breadcrumb as={Container} className="pt-lg-2 my-3 my-lg-4">
        <li className="breadcrumb-item">
          <Link href="/home/grocery">Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Catalog with sidebar filters
        </li>
      </Breadcrumb>

      {/* Page title */}
      <h1 className="h3 container pb-2 pb-md-3 pb-lg-4">Shop catalog</h1>

      {/* Products grid + Sidebar with filters */}
      <Container as="section" className="pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        <Row>
          {/* Filter sidebar that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
          <Col as="aside" lg={3}>
            <FilterSidebarGrocery />
          </Col>

          {/* Products grid */}
          <Col lg={9}>
            {/* Sorting */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <div className="fs-sm text-body-emphasis text-nowrap mb-2 mb-sm-0">
                Found <span className="fw-semibold">256</span> items
              </div>
              <div className="d-flex align-items-center text-nowrap">
                <FormLabel className="fw-semibold mb-0 me-2">Sort by:</FormLabel>
                <div style={{ width: 200 }}>
                  <SelectBox
                    choices={[
                      { value: 'Relevance', label: 'Relevance' },
                      { value: 'Popularity', label: 'Popularity' },
                      { value: 'Price: Low to High', label: 'Price: Low to High' },
                      { value: 'Price: High to Low', label: 'Price: High to Low' },
                      { value: 'Newest Arrivals', label: 'Newest Arrivals' },
                    ]}
                    removeItemButton={false}
                    inputClassName="rounded-pill"
                    aria-label="Sort"
                  />
                </div>
              </div>
            </div>

            {/* Selected filters */}
            <div className="d-flex flex-wrap gap-2 mb-4">
              {['Sale', 'Gluten-free', 'Nestlé', '$1 - $30'].map((filter, index) => (
                <Button key={index} variant="secondary" size="sm">
                  <i className="ci-close fs-sm ms-n1 me-1" />
                  {filter}
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

            <ProductsGridGrocery dataUrl="/data/grocery/catalog.json" dataSlice={[0, 16]} />

            {/* Pagination */}
            <ShopPagination className="border-top mt-4 pt-3" />
          </Col>
        </Row>
      </Container>
    </main>

    {/* Page footer */}
    <FooterGrocery />
  </>
)

export default GroceryCatalogPage
