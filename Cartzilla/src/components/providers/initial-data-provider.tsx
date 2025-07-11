'use client'

import { useEffect, useState } from 'react'
import { BrandProvider, Brand } from '@/contexts/BrandContext'
import { ProductService } from '@/services/products'

interface InitialDataProviderProps {
  children: React.ReactNode
}

export default function InitialDataProvider({ children }: InitialDataProviderProps) {
  const [initialBrands, setInitialBrands] = useState<Brand[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Temporarily disable brands fetching to prevent 404 errors
    // ProductService.getBrands()
    //   .then((response) => {
    //     setInitialBrands(response.data || [])
    //   })
    //   .catch((error) => {
    //     console.warn('Failed to fetch initial brands:', error.message)
    //     setInitialBrands([])
    //   })
    //   .finally(() => {
    //     setIsLoading(false)
    //   })
    
    // Set empty brands and finish loading immediately
    setInitialBrands([])
    setIsLoading(false)
  }, [])

  // During SSR, render children immediately without loading state
  if (!isClient) {
    return (
      <BrandProvider initialBrands={[]}>
        {children}
      </BrandProvider>
    )
  }

  // On client side, show loading state if needed
  if (isLoading) {
    return (
      <BrandProvider initialBrands={[]}>
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </BrandProvider>
    )
  }

  return (
    <BrandProvider initialBrands={initialBrands}>
      {children}
    </BrandProvider>
  )
} 