'use client'

import type { CommonComponentProps } from '@/types/common-component-props'
import { useCart } from '@/contexts/cart-context'
import { useOffcanvas } from '@/contexts/offcanvas-context'
import Link from 'next/link'
import Image from 'next/image'
import Nav from 'react-bootstrap/Nav'
import Offcanvas from 'react-bootstrap/Offcanvas'

interface OrderSummarySidebarProps extends CommonComponentProps {
  cartSlug: string
  editCartUrl: string
  tax?: number
  shipping?: number | string
  currencySymbol?: string
}

const OrderSummarySidebar = ({
  cartSlug,
  editCartUrl,
  tax,
  shipping,
  currencySymbol,
  ...props
}: OrderSummarySidebarProps) => {
  const { cart, calculateTotal, calculateTotalDiscount } = useCart(cartSlug)
  const { openOffcanvas, closeOffcanvas, isOpen } = useOffcanvas()

  const currency = currencySymbol || '$'
  const cartCounter = cart.map((item) => item.quantity).reduce((a, b) => a + b, 0)
  const cartSubtotal = calculateTotalDiscount() + calculateTotal()
  const cartTotal = calculateTotal() + (tax ?? 0) + (typeof shipping === 'number' ? shipping : 0)

  return (
    <>
      <div {...props}>
        <div className="bg-body-tertiary rounded-5 p-4 mb-3">
          <div className="p-sm-2 p-lg-0 p-xl-2">
            <div className="border-bottom pb-4 mb-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h5 className="mb-0">Order summary</h5>
                <Nav>
                  <Nav.Link as={Link} href={editCartUrl} className="text-decoration-underline p-0">
                    Edit
                  </Nav.Link>
                </Nav>
              </div>
              <div
                className="d-flex align-items-center gap-2 text-decoration-none cursor-pointer"
                onClick={() => openOffcanvas('orderDetails')}
              >
                {cart.map((item) => (
                  <div key={item.id} className="ratio ratio-1x1" style={{ maxWidth: 64 }}>
                    <div className="p-1">
                      <Image src={item.image} width={112} height={112} alt={item.title} />
                    </div>
                  </div>
                ))}
                <i className="ci-chevron-right text-body fs-xl p-0 ms-auto" />
              </div>
            </div>
            <ul className="list-unstyled fs-sm gap-3 mb-0">
              <li className="d-flex justify-content-between">
                Subtotal ({cartCounter} items):
                <span className="text-dark-emphasis fw-medium ms-1">
                  {currency}
                  {cartSubtotal.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </li>
              {calculateTotalDiscount() > 0 && (
                <li className="d-flex justify-content-between">
                  Saving:
                  <span className="text-danger fw-medium ms-1">
                    -{currency}
                    {calculateTotalDiscount().toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </li>
              )}
              {tax && (
                <li className="d-flex justify-content-between">
                  Tax collected:
                  <span className="text-dark-emphasis fw-medium ms-1">
                    {currency}
                    {tax.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </li>
              )}
              {shipping !== undefined && (
                <li className="d-flex justify-content-between">
                  Shipping:
                  <span className="text-dark-emphasis fw-medium ms-1">
                    {typeof shipping === 'string' ? (
                      shipping
                    ) : shipping === 0 ? (
                      'Free'
                    ) : (
                      <>
                        {currency}
                        {shipping.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </>
                    )}
                  </span>
                </li>
              )}
            </ul>
            <div className="border-top pt-4 mt-4">
              <div className="d-flex justify-content-between mb-3">
                <span className="fs-sm">Estimated total:</span>
                <span className="h5 mb-0">
                  {currency}
                  {cartTotal.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-body-tertiary rounded-5 p-4">
          <div className="d-flex align-items-center px-sm-2 px-lg-0 px-xl-2">
            <svg
              className="text-warning flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path d="M1.333 9.667H7.5V16h-5c-.64 0-1.167-.527-1.167-1.167V9.667zm13.334 0v5.167c0 .64-.527 1.167-1.167 1.167h-5V9.667h6.167zM0 5.833V7.5c0 .64.527 1.167 1.167 1.167h.167H7.5v-1-3H1.167C.527 4.667 0 5.193 0 5.833zm14.833-1.166H8.5v3 1h6.167.167C15.473 8.667 16 8.14 16 7.5V5.833c0-.64-.527-1.167-1.167-1.167z"></path>
              <path d="M8 5.363a.5.5 0 0 1-.495-.573C7.752 3.123 9.054-.03 12.219-.03c1.807.001 2.447.977 2.447 1.813 0 1.486-2.069 3.58-6.667 3.58zM12.219.971c-2.388 0-3.295 2.27-3.595 3.377 1.884-.088 3.072-.565 3.756-.971.949-.563 1.287-1.193 1.287-1.595 0-.599-.747-.811-1.447-.811z"></path>
              <path d="M8.001 5.363c-4.598 0-6.667-2.094-6.667-3.58 0-.836.641-1.812 2.448-1.812 3.165 0 4.467 3.153 4.713 4.819a.5.5 0 0 1-.495.573zM3.782.971c-.7 0-1.448.213-1.448.812 0 .851 1.489 2.403 5.042 2.566C7.076 3.241 6.169.971 3.782.971z"></path>
            </svg>
            <div className="text-dark-emphasis fs-sm ps-2 ms-1">
              Congratulations! You have earned <span className="fw-semibold">{Math.floor(cartTotal / 10)} bonuses</span>
            </div>
          </div>
        </div>
      </div>

      {/* Order details offcanvas */}
      <Offcanvas
        show={isOpen('orderDetails')}
        onHide={() => closeOffcanvas('orderDetails')}
        placement="end"
        className="pb-sm-2 px-sm-2"
        style={{ width: 500 }}
        aria-labelledby="orderDetailsLabel"
      >
        <Offcanvas.Header closeButton className="py-3 pt-lg-4">
          <Offcanvas.Title as="h4" id="orderDetailsLabel">
            Login to continue
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column gap-3 py-2">
          {cart.map((item) => (
            <div key={item.id} className="d-flex align-items-center">
              <Link href={item.href} className="flex-shrink-0" style={{ width: 110 }}>
                <Image src={item.image} width={220} height={220} alt={item.title} />
              </Link>
              <div className="w-100 min-w-0 ps-2 ps-sm-3">
                <h5 className="d-flex animate-underline mb-2">
                  <Link href={item.href} className="d-block fs-sm fw-medium text-truncate animate-target">
                    {item.title}
                  </Link>
                </h5>
                <div className="h6 mb-0">
                  {currency}
                  {item.price[0].toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{' '}
                  {item.price[1] && (
                    <del className="text-body-tertiary fs-xs fw-normal">
                      {currency}
                      {item.price[1].toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </del>
                  )}
                </div>
                <div className="fs-xs pt-2">Qty: {item.quantity}</div>
              </div>
            </div>
          ))}
        </Offcanvas.Body>
        <Offcanvas.Header>
          <Link
            href={editCartUrl}
            className="btn btn-lg btn-outline-secondary w-100"
            onClick={() => closeOffcanvas('orderDetails')}
          >
            Edit cart
          </Link>
        </Offcanvas.Header>
      </Offcanvas>
    </>
  )
}

export default OrderSummarySidebar
