'use client'

import { useState } from 'react'
import { useCart } from '@/contexts/cart-context'
import { useOffcanvas } from '@/contexts/offcanvas-context'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import Link from 'next/link'
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Accordion from 'react-bootstrap/Accordion'
import Alert from 'react-bootstrap/Alert'
import Offcanvas from 'react-bootstrap/Offcanvas'
import CreditCardInput from '@/components/forms/credit-card-input'
import Cleave from 'cleave.js/react'

const DeliveryCheckout_V2 = () => {
  const { cart, calculateTotal, calculateTotalDiscount } = useCart('grocery')
  const { isOpen, openOffcanvas, closeOffcanvas } = useOffcanvas()
  const [deliveryDay, setDeliveryDay] = useState('Today')
  const [deliveryTime, setDeliveryTime] = useState('10:00 - 12:00')
  const [payment, setPayment] = useState('card')

  // Cart numbers
  const cartCounter = cart.map((item) => item.quantity).reduce((a, b) => a + b, 0)
  const cartSubtotal = calculateTotalDiscount() + calculateTotal()
  const deliveryCost = 0

  // Custom toggle that binds radion button to accordion button
  const PaymentToggle = ({ eventKey, children }: { eventKey: string; children: React.ReactNode }) => {
    const accordionToggle = useAccordionButton(eventKey)

    const handleClick = (e: React.SyntheticEvent) => {
      accordionToggle(e)
      setPayment(eventKey)
    }

    return (
      <Form.Check className="d-inline-block mb-0">
        <Form.Check.Label className="d-flex align-items-center text-dark-emphasis fw-semibold">
          <Form.Check.Input
            type="radio"
            name="paymentMethod"
            value={eventKey}
            onChange={handleClick}
            checked={eventKey === payment}
            className="fs-base me-2 me-sm-3"
          />
          {children}
        </Form.Check.Label>
      </Form.Check>
    )
  }

  return (
    <>
      <Container as="section" className="pb-5 mb-2 mb-md-3 mb-lg-4 mb-xl-5">
        <h1 className="h3 mb-4">Checkout</h1>
        <Row>
          {/* Checkout form */}
          <Col lg={8} xl={7} className="position-relative z-2 mb-5 mb-lg-0">
            {/* Delivery address section */}
            <h2 className="h5 mb-4">Delivery address</h2>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center fs-sm text-dark-emphasis me-3">
                <i className="ci-map-pin fs-base text-primary me-2" />
                567 Cherry Souse Lane Sacramento, 95829
              </div>
              <Nav>
                <Nav.Link
                  className="text-decoration-underline text-nowrap p-0"
                  onClick={() => openOffcanvas('deliveryOptions')}
                >
                  Change address
                </Nav.Link>
              </Nav>
            </div>
            <Row xs={1} sm={2} className="g-3 g-ms-4 mb-3 mb-sm-4">
              <Col>
                <Form.Group controlId="house">
                  <Form.Label>House / Flat*</Form.Label>
                  <Form.Control type="text" size="lg" className="rounded-pill" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="floor">
                  <Form.Label>
                    Floor <span className="fw-normal text-body-secondary">(optional)</span>
                  </Form.Label>
                  <Form.Control type="text" size="lg" className="rounded-pill" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="phone">
              <Form.Label>
                Phone number *{' '}
                <span className="fw-normal text-body-secondary">
                  (We&apos;ll contact you in case anything comes up with your order)
                </span>
              </Form.Label>
              <Form.Control
                as={Cleave}
                size="lg"
                options={{ numericOnly: true, delimiters: ['+1 ', ' ', ' '], blocks: [0, 3, 3, 2] }}
                placeholder="+1 ___ ___ __"
                className="rounded-pill"
                required
              />
            </Form.Group>

            {/* Delivery date and time section */}
            <h2 className="h5 mt-5 mb-4">Delivery date and time</h2>
            <div className="d-flex flex-wrap gap-3">
              <ToggleButton
                type="radio"
                id="daliveryDay-Today"
                variant="outline-secondary"
                name="deliveryDay"
                value="Today"
                checked={deliveryDay === 'Today'}
                onChange={(e) => setDeliveryDay(e.currentTarget.value)}
                className="rounded-pill"
              >
                Today
              </ToggleButton>
              <ToggleButton
                type="radio"
                id="daliveryDay-Tomorrow"
                variant="outline-secondary"
                name="deliveryDay"
                value="Tomorrow"
                checked={deliveryDay === 'Tomorrow'}
                onChange={(e) => setDeliveryDay(e.currentTarget.value)}
                className="rounded-pill"
              >
                Tomorrow
              </ToggleButton>
              <ToggleButton
                type="radio"
                id="daliveryDay-Wed26"
                variant="outline-secondary"
                name="deliveryDay"
                value="Mon24"
                checked={deliveryDay !== 'Today' && deliveryDay !== 'Tomorrow'}
                onChange={(e) => setDeliveryDay(e.currentTarget.value)}
                onClick={() => openOffcanvas('deliveryDateTime')}
                className="rounded-pill"
              >
                Other date
              </ToggleButton>
            </div>
            <div className="fs-sm mt-4">
              The cost of delivery:{' '}
              <span className="fw-semibold text-dark-emphasis">
                {deliveryCost > 0
                  ? `$${deliveryCost.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}`
                  : 'Free'}
              </span>
            </div>
            <div className="d-flex flex-wrap gap-3 mt-3">
              {['10:00 - 12:00', '12:00 - 14:00', '14:00 - 16:00', '16:00 - 18:00', '18:00 - 20:00'].map(
                (time, index) => (
                  <ToggleButton
                    key={index}
                    type="radio"
                    id={`deliveryTime-${index}`}
                    variant="outline-secondary"
                    name="deliveryTime"
                    value={time}
                    checked={deliveryTime === time}
                    onChange={(e) => setDeliveryTime(e.currentTarget.value)}
                    className="rounded-pill"
                  >
                    {time}
                  </ToggleButton>
                )
              )}
            </div>

            {/* Payment method section */}
            <h2 className="h5 mt-5 mb-0">Payment method</h2>
            <Accordion defaultActiveKey={payment}>
              <div className="mt-4">
                <PaymentToggle eventKey="card">
                  Credit or debit card
                  <span className="d-none d-sm-flex gap-2 ms-3">
                    <Image
                      src="/img/payment-methods/amex.svg"
                      className="d-block bg-info rounded-1"
                      width={36}
                      height={25}
                      alt="Amex"
                    />
                    <Image
                      src="/img/payment-methods/visa-light-mode.svg"
                      className="d-none-dark"
                      width={36}
                      height={25}
                      alt="Visa"
                    />
                    <Image
                      src="/img/payment-methods/visa-dark-mode.svg"
                      className="d-none d-block-dark"
                      width={36}
                      height={25}
                      alt="Visa"
                    />
                    <Image src="/img/payment-methods/mastercard.svg" width={36} height={25} alt="Mastercard" />
                    <Image src="/img/payment-methods/maestro.svg" width={36} height={25} alt="Maestro" />
                  </span>
                </PaymentToggle>
                <Accordion.Collapse eventKey="card">
                  <Form className="pt-4 pb-2 ps-3 ms-2 ms-sm-3">
                    <CreditCardInput
                      id="card-number"
                      size="lg"
                      placeholder="Card number"
                      onCardTypeChange={(type) => console.log(type)}
                      onCardNumberChange={(number) => console.log(number)}
                      required
                      inputClassName="rounded-pill"
                      className="mb-3 mb-lg-4"
                    />
                    <Row xs={1} sm={2} className="g-3 g-sm-4">
                      <Col>
                        <Form.Control
                          as={Cleave}
                          size="lg"
                          options={{ date: true, datePattern: ['m', 'y'] }}
                          placeholder="MM/YY"
                          className="rounded-pill"
                          required
                        />
                      </Col>
                      <Col>
                        <Form.Control
                          as={Cleave}
                          size="lg"
                          options={{ numericOnly: true, blocks: [3] }}
                          placeholder="CVC"
                          className="rounded-pill"
                          required
                        />
                      </Col>
                    </Row>
                  </Form>
                </Accordion.Collapse>
              </div>
              <div className="mt-4">
                <PaymentToggle eventKey="paypal">
                  PayPal
                  <Image
                    src="/img/payment-methods/paypal-icon.svg"
                    width={16}
                    height={19}
                    className="ms-3"
                    alt="PayPal"
                  />
                </PaymentToggle>
              </div>
              <div className="mt-4">
                <PaymentToggle eventKey="gpay">
                  Google Pay
                  <Image
                    src="/img/payment-methods/google-icon.svg"
                    width={20}
                    height={16}
                    className="ms-3"
                    alt="Google Pay"
                  />
                </PaymentToggle>
              </div>
              <div className="mt-4">
                <PaymentToggle eventKey="cash">Cash on delivery</PaymentToggle>
                <Accordion.Collapse eventKey="cash">
                  <div className="d-sm-flex align-items-center pt-3 pt-sm-4 pb-2 ps-3 ms-2 ms-sm-3">
                    <span className="fs-sm me-3">I would require a change from:</span>
                    <InputGroup className="mt-2 mt-sm-0" style={{ maxWidth: 150 }}>
                      <InputGroup.Text id="currencySign" className="rounded-pill rounded-end-0">
                        <i className="ci-dollar-sign" />
                      </InputGroup.Text>
                      <Form.Control
                        type="number"
                        className="rounded-pill rounded-start-0"
                        aria-label="Amount (to the nearest dollar)"
                        aria-describedby="currencySign"
                      />
                    </InputGroup>
                  </div>
                </Accordion.Collapse>
              </div>
              <div className="mt-4">
                <PaymentToggle eventKey="cardDelivery">Card on delivery</PaymentToggle>
              </div>
            </Accordion>

            {/* Packaging section */}
            <h2 className="h5 mt-5 mb-4">Packaging</h2>
            <Alert variant="success" className="text-dark-emphasis fs-sm border-0 rounded-4 mb-4">
              We are eco-friendly company 🍏, so we use as little plastic as possible.
            </Alert>
            <div className="d-flex flex-column gap-3">
              <Form.Check>
                <Form.Check.Input type="radio" id="bags" name="packaging" />
                <Form.Check.Label htmlFor="bags" className="text-dark-emphasis fw-medium">
                  Branded bags <span className="text-body-secondary">(absorbent polyester)</span>
                </Form.Check.Label>
              </Form.Check>
              <Form.Check>
                <Form.Check.Input type="radio" id="eco" name="packaging" />
                <Form.Check.Label htmlFor="eco" className="text-dark-emphasis fw-medium">
                  Eco-friendly packaging <span className="text-body-secondary">(cardboard packaging)</span>
                </Form.Check.Label>
              </Form.Check>
            </div>
          </Col>

          {/* Order summary (sticky sidebar) */}
          <Col as="aside" lg={4} className="offset-xl-1" style={{ marginTop: -115 }}>
            <div className="position-sticky top-0" style={{ paddingTop: 115 }}>
              <div className="d-flex align-items-center justify-content-between border-bottom pb-4 mb-4">
                <h2 className="h5 mb-0 me-3">Order summary</h2>
                <Nav>
                  <Nav.Link as={Link} href="./" className="text-decoration-underline p-0">
                    Edit
                  </Nav.Link>
                </Nav>
              </div>
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
                <div className="d-flex justify-content-between mb-4">
                  <span className="fs-sm">Estimated total:</span>
                  <span className="h5 mb-0">
                    $
                    {(calculateTotal() + deliveryCost).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
                <Alert variant="warning" className="d-flex fs-sm rounded-4 mb-4">
                  <i className="ci-info fs-lg pe-1 mt-1 me-2" />
                  <div>
                    There is a weighted product in the cart. The actual amount may differ from the indicated amount.
                  </div>
                </Alert>
                <Form.Group controlId="orderNote" className="mb-4">
                  <Form.Label>Order note</Form.Label>
                  <Form.Control as="textarea" className="rounded-5" rows={3} />
                </Form.Group>
                <Form.Check className="mb-4">
                  <Form.Check.Input id="age" />
                  <Form.Check.Label htmlFor="age">
                    The order has products with age restrictions. I confirm that{' '}
                    <span className="fw-semibold">I am at least 18 years old.</span>
                  </Form.Check.Label>
                </Form.Check>
                <Link href="./thank-you" className="btn btn-lg btn-primary w-100 rounded-pill">
                  Confirm the order
                  <i className="ci-chevron-right fs-lg ms-1 me-n1" />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Delivery date and time offcanvas */}
      <Offcanvas
        show={isOpen('deliveryDateTime')}
        onHide={() => closeOffcanvas('deliveryDateTime')}
        placement="end"
        className="pb-sm-2 px-sm-2"
        style={{ width: 500 }}
        aria-labelledby="deliveryDateTimeLabel"
      >
        <Offcanvas.Header closeButton className="py-3 pt-lg-4">
          <Offcanvas.Title as="h4" id="deliveryDateTimeLabel">
            Schedule date and time
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Day */}
          <div className="d-flex justify-content-between gap-3 overflow-auto pb-3">
            {[
              { day: 'Mon', date: 24, value: 'Mon24' },
              { day: 'Tue', date: 25, value: 'Tue25' },
              { day: 'Wed', date: 26, value: 'Wed26' },
              { day: 'Thu', date: 27, value: 'Thu27' },
              { day: 'Fri', date: 28, value: 'Fri28' },
              { day: 'Sat', date: 29, value: 'Sat29' },
              { day: 'Sun', date: 30, value: 'Sun30' },
            ].map(({ day, date, value }, index) => (
              <div key={index} className="text-center">
                <div className="fs-sm pb-1 mb-2">{day}</div>
                <ToggleButton
                  type="radio"
                  id={`deliveryDayOffcanvas-${index}`}
                  variant="outline-secondary"
                  size="lg"
                  name="deliveryDayOffcanvas"
                  value={value}
                  checked={deliveryDay === value}
                  onChange={(e) => setDeliveryDay(e.currentTarget.value)}
                  className="btn-icon fs-sm rounded-circle"
                >
                  {date}
                </ToggleButton>
              </div>
            ))}
          </div>

          {/* Time */}
          {[
            '08:00 - 10:00',
            '10:00 - 12:00',
            '12:00 - 14:00',
            '14:00 - 16:00',
            '16:00 - 18:00',
            '18:00 - 20:00',
            '20:00 - 22:00',
          ].map((time, index) => (
            <Form.Check key={index} className="d-flex border-bottom py-4 m-0">
              <Form.Check.Input
                type="radio"
                id={`deliveryTimeOffcanvas-${index}`}
                name="deliveryTimeOffcanvas"
                value={time}
                checked={deliveryTime === time}
                onChange={(e) => setDeliveryTime(e.currentTarget.value)}
              />
              <div className="d-flex w-100 ms-2">
                <Form.Check.Label
                  htmlFor={`deliveryTimeOffcanvas-${index}`}
                  className="text-dark-emphasis fw-semibold me-3"
                >
                  {time}
                </Form.Check.Label>
                <span className="fs-sm ms-auto">Free</span>
              </div>
            </Form.Check>
          ))}
        </Offcanvas.Body>
        <Offcanvas.Header>
          <Button size="lg" className="w-100 rounded-pill" onClick={() => closeOffcanvas('deliveryDateTime')}>
            Confirm date and time
          </Button>
        </Offcanvas.Header>
      </Offcanvas>
    </>
  )
}

export default DeliveryCheckout_V2
