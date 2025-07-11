'use client';

import React from 'react';
import { useOrder } from '../../contexts/order-context';
import { orderService } from '../../services/orderService';

interface OrderDetailsProps {
  className?: string;
}

export default function OrderDetails({ className = '' }: OrderDetailsProps) {
  const { state } = useOrder();
  const { currentOrder } = state;

  if (!currentOrder) {
    return null;
  }

  return (
    <div className={`card border-0 shadow-sm ${className}`}>
      <div className="card-header bg-light">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title mb-0">
            <i className="ci-package me-2"></i>
            Order Details
          </h5>
          <span className={`badge fs-6 ${orderService.getOrderStatusColor(currentOrder.status)}`}>
            {orderService.getOrderStatusText(currentOrder.status)}
          </span>
        </div>
      </div>
      
      <div className="card-body">
        {/* Order Summary */}
        <div className="row mb-4">
          <div className="col-md-6">
            <h6 className="fw-bold">Order Information</h6>
            <ul className="list-unstyled">
              <li><strong>Order Code:</strong> {currentOrder.code}</li>
              <li><strong>Order Date:</strong> {orderService.formatDate(currentOrder.created_at)}</li>
              <li><strong>Order ID:</strong> #{currentOrder.id}</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h6 className="fw-bold">Payment Information</h6>
            <ul className="list-unstyled">
              <li><strong>Subtotal:</strong> {orderService.formatAmount(currentOrder.sub_total)}</li>
              <li><strong>Shipping:</strong> {orderService.formatAmount(currentOrder.shipping_amount)}</li>
              <li><strong>Tax:</strong> {orderService.formatAmount(currentOrder.tax_amount)}</li>
              <li><strong>Discount:</strong> -{orderService.formatAmount(currentOrder.discount_amount)}</li>
              <li className="fw-bold text-primary fs-5">
                <strong>Total:</strong> {orderService.formatAmount(currentOrder.amount)}
              </li>
            </ul>
          </div>
        </div>

        {/* Shipping Address */}
        {currentOrder.address && (
          <div className="mb-4">
            <h6 className="fw-bold">Shipping Address</h6>
            <div className="border rounded p-3 bg-light">
              <p className="mb-1"><strong>{currentOrder.address.name}</strong></p>
              <p className="mb-1">{currentOrder.address.email}</p>
              <p className="mb-1">{currentOrder.address.phone}</p>
              <p className="mb-0">
                {currentOrder.address.address}<br />
                {currentOrder.address.city}, {currentOrder.address.state} {currentOrder.address.zip_code}<br />
                {currentOrder.address.country}
              </p>
            </div>
          </div>
        )}

        {/* Order Products */}
        <div className="mb-4">
          <h6 className="fw-bold">Order Items</h6>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>Product</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-end">Price</th>
                  <th className="text-end">Total</th>
                </tr>
              </thead>
              <tbody>
                {currentOrder.products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 me-3">
                          <div className="bg-light rounded" style={{ width: '40px', height: '40px' }}></div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-0">{product.name}</h6>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">{product.qty}</td>
                    <td className="text-end">{orderService.formatAmount(product.price)}</td>
                    <td className="text-end">{orderService.formatAmount(product.price * product.qty)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Shipping Information */}
        {currentOrder.shipment && (
          <div className="mb-4">
            <h6 className="fw-bold">Shipping Information</h6>
            <div className="border rounded p-3 bg-light">
              <div className="row">
                <div className="col-md-6">
                  <p className="mb-1">
                    <strong>Status:</strong> 
                    <span className={`badge ms-2 ${orderService.getShippingStatusColor(currentOrder.shipment.status)}`}>
                      {orderService.getShippingStatusText(currentOrder.shipment.status)}
                    </span>
                  </p>
                  {currentOrder.shipment.tracking_id && (
                    <p className="mb-1">
                      <strong>Tracking ID:</strong> {currentOrder.shipment.tracking_id}
                    </p>
                  )}
                </div>
                <div className="col-md-6">
                  {currentOrder.shipment.tracking_link && (
                    <a 
                      href={currentOrder.shipment.tracking_link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm"
                    >
                      <i className="ci-location me-1"></i>
                      Track Package
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Payment Information */}
        {currentOrder.payment && (
          <div className="mb-4">
            <h6 className="fw-bold">Payment Information</h6>
            <div className="border rounded p-3 bg-light">
              <div className="row">
                <div className="col-md-6">
                  <p className="mb-1">
                    <strong>Status:</strong> 
                    <span className={`badge ms-2 ${orderService.getPaymentStatusColor(currentOrder.payment.status)}`}>
                      {orderService.getPaymentStatusText(currentOrder.payment.status)}
                    </span>
                  </p>
                  <p className="mb-1">
                    <strong>Method:</strong> {currentOrder.payment.payment_channel}
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="mb-0">
                    <strong>Amount:</strong> {orderService.formatAmount(currentOrder.payment.amount)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Order History */}
        {currentOrder.histories && currentOrder.histories.length > 0 && (
          <div className="mb-4">
            <h6 className="fw-bold">Order History</h6>
            <div className="timeline">
              {currentOrder.histories.map((history, index) => (
                <div key={history.id} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-1">{history.action}</h6>
                      <small className="text-muted">
                        {orderService.formatDate(history.created_at)}
                      </small>
                    </div>
                    <p className="mb-0 text-muted">{history.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="d-flex gap-2 flex-wrap">
          <button className="btn btn-outline-primary">
            <i className="ci-download me-2"></i>
            Download Invoice
          </button>
          <button className="btn btn-outline-secondary">
            <i className="ci-print me-2"></i>
            Print Invoice
          </button>
          {currentOrder.status === 'pending' && (
            <button className="btn btn-outline-danger">
              <i className="ci-close me-2"></i>
              Cancel Order
            </button>
          )}
          {currentOrder.status === 'delivering' && (
            <button className="btn btn-outline-success">
              <i className="ci-check me-2"></i>
              Confirm Delivery
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 