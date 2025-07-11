import useSWR from 'swr'
import { ProductService, type Product, type ProductsResponse, type ProductCategory, type Brand } from '@/services/products'

// Fetcher function for SWR
const fetcher = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return response.json()
}

// Custom hook for products with SWR
export const useProducts = (params?: {
  page?: number
  per_page?: number
  category?: string
  brand?: string
  search?: string
  sort?: string
  price_min?: number
  price_max?: number
}) => {
  const queryString = params ? new URLSearchParams(params as Record<string, any>).toString() : ''
  const key = queryString ? `/api/products?${queryString}` : '/api/products'

  const { data, error, isLoading, mutate } = useSWR<ProductsResponse>(
    key,
    () => ProductService.getProducts(params),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1 minute
    }
  )

  return {
    products: data?.data || [],
    meta: data?.meta,
    isLoading,
    error,
    mutate,
  }
}

// Custom hook for a single product
export const useProduct = (slug: string) => {
  const { data, error, isLoading, mutate } = useSWR<Product>(
    slug ? `/api/products/${slug}` : null,
    () => ProductService.getProduct(slug),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 300000, // 5 minutes
    }
  )

  return {
    product: data,
    isLoading,
    error,
    mutate,
  }
}

// Custom hook for product categories
export const useCategories = () => {
  // Temporarily disable categories fetching to prevent 404 errors
  return {
    categories: [],
    isLoading: false,
    error: null,
    mutate: () => {},
  }
}

// Custom hook for brands
export const useBrands = () => {
  // Temporarily disable brands fetching to prevent 404 errors
  return {
    brands: [],
    isLoading: false,
    error: null,
    mutate: () => {},
  }
}

// Custom hook for related products
export const useRelatedProducts = (slug: string) => {
  const { data, error, isLoading, mutate } = useSWR<Product[]>(
    slug ? `/api/products/${slug}/related` : null,
    () => ProductService.getRelatedProducts(slug),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 300000, // 5 minutes
    }
  )

  return {
    relatedProducts: data || [],
    isLoading,
    error,
    mutate,
  }
}

// Custom hook for product reviews
export const useProductReviews = (slug: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    slug ? `/api/products/${slug}/reviews` : null,
    () => ProductService.getProductReviews(slug),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 300000, // 5 minutes
    }
  )

  return {
    reviews: data || [],
    isLoading,
    error,
    mutate,
  }
}

// Custom hook for flash sale products
export const useFlashSaleProducts = () => {
  const { data, error, isLoading, mutate } = useSWR<Product[]>(
    '/api/flash-sales',
    () => ProductService.getFlashSaleProducts(),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1 minute for flash sales
    }
  )

  return {
    flashSaleProducts: data || [],
    isLoading,
    error,
    mutate,
  }
}

// Custom hook for search products
export const useSearchProducts = (query: string, params?: {
  page?: number
  per_page?: number
  category?: string
  brand?: string
  sort?: string
}) => {
  const searchParams = { ...params, search: query }
  const queryString = new URLSearchParams(searchParams as Record<string, any>).toString()
  const key = query ? `/api/search?${queryString}` : null

  const { data, error, isLoading, mutate } = useSWR<ProductsResponse>(
    key,
    () => ProductService.searchProducts(query, params),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 60000, // 1 minute
    }
  )

  return {
    products: data?.data || [],
    meta: data?.meta,
    isLoading,
    error,
    mutate,
  }
} 