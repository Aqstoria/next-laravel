import { useState, useEffect, useCallback, useRef } from 'react'
import { ProductService } from '@/services/products'
import { Product } from '@/services/products'

interface PaginationOptions {
  pageSize?: number
  initialPage?: number
  category?: string
  brand?: string
  search?: string
  sort?: string
  minPrice?: number
  maxPrice?: number
}

interface PaginationState {
  products: Product[]
  loading: boolean
  error: string | null
  hasMore: boolean
  currentPage: number
  totalPages: number
  totalItems: number
}

export function usePagination(options: PaginationOptions = {}) {
  const {
    pageSize = 12,
    initialPage = 1,
    category,
    brand,
    search,
    sort,
    minPrice,
    maxPrice,
  } = options

  const [state, setState] = useState<PaginationState>({
    products: [],
    loading: false,
    error: null,
    hasMore: true,
    currentPage: initialPage,
    totalPages: 0,
    totalItems: 0,
  })

  const [filters, setFilters] = useState({
    category: category || undefined,
    brand: brand || undefined,
    search: search || undefined,
    sort: sort || undefined,
    minPrice: minPrice || undefined,
    maxPrice: maxPrice || undefined,
  })

  const observerRef = useRef<IntersectionObserver>()
  const loadingRef = useRef<HTMLDivElement>(null)

  // Load products for a specific page
  const loadPage = useCallback(async (page: number, append = false) => {
    setState(prev => ({ ...prev, loading: true, error: null }))

    try {
      const response = await ProductService.getProducts({
        page,
        per_page: pageSize,
        ...filters,
      })

      const newProducts = response.data || []
      const totalPages = response.meta?.last_page || 0
      const totalItems = response.meta?.total || 0

      setState(prev => ({
        ...prev,
        products: append ? [...prev.products, ...newProducts] : newProducts,
        loading: false,
        hasMore: page < totalPages,
        currentPage: page,
        totalPages,
        totalItems,
      }))
    } catch (error) {
      console.error('Error loading products:', error)
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'Failed to load products',
      }))
    }
  }, [pageSize, filters])

  // Load initial page
  useEffect(() => {
    loadPage(initialPage)
  }, [loadPage, initialPage])

  // Load next page for infinite scroll
  const loadNextPage = useCallback(() => {
    if (!state.loading && state.hasMore) {
      loadPage(state.currentPage + 1, true)
    }
  }, [state.loading, state.hasMore, state.currentPage, loadPage])

  // Set up intersection observer for infinite scroll
  useEffect(() => {
    if (!loadingRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && state.hasMore && !state.loading) {
          loadNextPage()
        }
      },
      { threshold: 0.1 }
    )

    observerRef.current = observer
    observer.observe(loadingRef.current)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [state.hasMore, state.loading, loadNextPage])

  // Update filters and reload
  const updateFilters = useCallback((newFilters: Partial<typeof filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
    setState(prev => ({
      ...prev,
      products: [],
      currentPage: 1,
      hasMore: true,
    }))
  }, [])

  // Refresh current page
  const refresh = useCallback(() => {
    loadPage(state.currentPage)
  }, [loadPage, state.currentPage])

  // Go to specific page
  const goToPage = useCallback((page: number) => {
    if (page >= 1 && page <= state.totalPages) {
      loadPage(page)
    }
  }, [loadPage, state.totalPages])

  // Go to next page
  const nextPage = useCallback(() => {
    if (state.currentPage < state.totalPages) {
      loadPage(state.currentPage + 1)
    }
  }, [loadPage, state.currentPage, state.totalPages])

  // Go to previous page
  const prevPage = useCallback(() => {
    if (state.currentPage > 1) {
      loadPage(state.currentPage - 1)
    }
  }, [loadPage, state.currentPage])

  return {
    ...state,
    loadNextPage,
    updateFilters,
    refresh,
    goToPage,
    nextPage,
    prevPage,
    loadingRef,
    filters,
  }
}

// Hook for simple pagination without infinite scroll
export function useSimplePagination(options: PaginationOptions = {}) {
  const {
    pageSize = 12,
    initialPage = 1,
    category,
    brand,
    search,
    sort,
    minPrice,
    maxPrice,
  } = options

  const [state, setState] = useState<PaginationState>({
    products: [],
    loading: false,
    error: null,
    hasMore: false,
    currentPage: initialPage,
    totalPages: 0,
    totalItems: 0,
  })

  const [filters, setFilters] = useState({
    category: category || undefined,
    brand: brand || undefined,
    search: search || undefined,
    sort: sort || undefined,
    minPrice: minPrice || undefined,
    maxPrice: maxPrice || undefined,
  })

  const loadPage = useCallback(async (page: number) => {
    setState(prev => ({ ...prev, loading: true, error: null }))

    try {
      const response = await ProductService.getProducts({
        page,
        per_page: pageSize,
        ...filters,
      })

      const products = response.data || []
      const totalPages = response.meta?.last_page || 0
      const totalItems = response.meta?.total || 0

      setState({
        products,
        loading: false,
        error: null,
        hasMore: page < totalPages,
        currentPage: page,
        totalPages,
        totalItems,
      })
    } catch (error) {
      console.error('Error loading products:', error)
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'Failed to load products',
      }))
    }
  }, [pageSize, filters])

  useEffect(() => {
    loadPage(initialPage)
  }, [loadPage, initialPage])

  const updateFilters = useCallback((newFilters: Partial<typeof filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
    setState(prev => ({
      ...prev,
      products: [],
      currentPage: 1,
      hasMore: false,
    }))
  }, [])

  const goToPage = useCallback((page: number) => {
    if (page >= 1 && page <= state.totalPages) {
      loadPage(page)
    }
  }, [loadPage, state.totalPages])

  const nextPage = useCallback(() => {
    if (state.currentPage < state.totalPages) {
      loadPage(state.currentPage + 1)
    }
  }, [loadPage, state.currentPage, state.totalPages])

  const prevPage = useCallback(() => {
    if (state.currentPage > 1) {
      loadPage(state.currentPage - 1)
    }
  }, [loadPage, state.currentPage])

  return {
    ...state,
    updateFilters,
    goToPage,
    nextPage,
    prevPage,
    filters,
  }
} 