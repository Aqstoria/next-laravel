import type { Metadata } from 'next'
import PaymentMethods from './payment-methods'

export const metadata: Metadata = {
  title: 'Cartzilla | Account - Payment Methods',
}

const ShopAccountPaymentPage = () => (
  <>
    <h1 className="h2 pb-2 pb-md-3">Payment methods</h1>
    <PaymentMethods />
  </>
)

export default ShopAccountPaymentPage
