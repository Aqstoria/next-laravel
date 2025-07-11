'use client'

import { useCart } from '@/contexts/cart-context'
import Link from 'next/link'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Nav from 'react-bootstrap/Nav'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Table from 'react-bootstrap/Table'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import CloseButton from 'react-bootstrap/CloseButton'
import Badge from 'react-bootstrap/Badge'
import CountInput from '@/components/forms/count-input'

const CartCheckout_V2 = () => {
  const { cart, calculateTotal, calculateTotalDiscount, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart('grocery')

  // Cart numbers
  const cartCounter = cart.map((item) => item.quantity).reduce((a, b) => a + b, 0)
  const cartSubtotal = calculateTotalDiscount() + calculateTotal()
  const deliveryCost = 0

  return (
    <TabContainer defaultActiveKey="delivery" transition={false}>
      <Container as="section" className="pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
        {cart.length > 0 ? (
          <>
            <h1 className="h3 mb-4">Shopping cart</h1>
            <Row>
              {/* Items list + Delivery / pickup tabs */}
              <Col lg={8} className="position-relative z-2">
                <div className="pe-lg-2 pe-xl-3 me-xl-3">
                  <Nav as="ul" variant="pills" justify className="flex-nowrap flex-column flex-sm-row pb-md-2 mb-4">
                    <Nav.Item as="li">
                      <Nav.Link
                        eventKey="delivery"
                        className="justify-content-start text-start p-3 px-md-4 px-lg-3 px-xl-4 rounded-4"
                      >
                        <span
                          className="d-flex align-items-center justify-content-center flex-shrink-0 bg-success-subtle text-dark-emphasis rounded-circle"
                          style={{ width: '3rem', height: '3rem' }}
                        >
                          <i className="ci-shopping-bag fs-xl" />
                        </span>
                        <span className="ps-3">
                          <span className="h6 d-block mb-1">Delivery</span>
                          <span className="fs-xs fw-normal text-body lh-base">All products are available</span>
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link
                        eventKey="pickup"
                        className="justify-content-start text-start p-3 px-md-4 px-lg-3 px-xl-4 rounded-4"
                      >
                        <span
                          className="d-flex align-items-center justify-content-center flex-shrink-0 bg-info-subtle text-dark-emphasis rounded-circle"
                          style={{ width: '3rem', height: '3rem' }}
                        >
                          <i className="ci-package fs-xl" />
                        </span>
                        <span className="ps-3">
                          <span className="h6 d-block mb-1">Pickup</span>
                          <span className="fs-xs fw-normal text-body lh-base">All products are available</span>
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

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
                              <div className="ps-2 ps-xl-3">
                                <h5 className="lh-sm mb-2">
                                  <Link href={item.href} className="hover-effect-underline fs-sm fw-medium">
                                    {item.title}
                                  </Link>
                                </h5>
                                <ul className="list-unstyled gap-1 fs-xs mb-0">
                                  <li>
                                    <span className="text-body-secondary">Portion:</span>
                                    <span className="text-dark-emphasis fw-medium">{item.description}</span>
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
                                  className="d-md-none rounded-pill mt-3"
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
                              className="rounded-pill"
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
                    <Nav.Link href="/shop/grocery" as={Link} className="animate-underline px-0">
                      <i className="ci-chevron-left fs-lg me-1" />
                      <span className="animate-target">Continue shopping</span>
                    </Nav.Link>
                  </Nav>
                </div>
              </Col>

              {/* Order summary (sticky sidebar) */}
              <Col as="aside" lg={4} style={{ marginTop: -115 }}>
                <div className="position-sticky top-0" style={{ paddingTop: 115 }}>
                  {calculateTotal() >= 50 ? (
                    <div className="alert alert-success py-2 fs-sm mb-4">
                      <div className="text-body-emphasis fw-medium py-1">
                        Congratulations 🎉 You have added more than <span className="fw-semibold">$50</span> to your
                        cart. <span className="fw-semibold">Delivery is free</span> for you!
                      </div>
                    </div>
                  ) : (
                    <div className="mb-4">
                      <p className="fs-sm">
                        Buy{' '}
                        <span className="text-dark-emphasis fw-semibold">
                          $
                          {(50 - calculateTotal()).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>{' '}
                        more to get <span className="text-dark-emphasis fw-semibold">Free Shipping</span>.
                      </p>
                      <ProgressBar
                        variant="warning"
                        now={(calculateTotal() / 50) * 100}
                        className="w-100"
                        style={{ height: 4 }}
                        aria-label="Free shipping progress"
                      />
                    </div>
                  )}
                  <h2 className="h5 border-bottom pb-4 mb-4 me-3">Order summary</h2>
                  <TabContent>
                    <TabPane eventKey="delivery">
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
                          Delivery:
                          <span className="text-dark-emphasis fw-medium ms-1">
                            {deliveryCost > 0
                              ? `$${deliveryCost.toLocaleString(undefined, {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}`
                              : 'Free'}
                          </span>
                        </li>
                      </ul>
                      <div className="border-top pt-4 mt-4">
                        <div className="d-flex justify-content-between mb-3">
                          <span className="fs-sm">Estimated total:</span>
                          <span className="h5 mb-0">
                            $
                            {(calculateTotal() + deliveryCost).toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <Link href="/shop/checkout-v2/delivery" className="btn btn-lg btn-primary w-100 rounded-pill">
                          Proceed to checkout
                          <i className="ci-chevron-right fs-lg ms-1 me-n1" />
                        </Link>
                      </div>
                    </TabPane>
                    <TabPane eventKey="pickup">
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
                      </ul>
                      <div className="border-top pt-4 mt-4">
                        <div className="d-flex justify-content-between mb-3">
                          <span className="fs-sm">Estimated total:</span>
                          <span className="h5 mb-0">
                            $
                            {calculateTotal().toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <Link href="/shop/checkout-v2/pickup" className="btn btn-lg btn-primary w-100 rounded-pill">
                          Proceed to checkout
                          <i className="ci-chevron-right fs-lg ms-1 me-n1" />
                        </Link>
                      </div>
                    </TabPane>
                  </TabContent>
                </div>
              </Col>
            </Row>
          </>
        ) : (
          <div className="text-center pt-3 pt-md-4 pt-lg-5">
            <svg className="d-block mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" width="60" viewBox="0 0 29.5 30">
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
            <Link href="/shop/grocery" className="btn btn-lg btn-primary rounded-pill">
              Continue shopping
            </Link>
          </div>
        )}
      </Container>
    </TabContainer>
  )
}

export default CartCheckout_V2
