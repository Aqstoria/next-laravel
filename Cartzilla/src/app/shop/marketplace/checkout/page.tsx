import type { Metadata } from 'next'
import HeaderMarketplace from '@/components/layout/header-marketplace'
import CheckoutMarketplace from './checkout'
import FooterMarketplace from '@/components/layout/footer-marketplace'

export const metadata: Metadata = {
  title: 'Cartzilla | Marketplace - Checkout',
}

const MarketplaceCheckoutPage = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderMarketplace />

    {/* Page content */}
    <main className="content-wrapper">
      <CheckoutMarketplace />
    </main>

    {/* Page footer */}
    <FooterMarketplace />
  </>
)

export default MarketplaceCheckoutPage
