import { botbleAPI } from './api'

interface GraphQLQuery {
  query: string
  variables?: Record<string, any>
}

interface GraphQLResponse<T = any> {
  data?: T
  errors?: Array<{
    message: string
    locations?: Array<{ line: number; column: number }>
    path?: string[]
  }>
}

class GraphQLService {
  private baseURL: string
  private cache: Map<string, { data: any; timestamp: number }> = new Map()
  private cacheTimeout: number = 5 * 60 * 1000 // 5 minutes

  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:8000/graphql'
  }

  private getCachedData(key: string) {
    const cached = this.cache.get(key)
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data
    }
    return null
  }

  private setCachedData(key: string, data: any) {
    this.cache.set(key, { data, timestamp: Date.now() })
  }

  async query<T = any>(query: string, variables?: Record<string, any>): Promise<GraphQLResponse<T>> {
    const cacheKey = `${query}_${JSON.stringify(variables)}`
    const cached = this.getCachedData(cacheKey)
    if (cached) return cached

    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null
      
      const response = await fetch(this.baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      })

      if (!response.ok) {
        throw new Error(`GraphQL request failed: ${response.status}`)
      }

      const result: GraphQLResponse<T> = await response.json()
      
      if (result.errors) {
        console.error('GraphQL errors:', result.errors)
        throw new Error(result.errors[0]?.message || 'GraphQL query failed')
      }

      this.setCachedData(cacheKey, result)
      return result
    } catch (error) {
      console.error('GraphQL query error:', error)
      throw error
    }
  }

  // Predefined queries for common operations
  async getProductWithDetails(slug: string) {
    const query = `
      query GetProduct($slug: String!) {
        product(slug: $slug) {
          id
          name
          slug
          description
          content
          price
          sale_price
          sku
          images
          brand {
            id
            name
            slug
          }
          categories {
            id
            name
            slug
          }
          reviews {
            id
            star
            comment
            customer {
              name
            }
            created_at
          }
          average_rating
          total_reviews
          stock_status
          quantity
          is_out_of_stock
        }
      }
    `

    return this.query(query, { slug })
  }

  async getProductsWithFilters(filters: {
    category?: string
    brand?: string
    minPrice?: number
    maxPrice?: number
    search?: string
    page?: number
    perPage?: number
  }) {
    const query = `
      query GetProducts($filters: ProductFiltersInput) {
        products(filters: $filters) {
          data {
            id
            name
            slug
            price
            sale_price
            images
            brand {
              name
            }
            categories {
              name
            }
            average_rating
            total_reviews
            stock_status
          }
          meta {
            current_page
            last_page
            per_page
            total
          }
        }
      }
    `

    return this.query(query, { filters })
  }

  async getCategoriesWithProducts() {
    const query = `
      query GetCategories {
        categories {
          id
          name
          slug
          image
          products_count
          children {
            id
            name
            slug
            products_count
          }
        }
      }
    `

    return this.query(query)
  }

  async getBrandsWithProducts() {
    const query = `
      query GetBrands {
        brands {
          id
          name
          slug
          logo
          products_count
        }
      }
    `

    return this.query(query)
  }

  async getCartWithDetails() {
    const query = `
      query GetCart {
        cart {
          items {
            id
            product {
              id
              name
              slug
              price
              images
            }
            quantity
            price
          }
          total
          items_count
        }
      }
    `

    return this.query(query)
  }

  async addToCart(productId: number, quantity: number = 1) {
    const mutation = `
      mutation AddToCart($productId: Int!, $quantity: Int!) {
        addToCart(productId: $productId, quantity: $quantity) {
          success
          message
          cart {
            items {
              id
              product {
                id
                name
                price
              }
              quantity
              price
            }
            total
            items_count
          }
        }
      }
    `

    return this.query(mutation, { productId, quantity })
  }

  async updateCartItem(itemId: number, quantity: number) {
    const mutation = `
      mutation UpdateCartItem($itemId: Int!, $quantity: Int!) {
        updateCartItem(itemId: $itemId, quantity: $quantity) {
          success
          message
          cart {
            items {
              id
              product {
                id
                name
                price
              }
              quantity
              price
            }
            total
            items_count
          }
        }
      }
    `

    return this.query(mutation, { itemId, quantity })
  }

  async removeFromCart(itemId: number) {
    const mutation = `
      mutation RemoveFromCart($itemId: Int!) {
        removeFromCart(itemId: $itemId) {
          success
          message
          cart {
            items {
              id
              product {
                id
                name
                price
              }
              quantity
              price
            }
            total
            items_count
          }
        }
      }
    `

    return this.query(mutation, { itemId })
  }
}

export const graphQLService = new GraphQLService() 