import { botbleAPI } from './api'

export interface Product {
  id: number
  name: string
  slug: string
  description?: string
  content?: string
  images: string[]
  price: number
  sale_price?: number
  sale_type?: string
  start_date?: string
  end_date?: string
  sku?: string
  barcode?: string
  length?: number
  wide?: number
  height?: number
  weight?: number
  is_variation?: boolean
  is_featured?: boolean
  is_popular?: boolean
  is_best_seller?: boolean
  is_on_sale?: boolean
  is_out_of_stock?: boolean
  stock_status?: string
  quantity?: number
  with_storehouse_management?: boolean
  allow_checkout_when_out_of_stock?: boolean
  views?: number
  order?: number
  created_at: string
  updated_at: string
  brand_id?: number
  brand?: Brand
  categories?: Category[]
  tags?: Tag[]
  variations?: ProductVariation[]
  attributes?: ProductAttribute[]
  options?: ProductOption[]
  cross_sale_products?: Product[]
  up_sale_products?: Product[]
  related_products?: Product[]
  reviews?: ProductReview[]
  average_rating?: number
  total_reviews?: number
}

export interface Category {
  id: number
  name: string
  slug: string
  description?: string
  content?: string
  image?: string
  icon?: string
  icon_image?: string | null
  image_with_sizes?: {
    origin: string
    thumb: string
    medium: string
    rectangle: string
  } | null
  is_featured?: boolean
  is_default?: boolean
  order?: number
  parent_id?: number
  parent?: Category
  children?: Category[]
  products_count?: number
  created_at: string
  updated_at: string
}

export interface Brand {
  id: number
  name: string
  slug: string
  description?: string
  content?: string
  logo?: string
  website?: string
  order?: number
  is_featured?: boolean
  products_count?: number
  created_at: string
  updated_at: string
}

export interface Tag {
  id: number
  name: string
  slug: string
  created_at: string
  updated_at: string
}

export interface ProductVariation {
  id: number
  product_id: number
  configurable_product_id: number
  is_default?: boolean
  price: number
  sale_price?: number
  sale_type?: string
  start_date?: string
  end_date?: string
  sku?: string
  barcode?: string
  length?: number
  wide?: number
  height?: number
  weight?: number
  stock_status?: string
  quantity?: number
  with_storehouse_management?: boolean
  allow_checkout_when_out_of_stock?: boolean
  created_at: string
  updated_at: string
  attributes?: ProductAttribute[]
}

export interface ProductAttribute {
  id: number
  name: string
  value: string
  attribute_set_id: number
  created_at: string
  updated_at: string
}

export interface ProductOption {
  id: number
  name: string
  price: number
  price_type: string
  created_at: string
  updated_at: string
}

export interface ProductReview {
  id: number
  product_id: number
  customer_id: number
  order_id: number
  star: number
  comment?: string
  status: string
  created_at: string
  updated_at: string
  customer?: Customer
}

export interface Customer {
  id: number
  name: string
  email: string
  phone?: string
  avatar?: string
  created_at: string
  updated_at: string
}

export interface ProductsResponse {
  data: Product[]
  meta: {
    current_page: number
    last_page: number
    per_page: number
    total: number
  }
}

export interface CategoriesResponse {
  data: Category[]
  meta: {
    current_page: number
    last_page: number
    per_page: number
    total: number
  }
}

export interface BrandsResponse {
  data: Brand[]
  meta: {
    current_page: number
    last_page: number
    per_page: number
    total: number
  }
}

export class ProductService {
  // Get all products with pagination and filters
  static async getProducts(params?: {
    page?: number
    per_page?: number
    category?: string
    brand?: string
    search?: string
    sort?: string
    min_price?: number
    max_price?: number
    is_featured?: boolean
    is_popular?: boolean
    is_best_seller?: boolean
    is_on_sale?: boolean
  }): Promise<ProductsResponse> {
    const response = await botbleAPI.getProducts(params)
    if (response.success && response.data) {
      return {
        data: response.data,
        meta: response.meta || {
          current_page: 1,
          last_page: 1,
          per_page: response.data.length,
          total: response.data.length
        }
      }
    }
    return { data: [], meta: { current_page: 1, last_page: 1, per_page: 0, total: 0 } }
  }

