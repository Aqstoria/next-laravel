'use client';

import React, { useState, useEffect } from 'react';
import { botbleAPI } from '../../services/api';

interface WishlistItem {
  id: number;
  name: string;
  slug: string;
  price: number;
  image: string;
  description?: string;
}

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = async () => {
    try {
      setLoading(true);
      const response = await botbleAPI.getWishlist();
      
      if (response.data) {
        setWishlist(response.data);
      }
    } catch (error) {
      console.error('Failed to load wishlist:', error);
      setMessage({ type: 'error', text: 'Failed to load wishlist' });
    } finally {
      setLoading(false);
    }
  };

  const removeFromWishlist = async (productId: number) => {
    try {
      const response = await botbleAPI.removeFromWishlist(productId);
      
      if (response.success) {
        setWishlist(prev => prev.filter(item => item.id !== productId));
        setMessage({ type: 'success', text: 'Item removed from wishlist' });
      } else {
        setMessage({ type: 'error', text: response.message || 'Failed to remove item' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to remove item from wishlist' });
    }
  };

  const addToCart = async (productId: number) => {
    try {
      const response = await botbleAPI.addToCart(productId, 1);
      
      if (response.success) {
        setMessage({ type: 'success', text: 'Item added to cart' });
      } else {
        setMessage({ type: 'error', text: response.message || 'Failed to add to cart' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to add item to cart' });
    }
  };

  if (loading) {
    return (
      <div className="card border-0 shadow-sm">
        <div className="card-body text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading wishlist...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-header bg-light">
        <h5 className="card-title mb-0">
          <i className="ci-heart me-2"></i>
          My Wishlist
        </h5>
      </div>
      <div className="card-body">
        {message && (
          <div className={`alert alert-${message.type === 'success' ? 'success' : 'danger'} alert-dismissible fade show`} role="alert">
            {message.text}
            <button type="button" className="btn-close" onClick={() => setMessage(null)}></button>
          </div>
        )}

        {wishlist.length === 0 ? (
          <div className="text-center py-5">
            <i className="ci-heart text-muted" style={{ fontSize: '3rem' }}></i>
            <h5 className="mt-3 text-muted">Your wishlist is empty</h5>
            <p className="text-muted">Start adding products to your wishlist!</p>
          </div>
        ) : (
          <div className="row">
            {wishlist.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100">
                  <div className="position-relative">
                    <img
                      src={item.image || '/img/shop/catalog/01.jpg'}
                      className="card-img-top"
                      alt={item.name}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-danger position-absolute top-0 end-0 m-2"
                      onClick={() => removeFromWishlist(item.id)}
                      title="Remove from wishlist"
                    >
                      <i className="ci-close"></i>
                    </button>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title">{item.name}</h6>
                    <p className="card-text text-muted small">
                      {item.description?.substring(0, 100)}...
                    </p>
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="h5 mb-0 text-primary">
                          ${item.price?.toFixed(2) || '0.00'}
                        </span>
                      </div>
                      <div className="d-grid gap-2">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                          onClick={() => addToCart(item.id)}
                        >
                          <i className="ci-cart-plus me-2"></i>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 