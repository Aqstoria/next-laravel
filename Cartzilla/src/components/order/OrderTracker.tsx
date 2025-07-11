'use client';

import React, { useState } from 'react';
import { useOrder } from '../../contexts/order-context';
import { orderService } from '../../services/orderService';

interface OrderTrackerProps {
  className?: string;
}

export default function OrderTracker({ className = '' }: OrderTrackerProps) {
  const { trackOrder, state } = useOrder();
  const [orderCode, setOrderCode] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const handleTrackOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!orderCode.trim()) {
      return;
    }

    setIsTracking(true);
    try {
      const result = await trackOrder(orderCode, email || undefined, phone || undefined);
      
      if (result) {
        // Order found and loaded into context
        console.log('Order tracked successfully:', result);
      }
    } catch (error) {
      console.error('Error tracking order:', error);
    } finally {
      setIsTracking(false);
    }
  };

  const handleClear = () => {
    setOrderCode('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className={`card border-0 shadow-sm ${className}`}>
      <div className="card-header bg-primary text-white">
        <h5 className="card-title mb-0">
          <i className="ci-location me-2"></i>
          Track Your Order
        </h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleTrackOrder}>
          <div className="mb-3">
            <label htmlFor="orderCode" className="form-label">
              Order Code <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="orderCode"
              value={orderCode}
              onChange={(e) => setOrderCode(e.target.value)}
              placeholder="Enter your order code"
              required
            />
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            
            <div className="col-md-6 mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {state.error && (
            <div className="alert alert-danger" role="alert">
              {state.error}
            </div>
          )}

          <div className="d-flex gap-2">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isTracking || !orderCode.trim()}
            >
              {isTracking ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Tracking...
                </>
              ) : (
                <>
                  <i className="ci-search me-2"></i>
                  Track Order
                </>
              )}
            </button>
            
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleClear}
              disabled={isTracking}
            >
              Clear
            </button>
          </div>
        </form>

        {state.currentOrder && (
          <div className="mt-4">
            <div className="alert alert-success" role="alert">
              <h6 className="alert-heading">Order Found!</h6>
              <p className="mb-0">
                Order Code: <strong>{state.currentOrder.code}</strong><br />
                Status: <span className={`badge ${orderService.getOrderStatusColor(state.currentOrder.status)}`}>
                  {orderService.getOrderStatusText(state.currentOrder.status)}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 