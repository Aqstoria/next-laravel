'use client'

import { useState, type FormEvent } from 'react'
import { useCart } from '@/contexts/cart-context'
import { useOffcanvas } from '@/contexts/offcanvas-context'
import Link from 'next/link'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Offcanvas from 'react-bootstrap/Offcanvas'
import CloseButton from 'react-bootstrap/CloseButton'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Table from 'react-bootstrap/Table'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Badge from 'react-bootstrap/Badge'
import CountInput from '@/components/forms/count-input'
import LoginForm from '@/components/forms/login-form'
import RegistrationForm from '@/components/forms/registration-form'

const CartCheckout_V1 = () => {
  const { cart, calculateTotal, calculateTotalDiscount, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart('electronics')
  const { openOffcanvas, closeOffcanvas, isOpen } = useOffcanvas()
  const [validated, setValidated] = useState(false)

  // Form validation
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  // Cart numbers
  const cartCounter = cart.map((item) => item.quantity).reduce((a, b) => a + b, 0)
  const cartSubtotal = calculateTotalDiscount() + calculateTotal()
  const cartTax = 73.4

  return (
    <>
      <Container as="section" className="pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
        {cart.length > 0 ? (
          <>
            <h1 className="h3 mb-4">Shopping cart</h1>
            <Row>
              {/* Items list */}
              <Col lg={8}>
                <div className="pe-lg-2 pe-xl-3 me-xl-3">
                  {calculateTotal() >= 3000 ? (
                    <div className="alert alert-success py-2 fs-sm mb-0">
                      <div className="text-body-emphasis fw-medium py-1">
                        🎉 Congratulations! You qualify for Free Shipping!
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="fs-sm">
                        Buy{' '}
                        <span className="text-dark-emphasis fw-semibold">
                          $
                          {(3000 - calculateTotal()).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>{' '}
                        more to get <span className="text-dark-emphasis fw-semibold">Free Shipping</span>.
                      </p>
                      <div
                        className="progress w-100 overflow-visible mb-4"
                        role="progressbar"
                        aria-label="Free shipping progress"
                        aria-valuenow={(calculateTotal() / 3000) * 100}
                        style={{ height: 4 }}
                      >
                        <div
                          className="progress-bar bg-warning rounded-pill position-relative overflow-visible"
                          style={{ width: `${(calculateTotal() / 3000) * 100}%`, height: 4 }}
                        >
                          <div
                            className="position-absolute top-50 end-0 d-flex align-items-center justify-content-center translate-middle-y bg-body border border-warning rounded-circle me-n1"
                            style={{ width: '1.5rem', height: '1.5rem' }}
                          >
                            <i className="ci-star-filled text-warning" />
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Table of items */}
                  <Table>
                    <thead>
                      <tr>
                        <th scope="col" className="fs-sm fw-normal py-3 ps-0">
                          <span className="text-body">Product</span>
                        </th>
                        <th scope="col" className="text-body fs-sm fw-normal py-3 d-none d-xl-table-cell">
                          <span className="text-body">Price</span>
                        </th>
                        <th scope="col" className="text-body fs-sm fw-normal py-3 d-none d-md-table-cell">
                          <span className="text-body">Quantity</span>
                        </th>
                        <th scope="col" className="text-body fs-sm fw-normal py-3 d-none d-md-table-cell">
                          <span className="text-body">Total</span>
                        </th>
                        <th scope="col" className="py-0 px-0" />
                      </tr>
                    </thead>
                    <tbody className="align-middle">
                      {cart.map((item) => (
                        <tr key={item.id}>
                          <td className="py-3 ps-0">
                            <div className="d-flex align-items-center">
                              <Link href={item.href} className="position-relative flex-shrink-0" style={{ width: 110 }}>
                                {item.badge && (
                                  <Badge bg={item.badge[0]} className="text-bg-danger position-absolute top-0 start-0">
                                    {item.badge[1]}
                                  </Badge>
                                )}
                                <Image src={item.image} width={220} height={220} alt={item.title} />
                              </Link>
                              <div className="w-100 min-w-0 ps-2 ps-xl-3">
                                <h5 className="d-flex animate-underline mb-2">
                                  <Link
                                    href={item.href}
                                    className="d-block fs-sm fw-medium text-truncate animate-target"
                                  >
                                    {item.title}
                                  </Link>
                                </h5>
                                <ul className="list-unstyled gap-1 fs-xs mb-0">
                                  {Object.entries(item.specs as Record<string, string>)
                                    .slice(0, 2)
                                    .map(([key, value], index) => (
                                      <li key={index}>
                                        <span className="text-body-secondary">{key}:</span>{' '}
                                        <span className="text-dark-emphasis fw-medium">{value}</span>
                                      </li>
                                    ))}
                                  <li className="d-xl-none">
                                    <span className="text-body-secondary">Price:</span>{' '}
                                    <span className="text-dark-emphasis fw-medium">
                                      $
                                      {item.price[0].toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                      })}{' '}
                                      {item.price[1] && (
                                        <del className="text-body-tertiary fw-normal">
                                          $
                                          {item.price[1].toLocaleString(undefined, {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                          })}
                                        </del>
                                      )}
                                    </span>
                                  </li>
                                </ul>
                                <CountInput
                                  size="sm"
                                  min={1}
                                  value={item.quantity}
                                  onIncrement={() => {
                                    increaseQuantity(item.id)
                                  }}
                                  onDecrement={() => {
                                    decreaseQuantity(item.id)
                                  }}
                                  className="d-md-none mt-3"
                                  aria-label="Product quantity"
                                />
                              </div>
                            </div>
                          </td>
                          <td className="h6 py-3 d-none d-xl-table-cell">
                            $
                            {item.price[0].toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}{' '}
                            {item.price[1] && (
                              <del className="text-body-tertiary fs-xs fw-normal">
                                $
                                {item.price[1].toLocaleString(undefined, {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}
                              </del>
                            )}
                          </td>
                          <td className="py-3 d-none d-md-table-cell">
                            <CountInput
                              min={1}
                              value={item.quantity}
                              onIncrement={() => {
                                increaseQuantity(item.id)
                              }}
                              onDecrement={() => {
                                decreaseQuantity(item.id)
                              }}
                              aria-label="Product quantity"
                            />
                          </td>
                          <td className="h6 py-3 d-none d-md-table-cell">
                            $
                            {(item.price[0] * item.quantity).toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </td>
                          <td className="text-end py-3 px-0">
                            <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-sm">Remove</Tooltip>}>
                              <CloseButton className="fs-sm" onClick={() => removeFromCart(item.id)} />
                            </OverlayTrigger>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <Nav className="position-relative z-2 mb-4 mb-lg-0">
                    <Nav.Link href="/shop/electronics" as={Link} className="animate-underline px-0">
                      <i className="ci-chevron-left fs-lg me-1" />
                      <span className="animate-target">Continue shopping</span>
                    </Nav.Link>
                  </Nav>
                </div>
              </Col>

              {/* Order summary (sticky sidebar) */}
              <Col as="aside" lg={4} style={{ marginTop: -100 }}>
                <div className="sticky-top" style={{ paddingTop: 100 }}>
                  <div className="bg-body-tertiary rounded-5 p-4 mb-3">
                    <div className="p-sm-2 p-lg-0 p-xl-2">
                      <h5 className="border-bottom pb-4 mb-4">Order summary</h5>
                      <ul className="list-unstyled fs-sm gap-3 mb-0">
                        <li className="d-flex justify-content-between">
                          Subtotal ({cartCounter} items):
                          <span className="text-dark-emphasis fw-medium ms-1">
                            $
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
                              -$
                              {calculateTotalDiscount().toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                          </li>
                        )}
                        <li className="d-flex justify-content-between">
                          Tax collected:
                          <span className="text-dark-emphasis fw-medium ms-1">
                            $
                            {cartTax.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </li>
                        <li className="d-flex justify-content-between">
                          Shipping:
                          <span className="text-dark-emphasis fw-medium ms-1">Calculated at checkout</span>
                        </li>
                      </ul>
                      <div className="border-top pt-4 mt-4">
                        <div className="d-flex justify-content-between mb-3">
                          <span className="fs-sm">Estimated total:</span>
                          <span className="h5 mb-0">
                            $
                            {(calculateTotal() + cartTax).toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <Link href="/shop/checkout-v1/delivery-1" className="btn btn-lg btn-primary w-100">
                          Proceed to checkout
                          <i className="ci-chevron-right fs-lg ms-1 me-n1" />
                        </Link>
                        <Nav className="justify-content-center fs-sm mt-3">
                          <Nav.Link
                            className="text-decoration-underline p-0 me-1"
                            onClick={() => openOffcanvas('authForm')}
                          >
                            Create an account
                          </Nav.Link>
                          and get
                          <span className="text-dark-emphasis fw-medium ms-1">
                            {Math.floor((calculateTotal() + cartTax) / 10)} bonuses
                          </span>
                        </Nav>
                      </div>
                    </div>
                  </div>
                  <Accordion className="bg-body-tertiary rounded-5 p-4">
                    <Accordion.Item eventKey="promoCode" className="border-0">
                      <Accordion.Button
                        id="promoCodeHeading"
                        className=" animate-underline collapsed py-0 ps-sm-2 ps-lg-0 ps-xl-2"
                      >
                        <i className="ci-percent fs-xl me-2" />
                        <span className="animate-target me-2">Apply promo code</span>
                      </Accordion.Button>
                      <Accordion.Body className="pt-3 pb-2 ps-sm-2 px-lg-0 px-xl-2" aria-labelledby="promoCodeHeading">
                        <Form noValidate className="d-flex gap-2" validated={validated} onSubmit={handleSubmit}>
                          <div className="position-relative w-100">
                            <Form.Control type="text" placeholder="Enter promo code" required />
                            <Form.Control.Feedback tooltip type="invalid" className="bg-transparent py-0">
                              Enter a valid promo code!
                            </Form.Control.Feedback>
                          </div>
                          <Button type="submit" variant="dark">
                            Apply
                          </Button>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
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
            <Link href="/shop/electronics" className="btn btn-lg btn-primary">
              Continue shopping
            </Link>
          </div>
        )}
      </Container>

      {/* Authentication offcanvas */}
      <Offcanvas
        show={isOpen('authForm')}
        onHide={() => closeOffcanvas('authForm')}
        placement="end"
        className="pb-sm-2 px-sm-2"
        style={{ width: 500 }}
        aria-labelledby="authFormLabel"
      >
        <TabContainer defaultActiveKey="register">
          <Offcanvas.Header className="flex-column align-items-start py-3 pt-lg-4">
            <div className="d-flex align-items-center justify-content-between w-100 mb-3 mb-lg-4">
              <Offcanvas.Title as="h4" id="authFormLabel">
                Login to continue
              </Offcanvas.Title>
              <CloseButton onClick={() => closeOffcanvas('authForm')} />
            </div>
            <Nav as="ul" variant="underline">
              <Nav.Item as="li">
                <Nav.Link eventKey="login">Login</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="register">Register</Nav.Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Header>
          <Offcanvas.Body className="pt-2">
            <TabContent>
              {/* Login form */}
              <TabPane eventKey="login">
                <LoginForm labels />
              </TabPane>
              {/* Registration form */}
              <TabPane eventKey="register">
                <RegistrationForm />
                <div className="pt-5">
                  <h6>Cartzilla account benefits</h6>
                  <ul className="list-unstyled d-flex flex-column gap-2 fs-sm mb-0">
                    {[
                      ['ci-mail', 'Subscribe to your favorite products'],
                      ['ci-settings', 'View and manage your orders and withlist'],
                      ['ci-gift', 'Earn rewards for future purchases'],
                      ['ci-percent', 'Receive exclusive offers and discounts'],
                      ['ci-heart', 'Create multiple wishlists'],
                    ].map((item, index) => (
                      <li key={index} className="d-flex align-items-center pb-1">
                        <div className="d-flex align-items-center justify-content-center bg-body-tertiary rounded-circle p-2">
                          <i className={`${item[0]} fs-base text-dark-emphasis m-1`} />
                        </div>
                        <div className="ps-2 ms-1">{item[1]}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabPane>
            </TabContent>
          </Offcanvas.Body>
        </TabContainer>
      </Offcanvas>
    </>
  )
}

export default CartCheckout_V1
