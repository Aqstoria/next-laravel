import type { Metadata } from 'next'
import Link from 'next/link'
import HeaderElectronics from '@/components/layout/header-electronics'
import DeliveryCheckout_V1 from './delivery'
import FooterElectronics from '@/components/layout/footer-electronics'

export const metadata: Metadata = {
  title: 'Cartzilla | Checkout v.1 - Delivery Info Step 2',
}

const Checkout_V1_Delivery2Page = () => (
  <>
    {/* Navigation bar (Page header) */}
    <HeaderElectronics />

    {/* Page content */}
    <main className="content-wrapper">
      <DeliveryCheckout_V1 />
    </main>

    {/* Page footer */}
    <FooterElectronics />

    {/* Fixed positioned pay button that is visible on screens < 992px wide (lg breakpoint) */}
    <div className="fixed-bottom z-sticky w-100 py-2 px-3 bg-body border-top shadow d-lg-none">
      <Link href="./shipping" className="btn btn-lg btn-primary w-100">
        Continue
        <i className="ci-chevron-right fs-lg ms-1 me-n1" />
      </Link>
    </div>
  </>
)

export default Checkout_V1_Delivery2Page
