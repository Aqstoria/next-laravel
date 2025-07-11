import type { Metadata } from 'next'
import { Suspense } from 'react'
import Link from 'next/link'
import HeaderElectronics from '@/components/layout/header-electronics'
import BrandsCategoriesElectronics from './brands'
import CategoryCardVariantOne from '@/components/shop/category-card-variant-one'
import BannersElectronics from '@/components/shop/banners-electronics'
import ProductsGridElectronics from '@/components/shop/products-grid-electronics'
import SubscriptionVlogElectronics from '@/components/shop/subscription-vlog-electronics'
import FooterElectronics from '@/components/layout/footer-electronics'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { data } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Cartzilla | Electronics Store - Categories',
}

interface Category {
  id: string
  image: string
  title: string
  href: string
  list: { label: string; href: string }[]
}

const RenderCategories = async () => {
  const categories = await data<Category[]>('/public/data/electronics/categories.json')
  if (!categories || categories.length === 0) {
    return null
  }

  return (
    <Row xs={1} sm={2} md={3} lg={4} className="gy-5">
      {categories.map(({ id, image, title, href, list }: Category) => (
        <Col key={id}>
          <CategoryCardVariantOne
            image={{ src: image, width: 362, height: 258, alt: title }}
            title={title}
            href={href}
            list={list}
          />
        </Col>
      ))}
    </Row>
  )
}

const Loading = () => (
  <Row xs={1} sm={2} md={3} lg={4} className="gy-5">
    {Array.from({ length: 8 }, (_, index) => (
      <Col key={index}>
        <div className="position-relative placeholder-wave mb-3">
          <div
            className="placeholder rounded ratio"
            style={{ '--cz-aspect-ratio': 'calc(274 / 384 * 100%)' } as React.CSSProperties}
          />
          <i className="ci-image position-absolute top-50 start-50 translate-middle fs-1 opacity-40" />
        </div>
        <h6 className="placeholder-glow mb-0">
          <span className="placeholder placeholder-sm col-8"></span>
        </h6>
        <p className="placeholder-glow mb-n1">
          <span className="placeholder placeholder-xs col-6"></span>
        </p>
        <p className="placeholder-glow mb-n1">
          <span className="placeholder placeholder-xs col-6"></span>
        </p>
        <p className="placeholder-glow mb-n1">
          <span className="placeholder placeholder-xs col-6"></span>
        </p>
        <p className="placeholder-glow mb-n1">
          <span className="placeholder placeholder-xs col-6"></span>
        </p>
        <p className="placeholder-glow mb-n1">
          <span className="placeholder placeholder-xs col-6"></span>
        </p>
        <p className="placeholder-glow mb-n1">
          <span className="placeholder placeholder-xs col-6"></span>
        </p>
      </Col>
    ))}
  </Row>
)

const ElectronicsCategoriesPage = () => (
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
          Categories
        </li>
      </Breadcrumb>

      <Container as="h1" className="h3 container mb-sm-4">
        Shop categories
      </Container>

      {/* Brands */}
      <Container as="section" className="mb-4">
        <BrandsCategoriesElectronics />
      </Container>

      {/* Category cards */}
      <Container as="section">
        <Suspense fallback={<Loading />}>
          <RenderCategories />
        </Suspense>
      </Container>

      {/* Banners */}
      <Container as="section" className="pb-4 pt-5 mb-3">
        <BannersElectronics />
      </Container>

      {/* Trending products (Grid) */}
      <Container as="section" className="pb-5 mb-sm-2 mb-md-3 mb-lg-4 mb-xl-5">
        <ProductsGridElectronics
          dataSlice={[0, 8]}
          className="row-cols-lg-4"
        />
      </Container>

      {/* Subscription CTA + Vlog */}
      <SubscriptionVlogElectronics />
    </main>

    {/* Page footer */}
    <FooterElectronics />
  </>
)

export default ElectronicsCategoriesPage
