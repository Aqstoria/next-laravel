"use client"
import axiosInstance from '@/utils/axiosInstance'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

export interface Brand {
  id: number;
  name: string;
  slug: string;
  logo: string;
  logo_with_sizes?: {
    thumb?: string;
    origin?: string;
    medium?: string;
    rectangle?: string;
  };
}

interface BrandContextType {
  brands: Brand[];
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

interface BrandProviderProps {
  children: ReactNode;
  initialBrands?: Brand[];
}

export const BrandProvider = ({ children, initialBrands = [] }: BrandProviderProps) => {
  const [brands, setBrands] = useState<Brand[]>(initialBrands);

  useEffect(() => {
    // Temporarily disable brands fetching to prevent 404 errors
    // Only fetch brands if no initial brands were provided
    // if (initialBrands.length === 0) {
    //   // Try to fetch brands, but don't fail if API is not available
    //   axiosInstance
    //     .get('/api/v1/ecommerce/brands')
    //     .then((res) => {
    //       setBrands(res.data.data);
    //     })
    //     .catch((err) => {
    //       console.warn("Brands API not available, using empty brands:", err.message);
    //       setBrands([]);
    //     });
    // }
    
    // Set empty brands to prevent API calls
    setBrands([]);
  }, [initialBrands]);

  return (
    <BrandContext.Provider value={{ brands }}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrands = (): BrandContextType => {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrands must be used within a BrandProvider');
  }
  return context;
};
