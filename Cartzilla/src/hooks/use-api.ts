import { useState, useEffect, useCallback } from 'react'
import { botbleAPI } from '@/services/api'

interface UseApiOptions {
  revalidateOnFocus?: boolean
  revalidateOnReconnect?: boolean
  dedupingInterval?: number
}

interface UseApiReturn<T> {
  data: T | null
  error: Error | null
  loading: boolean
  mutate: () => Promise<void>
}

export function useApi<T>(
  key: string,
  fetcher: () => Promise<T>,
  options: UseApiOptions = {}
): UseApiReturn<T> {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const result = await fetcher()
      setData(result)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'))
    } finally {
      setLoading(false)
    }
  }, [fetcher])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  // Revalidate on focus
  useEffect(() => {
    if (!options.revalidateOnFocus) return

    const handleFocus = () => {
      fetchData()
    }

    window.addEventListener('focus', handleFocus)
    return () => window.removeEventListener('focus', handleFocus)
  }, [fetchData, options.revalidateOnFocus])

  // Revalidate on reconnect
  useEffect(() => {
    if (!options.revalidateOnReconnect) return

    const handleOnline = () => {
      fetchData()
    }

    window.addEventListener('online', handleOnline)
    return () => window.removeEventListener('online', handleOnline)
  }, [fetchData, options.revalidateOnReconnect])

  return {
    data,
    error,
    loading,
    mutate: fetchData,
  }
}

// Specific hooks for common API calls
export function useProducts(params?: {
  page?: number
  per_page?: number
  category?: string
  brand?: string
  search?: string
  sort?: string
}) {
  const key = `products_${JSON.stringify(params)}`
  return useApi(key, () => botbleAPI.getProducts(params), {
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  })
}

export function useProduct(slug: string) {
  const key = `product_${slug}`
  return useApi(key, () => botbleAPI.getProduct(slug), {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
  })
}

export function useCategories() {
  // Temporarily disable categories fetching to prevent 404 errors
  return {
    data: null,
    error: null,
    loading: false,
    mutate: async () => {},
  }
}

export function useBrands() {
  // Temporarily disable brands fetching to prevent 404 errors
  return {
    data: null,
    error: null,
    loading: false,
    mutate: async () => {},
  }
} 