'use client';

import React, { useState, useEffect } from 'react';
import { useOrder } from '../../contexts/order-context';
import { orderService } from '../../services/orderService';

interface OrderListProps {
  className?: string;
  showFilters?: boolean;
}

export default function OrderList({ className = '', showFilters = true }: OrderListProps) {
  const { getOrders, state } = useOrder();
  const [filters, setFilters] = useState({
    status: '',
    shipping_status: '',
    payment_status: '',
    per_page: 10
  });

  useEffect(() => {
    getOrders(filters);
  }, [filters, getOrders]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handlePageChange = (page: number) => {
    // In a real implementation, you would update the page parameter
    console.log('Page changed to:', page);
  };

  return (
    <div className={`card border-0 shadow-sm ${className}`}>
      <div className="card-header bg-light">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title mb-0">
            <i className="ci-package me-2"></i>
            My Orders
          </h5>
          <span className="badge bg-primary">
            {state.pagination?.total || 0} Orders
          </span>
        </div>
      </div>

      {showFilters && (
        <div className="card-body border-bottom">
          <div className="row g-3">
            <div className="col-md-3">
              <label className="form-label">Order Status</label>
              <select
                className="form-select"
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
              >
                <option value="">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="completed">Completed</option>
                <option value="canceled">Canceled</option>
                <option value="refunded">Refunded</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">Shipping Status</label>
              <select
                className="form-select"
                value={filters.shipping_status}
                onChange={(e) => handleFilterChange('shipping_status', e.target.value)}
              >
                <option value="">All Shipping Statuses</option>
                <option value="not_shipped">Not Shipped</option>
                <option value="delivering">Delivering</option>
                <option value="delivered">Delivered</option>
                <option value="canceled">Canceled</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">Payment Status</label>
              <select
                className="form-select"
                value={filters.payment_status}
                onChange={(e) => handleFilterChange('payment_status', e.target.value)}
              >
                <option value="">All Payment Statuses</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="refunding">Refunding</option>
                <option value="refunded">Refunded</option>
                <option value="canceled">Canceled</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">Per Page</label>
              <select
                className="form-select"
                value={filters.per_page}
                onChange={(e) => handleFilterChange('per_page', e.target.value)}
              >
                <option value={5}>5 per page</option>
                <option value={10}>10 per page</option>
                <option value={20}>20 per page</option>
                <option value={50}>50 per page</option>
              </select>
            </div>
          </div>
        </div>
      )}

      <div className="card-body p-0">
        {state.loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3 text-muted">Loading orders...</p>
          </div>
        ) : state.error ? (
          <div className="alert alert-danger m-3" role="alert">
            {state.error}
          </div>
        ) : state.orders.length === 0 ? (
          <div className="text-center py-5">
            <i className="ci-package text-muted" style={{ fontSize: '3rem' }}></i>
            <h5 className="mt-3 text-muted">No orders found</h5>
            <p className="text-muted">You haven't placed any orders yet.</p>
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
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {state.orders.map((order) => (
                  <tr key={order.id}>
                    <td>
                      <div>
                        <strong className="d-block">#{order.code}</strong>
                        <small className="text-muted">ID: {order.id}</small>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="d-block">{orderService.formatDate(order.created_at)}</div>
                        <small className="text-muted">
                          {new Date(order.created_at).toLocaleDateString()}
                        </small>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column gap-1">
                        <span className={`badge ${orderService.getOrderStatusColor(order.status)}`}>
                          {orderService.getOrderStatusText(order.status)}
                        </span>
                        {order.shipment && (
                          <span className={`badge ${orderService.getShippingStatusColor(order.shipment.status)}`}>
                            {orderService.getShippingStatusText(order.shipment.status)}
                          </span>
                        )}
                      </div>
                    </td>
                    <td>
                      <strong className="text-primary">
                        {orderService.formatAmount(order.amount)}
                      </strong>
                    </td>
                    <td>
                      <div className="btn-group btn-group-sm" role="group">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          title="View Details"
                        >
                          <i className="ci-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          title="Download Invoice"
                        >
                          <i className="ci-download"></i>
                        </button>
                        {order.status === 'pending' && (
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            title="Cancel Order"
                          >
                            <i className="ci-close"></i>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination */}
      {state.pagination && state.pagination.last_page > 1 && (
        <div className="card-footer">
          <nav aria-label="Order pagination">
            <ul className="pagination pagination-sm justify-content-center mb-0">
              <li className={`page-item ${state.pagination?.current_page === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange((state.pagination?.current_page || 1) - 1)}
                  disabled={state.pagination?.current_page === 1}
                >
                  Previous
                </button>
              </li>
              
              {Array.from({ length: state.pagination?.last_page || 1 }, (_, i) => i + 1).map((page) => (
                <li
                  key={page}
                  className={`page-item ${page === state.pagination?.current_page ? 'active' : ''}`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                </li>
              ))}
              
              <li className={`page-item ${state.pagination?.current_page === state.pagination?.last_page ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange((state.pagination?.current_page || 1) + 1)}
                  disabled={state.pagination?.current_page === state.pagination?.last_page}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
} 