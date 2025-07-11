'use client'

import React, { useState } from 'react'
import { useCart } from '@/contexts/cart-context'
import { useAuth } from '@/contexts/auth-context'
import { OrderService, type CreateOrderRequest, type OrderAddress } from '@/services/orders'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useRouter } from 'next/navigation'

interface CheckoutFormProps {
  slug: string
  onSuccess?: (order: any) => void
  onError?: (error: string) => void
}

export default function CheckoutForm({ slug, onSuccess, onError }: CheckoutFormProps) {
  const { cart, calculateTotal, calculateTotalDiscount, clearCart } = useCart(slug)
  const { isAuthenticated, user } = useAuth()
  const router = useRouter()
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    address: {
      name: user?.name || '',
      phone: user?.phone || '',
      email: user?.email || '',
      address: '',
      city: '',
      state: '',
      country: '',
      zip_code: '',
    } as OrderAddress,
    shipping_method: 'default',
    payment_method: 'cod',
    coupon_code: '',
    note: '',
  })

  const handleInputChange = (field: string, value: string) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.')
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev],
          [child]: value
        }
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    if (!isAuthenticated) {
      setError('Please login to complete checkout')
      setIsSubmitting(false)
      return
    }

    if (cart.length === 0) {
      setError('Your cart is empty')
      setIsSubmitting(false)
      return
    }

    try {
      const orderData: CreateOrderRequest = {
        address: formData.address,
        shipping_method: formData.shipping_method,
        shipping_option: formData.shipping_option,
        payment_method: formData.payment_method,
        coupon_code: formData.coupon_code || undefined,
        note: formData.note || undefined,
      }

      const order = await OrderService.createOrder(orderData)
      
      // Clear cart after successful order
      clearCart()
      
      if (onSuccess) {
        onSuccess(order)
      } else {
        router.push(`/account/orders/${order.id}`)
      }
    } catch (err: any) {
      const errorMessage = err.message || 'Failed to create order'
      setError(errorMessage)
      if (onError) {
        onError(errorMessage)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const subtotal = calculateTotal()
  const discount = calculateTotalDiscount()
  const shipping = 0 // This would be calculated based on shipping method
  const tax = 0 // This would be calculated based on location
  const total = subtotal - discount + shipping + tax

  return (
    <Form onSubmit={handleSubmit}>
      {error && (
        <Alert variant="danger" dismissible onClose={() => setError('')}>
          {error}
        </Alert>
      )}

      <Row>
        <Col lg={8}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Shipping Information</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name *</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.address.name}
                      onChange={(e) => handleInputChange('address.name', e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone *</Form.Label>
                    <Form.Control
                      type="tel"
                      value={formData.address.phone}
                      onChange={(e) => handleInputChange('address.phone', e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  value={formData.address.email}
                  onChange={(e) => handleInputChange('address.email', e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address *</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={formData.address.address}
                  onChange={(e) => handleInputChange('address.address', e.target.value)}
                  required
                />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>City *</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.address.city}
                      onChange={(e) => handleInputChange('address.city', e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>State/Province *</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.address.state}
                      onChange={(e) => handleInputChange('address.state', e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Country *</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.address.country}
                      onChange={(e) => handleInputChange('address.country', e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>ZIP/Postal Code *</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.address.zip_code}
                      onChange={(e) => handleInputChange('address.zip_code', e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header>
              <h5>Shipping Method</h5>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Check
                  type="radio"
                  id="shipping-default"
                  name="shipping_method"
                  value="default"
                  checked={formData.shipping_method === 'default'}
                  onChange={(e) => handleInputChange('shipping_method', e.target.value)}
                  label="Standard Shipping (3-5 business days)"
                />
                <Form.Check
                  type="radio"
                  id="shipping-express"
                  name="shipping_method"
                  value="express"
                  checked={formData.shipping_method === 'express'}
                  onChange={(e) => handleInputChange('shipping_method', e.target.value)}
                  label="Express Shipping (1-2 business days)"
                />
              </Form.Group>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header>
              <h5>Payment Method</h5>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Check
                  type="radio"
                  id="payment-cod"
                  name="payment_method"
                  value="cod"
                  checked={formData.payment_method === 'cod'}
                  onChange={(e) => handleInputChange('payment_method', e.target.value)}
                  label="Cash on Delivery"
                />
                <Form.Check
                  type="radio"
                  id="payment-card"
                  name="payment_method"
                  value="card"
                  checked={formData.payment_method === 'card'}
                  onChange={(e) => handleInputChange('payment_method', e.target.value)}
                  label="Credit/Debit Card"
                />
              </Form.Group>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header>
              <h5>Additional Information</h5>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Label>Coupon Code</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.coupon_code}
                  onChange={(e) => handleInputChange('coupon_code', e.target.value)}
                  placeholder="Enter coupon code"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Order Notes</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={formData.note}
                  onChange={(e) => handleInputChange('note', e.target.value)}
                  placeholder="Special instructions for delivery"
                />
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card>
            <Card.Header>
              <h5>Order Summary</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="d-flex justify-content-between mb-2 text-success">
                  <span>Discount:</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Tax:</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-100 mt-3"
                disabled={isSubmitting || cart.length === 0}
              >
                {isSubmitting ? 'Processing...' : 'Place Order'}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Form>
  )
} 