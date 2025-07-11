'use client'

import React, { useState, useEffect } from 'react'
import { useCart } from '@/contexts/cart-context'
import { useAuth } from '@/contexts/auth-context'
import { OrderService, type CreateOrderRequest } from '@/services/orders'
import { botbleAPI } from '@/services/api'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Badge from 'react-bootstrap/Badge'

interface TestResult {
  test: string
  success: boolean
  message: string
  data?: any
  timestamp: string
}

export default function TestOrderCreationPage() {
  const { cart, calculateTotal, clearCart, removeFromCart, addToCart } = useCart('electronics')
  const { user, isAuthenticated, isLoading: authLoading, login } = useAuth()
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [loading, setLoading] = useState(false)
  const [orders, setOrders] = useState<any[]>([])
  const [currentTest, setCurrentTest] = useState('')
  const [orderForm, setOrderForm] = useState({
    name: 'Test User',
    phone: '+1234567890',
    email: 'test@example.com',
    address: '123 Test Street',
    city: 'Test City',
    state: 'Test State',
    country: 'Test Country',
    zip_code: '12345',
    shipping_method: 'default',
    payment_method: 'cod',
    coupon_code: '',
    note: 'Test order from frontend',
  })

  const [loginForm, setLoginForm] = useState({
    email: 'test@example.com',
    password: 'password'
  })

  const addTestResult = (test: string, success: boolean, message: string, data?: any) => {
    const result: TestResult = {
      test,
      success,
      message,
      data,
      timestamp: new Date().toLocaleString(),
    }
    setTestResults(prev => [result, ...prev])
  }

  const testAuthentication = async () => {
    setCurrentTest('Authentication Test')
    setLoading(true)
    try {
      if (!isAuthenticated) {
        // Try to login with test credentials
        const result = await login('test@example.com', 'password')
        if (result.success) {
          addTestResult('Authentication', true, 'Login successful', { user: result })
        } else {
          addTestResult('Authentication', false, 'Botble CMS uses customer authentication, not API authentication', result)
        }
      } else {
        addTestResult('Authentication', true, 'User already authenticated', { user })
      }
    } catch (err: any) {
      addTestResult('Authentication', false, `Authentication error: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  const testAddToCart = async () => {
    setCurrentTest('Add to Cart Test')
    setLoading(true)
    try {
      await addToCart({
        id: '1',
        image: '/img/shop/products/01.jpg',
        title: 'Test Product 1',
        href: '/shop/electronics/product?slug=test-product-1',
        price: [29.99, 39.99],
        quantity: 1,
      })
      addTestResult('Add to Cart', true, 'Product added to cart successfully', { cartLength: cart.length + 1 })
    } catch (err: any) {
      addTestResult('Add to Cart', false, `Add to cart error: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  const testGetOrders = async () => {
    setCurrentTest('Get Orders Test')
    setLoading(true)
    try {
      if (!isAuthenticated) {
        addTestResult('Get Orders', false, 'User not authenticated - please login first')
        return
      }

      const response = await botbleAPI.getOrders()
      setOrders(response.data || [])
      addTestResult('Get Orders', true, `Retrieved ${response.data?.length || 0} orders`, response)
    } catch (err: any) {
      addTestResult('Get Orders', false, `Get orders error: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  const testCreateOrder = async () => {
    setCurrentTest('Create Order Test')
    setLoading(true)
    try {
      if (!user || !isAuthenticated) {
        addTestResult('Create Order', false, 'User not authenticated - please login first')
        return
      }
      if (!cart || cart.length === 0) {
        addTestResult('Create Order', false, 'Cart is empty - add products to cart first')
        return
      }

      // Prepare products for API
      const products = cart.map(item => ({
        id: parseInt(item.id),
        quantity: item.quantity,
      }))

      const orderData: any = {
        customer_id: user.id,
        products,
        customer_address: {
          name: orderForm.name,
          phone: orderForm.phone,
          email: orderForm.email,
          address: orderForm.address,
          city: orderForm.city,
          state: orderForm.state,
          country: orderForm.country,
          zip_code: orderForm.zip_code,
        },
        payment_method: orderForm.payment_method,
        payment_status: 'pending',
        note: orderForm.note,
      }

      const result = await OrderService.createOrder(orderData)
      
      if (result.success) {
        addTestResult('Create Order', true, result.message, result)
        if (result.data) {
          addTestResult('Order Details', true, `Order ID: ${result.data.id}, Status: ${result.data.status}`, result.data)
        }
        clearCart() // Optionally clear cart after order
      } else {
        addTestResult('Create Order', false, result.message, result)
      }
      
      // Optionally: refresh orders list
      // await testGetOrders()
    } catch (err: any) {
      addTestResult('Create Order', false, `Create order error: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  const testCancelOrder = async (orderId: number) => {
    setCurrentTest('Cancel Order Test')
    setLoading(true)
    try {
      await OrderService.cancelOrder(orderId, 'OTHER', 'Test cancellation from frontend')
      addTestResult('Cancel Order', true, `Order ${orderId} cancelled successfully`)
      await testGetOrders() // Refresh list
    } catch (err: any) {
      addTestResult('Cancel Order', false, `Cancel order error: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  const testAPIHealth = async () => {
    setCurrentTest('API Health Check')
    setLoading(true)
    try {
      // Test basic API connectivity using Botble's ecommerce API
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1/ecommerce'}/products`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      })
      
      if (response.ok) {
        addTestResult('API Health', true, 'Botble CMS API is accessible and responding')
      } else {
        addTestResult('API Health', false, `API returned status ${response.status}`)
      }
    } catch (err: any) {
      addTestResult('API Health', false, `API health check failed: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  const runAllTests = async () => {
    setTestResults([])
    await testAPIHealth()
    await testAuthentication()
    await testAddToCart()
    
    // Only try to get orders and create orders if authenticated
    if (isAuthenticated) {
      await testGetOrders()
      await testCreateOrder()
    } else {
      addTestResult('Orders Tests', false, 'Skipped - user not authenticated')
    }
  }

  const handleFormChange = (field: string, value: string) => {
    setOrderForm(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <Container className="py-5">
      <h1 className="mb-4">Order Creation Test Suite</h1>
      
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Header>
              <h5>Test Controls</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex gap-2 flex-wrap">
                <Button variant="primary" onClick={runAllTests} disabled={loading}>
                  Run All Tests
                </Button>
                <Button variant="info" onClick={testAPIHealth} disabled={loading}>
                  Test API Health
                </Button>
                <Button variant="success" onClick={testAuthentication} disabled={loading}>
                  Test Authentication
                </Button>
                <Button variant="warning" onClick={testAddToCart} disabled={loading}>
                  Test Add to Cart
                </Button>
                <Button variant="secondary" onClick={testGetOrders} disabled={loading}>
                  Test Get Orders
                </Button>
                <Button variant="danger" onClick={testCreateOrder} disabled={loading}>
                  Test Create Order
                </Button>
                <Button variant="outline-secondary" onClick={clearCart} disabled={loading}>
                  Clear Cart
                </Button>
              </div>
              
              {loading && (
                <Alert variant="info" className="mt-3">
                  Running: {currentTest}
                </Alert>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {!isAuthenticated && (
        <Row className="mb-4">
          <Col>
            <Card>
              <Card.Header>
                <h5>Authentication Note</h5>
              </Card.Header>
              <Card.Body>
                <Alert variant="info">
                  <strong>Botble CMS Authentication:</strong><br />
                  Botble CMS uses customer authentication through the frontend, not API authentication. 
                  For a complete integration, you would need to:
                  <ul className="mt-2">
                    <li>Implement customer login/registration forms</li>
                    <li>Use Botble's customer authentication system</li>
                    <li>Handle session-based checkout process</li>
                    <li>Use Botble's frontend checkout flow</li>
                  </ul>
                </Alert>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          value={loginForm.email}
                          onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          value={loginForm.password}
                          onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                          disabled
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button 
                    variant="secondary" 
                    onClick={() => login(loginForm.email, loginForm.password)}
                    disabled={true}
                  >
                    API Login Not Available
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      <Row className="mb-4">
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h5>Current Status</h5>
            </Card.Header>
            <Card.Body>
              <p><strong>Authenticated:</strong> 
                <Badge bg={isAuthenticated ? 'success' : 'danger'} className="ms-2">
                  {isAuthenticated ? 'Yes' : 'No'}
                </Badge>
              </p>
              {user && (
                <p><strong>User:</strong> {user.name} ({user.email})</p>
              )}
              <p><strong>Cart Items:</strong> {cart.length}</p>
              <p><strong>Cart Total:</strong> ${calculateTotal().toFixed(2)}</p>
              <p><strong>Orders Found:</strong> {orders.length}</p>
              <p><strong>API URL:</strong> {process.env.NEXT_PUBLIC_API_URL}</p>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card>
            <Card.Header>
              <h5>Order Form</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={orderForm.name}
                        onChange={(e) => handleFormChange('name', e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="tel"
                        value={orderForm.phone}
                        onChange={(e) => handleFormChange('phone', e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={orderForm.email}
                    onChange={(e) => handleFormChange('email', e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={orderForm.address}
                    onChange={(e) => handleFormChange('address', e.target.value)}
                  />
                </Form.Group>
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-2">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        value={orderForm.city}
                        onChange={(e) => handleFormChange('city', e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-2">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        value={orderForm.state}
                        onChange={(e) => handleFormChange('state', e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-2">
                      <Form.Label>ZIP</Form.Label>
                      <Form.Control
                        type="text"
                        value={orderForm.zip_code}
                        onChange={(e) => handleFormChange('zip_code', e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Header>
              <h5>Test Results ({testResults.length})</h5>
            </Card.Header>
            <Card.Body>
              {testResults.length === 0 ? (
                <p className="text-muted">No tests run yet. Click "Run All Tests" to start.</p>
              ) : (
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Test</th>
                        <th>Status</th>
                        <th>Message</th>
                        <th>Timestamp</th>
                      </tr>
                    </thead>
                    <tbody>
                      {testResults.map((result, index) => (
                        <tr key={index}>
                          <td>{result.test}</td>
                          <td>
                            <Badge bg={result.success ? 'success' : 'danger'}>
                              {result.success ? 'PASS' : 'FAIL'}
                            </Badge>
                          </td>
                          <td>{result.message}</td>
                          <td>{result.timestamp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {orders.length > 0 && (
        <Row className="mb-4">
          <Col>
            <Card>
              <Card.Header>
                <h5>Orders ({orders.length})</h5>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Created</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order: any) => (
                        <tr key={order.id}>
                          <td>#{order.id}</td>
                          <td>
                            <Badge bg={
                              order.status === 'completed' ? 'success' :
                              order.status === 'pending' ? 'warning' :
                              order.status === 'canceled' ? 'danger' : 'secondary'
                            }>
                              {order.status}
                            </Badge>
                          </td>
                          <td>${order.amount}</td>
                          <td>{new Date(order.created_at).toLocaleDateString()}</td>
                          <td>
                            {OrderService.canCancelOrder(order) && (
                              <Button
                                variant="warning"
                                size="sm"
                                onClick={() => testCancelOrder(order.id)}
                                disabled={loading}
                              >
                                Cancel
                              </Button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {cart.length > 0 && (
        <Row className="mb-4">
          <Col>
            <Card>
              <Card.Header>
                <h5>Cart Items ({cart.length})</h5>
              </Card.Header>
              <Card.Body>
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item: any) => (
                        <tr key={item.id}>
                          <td>{item.title}</td>
                          <td>${item.price[0]}</td>
                          <td>{item.quantity}</td>
                          <td>${(item.price[0] * item.quantity).toFixed(2)}</td>
                          <td>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                              disabled={loading}
                            >
                              Remove
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  )
} 