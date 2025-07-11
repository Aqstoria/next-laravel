import type { Metadata } from 'next'
import { ProductViewProvider } from '@/contexts/product-view-context'
import Link from 'next/link'
import HeaderFurniture from '@/components/layout/header-furniture'
import FiltersFurniture from './filters'
import ProductsGridFurniture from '@/components/shop/products-grid-furniture'
import FooterFurniture from '@/components/layout/footer-furniture'
import Container from 'react-bootstrap/Container'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import ProgressBar from 'react-bootstrap/ProgressBar'

export const metadata: Metadata = {
  title: 'Cartzilla | Furniture Store - Catalog',
}

const FurnitureCatalogPage = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderFurniture />

    {/* Page content */}
    <main className="content-wrapper">
      <Container className="pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        {/* Breadcrumb */}
        <Breadcrumb className="position-relative pt-3 my-3 my-md-4">
          <li className="breadcrumb-item">
            <Link href="/home/furniture">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Catalog with filters on top
          </li>
        </Breadcrumb>

        {/* Page title */}
        <h1 className="h3 position-relative pb-sm-2 pb-md-3" style={{ zIndex: 1021 }}>
          Shop catalog
        </h1>

        <ProductViewProvider>
          {/* Filters */}
          <FiltersFurniture />

          {/* Selected filters */}
          <Stack direction="horizontal" gap={2} className="flex-wrap text-nowrap mt-n3 mb-3 mb-lg-4">
            {['Living room', 'Bedroom', 'Lighting', 'Accessories'].map((filter, index) => (
              <Button key={index} variant="secondary" size="sm" className="rounded-pill me-1">
                <i className="ci-close fs-sm me-1 ms-n1" />
                {filter}
              </Button>
            ))}
            <Nav className="ps-1">
              <NavLink className="fs-xs text-decoration-underline px-0">Clear all</NavLink>
            </Nav>
          </Stack>

          {/* Products grid */}
          <ProductsGridFurniture dataUrl="/data/furniture/catalog.json" dataSlice={[0, 16]} />
        </ProductViewProvider>

        {/* Pagination */}
        <div
          className="d-flex flex-column align-items-center pt-5 mt-md-2 mt-lg-3 mt-xl-4 mb-xxl-3 mx-auto"
          style={{ maxWidth: 306 }}
        >
          <div className="fs-sm text-center mb-3">Showing 16 from 64</div>
          <ProgressBar
            variant="dark"
            now={25}
            className="d-none-dark w-100 mb-3"
            style={{ height: 4 }}
            aria-label="Items shown"
          />
          <ProgressBar
            variant="light"
            now={25}
            className="d-none d-flex-dark w-100 mb-3"
            style={{ height: 4 }}
            aria-label="Items shown"
          />
          <Button variant="link" size="lg" className="text-body-emphasis text-decoration-none animate-underline">
            <span className="animate-target">Show more</span>
            <i className="ci-chevron-down fs-lg ms-2" />
          </Button>
        </div>
      </Container>
    </main>

    {/* Page footer */}
    <FooterFurniture />
  </>
)

export default FurnitureCatalogPage