  // Get a single product by slug
  static async getProduct(slug: string): Promise<Product> {
    const response = await botbleAPI.getProduct(slug)
    if (response.success && response.data) {
      return response.data
    }
    throw new Error(response.message || 'Product not found')
  }

  // Get related products
  static async getRelatedProducts(slug: string): Promise<Product[]> {
    // For now, return empty array as this endpoint doesn't exist yet
    return []
  }

  // Get product reviews
  static async getProductReviews(productId: number): Promise<ProductReview[]> {
    const response = await botbleAPI.getProductReviews(productId)
    if (response.success && response.data) {
      return response.data
    }
    return []
  }

  // Get all categories
  static async getCategories(): Promise<CategoriesResponse> {
    const response = await botbleAPI.getCategories()
    if (response.success && response.data) {
      const categories = response.data as Category[]
      return {
        data: categories,
        meta: response.meta || {
          current_page: 1,
          last_page: 1,
          per_page: categories.length,
          total: categories.length
        }
      }
    }
    return { data: [], meta: { current_page: 1, last_page: 1, per_page: 0, total: 0 } }
  }

  // Get a single category by slug
  static async getCategory(slug: string): Promise<Category> {
    // For now, return a mock category as this endpoint doesn't exist yet
    throw new Error('Category endpoint not implemented yet')
  }

  // Get products by category
  static async getCategoryProducts(id: number): Promise<ProductsResponse> {
    // For now, return empty products as this endpoint doesn't exist yet
    return { data: [], meta: { current_page: 1, last_page: 1, per_page: 0, total: 0 } }
  }

  // Get all brands
  static async getBrands(): Promise<BrandsResponse> {
    const response = await botbleAPI.getBrands()
    if (response.success && response.data) {
      const brands = response.data as Brand[]
      return {
        data: brands,
        meta: response.meta || {
          current_page: 1,
          last_page: 1,
          per_page: brands.length,
          total: brands.length
        }
      }
    }
    return { data: [], meta: { current_page: 1, last_page: 1, per_page: 0, total: 0 } }
  }

  // Get a single brand by slug
  static async getBrand(slug: string): Promise<Brand> {
    // For now, return a mock brand as this endpoint doesn't exist yet
    throw new Error('Brand endpoint not implemented yet')
  }

  // Get products by brand
  static async getBrandProducts(id: number): Promise<ProductsResponse> {
    // For now, return empty products as this endpoint doesn't exist yet
    return { data: [], meta: { current_page: 1, last_page: 1, per_page: 0, total: 0 } }
  }

  // Helper methods for product formatting
  static getProductPrice(product: Product): number {
    return product.sale_price && product.sale_price > 0 ? product.sale_price : product.price
  }

  static getProductOriginalPrice(product: Product): number {
    return product.price
  }

  static isProductOnSale(product: Product): boolean {
    return !!(product.sale_price && product.sale_price > 0 && product.sale_price < product.price)
  }

  static getProductDiscountPercentage(product: Product): number {
    if (!this.isProductOnSale(product)) return 0
    return Math.round(((product.price - product.sale_price!) / product.price) * 100)
  }

  static getProductImage(product: Product, index: number = 0): string {
    if (product.images && product.images.length > 0) {
      return product.images[index] || product.images[0]
    }
    return '/img/shop/products/placeholder.jpg'
  }

  static getProductUrl(product: Product): string {
    return `/shop/electronics/product?slug=${product.slug}`
  }

  static getCategoryUrl(category: Category): string {
    return `/shop/categories/${category.slug}`
  }

  static getBrandUrl(brand: Brand): string {
    return `/shop/brands/${brand.slug}`
  }

  static formatProductPrice(price: number): string {
    return `$${price.toFixed(2)}`
  }

  static getProductStockStatus(product: Product): string {
    if (product.is_out_of_stock) return 'Out of Stock'
    if (product.stock_status === 'in_stock') return 'In Stock'
    if (product.stock_status === 'on_backorder') return 'On Backorder'
    return 'Unknown'
  }

  static canAddToCart(product: Product): boolean {
    return !product.is_out_of_stock && product.stock_status !== 'out_of_stock'
  }
} 