'use client';

import React, { useState, useEffect } from 'react';
import { botbleAPI } from '../../services/api';
import OrderList from '../../components/order/OrderList';
import UserProfile from '../../components/account/UserProfile';
import Wishlist from '../../components/account/Wishlist';
import ProductReviews from '../../components/reviews/ProductReviews';

export default function TestIntegrationPage() {
  const [apiStatus, setApiStatus] = useState<{
    backend: boolean;
    products: boolean;
    orders: boolean;
    auth: boolean;
  }>({
    backend: false,
    products: false,
    orders: false,
    auth: false,
  });
  const [testResults, setTestResults] = useState<any>({});

  useEffect(() => {
    testAPIConnections();
  }, []);

  const testAPIConnections = async () => {
    const results: any = {};

    // Test backend health
    try {
      const healthResponse = await fetch('http://localhost:8000/api/v1/health');
      results.backend = healthResponse.ok;
      setApiStatus(prev => ({ ...prev, backend: healthResponse.ok }));
    } catch (error) {
      results.backend = false;
      setApiStatus(prev => ({ ...prev, backend: false }));
    }

    // Test products API
    try {
      const productsResponse = await fetch('http://localhost:8000/api/v1/ecommerce/products');
      results.products = productsResponse.ok;
      setApiStatus(prev => ({ ...prev, products: productsResponse.ok }));
    } catch (error) {
      results.products = false;
      setApiStatus(prev => ({ ...prev, products: false }));
    }

    // Test orders API
    try {
      const ordersResponse = await fetch('http://localhost:8000/api/v1/ecommerce/orders');
      results.orders = ordersResponse.ok;
      setApiStatus(prev => ({ ...prev, orders: ordersResponse.ok }));
    } catch (error) {
      results.orders = false;
      setApiStatus(prev => ({ ...prev, orders: ordersResponse.ok }));
    }

    // Test auth API
    try {
      const authResponse = await fetch('http://localhost:8000/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'test@test.com', password: 'password' })
      });
      results.auth = authResponse.status === 401 || authResponse.status === 422; // Expected to fail with invalid credentials
      setApiStatus(prev => ({ ...prev, auth: results.auth }));
    } catch (error) {
      results.auth = false;
      setApiStatus(prev => ({ ...prev, auth: false }));
    }

    setTestResults(results);
  };

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <h1 className="mb-4">Cartzilla + Botble Integration Test</h1>
          
          {/* API Status */}
          <div className="card mb-4">
            <div className="card-header">
              <h5>API Connection Status</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <div className={`alert alert-${apiStatus.backend ? 'success' : 'danger'}`}>
                    <strong>Backend:</strong> {apiStatus.backend ? 'Connected' : 'Failed'}
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={`alert alert-${apiStatus.products ? 'success' : 'danger'}`}>
                    <strong>Products API:</strong> {apiStatus.products ? 'Working' : 'Failed'}
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={`alert alert-${apiStatus.orders ? 'success' : 'danger'}`}>
                    <strong>Orders API:</strong> {apiStatus.orders ? 'Working' : 'Failed'}
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={`alert alert-${apiStatus.auth ? 'success' : 'danger'}`}>
                    <strong>Auth API:</strong> {apiStatus.auth ? 'Working' : 'Failed'}
                  </div>
                </div>
              </div>
              <button 
                className="btn btn-primary"
                onClick={testAPIConnections}
              >
                Retest Connections
              </button>
            </div>
          </div>

          {/* Test Components */}
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-header">
                  <h5>Order List Component</h5>
                </div>
                <div className="card-body">
                  <OrderList showFilters={false} />
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-header">
                  <h5>User Profile Component</h5>
                </div>
                <div className="card-body">
                  <UserProfile />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-header">
                  <h5>Wishlist Component</h5>
                </div>
                <div className="card-body">
                  <Wishlist />
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-header">
                  <h5>Product Reviews Component</h5>
                </div>
                <div className="card-body">
                  <ProductReviews productId={1} productName="Test Product" />
                </div>
              </div>
            </div>
          </div>

          {/* Environment Info */}
          <div className="card">
            <div className="card-header">
              <h5>Environment Information</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Frontend Environment</h6>
                  <ul className="list-unstyled">
                    <li><strong>API URL:</strong> {process.env.NEXT_PUBLIC_API_URL}</li>
                    <li><strong>E-commerce URL:</strong> {process.env.NEXT_PUBLIC_ECOMMERCE_API_URL}</li>
                    <li><strong>Auth URL:</strong> {process.env.NEXT_PUBLIC_AUTH_URL}</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6>Backend Status</h6>
                  <ul className="list-unstyled">
                    <li><strong>Backend URL:</strong> http://localhost:8000</li>
                    <li><strong>API Version:</strong> v1</li>
                    <li><strong>CORS:</strong> Configured for localhost:3000</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 