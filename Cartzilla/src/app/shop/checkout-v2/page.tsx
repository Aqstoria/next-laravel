import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderGrocery from '@/components/layout/header-grocery'
import CartCheckout_V2 from './shopping-cart'
import FooterGrocery from '@/components/layout/footer-grocery'
import Container from 'react-bootstrap/Container'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

export const metadata: Metadata = {
  title: 'Cartzilla | Checkout v.2 - Shopping Cart',
}

const Checkout_V2_CartPage = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderGrocery featuredCategories={false} />

    {/* Page content */}
    <main className="content-wrapper">
      {/* Breadcrumb */}
      <Breadcrumb as={Container} className="pt-1 pt-md-0 my-3 my-md-4">
        <li className="breadcrumb-item">
          <Link href="/home/grocery">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link href="/shop/grocery">Shop</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Cart
        </li>
      </Breadcrumb>

      {/* Items in the cart + Order summary */}
      <CartCheckout_V2 />
    </main>

    {/* Page footer */}
    <FooterGrocery />
  </>
)

export default Checkout_V2_CartPage
