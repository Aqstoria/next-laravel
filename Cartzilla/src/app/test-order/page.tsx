'use client'

import React, { useState } from 'react'
import { useCart } from '@/contexts/cart-context'
import { useAuth } from '@/contexts/auth-context'
import { OrderService } from '@/services/orders'
import { botbleAPI } from '@/services/api'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

export default function TestOrderPage() {
  const { cart, calculateTotal, addToCart, clearCart } = useCart('electronics')
  const { user, isAuthenticated } = useAuth()
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [testOrder, setTestOrder] = useState<any>(null)

  const testAddToCart = async () => {
    setLoading(true)
    setError('')
    try {
      // Add a test product to cart
      await addToCart({
        id: '1',
        image: '/img/shop/products/01.jpg',
        title: 'Test Product',
        href: '/shop/electronics/product?slug=test-product',
        price: [29.99, 39.99],
        quantity: 1,
      })
    } catch (err: any) {
      setError(`Add to cart error: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  const testGetOrders = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await botbleAPI.getOrders()
      setOrders(response.data || [])
    } catch (err: any) {
      setError(`Get orders error: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  const testCreateOrder = async () => {
    setLoading(true)
    setError('')
    try {
      const orderData = {
        address: {
          name: 'Test User',
          phone: '+1234567890',
          email: 'test@example.com',
          address: '123 Test Street',
          city: 'Test City',
          state: 'Test State',
          country: 'Test Country',
          zip_code: '12345',
        },
        shipping_method: 'default',
        payment_method: 'cod',
        coupon_code: '',
        note: 'Test order from frontend',
      }

      const order = await OrderService.createOrder(orderData)
      setTestOrder(order)
    } catch (err: any) {
      setError(`Create order error: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  const testCancelOrder = async (orderId: number) => {
    setLoading(true)
    setError('')
    try {
      await OrderService.cancelOrder(orderId, 'OTHER', 'Test cancellation')
      // Refresh orders list
      await testGetOrders()
    } catch (err: any) {
      setError(`Cancel order error: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container className="py-5">
      <h1 className="mb-4">Order Creation Test</h1>
      
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Header>
              <h5>Authentication Status</h5>
            </Card.Header>
            <Card.Body>
              <p><strong>Authenticated:</strong> {isAuthenticated ? 'Yes' : 'No'}</p>
              {user && (
                <p><strong>User:</strong> {user.name} ({user.email})</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Header>
              <h5>Cart Status</h5>
            </Card.Header>
            <Card.Body>
              <p><strong>Items in cart:</strong> {cart.length}</p>
              <p><strong>Cart total:</strong> ${calculateTotal().toFixed(2)}</p>
              <div className="d-flex gap-2">
                <Button variant="primary" onClick={testAddToCart} disabled={loading}>
                  Add Test Product to Cart
                </Button>
                <Button variant="secondary" onClick={clearCart} disabled={loading}>
                  Clear Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Header>
              <h5>Order Management</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex gap-2 mb-3">
                <Button variant="info" onClick={testGetOrders} disabled={loading}>
                  Get Orders
                </Button>
                <Button variant="success" onClick={testCreateOrder} disabled={loading}>
                  Create Test Order
                </Button>
              </div>
              
              {loading && <Alert variant="info">Loading...</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {testOrder && (
        <Row className="mb-4">
          <Col>
            <Card>
              <Card.Header>
                <h5>Test Order Created</h5>
              </Card.Header>
              <Card.Body>
                <p><strong>Order ID:</strong> {testOrder.id}</p>
                <p><strong>Status:</strong> {testOrder.status}</p>
                <p><strong>Total:</strong> ${testOrder.amount}</p>
                <p><strong>Created:</strong> {new Date(testOrder.created_at).toLocaleString()}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {orders.length > 0 && (
        <Row className="mb-4">
          <Col>
            <Card>
              <Card.Header>
                <h5>Orders ({orders.length})</h5>
              </Card.Header>
              <Card.Body>
                <div className="row">
                  {orders.map((order: any) => (
                    <div key={order.id} className="col-md-6 col-lg-4 mb-3">
                      <Card>
                        <Card.Body>
                          <Card.Title>Order #{order.id}</Card.Title>
                          <Card.Text>
                            <strong>Status:</strong> {order.status}<br/>
                            <strong>Total:</strong> ${order.amount}<br/>
                            <strong>Items:</strong> {order.products?.length || 0}<br/>
                            <strong>Created:</strong> {new Date(order.created_at).toLocaleDateString()}
                          </Card.Text>
                          {OrderService.canCancelOrder(order) && (
                            <Button
                              variant="warning"
                              size="sm"
                              onClick={() => testCancelOrder(order.id)}
                              disabled={loading}
                            >
                              Cancel Order
                            </Button>
                          )}
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  )
} 