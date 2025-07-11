import { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import HeaderElectronics from '@/components/layout/header-electronics'
import ProductTabsElectronics from './product-tabs'
import ProductsCarouselElectronics from '@/components/shop/products-carousel-electronics'
import SubscriptionVlogElectronics from '@/components/shop/subscription-vlog-electronics'
import FooterElectronics from '@/components/layout/footer-electronics'
import Container from 'react-bootstrap/Container'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { ProductService } from '@/services/products'

// ISR Configuration
export const revalidate = 3600 // Revalidate every hour
export const dynamic = 'force-static' // Force static generation

interface ProductPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

// Generate static params for popular products
export async function generateStaticParams() {
  try {
    const products = await ProductService.getProducts({ per_page: 50 })
    return products.data.map((product) => ({
      slug: product.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

// Generate metadata for SEO
export async function generateMetadata({ searchParams }: ProductPageProps): Promise<Metadata> {
  const params = await searchParams
  const productSlug = params.slug as string
  
  if (!productSlug) {
    return {
      title: 'Product Not Found | Cartzilla',
    }
  }

  try {
    const product = await ProductService.getProduct(productSlug)
    
    if (!product) {
      return {
        title: 'Product Not Found | Cartzilla',
      }
    }

    return {
      title: `${product.name} | Cartzilla Electronics`,
      description: product.description || `Shop ${product.name} at Cartzilla Electronics`,
      openGraph: {
        title: product.name,
        description: product.description,
        images: product.images ? [product.images[0]] : [],
      },
    }
  } catch (error) {
    return {
      title: 'Product Not Found | Cartzilla',
    }
  }
}

const ElectronicsProductPage = async ({ searchParams }: ProductPageProps) => {
  // Get product slug from URL params
  const params = await searchParams
  const productSlug = params.slug as string
  
  let product = null
  
  if (productSlug) {
    try {
      product = await ProductService.getProduct(productSlug)
      console.log('Fetched product:', product)
      console.log('Product ID:', product?.id)
      console.log('Product ID type:', typeof product?.id)
    } catch (error) {
      console.error('Error fetching product:', error)
      notFound()
    }
  }

  // If no product found or product has no id, show 404
  if (!product || !product.id) {
    console.error('Product not found or invalid:', product)
    notFound()
  }

  return (
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
          <li className="breadcrumb-item">
            <Link href="/shop/electronics">Shop</Link>
          </li>
          {product.categories && product.categories.length > 0 && product.categories[0] && (
            <li className="breadcrumb-item">
              <Link href={ProductService.getCategoryUrl(product.categories[0])}>
                {product.categories[0].name}
              </Link>
            </li>
          )}
          <li className="breadcrumb-item active" aria-current="page">
            {product.name || 'Product'}
          </li>
        </Breadcrumb>

        <Suspense>
          <ProductTabsElectronics product={product} />
        </Suspense>

        {/* Viewed products (Carousel) */}
        <Container as="section" className="pb-4 pb-md-5 mb-2 mb-sm-0 mb-lg-2 mb-xl-4">
          <h2 className="h3 border-bottom pb-4 mb-0">Related products</h2>
          <ProductsCarouselElectronics id="viewedProducts" />
        </Container>

        {/* Subscription CTA + Vlog */}
        <SubscriptionVlogElectronics />
      </main>

      {/* Page footer */}
      <FooterElectronics />
    </>
  )
}

export default ElectronicsProductPage
