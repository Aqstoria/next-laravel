import Link from 'next/link'
import Image from 'next/image'
import HeaderElectronics from '@/components/layout/header-electronics'
import HeroSliderElectronics from './hero-slider'
import SpecialOffersElectronics from './special-offers'
import SubscriptionVlogElectronics from '@/components/shop/subscription-vlog-electronics'
import FooterElectronics from '@/components/layout/footer-electronics'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import BrandsSection from '../brands/BrandsSection'
import { ProductService } from '@/services/products'
import { Product, Category, Brand } from '@/services/products'

export const revalidate = 60 // ISR: Regenerate every 60 seconds

async function fetchHomeData() {
  // Fetch all data on the server
  const [featured, trending, categoriesData, brandsData] = await Promise.all([
    ProductService.getProducts({ page: 1, per_page: 8 }),
    ProductService.getProducts({ page: 2, per_page: 8 }),
    ProductService.getCategories(),
    ProductService.getBrands(),
  ])
  return {
    featuredProducts: featured.data || [],
    trendingProducts: trending.data || [],
    categories: categoriesData.data || [],
    brands: brandsData.data || [],
  }
}

export default async function ElectronicsHomePage() {
  let featuredProducts: Product[] = []
  let trendingProducts: Product[] = []
  let categories: Category[] = []
  let brands: Brand[] = []
  let error: string | null = null

  try {
    const data = await fetchHomeData()
    featuredProducts = data.featuredProducts
    trendingProducts = data.trendingProducts
    categories = data.categories
    brands = data.brands
  } catch (e) {
    error = 'Failed to load data. Please check your connection and try again.'
  }

  // Transform categories for header component
  const transformedCategories = categories.map(category => ({
    ...category,
    href: `/shop/${category.slug}`,
    subcategories: [], // Add subcategories if needed
    parent_id: category.parent_id || 0, // Ensure parent_id is always a number
  }))

  return (
    <>
      {/* Navigation bar (Page header) */}
      <HeaderElectronics logoHref="/" expandedCategories categories={transformedCategories} />

      {/* Page content */}
      <main className="content-wrapper">
        {/* Hero slider */}
        <HeroSliderElectronics />

        {/* Features */}
        <Container as="section" className="pt-5 mt-1 mt-sm-3 mt-lg-4">
          <Row xs={2} md={4} className="g-4">
            {[
              { icon: 'ci-delivery', title: 'Free Shipping & Returns', description: 'For all orders over $199.00' },
              { icon: 'ci-credit-card', title: 'Secure Payment', description: 'We ensure secure payment' },
              { icon: 'ci-refresh-cw', title: 'Money Back Guarantee', description: 'Returning money 30 days' },
              { icon: 'ci-chat', title: '24/7 Customer Support', description: 'Friendly customer support' },
            ].map(({ icon, title, description }, index) => (
              <Col key={index}>
                <div className="d-flex flex-column flex-xxl-row align-items-center">
                  <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-4 mb-3 mb-xxl-0">
                    <i className={`${icon} fs-2 m-xxl-1`} />
                  </div>
                  <div className="text-center text-xxl-start ps-xxl-3">
                    <h3 className="h6 mb-1">{title}</h3>
                    <p className="fs-sm mb-0">{description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Categories */}
        <Container as="section" className="pt-5 mt-2 mt-sm-3 mt-lg-4">
          <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4">
            <h2 className="h3 mb-0">Shop by Category</h2>
            <Nav className="ms-3">
              <NavLink as={Link} href="/shop/electronics" className="animate-underline px-0 py-2">
                <span className="animate-target">View all</span>
                <i className="ci-chevron-right fs-base ms-1" />
              </NavLink>
            </Nav>
          </div>
          {error ? (
            <div className="text-center py-5">
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            </div>
          ) : (
            <Row xs={2} sm={3} md={4} lg={6} className="g-4 pt-4">
              {categories.slice(0, 12).map((category) => (
                <Col key={category.id}>
                  <Link href={ProductService.getCategoryUrl(category)} className="d-block text-decoration-none">
                    <div className="card border-0 bg-body rounded-4 hover-effect-opacity text-center p-4">
                      <div className="d-flex justify-content-center mb-3">
                        <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-3">
                          <i className="ci-category fs-2" />
                        </div>
                      </div>
                      <h3 className="fs-sm fw-medium mb-1">{category.name}</h3>
                      {category.products_count && (
                        <p className="fs-xs text-body-tertiary mb-0">{category.products_count} products</p>
                      )}
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          )}
        </Container>

        {/* Featured Products */}
        <Container as="section" className="pt-5 mt-1 mt-sm-2 mt-md-3 mt-lg-4">
          <h2 className="h3 pb-2 pb-sm-3">Featured Products</h2>
          <Row>
            {/* Banner */}
            <Col lg={4} data-bs-theme="dark">
              <div
                className="d-flex flex-column align-items-center justify-content-end h-100 text-center overflow-hidden rounded-5 px-4 px-lg-3 pt-4 pb-5"
                style={{ backgroundColor: '#1d2c41' }}
              >
                <Image
                  fill
                  src="/img/home/electronics/banner/background.jpg"
                  sizes="832px"
                  className="object-fit-cover"
                  alt="Background"
                />
                <div
                  className="w-100 animate-up-down position-relative z-2 me-lg-4"
                  style={{ maxWidth: 320, marginBottom: '-19%' }}
                >
                  <Image src="/img/home/electronics/banner/laptop.png" width={640} height={690} alt="Laptop" />
                </div>
                <div className="position-relative z-1">
                  <h3 className="display-2 mb-2">MacBook</h3>
                  <p className="text-body fw-medium mb-4">Be Pro Anywhere</p>
                  <Link href="/shop/electronics/product?slug=macbook-pro" className="btn btn-sm btn-primary">
                    From $1,199
                    <i className="ci-arrow-up-right fs-base ms-1 me-n1" />
                  </Link>
                </div>
              </div>
            </Col>

            {/* Product list */}
            <Col sm={6} lg={4} className="pt-4 py-lg-4">
              <div className="ps-xl-3">
                {featuredProducts.length === 0 ? (
                  <div className="text-center py-4">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  featuredProducts.slice(0, 4).map((product) => (
                    <div key={product.id} className="product-card animate-underline hover-effect-opacity bg-body rounded mb-3">
                      <div className="position-relative">
                        <Link href={ProductService.getProductUrl(product)} className="d-block rounded-top overflow-hidden p-3 p-sm-4">
                          {ProductService.isProductOnSale(product) && (
                            <div className="position-absolute top-0 start-0 mt-2 ms-2 mt-lg-3 ms-lg-3">
                              <span className="badge bg-danger">-{ProductService.getProductDiscountPercentage(product)}%</span>
                            </div>
                          )}
                          <Image
                            src={ProductService.getProductImage(product)}
                            width={516}
                            height={480}
                            alt={product.name}
                          />
                        </Link>
                      </div>
                      <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                        <h3 className="pb-1 mb-2">
                          <Link href={ProductService.getProductUrl(product)} className="d-block fs-sm fw-medium text-truncate">
                            <span className="animate-target">{product.name}</span>
                          </Link>
                        </h3>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="h5 lh-1 mb-0">
                            ${ProductService.getProductPrice(product).toFixed(2)}
                            {ProductService.isProductOnSale(product) && (
                              <del className="text-body-tertiary fs-sm fw-normal ms-2">
                                ${ProductService.getProductOriginalPrice(product).toFixed(2)}
                              </del>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </Col>

            {/* Product list */}
            <Col sm={6} lg={4} className="pt-4 py-lg-4">
              <div className="ps-xl-3">
                {featuredProducts.length === 0 ? (
                  <div className="text-center py-4">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  featuredProducts.slice(4, 8).map((product) => (
                    <div key={product.id} className="product-card animate-underline hover-effect-opacity bg-body rounded mb-3">
                      <div className="position-relative">
                        <Link href={ProductService.getProductUrl(product)} className="d-block rounded-top overflow-hidden p-3 p-sm-4">
                          {ProductService.isProductOnSale(product) && (
                            <div className="position-absolute top-0 start-0 mt-2 ms-2 mt-lg-3 ms-lg-3">
                              <span className="badge bg-danger">-{ProductService.getProductDiscountPercentage(product)}%</span>
                            </div>
                          )}
                          <Image
                            src={ProductService.getProductImage(product)}
                            width={516}
                            height={480}
                            alt={product.name}
                          />
                        </Link>
                      </div>
                      <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                        <h3 className="pb-1 mb-2">
                          <Link href={ProductService.getProductUrl(product)} className="d-block fs-sm fw-medium text-truncate">
                            <span className="animate-target">{product.name}</span>
                          </Link>
                        </h3>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="h5 lh-1 mb-0">
                            ${ProductService.getProductPrice(product).toFixed(2)}
                            {ProductService.isProductOnSale(product) && (
                              <del className="text-body-tertiary fs-sm fw-normal ms-2">
                                ${ProductService.getProductOriginalPrice(product).toFixed(2)}
                              </del>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </Col>
          </Row>
        </Container>

        {/* Trending products grid */}
        <Container as="section" className="pt-5 mt-2 mt-sm-3 mt-lg-4">
          <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4">
            <h2 className="h3 mb-0">Trending products</h2>
            <Nav className="ms-3">
              <NavLink as={Link} href="/shop/electronics" className="animate-underline px-0 py-2">
                <span className="animate-target">View all</span>
                <i className="ci-chevron-right fs-base ms-1" />
              </NavLink>
            </Nav>
          </div>
          {trendingProducts.length === 0 ? (
            <div className="text-center py-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <Row xs={2} md={3} lg={4} className="g-4 pt-4">
              {trendingProducts.map((product) => (
                <Col key={product.id}>
                  <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                    <div className="position-relative">
                      <Link href={ProductService.getProductUrl(product)} className="d-block rounded-top overflow-hidden p-3 p-sm-4">
                        {ProductService.isProductOnSale(product) && (
                          <div className="position-absolute top-0 start-0 mt-2 ms-2 mt-lg-3 ms-lg-3">
                            <span className="badge bg-danger">-{ProductService.getProductDiscountPercentage(product)}%</span>
                          </div>
                        )}
                        <Image
                          src={ProductService.getProductImage(product)}
                          width={516}
                          height={480}
                          alt={product.name}
                        />
                      </Link>
                    </div>
                    <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                      <h3 className="pb-1 mb-2">
                        <Link href={ProductService.getProductUrl(product)} className="d-block fs-sm fw-medium text-truncate">
                          <span className="animate-target">{product.name}</span>
                        </Link>
                      </h3>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="h5 lh-1 mb-0">
                          ${ProductService.getProductPrice(product).toFixed(2)}
                          {ProductService.isProductOnSale(product) && (
                            <del className="text-body-tertiary fs-sm fw-normal ms-2">
                              ${ProductService.getProductOriginalPrice(product).toFixed(2)}
                            </del>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </Container>

        {/* Sale banner (CTA) */}
        <Container as="section" className="pt-5 mt-sm-2 mt-md-3 mt-lg-4">
          <Row className="g-0">
            <Col md={3} className="mb-n4 mb-md-0">
              <div className="position-relative d-flex flex-column align-items-center justify-content-center h-100 py-5">
                <div className="position-absolute top-0 start-0 w-100 h-100 d-none d-md-block">
                  <span
                    className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark"
                    style={{ backgroundColor: '#accbee' }}
                  />
                  <span
                    className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark"
                    style={{ backgroundColor: '#1b273a' }}
                  />
                </div>
                <div className="position-absolute top-0 start-0 w-100 h-100 d-md-none">
                  <span
                    className="position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none-dark"
                    style={{ background: 'linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)' }}
                  />
                  <span
                    className="position-absolute top-0 start-0 w-100 h-100 rounded-top-5 d-none d-block-dark"
                    style={{ background: 'linear-gradient(90deg, #1b273a 0%, #1f2632 100%)' }}
                  />
                </div>
                <div className="position-relative z-1 display-1 text-dark-emphasis text-nowrap mb-0">
                  20
                  <span className="d-inline-block ms-1">
                    <span className="d-block fs-1">%</span>
                    <span className="d-block fs-5">OFF</span>
                  </span>
                </div>
              </div>
            </Col>
            <Col md={9} className="position-relative">
              <div
                className="position-absolute top-0 start-0 h-100 overflow-hidden rounded-pill z-2 d-none d-md-block"
                style={{ color: 'var(--cz-body-bg)', marginLeft: -2 }}
              >
                <svg width="4" height="436" viewBox="0 0 4 436" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 0L1.99998 436"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="8 12"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="position-relative">
                <span
                  className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip"
                  style={{ background: 'linear-gradient(90deg, #accbee 0%, #e7f0fd 100%)' }}
                />
                <span
                  className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip"
                  style={{ background: 'linear-gradient(90deg, #1b273a 0%, #1f2632 100%)' }}
                />
                <Row className="align-items-center position-relative z-2">
                  <Col md={6} className="mb-3 mb-md-0">
                    <div className="text-center text-md-start py-md-5 px-4 ps-md-5 pe-md-0 me-md-n5">
                      <h3 className="text-uppercase fw-bold ps-xxl-3 pb-2 mb-1">Seasonal weekly sale 2025</h3>
                      <p className="text-body-emphasis ps-xxl-3 mb-0">
                        Use code{' '}
                        <span className="d-inline-block fw-semibold bg-white text-dark rounded-pill py-1 px-2">
                          Sale 2025
                        </span>{' '}
                        to get best offer
                      </p>
                    </div>
                  </Col>
                  <Col md={6} className="text-center text-md-end">
                    <Link href="/shop/electronics" className="btn btn-primary btn-lg">
                      Shop Now
                      <i className="ci-arrow-right fs-base ms-2" />
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Special offers */}
        <SpecialOffersElectronics />

        {/* Subscription & Vlog */}
        <SubscriptionVlogElectronics />

        {/* Popular Brands */}
        <Container as="section" className="pt-5 mt-2 mt-sm-3 mt-lg-4">
          <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4">
            <h2 className="h3 mb-0">Popular Brands</h2>
            <Nav className="ms-3">
              <NavLink as={Link} href="/brands" className="animate-underline px-0 py-2">
                <span className="animate-target">View all</span>
                <i className="ci-chevron-right fs-base ms-1" />
              </NavLink>
            </Nav>
          </div>
          {brands.length === 0 ? (
            <div className="text-center py-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <Row xs={2} sm={3} md={4} lg={6} className="g-4 pt-4">
              {brands.slice(0, 12).map((brand) => (
                <Col key={brand.id}>
                  <Link href={ProductService.getBrandUrl(brand)} className="d-block text-decoration-none">
                    <div className="card border-0 bg-body rounded-4 hover-effect-opacity text-center p-4">
                      <div className="d-flex justify-content-center mb-3">
                        {brand.logo ? (
                          <Image
                            src={brand.logo}
                            width={80}
                            height={40}
                            alt={brand.name}
                            className="img-fluid"
                          />
                        ) : (
                          <div className="d-flex text-dark-emphasis bg-body-tertiary rounded-circle p-3">
                            <i className="ci-brand fs-2" />
                          </div>
                        )}
                      </div>
                      <h3 className="fs-sm fw-medium mb-1">{brand.name}</h3>
                      {brand.products_count && (
                        <p className="fs-xs text-body-tertiary mb-0">{brand.products_count} products</p>
                      )}
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          )}
        </Container>

        {/* Brands section */}
        <BrandsSection />

        {/* Footer */}
        <FooterElectronics />
      </main>
    </>
  )
}
