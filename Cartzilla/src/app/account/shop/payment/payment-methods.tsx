'use client'

import { useState, useEffect, type FormEvent } from 'react'
import useSWR from 'swr'
import { useModal } from '@/contexts/modal-context'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Form from 'react-bootstrap/Form'
import Placeholder from 'react-bootstrap/Placeholder'
import Alert from 'react-bootstrap/Alert'
import CreditCardInput from '@/components/forms/credit-card-input'
import Cleave from 'cleave.js/react'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface PaymentMethodData {
  id: string
  type: 'mastercard' | 'visa' | 'maestro' | 'paypal' | 'amex'
  cardNumber?: string
  expirationDate?: string
  email?: string
  primary?: boolean
}

const maskCardNumber = (cardNumber?: string) => {
  if (!cardNumber) return ''
  const cleanNumber = cardNumber.replace(/\s+/g, '')
  if (cleanNumber.length === 15) {
    return `**** ****** ${cleanNumber.slice(-4)}`
  } else {
    return cardNumber.replace(/\d{4}(?= \d{4})/g, '****')
  }
}

const isCardExpired = (expirationDate?: string) => {
  if (!expirationDate) return false
  const [month, year] = expirationDate.split('/').map(Number)
  const fullYear = 2000 + year
  const expiration = new Date(fullYear, month, 0)
  const now = new Date()
  return expiration < now
}

// Mapping of payment types to image URLs
const paymentLogos: Record<PaymentMethodData['type'], string[]> = {
  mastercard: ['/img/payment-methods/mastercard.svg'],
  visa: ['/img/payment-methods/visa-light-mode.svg', '/img/payment-methods/visa-dark-mode.svg'],
  maestro: ['/img/payment-methods/maestro.svg'],
  paypal: ['/img/payment-methods/paypal-light-mode.svg', '/img/payment-methods/paypal-dark-mode.svg'],
  amex: ['/img/payment-methods/amex-alt.svg'],
}

