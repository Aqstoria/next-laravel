'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/components/logo';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { useAuth } from '@/contexts/auth-context';
import { useOrder } from '@/contexts/order-context';
import OrderList from '@/components/order/OrderList';

const DashboardPage = () => {
  const { user, logout, isLoading, isAuthenticated } = useAuth();
  const { state: orderState } = useOrder();
  const [activeTab, setActiveTab] = useState('overview');

  // Set document title
  useEffect(() => {
    document.title = 'Cartzilla | Account Dashboard';
  }, []);

  // Debug authentication state
  useEffect(() => {
    console.log('Auth Debug:', {
      user,
      isAuthenticated,
      isLoading,
      hasToken: !!localStorage.getItem('auth_token')
    });
  }, [user, isAuthenticated, isLoading]);

  const handleLogout = () => {
    logout();
  };

  // Show loading state
  if (isLoading) {
    return (
      <main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto" style={{ maxWidth: 1920 }}>
        <div className="d-lg-flex">
          <div className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5" style={{ maxWidth: 416 }}>
            <header className="navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4">
              <Logo className="pt-0">Cartzilla</Logo>
            </header>
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3 text-muted">Checking authentication...</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!user || !isAuthenticated) {
    return (
      <main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto" style={{ maxWidth: 1920 }}>
        <div className="d-lg-flex">
          <div className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5" style={{ maxWidth: 416 }}>
            <header className="navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4">
              <Logo className="pt-0">Cartzilla</Logo>
            </header>
            <div className="text-center">
              <h1 className="h2">Access Denied</h1>
              <p className="text-muted">Please log in to access your dashboard.</p>
              <Button as={Link} href="/account" variant="primary">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="content-wrapper w-100 px-3 ps-lg-5 pe-lg-4 mx-auto" style={{ maxWidth: 1920 }}>
      <div className="d-lg-flex">
        <div className="d-flex flex-column min-vh-100 w-100 py-4 mx-auto me-lg-5" style={{ maxWidth: 1200 }}>
          {/* Header / Logo */}
          <header className="navbar px-0 pb-4 mt-n2 mt-sm-0 mb-2 mb-md-3 mb-lg-4">
            <Logo className="pt-0">Cartzilla</Logo>
            <div className="ms-auto">
              <Button variant="outline-secondary" onClick={handleLogout}>
                <i className="ci-sign-out me-2"></i>
                Sign Out
              </Button>
            </div>
          </header>

          {/* Welcome Section */}
          <div className="mb-4">
            <h1 className="h2">Welcome back, {user.name || user.email}!</h1>
            <p className="text-muted">Manage your account, orders, and preferences.</p>
          </div>

          {/* Navigation Tabs */}
          <Nav variant="tabs" className="mb-4">
            <Nav.Item>
              <NavLink 
                active={activeTab === 'overview'} 
                onClick={() => setActiveTab('overview')}
                className="cursor-pointer"
              >
                <i className="ci-dashboard me-2"></i>
                Overview
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink 
                active={activeTab === 'orders'} 
                onClick={() => setActiveTab('orders')}
                className="cursor-pointer"
              >
                <i className="ci-package me-2"></i>
                My Orders
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink 
                active={activeTab === 'profile'} 
                onClick={() => setActiveTab('profile')}
                className="cursor-pointer"
              >
                <i className="ci-user me-2"></i>
                Profile
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink 
                active={activeTab === 'addresses'} 
                onClick={() => setActiveTab('addresses')}
                className="cursor-pointer"
              >
                <i className="ci-location me-2"></i>
                Addresses
              </NavLink>
            </Nav.Item>
          </Nav>

          {/* Tab Content */}
          <div className="tab-content">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <Row className="g-4 mb-4">
                  <Col md={6} lg={3}>
                    <Card className="border-0 shadow-sm">
                      <Card.Body className="text-center">
                        <i className="ci-package text-primary" style={{ fontSize: '2rem' }}></i>
                        <h5 className="mt-3 mb-1">{orderState.pagination?.total || 0}</h5>
                        <p className="text-muted mb-0">Total Orders</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6} lg={3}>
                    <Card className="border-0 shadow-sm">
                      <Card.Body className="text-center">
                        <i className="ci-time text-warning" style={{ fontSize: '2rem' }}></i>
                        <h5 className="mt-3 mb-1">
                          {orderState.orders.filter(order => order.status === 'pending').length}
                        </h5>
                        <p className="text-muted mb-0">Pending Orders</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6} lg={3}>
                    <Card className="border-0 shadow-sm">
                      <Card.Body className="text-center">
                        <i className="ci-check-circle text-success" style={{ fontSize: '2rem' }}></i>
                        <h5 className="mt-3 mb-1">
                          {orderState.orders.filter(order => order.status === 'completed').length}
                        </h5>
                        <p className="text-muted mb-0">Completed Orders</p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6} lg={3}>
                    <Card className="border-0 shadow-sm">
                      <Card.Body className="text-center">
                        <i className="ci-star text-info" style={{ fontSize: '2rem' }}></i>
                        <h5 className="mt-3 mb-1">0</h5>
                        <p className="text-muted mb-0">Reviews</p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                <Row>
                  <Col lg={8}>
                    <Card className="border-0 shadow-sm">
                      <Card.Header className="bg-light">
                        <h5 className="card-title mb-0">
                          <i className="ci-package me-2"></i>
                          Recent Orders
                        </h5>
                      </Card.Header>
                      <Card.Body className="p-0">
                        {orderState.orders.slice(0, 5).length === 0 ? (
                          <div className="text-center py-5">
                            <i className="ci-package text-muted" style={{ fontSize: '3rem' }}></i>
                            <h5 className="mt-3 text-muted">No orders yet</h5>
                            <p className="text-muted">Start shopping to see your orders here.</p>
                            <Button as={Link} href="/shop/electronics" variant="primary">
                              Start Shopping
                            </Button>
                          </div>
                        ) : (
                          <div className="table-responsive">
                            <table className="table table-hover mb-0">
                              <thead className="table-light">
                                <tr>
                                  <th>Order</th>
                                  <th>Date</th>
                                  <th>Status</th>
                                  <th>Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                {orderState.orders.slice(0, 5).map((order) => (
                                  <tr key={order.id}>
                                    <td>
                                      <strong>#{order.code}</strong>
                                    </td>
                                    <td>{new Date(order.created_at).toLocaleDateString()}</td>
                                    <td>
                                      <Badge bg="primary">{order.status}</Badge>
                                    </td>
                                    <td>
                                      <strong>${order.amount}</strong>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={4}>
                    <Card className="border-0 shadow-sm">
                      <Card.Header className="bg-light">
                        <h5 className="card-title mb-0">
                          <i className="ci-user me-2"></i>
                          Account Info
                        </h5>
                      </Card.Header>
                      <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                          <div className="flex-shrink-0">
                            <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                              <i className="ci-user text-white"></i>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="mb-1">{user.name || 'User'}</h6>
                            <p className="text-muted mb-0">{user.email}</p>
                          </div>
                        </div>
                        <div className="border-top pt-3">
                          <div className="d-flex justify-content-between mb-2">
                            <span>Member since:</span>
                            <span>{user.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>Account status:</span>
                            <Badge bg="success">Active</Badge>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div>
                <OrderList />
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div>
                <Card className="border-0 shadow-sm">
                  <Card.Header className="bg-light">
                    <h5 className="card-title mb-0">
                      <i className="ci-user me-2"></i>
                      Profile Information
                    </h5>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col md={6}>
                        <div className="mb-3">
                          <label className="form-label">Full Name</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            value={user.name || ''} 
                            readOnly 
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="mb-3">
                          <label className="form-label">Email Address</label>
                          <input 
                            type="email" 
                            className="form-control" 
                            value={user.email || ''} 
                            readOnly 
                          />
                        </div>
                      </Col>
                    </Row>
                    <div className="text-center mt-4">
                      <p className="text-muted">
                        Profile information is managed through the Botble CMS admin panel.
                      </p>
                      <Button variant="outline-primary">
                        <i className="ci-settings me-2"></i>
                        Manage in Admin Panel
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div>
                <Card className="border-0 shadow-sm">
                  <Card.Header className="bg-light">
                    <h5 className="card-title mb-0">
                      <i className="ci-location me-2"></i>
                      Shipping Addresses
                    </h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="text-center py-5">
                      <i className="ci-location text-muted" style={{ fontSize: '3rem' }}></i>
                      <h5 className="mt-3 text-muted">No addresses saved</h5>
                      <p className="text-muted">Add your shipping addresses to speed up checkout.</p>
                      <Button variant="primary">
                        <i className="ci-plus me-2"></i>
                        Add Address
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            )}
          </div>

          {/* Footer */}
          <footer className="mt-auto pt-4">
            <p className="fs-xs mb-0 text-center text-muted">
              &copy; All rights reserved. Made by{' '}
              <span className="animate-underline">
                <a
                  className="animate-target text-dark-emphasis text-decoration-none"
                  href="https://createx.studio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Createx Studio
                </a>
              </span>
            </p>
          </footer>
        </div>

        {/* Cover image visible on screens > 992px wide (lg breakpoint) */}
        <div className="d-none d-lg-block w-100 py-4 ms-auto" style={{ maxWidth: 1034 }}>
          <div className="d-flex flex-column justify-content-end h-100 rounded-5 overflow-hidden">
            <span
              className="position-absolute top-0 start-0 w-100 h-100 d-none-dark"
              style={{ background: 'linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)' }}
            />
            <span
              className="position-absolute top-0 start-0 w-100 h-100 d-none d-block-dark"
              style={{ background: 'linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)' }}
            />
            <Image
              priority
              src="/img/account/cover.png"
              width={2068}
              height={2064}
              className="position-relative z-2"
              alt="Dashboard"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage; 