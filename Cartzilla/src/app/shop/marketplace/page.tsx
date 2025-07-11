import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderMarketplace from '@/components/layout/header-marketplace'
import ProductsGridMarketplace from '@/components/shop/products-grid-marketplace'
import FooterMarketplace from '@/components/layout/footer-marketplace'
import SelectBox from '@/components/forms/select-box'
import ShopPagination from '@/components/shop/shop-pagination'
import Container from 'react-bootstrap/Container'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'
import NavLink from 'react-bootstrap/NavLink'

export const metadata: Metadata = {
  title: 'Cartzilla | Marketplace - Catalog',
}

const MarketplaceCatalogPage = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderMarketplace />

    {/* Page content */}
    <main className="content-wrapper">
      <Container className="pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
        {/* Breadcrumb */}
        <Breadcrumb className="pt-3 mt-2 mt-md-3 mb-md-4">
          <li className="breadcrumb-item">
            <Link href="/home/marketplace">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Catalog with filters on top
          </li>
        </Breadcrumb>

        {/* Page title */}
        <h1 className="h3 pb-2">Marketplace catalog</h1>

        {/* Filters */}
        <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-lg-4 mb-2">
          <div className="overflow-x-auto">
            <Nav as="ul" variant="pills" defaultActiveKey="all" className="flex-nowrap gap-2 text-nowrap pb-3">
              {[
                ['All products', 'all'],
                ['Vectors', 'vectors'],
                ['Mockups', 'mockups'],
                ['Photos', 'photos'],
                ['3D', '3d'],
                ['AI images', 'ai'],
                ['Templates', 'templates'],
              ].map((item, index) => (
                <NavItem key={index} as="li">
                  <NavLink eventKey={item[1]}>{item[0]}</NavLink>
                </NavItem>
              ))}
            </Nav>
          </div>
          <div className="d-flex flex-column flex-sm-row gap-sm-2 pb-1 pb-lg-2">
            <div className="d-flex align-items-center gap-2 pb-sm-2">
              <div className="fs-sm fw-semibold text-dark-emphasis me-1">Format:</div>
              <div style={{ width: 170 }}>
                <SelectBox
                  choices={[
                    {
                      value: 'All',
                      label: 'All formats',
                    },
                    {
                      value: 'Figma',
                      label:
                        '<div class="d-flex align-items-center"><img src="/img/home/marketplace/formats/figma.png" class="flex-shrink-0 me-2" width="20" alt="Figma"> Figma</div>',
                    },
                    {
                      value: 'Framer',
                      label:
                        '<div class="d-flex align-items-center"><img src="/img/home/marketplace/formats/framer.png" class="flex-shrink-0 me-2" width="20" alt="Framer"> Framer</div>',
                    },
                    {
                      value: 'Illustrator',
                      label:
                        '<div class="d-flex align-items-center"><img src="/img/home/marketplace/formats/illustrator.png" class="flex-shrink-0 me-2" width="20" alt="Illustrator"> Illustrator</div>',
                    },
                    {
                      value: 'Webflow',
                      label:
                        '<div class="d-flex align-items-center"><img src="/img/home/marketplace/formats/webflow.png" class="flex-shrink-0 me-2" width="20" alt="Webflow"> Webflow</div>',
                    },
                    {
                      value: 'Photoshop',
                      label:
                        '<div class="d-flex align-items-center"><img src="/img/home/marketplace/formats/photoshop.png" class="flex-shrink-0 me-2" width="20" alt="Photoshop"> Photoshop</div>',
                    },
                  ]}
                  removeItemButton={false}
                  inputClassName="border-0 rounded-0 ps-0"
                  aria-label="Select format"
                />
              </div>
            </div>
            <div className="d-flex align-items-center gap-2 pb-2">
              <div className="fs-sm fw-semibold text-dark-emphasis text-nowrap me-1">Sort by:</div>
              <div style={{ width: 150 }}>
                <SelectBox
                  choices={[
                    { value: 'Best sellers', label: 'Best sellers' },
                    { value: 'Top rated', label: 'Top rated' },
                    { value: 'Newest', label: 'Newest' },
                  ]}
                  removeItemButton={false}
                  inputClassName="border-0 rounded-0 ps-0"
                  aria-label="Sort"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Products grid */}
        <ProductsGridMarketplace dataUrl="/data/marketplace/catalog.json" dataSlice={[0, 16]} />

        {/* Pagination */}
        <ShopPagination className="pt-4" />
      </Container>
    </main>

    {/* Page footer */}
    <FooterMarketplace />
  </>
)

export default MarketplaceCatalogPage
