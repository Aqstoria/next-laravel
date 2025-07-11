'use client'

import { useCart } from '@/contexts/cart-context'
import Link from 'next/link'
import ShoppingCartListItem from '@/components/shop/shopping-cart-list-item'
import CreditCardInput from '@/components/forms/credit-card-input'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Cleave from 'cleave.js/react'

const CheckoutMarketplace = () => {
  const { cart, calculateTotal, removeFromCart } = useCart('marketplace')

  return (
    <Container as="section" className="pt-4 pt-md-5 pb-5 mt-sm-3 mt-md-0 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
      {cart.length > 0 ? (
        <>
          <Row>
            <Col xl={10} className="offset-xl-1">
              <h1 className="h3 pb-2 pb-md-3">Checkout</h1>
            </Col>
          </Row>
          <Row>
            {/* Cart items */}
            <Col lg={6} xl={5} className="offset-xl-1 mb-5 mb-lg-0">
              <Stack gap={4}>
                {cart.map((item) => (
                  <ShoppingCartListItem
                    key={item.id}
                    image={{ large: true, src: item.image, alt: item.title }}
                    title={item.title}
                    href={item.href}
                    price={{
                      current: item.price[0],
                      original: item.price[1],
                      decimals: false,
                    }}
                    license={item.license}
                    badge={{
                      label: item.badge?.[1] ?? '',
                      bg: item.badge?.[0] ?? '',
                    }}
                    quantity={item.quantity}
                    countInput={false}
                    removeButton={{
                      icon: 'ci-trash',
                      onClick: () => {
                        removeFromCart(item.id)
                      },
                    }}
                  />
                ))}
              </Stack>
            </Col>

            {/* Payment */}
            <Col lg={5} xl={4} className="offset-lg-1">
              <Form.Check className="fs-xl">
                <Form.Check.Input type="radio" id="card" name="payment" defaultChecked={true} />
                <Form.Check.Label htmlFor="card" className="fs-base fw-medium text-body-emphasis ps-1">
                  Pay by card
                </Form.Check.Label>
              </Form.Check>
              <p className="fs-sm">Visa, Mastercard, Maestro, Discover</p>
              <div className="position-relative mb-3">
                <i className="ci-mail position-absolute top-50 start-0 translate-middle-y ms-3" />
                <Form.Control
                  type="email"
                  className="form-icon-start rounded-pill"
                  defaultValue="example@createx.studio"
                  placeholder="Email address"
                />
              </div>
              <CreditCardInput placeholder="Enter card number" inputClassName="rounded-pill" className="mb-3" />
              <div className="d-flex gap-3">
                <Form.Control
                  as={Cleave}
                  className="w-50 rounded-pill"
                  options={{ date: true, datePattern: ['m', 'y'] }}
                  placeholder="MM/YY"
                />
                <Form.Control
                  as={Cleave}
                  className="w-50 rounded-pill"
                  maxLength={4}
                  options={{ numeral: true, numeralPositiveOnly: true, numeralThousandsGroupStyle: 'none' }}
                  placeholder="CVC"
                />
              </div>
              <Form.Check className="fs-xl mt-4">
                <Form.Check.Input type="radio" id="paypal" name="payment" />
                <Form.Check.Label htmlFor="paypal" className="fs-base fw-medium text-body-emphasis ps-1">
                  PayPal
                </Form.Check.Label>
              </Form.Check>
              <div className="d-flex align-items-center justify-content-between w-100 mt-4 mb-3">
                <span className="fs-sm">Estimated total:</span>
                <span className="h6 mb-0">${calculateTotal()}</span>
              </div>
              <Button variant="dark" size="lg" className="w-100 rounded-pill">
                Pay ${calculateTotal()}
              </Button>
              <div className="d-flex align-items-center justify-content-center fs-xs text-body-secondary mt-3">
                <i className="ci-lock me-1" />
                Your payment is secure
              </div>
            </Col>
          </Row>
        </>
      ) : (
        <div className="text-center pt-3 pt-md-4 pt-lg-5">
          <svg className="d-block mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" width="70" viewBox="0 0 29.5 30">
            <path
              className="text-body-tertiary"
              d="M17.8 4c.4 0 .8-.3.8-.8v-2c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v2c0 .4.3.8.8.8zm3.2.6c.4.2.8 0 1-.4l.4-.9c.2-.4 0-.8-.4-1s-.8 0-1 .4l-.4.9c-.2.4 0 .9.4 1zm-7.5-.4c.2.4.6.6 1 .4s.6-.6.4-1l-.4-.9c-.2-.4-.6-.6-1-.4s-.6.6-.4 1l.4.9z"
              fill="currentColor"
            ></path>
            <path
              className="text-body-emphasis"
              d="M10.7 24.5c-1.5 0-2.8 1.2-2.8 2.8S9.2 30 10.7 30s2.8-1.2 2.8-2.8-1.2-2.7-2.8-2.7zm0 4c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2 1.2.6 1.2 1.2-.5 1.2-1.2 1.2zm11.1-4c-1.5 0-2.8 1.2-2.8 2.8a2.73 2.73 0 0 0 2.8 2.8 2.73 2.73 0 0 0 2.8-2.8c0-1.6-1.3-2.8-2.8-2.8zm0 4c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2 1.2.6 1.2 1.2-.6 1.2-1.2 1.2zM8.7 18h16c.3 0 .6-.2.7-.5l4-10c.2-.5-.2-1-.7-1H9.3c-.4 0-.8.3-.8.8s.4.7.8.7h18.3l-3.4 8.5H9.3L5.5 1C5.4.7 5.1.5 4.8.5h-4c-.5 0-.8.3-.8.7s.3.8.8.8h3.4l3.7 14.6a3.24 3.24 0 0 0-2.3 3.1C5.5 21.5 7 23 8.7 23h16c.4 0 .8-.3.8-.8s-.3-.8-.8-.8h-16a1.79 1.79 0 0 1-1.8-1.8c0-1 .9-1.6 1.8-1.6z"
              fill="currentColor"
            ></path>
          </svg>
          <h5 className="mb-2">Your shopping cart is currently empty!</h5>
          <p className="mb-4">Add item(s) to the cart to proceed with your purchase.</p>
          <Link href="/shop/marketplace" className="btn btn-lg btn-dark rounded-pill">
            Continue shopping
          </Link>
        </div>
      )}
    </Container>
  )
}

export default CheckoutMarketplace
