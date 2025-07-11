'use client'

import { copyToClipboard } from '@/lib/clipboard'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const CouponCheckout_V1 = ({ couponCode }: { couponCode: string }) => {
  return (
    <div className="bg-success rounded px-4 py-4" style={{ '--cz-bg-opacity': 0.2 } as React.CSSProperties}>
      <div className="py-3">
        <h2 className="h4 text-center pb-2 mb-1">🎉 Congratulations! 30% off your new purchase!</h2>
        <p className="fs-sm text-center mb-4">Use the coupon now or look for it in your personal account.</p>
        <div className="d-flex gap-2 mx-auto" style={{ maxWidth: 500 }}>
          <FormControl
            type="text"
            className="border-white border-opacity-10 w-100"
            id="couponCode"
            defaultValue={couponCode}
            readOnly
          />
          <Button
            variant="dark"
            data-copy-to-clipboard={couponCode}
            data-idle-label="Copy coupon"
            data-copied-label="Copied"
            onClick={copyToClipboard}
            className="border-0 text-white bg-dark"
          >
            <i className="ci-copy fs-sm me-1" />
            Copy coupon
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CouponCheckout_V1