const PaymentMethods = () => {
  const { data, error, isLoading } = useSWR<PaymentMethodData[]>('/data/account/shop/payment-methods.json', fetcher)
  const { openModal, closeModal, isShown } = useModal()
  const [payments, setPayments] = useState<PaymentMethodData[] | undefined>(undefined)
  const [cardType, setCardType] = useState<string>('')
  const [cardNumber, setCardNumber] = useState<string>('')
  const [cardName, setCardName] = useState<string>('')
  const [cardExpiration, setCardExpiration] = useState<string>('')
  const [cardCvc, setCardCvc] = useState<string>('')
  const [paypalEmail, setPaypalEmail] = useState<string>('')
  const [validatedCard, setValidatedCard] = useState(false)
  const [validatedPaypal, setValidatedPaypal] = useState(false)

  useEffect(() => {
    if (data) {
      setPayments(data) // Initialize payments with fetched data
    }
  }, [data])

  // Remove payment method
  const handleRemove = (id: string) => {
    if (!payments) return

    setPayments(payments.filter((payment) => payment.id !== id))
    // In a real app, you would also make an API call to remove it from the backend
  }

  // Set payment method as primary
  const handleSetPrimary = (id: string) => {
    if (!payments) return

    setPayments(
      payments.map((payment) => ({
        ...payment,
        primary: payment.id === id,
      }))
    )
    // In a real app, you would also make an API call to update this on the backend
  }

  // Handle Add Payment Method form submit
  const handleSubmit = (event: FormEvent<HTMLFormElement>, formType: 'card' | 'paypal') => {
    event.preventDefault()

    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
      if (formType === 'card') {
        setValidatedCard(true)
      } else {
        setValidatedPaypal(true)
      }
      return
    }

    // Create new payment method
    if (formType === 'card' && payments) {
      const newPayment: PaymentMethodData = {
        id: `card-${Date.now()}`,
        type: (cardType as PaymentMethodData['type']) || 'visa', // Default to visa if type not detected
        cardNumber: cardNumber,
        expirationDate: cardExpiration,
        primary: payments.length === 0, // Make primary if it's the first payment method
      }

      setPayments([...payments, newPayment])
      resetCardForm()
    } else if (formType === 'paypal' && payments) {
      const newPayment: PaymentMethodData = {
        id: `paypal-${Date.now()}`,
        type: 'paypal',
        email: paypalEmail,
        primary: payments.length === 0, // Make primary if it's the first payment method
      }

      setPayments([...payments, newPayment])
      setPaypalEmail('')
    }

    // Close modal after submission
    closeModal('addPayment')
  }

  const resetCardForm = () => {
    setCardType('')
    setCardNumber('')
    setCardName('')
    setCardExpiration('')
    setCardCvc('')
    setValidatedCard(false)
  }

  const resetPaypalForm = () => {
    setPaypalEmail('')
    setValidatedPaypal(false)
  }

  const handleModalClose = () => {
    resetCardForm()
    resetPaypalForm()
    closeModal('addPayment')
  }

  if (isLoading)
    return (
      <Row xs={1} sm={2} md={3} className="g-3 g-md-4 g-lg-3 g-xl-4">
        {Array.from({ length: 3 }, (_, index) => (
          <Col key={index}>
            <Card className="h-100">
              <Card.Body className="pb-3">
                <div className="d-flex align-items-start justify-content-between mb-4 mt-n2 ms-n2">
                  <div className="p-2" style={{ width: 100, height: 69 }}>
                    <Placeholder as="div" animation="wave" className="position-relative">
                      <Placeholder className="ratio ratio-4x3 rounded-2" />
                      <i className="ci-image position-absolute top-50 start-50 translate-middle fs-4 opacity-40" />
                    </Placeholder>
                  </div>
                  <div className="w-100 pt-1 ms-3" style={{ maxWidth: 80 }}>
                    <Placeholder animation="glow">
                      <Placeholder xs={12} />
                    </Placeholder>
                  </div>
                </div>
                <Placeholder animation="glow">
                  <Placeholder xs={12} />
                </Placeholder>
                <Placeholder as="div" animation="glow" className="mb-1">
                  <Placeholder xs={6} size="sm" />
                </Placeholder>
                <Placeholder as="div" animation="glow">
                  <Placeholder xs={4} />
                </Placeholder>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    )

  if (error)
    return (
      <Alert variant="danger" className="d-inline-flex">
        <i className="ci-alert-triangle fs-lg pe-1 mt-1 me-2" />
        <div>
          <span className="fw-semibold">Error loading payment methods:</span> {error.message}
        </div>
      </Alert>
    )

  return (
    <>
      <Row xs={1} sm={2} md={3} className="g-3 g-md-4 g-lg-3 g-xl-4">
        {(payments || []).map(({ id, type, cardNumber, expirationDate, email, primary }) => {
          const expired = isCardExpired(expirationDate)

          return (
            <Col key={id}>
              <Card className="h-100">
                <Card.Body className="pb-3">
                  <div className="d-flex align-items-start justify-content-between mb-4">
                    <Image
                      src={paymentLogos[type][0]}
                      width={100}
                      height={69}
                      alt={type}
                      className={`${paymentLogos[type][1] ? 'd-none-dark ' : ''}m-n3`}
                    />
                    {paymentLogos[type][1] && (
                      <Image
                        src={paymentLogos[type][1]}
                        width={100}
                        height={69}
                        alt={type}
                        className="d-none d-block-dark m-n3"
                      />
                    )}
                    {primary ? (
                      <Badge pill bg="info">
                        Primary
                      </Badge>
                    ) : (
                      <Nav className="animate-underline">
                        <Nav.Link className="animate-target fs-xs p-0" onClick={() => handleSetPrimary(id)}>
                          Set as primary
                        </Nav.Link>
                      </Nav>
                    )}
                  </div>
                  {cardNumber && <div className="h6 mb-1">{maskCardNumber(cardNumber)}</div>}
                  {email && <div className="h6 mb-1">{email}</div>}
                  {expired ? (
                    <div className="text-danger fs-xs">Expired {expirationDate}</div>
                  ) : expirationDate ? (
                    <div className="text-body fs-xs">Expiration {expirationDate}</div>
                  ) : null}
                </Card.Body>
                <Card.Footer className="bg-transparent border-0 pt-0 pb-4">
                  <Button variant="outline-secondary" size="sm" onClick={() => handleRemove(id)}>
                    Remove
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          )
        })}

        {/* Add payment method modal toggle */}
        <Col>
          <Card className="border-0 h-100">
            <span className="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-secondary border-opacity-25 rounded d-none-dark" />
            <span className="position-absolute top-0 start-0 w-100 h-100 border border-dashed border-light border-opacity-25 rounded d-none d-block-dark" />
            <Card.Body className="position-relative z-2 nav align-items-center justify-content-center py-5">
              <Nav.Link
                className="animate-underline stretched-link min-w-0 fs-base px-0"
                onClick={() => openModal('addPayment')}
              >
                <i className="ci-plus fs-lg ms-n2 me-2" />
                <span className="animate-target text-truncate">Add payment method</span>
              </Nav.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Add payment method modal */}
      <Modal
        show={isShown('addPayment')}
        onHide={handleModalClose}
        centered
        backdrop="static"
        aria-labelledby="addPaymentModalLabel"
      >
        <Modal.Header closeButton>
          <Modal.Title as="h5" id="addPaymentModalLabel">
            Add new payment method
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TabContainer defaultActiveKey="card">
            <Nav variant="tabs" className="mb-3" style={{ maxWidth: 450 }}>
              <Nav.Item>
                <Nav.Link eventKey="card">
                  <i className="ci-credit-card fs-base opacity-75 ms-n2 me-2" />
                  Card
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="paypal">
                  <Image
                    src="/img/payment-methods/paypal-icon.svg"
                    className="me-2"
                    width={14}
                    height={17}
                    alt="PayPal"
                  />
                  PayPal
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <TabContent>
              <TabPane eventKey="card">
                <Form noValidate validated={validatedCard} onSubmit={(e) => handleSubmit(e, 'card')}>
                  <div className="mb-3">
                    <Form.Label htmlFor="card-number">Card number</Form.Label>
                    <CreditCardInput
                      id="card-number"
                      placeholder="XXXX XXXX XXXX XXXX"
                      inputClassName="bg-image-none"
                      onCardTypeChange={(type) => setCardType(type)}
                      onCardNumberChange={(number) => setCardNumber(number)}
                      required
                    />
                  </div>
                  <Form.Group controlId="card-name" className="mb-3">
                    <Form.Label>Name on card</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Full name"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Row className="mb-4">
                    <Col xs={7}>
                      <Form.Group controlId="card-expiration">
                        <Form.Label>Expiration date</Form.Label>
                        <Form.Control
                          as={Cleave}
                          options={{ date: true, datePattern: ['m', 'y'] }}
                          placeholder="MM/YY"
                          value={cardExpiration}
                          onChange={(e) => setCardExpiration(e.target.value)}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={5}>
                      <Form.Group controlId="card-cvc">
                        <Form.Label>CVC</Form.Label>
                        <Form.Control
                          as={Cleave}
                          options={{ numericOnly: true, blocks: [3] }}
                          placeholder="XXX"
                          value={cardCvc}
                          onChange={(e) => setCardCvc(e.target.value)}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="d-flex gap-3">
                    <Button type="reset" variant="secondary w-100" onClick={handleModalClose}>
                      Cancel
                    </Button>
                    <Button type="submit" className="w-100">
                      Add card
                    </Button>
                  </div>
                </Form>
              </TabPane>
              <TabPane eventKey="paypal">
                <Form noValidate validated={validatedPaypal} onSubmit={(e) => handleSubmit(e, 'paypal')}>
                  <Form.Group controlId="paypal-email" className="mb-4">
                    <Form.Label>Email associated with PayPal</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email address"
                      value={paypalEmail}
                      onChange={(e) => setPaypalEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <div className="d-flex gap-3">
                    <Button type="reset" variant="secondary w-100" onClick={handleModalClose}>
                      Cancel
                    </Button>
                    <Button type="submit" className="w-100">
                      Add PayPal
                    </Button>
                  </div>
                </Form>
              </TabPane>
            </TabContent>
          </TabContainer>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default PaymentMethods
