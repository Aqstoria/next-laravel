'use client'

import React, { useState, useEffect } from 'react'
import { ProductService, type Product, type Category, type Brand } from '@/services/products'
import { useCart } from '@/contexts/cart-context'
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
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Pagination from 'react-bootstrap/Pagination'
import Image from 'next/image'
import Link from 'next/link'

export default function TestProductsPage() {
  const { addToCart } = useCart('electronics')
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [brands, setBrands] = useState<Brand[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedBrand, setSelectedBrand] = useState<string>('')
  const [sortBy, setSortBy] = useState<string>('')

  const loadProducts = async (page: number = 1) => {
    setLoading(true)
    setError(null)
    try {
      const params: any = {
        page,
        per_page: 12,
      }

      if (searchTerm) params.search = searchTerm
      if (selectedCategory) params.category = selectedCategory
      if (selectedBrand) params.brand = selectedBrand
      if (sortBy) params.sort = sortBy

      const response = await ProductService.getProducts(params)
      setProducts(response.data)
      setTotalPages(response.meta.last_page)
      setCurrentPage(response.meta.current_page)
    } catch (err: any) {
      setError(`Failed to load products: ${err.message}`)
      console.error('Error loading products:', err)
    } finally {
      setLoading(false)
    }
  }

  const loadCategories = async () => {
    try {
      const response = await ProductService.getCategories()
      setCategories(response.data)
    } catch (err: any) {
      console.error('Error loading categories:', err)
    }
  }

  const loadBrands = async () => {
    try {
      const response = await ProductService.getBrands()
      setBrands(response.data)
    } catch (err: any) {
      console.error('Error loading brands:', err)
    }
  }

  useEffect(() => {
    loadProducts()
    loadCategories()
    loadBrands()
  }, [])

  useEffect(() => {
    loadProducts(1)
  }, [searchTerm, selectedCategory, selectedBrand, sortBy])

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id.toString(),
      image: ProductService.getProductImage(product),
      title: product.name,
      href: ProductService.getProductUrl(product),
      price: [ProductService.getProductPrice(product), ProductService.getProductOriginalPrice(product)],
      quantity: 1,
    })
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    loadProducts(page)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    loadProducts(1)
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('')
    setSelectedBrand('')
    setSortBy('')
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
            <h1 className="h2 mb-3">Botble CMS Products Test</h1>
            <p className="lead mb-4">
              Test fetching products, categories, and brands from the Botble CMS backend API
            </p>
            <Badge bg="info" className="fs-6">API Integration</Badge>
          </div>
        </Container>

        {/* Filters */}
        <Container as="section" className="pt-5 mt-1 mt-sm-3 mt-lg-4">
          <Card>
            <Card.Header>
              <h5 className="mb-0">Filters & Search</h5>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSearch}>
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Search Products</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type="text"
                          placeholder="Search products..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button variant="outline-secondary" type="submit">
                          Search
                        </Button>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Category</Form.Label>
                      <Form.Select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                      >
                        <option value="">All Categories</option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.slug}>
                            {category.name} ({category.products_count || 0})
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group className="mb-3">
                      <Form.Label>Brand</Form.Label>
                      <Form.Select
                        value={selectedBrand}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                      >
                        <option value="">All Brands</option>
                        {brands.map((brand) => (
                          <option key={brand.id} value={brand.slug}>
                            {brand.name} ({brand.products_count || 0})
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={2}>
                    <Form.Group className="mb-3">
                      <Form.Label>Sort By</Form.Label>
                      <Form.Select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                      >
                        <option value="">Default</option>
                        <option value="price_asc">Price: Low to High</option>
                        <option value="price_desc">Price: High to Low</option>
                        <option value="name_asc">Name: A to Z</option>
                        <option value="name_desc">Name: Z to A</option>
                        <option value="created_desc">Newest First</option>
                        <option value="created_asc">Oldest First</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="outline-secondary" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>

        {/* Error Display */}
        {error && (
          <Container as="section" className="pt-3">
            <Alert variant="danger">
              {error}
            </Alert>
          </Container>
        )}

        {/* Loading Spinner */}
        {loading && (
          <Container as="section" className="pt-5">
            <div className="text-center py-5">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <p className="mt-2">Loading products from Botble CMS...</p>
            </div>
          </Container>
        )}

        {/* Products Grid */}
        {!loading && products.length > 0 && (
          <Container as="section" className="pt-5 mt-2 mt-sm-3 mt-lg-4">
            <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4">
              <h2 className="h3 mb-0">Products ({products.length})</h2>
            </div>
            <Row xs={2} md={3} lg={4} className="g-4 pt-4">
              {products.map((product) => (
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
                          onClick={() => handleAddToCart(product)}
                          disabled={!ProductService.canAddToCart(product)}
                        >
                          <i className="ci-shopping-cart fs-base animate-target" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-5">
                <Pagination>
                  <Pagination.First 
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                  />
                  <Pagination.Prev 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  />
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const page = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i
                    return (
                      <Pagination.Item
                        key={page}
                        active={page === currentPage}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </Pagination.Item>
                    )
                  })}
                  
                  <Pagination.Next 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  />
                  <Pagination.Last 
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                  />
                </Pagination>
              </div>
            )}
          </Container>
        )}

        {/* No Products */}
        {!loading && products.length === 0 && !error && (
          <Container as="section" className="pt-5">
            <Alert variant="warning">
              No products found. Try adjusting your filters or search terms.
            </Alert>
          </Container>
        )}

        {/* Categories and Brands Info */}
        <Container as="section" className="pt-5 mt-2 mt-sm-3 mt-lg-4">
          <div className="d-flex align-items-center justify-content-between border-bottom pb-3 pb-md-4">
            <h2 className="h3 mb-0">Categories & Brands</h2>
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
      </main>

      {/* Footer */}
      <FooterElectronics />
    </>
  )
} 