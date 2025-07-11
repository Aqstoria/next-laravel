import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderElectronics from '@/components/layout/header-electronics'
import CartCheckout_V1 from './shopping-cart'
import ProductsCarouselElectronics from '@/components/shop/products-carousel-electronics'
import SubscriptionVlogElectronics from '@/components/shop/subscription-vlog-electronics'
import FooterElectronics from '@/components/layout/footer-electronics'
import Container from 'react-bootstrap/Container'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

export const metadata: Metadata = {
  title: 'Cartzilla | Checkout v.1 - Shopping Cart',
}

const Checkout_V1_CartPage = () => (
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
        <li className="breadcrumb-item active" aria-current="page">
          Cart
        </li>
      </Breadcrumb>

      {/* Items in the cart + Order summary */}
      <CartCheckout_V1 />

      {/* Trending products (Carousel) */}
      <Container as="section" className="pb-4 pb-md-5 mb-2 mb-sm-0 mb-lg-2 mb-xl-4">
        <h2 className="h3 border-bottom pb-4 mb-0">Trending products</h2>
        <ProductsCarouselElectronics />
      </Container>

      {/* Subscription CTA + Vlog */}
      <SubscriptionVlogElectronics />
    </main>

    {/* Page footer */}
    <FooterElectronics />
  </>
)

export default Checkout_V1_CartPage
