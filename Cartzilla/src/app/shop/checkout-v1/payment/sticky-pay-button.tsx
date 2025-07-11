'use client'

import { useCart } from '@/contexts/cart-context'
import Link from 'next/link'

const StickyPayButtonCheckout_V1 = ({ tax, shipping }: { tax: number; shipping: number | string }) => {
  const { calculateTotal } = useCart('electronics')
  const cartTotal = calculateTotal() + (tax ?? 0) + (typeof shipping === 'number' ? shipping : 0)

  return (
    <div className="fixed-bottom z-sticky w-100 py-2 px-3 bg-body border-top shadow d-lg-none">
      <Link href="./thank-you" className="btn btn-lg btn-primary w-100">
        Pay $
        {cartTotal.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Link>
    </div>
  )
}

export default StickyPayButtonCheckout_V1
