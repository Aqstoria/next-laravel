'use client'

import React, { useState, useEffect } from 'react'
import { ProductService, type Product, type Category, type Brand } from '@/services/products'
import HeaderElectronics from '@/components/layout/header-electronics'
import FooterElectronics from '@/components/layout/footer-electronics'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Image from 'next/image'
import Link from 'next/link'

export default function BotbleIntegrationPage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [brands, setBrands] = useState<Brand[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    setLoading(true)
    setError(null)
    
    try {
      // Load featured products
      const productsResponse = await ProductService.getProducts({
        per_page: 8,
        is_featured: true
      })
      setFeaturedProducts(productsResponse.data)

      // Load categories
      const categoriesResponse = await ProductService.getCategories()
      setCategories(categoriesResponse.data)

      // Load brands
      const brandsResponse = await ProductService.getBrands()
      setBrands(brandsResponse.data)
    } catch (err: any) {
      setError(`Failed to load data: ${err.message}`)
      console.error('Error loading data:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <Container className="py-5">
        <div className="text-center py-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p className="mt-2">Loading Botble CMS data...</p>
        </div>
      </Container>
    )
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger">
          <h4>Integration Error</h4>
          <p>{error}</p>
          <Button variant="outline-danger" onClick={loadData}>
            Retry
          </Button>
        </Alert>
      </Container>
    )
  }

  return (
    <>
      {/* Navigation bar (Page header) */}
      <HeaderElectronics logoHref="/" expandedCategories />

      {/* Page content */}
      <main className="content-wrapper">
        
        {/* Hero Section */}
        <Container as="section" className="pt-5 mt-1 mt-sm-3 mt-lg-4">
          <div className="text-center mb-5">
            <h1 className="h2 mb-3">Botble CMS Integration</h1>
            <p className="lead mb-4">
              Successfully fetching products, categories, and brands from Botble CMS backend
            </p>
            <Badge bg="success" className="fs-6">API Connected</Badge>
          </div>
        </Container>

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

        {/* Featured Products */}
        <Container as="section" className="pt-5 mt-2 mt-sm-3 mt-lg-4">
          <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4">
            <h2 className="h3 mb-0">Featured Products</h2>
            <Nav className="ms-3">
              <NavLink as={Link} href="/test-products" className="animate-underline px-0 py-2">
                <span className="animate-target">View all</span>
                <i className="ci-chevron-right fs-base ms-1" />
              </NavLink>
            </Nav>
          </div>
          {featuredProducts.length > 0 ? (
            <Row xs={2} md={3} lg={4} className="g-4 pt-4">
              {featuredProducts.map((product) => (
                <Col key={product.id}>
                  <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
                    <div className="position-relative">
                      <Link href={ProductService.getProductUrl(product)} className="d-block rounded-top overflow-hidden p-3 p-sm-4">
                        {ProductService.isProductOnSale(product) && (
                          <Badge bg="danger" className="position-absolute top-0 start-0 mt-2 ms-2 mt-lg-3 ms-lg-3">
                            -{ProductService.getProductDiscountPercentage(product)}%
                          </Badge>
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
                        <button
                          type="button"
                          className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2"
                          aria-label="Add to Cart"
                          onClick={() => {
                            // Add to cart functionality would go here
                          }}
                        >
                          <i className="ci-shopping-cart fs-base animate-target" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          ) : (
            <Alert variant="info" className="mt-4">
              No featured products found. Make sure you have products marked as featured in your Botble CMS admin.
            </Alert>
          )}
        </Container>

        {/* Categories Section */}
        <Container as="section" className="pt-5 mt-2 mt-sm-3 mt-lg-4">
          <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4">
            <h2 className="h3 mb-0">Product Categories</h2>
            <Nav className="ms-3">
              <NavLink as={Link} href="/test-products" className="animate-underline px-0 py-2">
                <span className="animate-target">View all</span>
                <i className="ci-chevron-right fs-base ms-1" />
              </NavLink>
            </Nav>
          </div>
          <Row xs={2} md={3} lg={4} className="g-4 pt-4">
            {categories.map((category) => (
              <Col key={category.id}>
                <div className="product-card animate-underline hover-effect-opacity bg-body rounded text-center">
                  <div className="position-relative">
                    <Link href={`/shop/categories/${category.slug}`} className="d-block rounded-top overflow-hidden p-3 p-sm-4">
                      {category.image && (
                        <Image
                          src={category.image}
                          width={516}
                          height={480}
                          alt={category.name}
                          style={{ objectFit: 'cover' }}
                        />
                      )}
                      {!category.image && (
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '200px' }}>
                          <i className="ci-folder fs-1 text-muted" />
                        </div>
                      )}
                    </Link>
                  </div>
                  <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                    <h3 className="pb-1 mb-2">
                      <Link href={`/shop/categories/${category.slug}`} className="d-block fs-sm fw-medium text-truncate">
                        <span className="animate-target">{category.name}</span>
                      </Link>
                    </h3>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-body-secondary fs-sm">
                        {category.products_count || 0} products
                      </div>
                      {category.is_featured && (
                        <Badge bg="primary" className="fs-xs">Featured</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Brands Section */}
        <Container as="section" className="pt-5 mt-2 mt-sm-3 mt-lg-4">
          <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4">
            <h2 className="h3 mb-0">Product Brands</h2>
            <Nav className="ms-3">
              <NavLink as={Link} href="/test-products" className="animate-underline px-0 py-2">
                <span className="animate-target">View all</span>
                <i className="ci-chevron-right fs-base ms-1" />
              </NavLink>
            </Nav>
          </div>
          <Row xs={2} md={3} lg={4} className="g-4 pt-4">
            {brands.map((brand) => (
              <Col key={brand.id}>
                <div className="product-card animate-underline hover-effect-opacity bg-body rounded text-center">
                  <div className="position-relative">
                    <Link href={`/shop/brands/${brand.slug}`} className="d-block rounded-top overflow-hidden p-3 p-sm-4">
                      {brand.logo && (
                        <Image
                          src={brand.logo}
                          width={516}
                          height={480}
                          alt={brand.name}
                          style={{ objectFit: 'contain' }}
                        />
                      )}
                      {!brand.logo && (
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '200px' }}>
                          <i className="ci-star fs-1 text-muted" />
                        </div>
                      )}
                    </Link>
                  </div>
                  <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
                    <h3 className="pb-1 mb-2">
                      <Link href={`/shop/brands/${brand.slug}`} className="d-block fs-sm fw-medium text-truncate">
                        <span className="animate-target">{brand.name}</span>
                      </Link>
                    </h3>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="text-body-secondary fs-sm">
                        {brand.products_count || 0} products
                      </div>
                      {brand.is_featured && (
                        <Badge bg="primary" className="fs-xs">Featured</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Integration Status */}
        <Container as="section" className="pt-5 mt-2 mt-sm-3 mt-lg-4">
          <Card className="bg-light">
            <Card.Body>
              <h4 className="mb-4">Integration Status</h4>
              <Row>
                <Col md={4}>
                  <div className="text-center">
                    <h5 className="h3 text-primary">{featuredProducts.length}</h5>
                    <p className="text-muted mb-0">Featured Products</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="text-center">
                    <h5 className="h3 text-primary">{categories.length}</h5>
                    <p className="text-muted mb-0">Categories</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="text-center">
                    <h5 className="h3 text-primary">{brands.length}</h5>
                    <p className="text-muted mb-0">Brands</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>

        {/* Test Pages Navigation */}
        <Container as="section" className="pt-5 mt-2 mt-sm-3 mt-lg-4">
          <div className="text-center">
            <h4 className="mb-4">Test Pages</h4>
                          <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link href="/test-products">
                  <Button variant="outline-primary">
                    Test Products Page
                  </Button>
                </Link>
                <Link href="/test-order-creation">
                  <Button variant="outline-primary">
                    Test Order Creation
                  </Button>
                </Link>
              </div>
          </div>
        </Container>
      </main>

      {/* Footer */}
      <FooterElectronics />
    </>
  )
} 