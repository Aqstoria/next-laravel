'use client';

import React, { useState, useEffect } from 'react';
import { botbleAPI } from '../../services/api';

interface Review {
  id: number;
  user_name: string;
  rating: number;
  comment: string;
  created_at: string;
}

interface ProductReviewsProps {
  productId: number;
  productName: string;
}

export default function ProductReviews({ productId, productName }: ProductReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadReviews();
  }, [productId]);

  const loadReviews = async () => {
    try {
      setLoading(true);
      const response = await botbleAPI.getProductReviews(productId);
      
      if (response.data) {
        setReviews(response.data);
      }
    } catch (error) {
      console.error('Failed to load reviews:', error);
      setMessage({ type: 'error', text: 'Failed to load reviews' });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    try {
      const response = await botbleAPI.createReview({
        product_id: productId,
        rating: newReview.rating,
        comment: newReview.comment
      });

      if (response.success) {
        setMessage({ type: 'success', text: 'Review submitted successfully!' });
        setNewReview({ rating: 5, comment: '' });
        setShowReviewForm(false);
        loadReviews(); // Reload reviews
      } else {
        setMessage({ type: 'error', text: response.message || 'Failed to submit review' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to submit review' });
    } finally {
      setSubmitting(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`ci-star${i < rating ? '-filled' : ''}`}
        style={{ color: i < rating ? '#ffc107' : '#e4e5e9' }}
      ></i>
    ));
  };

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 0;

  if (loading) {
    return (
      <div className="card border-0 shadow-sm">
        <div className="card-body text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading reviews...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-header bg-light">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title mb-0">
            <i className="ci-chat me-2"></i>
            Customer Reviews
          </h5>
          <div className="d-flex align-items-center">
            <div className="me-3">
              <div className="d-flex align-items-center">
                {renderStars(Math.round(averageRating))}
                <span className="ms-2 text-muted">
                  {averageRating.toFixed(1)} ({reviews.length} reviews)
                </span>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => setShowReviewForm(!showReviewForm)}
            >
              <i className="ci-edit me-2"></i>
              Write Review
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        {message && (
          <div className={`alert alert-${message.type === 'success' ? 'success' : 'danger'} alert-dismissible fade show`} role="alert">
            {message.text}
            <button type="button" className="btn-close" onClick={() => setMessage(null)}></button>
          </div>
        )}

        {showReviewForm && (
          <div className="mb-4 p-3 border rounded">
            <h6>Write a Review for {productName}</h6>
            <form onSubmit={handleSubmitReview}>
              <div className="mb-3">
                <label className="form-label">Rating</label>
                <div className="d-flex align-items-center">
                  {Array.from({ length: 5 }, (_, i) => (
                    <button
                      key={i}
                      type="button"
                      className="btn btn-link p-0 me-1"
                      onClick={() => setNewReview(prev => ({ ...prev, rating: i + 1 }))}
                    >
                      <i
                        className={`ci-star${i < newReview.rating ? '-filled' : ''}`}
                        style={{ 
                          fontSize: '1.5rem',
                          color: i < newReview.rating ? '#ffc107' : '#e4e5e9' 
                        }}
                      ></i>
                    </button>
                  ))}
                  <span className="ms-2 text-muted">{newReview.rating} stars</span>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="comment" className="form-label">Comment</label>
                <textarea
                  id="comment"
                  className="form-control"
                  rows={4}
                  value={newReview.comment}
                  onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                  required
                  placeholder="Share your experience with this product..."
                ></textarea>
              </div>
              <div className="d-flex gap-2">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Submitting...
                    </>
                  ) : (
                    'Submit Review'
                  )}
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowReviewForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {reviews.length === 0 ? (
          <div className="text-center py-4">
            <i className="ci-chat text-muted" style={{ fontSize: '3rem' }}></i>
            <h6 className="mt-3 text-muted">No reviews yet</h6>
            <p className="text-muted">Be the first to review this product!</p>
          </div>
        ) : (
          <div className="reviews-list">
            {reviews.map((review) => (
              <div key={review.id} className="review-item border-bottom pb-3 mb-3">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <h6 className="mb-1">{review.user_name}</h6>
                    <div className="d-flex align-items-center">
                      {renderStars(review.rating)}
                      <small className="text-muted ms-2">
                        {new Date(review.created_at).toLocaleDateString()}
                      </small>
                    </div>
                  </div>
                </div>
                <p className="mb-0">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 