'use client';

import React from 'react';
import { OrderProvider } from '../../contexts/order-context';
import OrderTracker from '../../components/order/OrderTracker';
import OrderDetails from '../../components/order/OrderDetails';

export default function OrderTrackingPage() {
  return (
    <OrderProvider>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Page Header */}
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bold mb-3">
                <i className="ci-location text-primary me-3"></i>
                Track Your Order
              </h1>
              <p className="lead text-muted">
                Enter your order code to track the status of your order and view detailed information
              </p>
            </div>

            {/* Order Tracker */}
            <div className="row">
              <div className="col-lg-4 mb-4">
                <OrderTracker />
              </div>
              
              <div className="col-lg-8">
                <OrderDetails />
              </div>
            </div>

            {/* Additional Information */}
            <div className="row mt-5">
              <div className="col-12">
                <div className="card border-0 bg-light">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="ci-info-circle text-primary me-2"></i>
                      Need Help?
                    </h5>
                    <p className="card-text">
                      If you're having trouble tracking your order or need assistance, please contact our customer support team.
                    </p>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="d-flex align-items-center mb-3">
                          <i className="ci-phone text-primary me-3 fs-4"></i>
                          <div>
                            <h6 className="mb-1">Call Us</h6>
                            <p className="mb-0 text-muted">+1 (555) 123-4567</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="d-flex align-items-center mb-3">
                          <i className="ci-mail text-primary me-3 fs-4"></i>
                          <div>
                            <h6 className="mb-1">Email Us</h6>
                            <p className="mb-0 text-muted">support@example.com</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="d-flex align-items-center mb-3">
                          <i className="ci-chat text-primary me-3 fs-4"></i>
                          <div>
                            <h6 className="mb-1">Live Chat</h6>
                            <p className="mb-0 text-muted">Available 24/7</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OrderProvider>
  );
} 