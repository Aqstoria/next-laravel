'use client';

import React, { useState, useEffect } from 'react';
import { ProductService } from '@/services/products';

interface Category {
  id: number;
  name: string;
  slug: string;
  icon?: string;
  image_with_sizes?: {
    origin: string;
    thumb: string;
    medium: string;
    rectangle: string;
  } | null;
  is_featured?: boolean;
}

interface Brand {
  id: number;
  name: string;
  slug: string;
  logo?: string;
  description?: string;
  is_featured?: boolean;
}

export default function TestAPIIntegration() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch categories and brands in parallel
        const [categoriesResponse, brandsResponse] = await Promise.all([
          ProductService.getCategories(),
          ProductService.getBrands()
        ]);

        if (categoriesResponse.data) {
          setCategories(categoriesResponse.data);
        }

        if (brandsResponse.data) {
          setBrands(brandsResponse.data);
        }

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Testing API integration...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">API Integration Error</h4>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="mb-4">API Integration Test</h1>
          <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">✅ API Integration Successful!</h4>
            <p>The frontend is now successfully communicating with the backend API.</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">
                <i className="ci-category me-2"></i>
                Categories ({categories.length})
              </h5>
            </div>
            <div className="card-body">
              <div className="row g-3">
                {categories.slice(0, 10).map((category) => (
                  <div key={category.id} className="col-6">
                    <div className="d-flex align-items-center p-2 border rounded">
                      {category.image_with_sizes?.thumb && (
                        <img 
                          src={category.image_with_sizes.thumb} 
                          alt={category.name}
                          className="me-2"
                          style={{ width: '30px', height: '30px', objectFit: 'cover' }}
                        />
                      )}
                      <div>
                        <div className="fw-bold small">{category.name}</div>
                        <small className="text-muted">{category.slug}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {categories.length > 10 && (
                <p className="text-muted mt-3 mb-0">
                  Showing first 10 of {categories.length} categories
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">
                <i className="ci-star me-2"></i>
                Brands ({brands.length})
              </h5>
            </div>
            <div className="card-body">
              <div className="row g-3">
                {brands.slice(0, 10).map((brand) => (
                  <div key={brand.id} className="col-6">
                    <div className="d-flex align-items-center p-2 border rounded">
                      {brand.logo && (
                        <img 
                          src={brand.logo} 
                          alt={brand.name}
                          className="me-2"
                          style={{ width: '30px', height: '30px', objectFit: 'cover' }}
                        />
                      )}
                      <div>
                        <div className="fw-bold small">{brand.name}</div>
                        <small className="text-muted">{brand.slug}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {brands.length > 10 && (
                <p className="text-muted mt-3 mb-0">
                  Showing first 10 of {brands.length} brands
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">API Response Details</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Categories Response</h6>
                  <pre className="bg-light p-3 rounded small" style={{ fontSize: '0.75rem' }}>
                    {JSON.stringify(categories.slice(0, 3), null, 2)}
                  </pre>
                </div>
                <div className="col-md-6">
                  <h6>Brands Response</h6>
                  <pre className="bg-light p-3 rounded small" style={{ fontSize: '0.75rem' }}>
                    {JSON.stringify(brands.slice(0, 3), null, 2)}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 