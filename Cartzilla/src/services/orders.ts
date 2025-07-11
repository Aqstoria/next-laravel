import { botbleAPI } from './api'

export interface OrderItem {
  id: number
  product_id: number
  product_name: string
  product_image: string
  qty: number
  price: number
  tax_amount: number
  options?: any
  product_type?: string
}

export interface OrderAddress {
  id?: number
  name: string
  phone: string
  email: string
  address: string
  city: string
  state: string
  country: string
  zip_code: string
  is_default?: boolean
}

export interface Order {
  id: number
  user_id: number
  address_id: number
  shipping_method: string
  shipping_option?: string
  shipping_amount: number
  tax_amount: number
  sub_total: number
  coupon_code?: string
  discount_amount: number
  amount: number
  currency: string
  status: string
  payment_status: string
  shipping_status: string
  token: string
  created_at: string
  updated_at: string
  address: OrderAddress
  products: OrderItem[]
  payment?: any
  shipment?: any
}

export interface CreateOrderRequest {
  address: OrderAddress
  shipping_method: string
  shipping_option?: string
  payment_method: string
  coupon_code?: string
  note?: string
}

export interface OrdersResponse {
  data: Order[]
  meta: {
    current_page: number
    last_page: number
    per_page: number
    total: number
  }
}

export class OrderService {
  static async getOrders(params?: {
    page?: number
    per_page?: number
    status?: string
    shipping_status?: string
    payment_status?: string
  }): Promise<OrdersResponse> {
    return botbleAPI.getOrders(params)
  }

  static async getOrder(id: number): Promise<Order> {
    return botbleAPI.getOrder(id)
  }

  static async cancelOrder(id: number, reason: string, description?: string): Promise<any> {
    return botbleAPI.cancelOrder(id, { cancellation_reason: reason, cancellation_reason_description: description })
  }

  static async getOrderInvoice(id: number): Promise<any> {
    return botbleAPI.getOrderInvoice(id)
  }

  static async uploadProof(id: number, file: File): Promise<any> {
    const formData = new FormData()
    formData.append('proof_file', file)
    return botbleAPI.uploadProof(id, formData)
  }

  static async downloadProof(id: number): Promise<any> {
    return botbleAPI.downloadProof(id)
  }

  static async confirmDelivery(id: number): Promise<any> {
    return botbleAPI.confirmDelivery(id)
  }

  // Create order directly through Botble CMS API
  static async createOrder(orderData: any): Promise<{ success: boolean; message: string; data?: any }> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(orderData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        return {
          success: true,
          message: 'Order created successfully in Botble CMS backend',
          data: result.data
        }
      } else {
        return {
          success: false,
          message: result.message || 'Failed to create order',
          data: result
        }
      }
    } catch (error) {
      console.error('Error creating order:', error);
      return {
        success: false,
        message: 'Failed to create order: ' + (error as Error).message,
      }
    }
  }

  // Helper methods for order formatting
  static formatOrderStatus(status: string): string {
    const statusMap: Record<string, string> = {
      pending: 'Pending',
      processing: 'Processing',
      completed: 'Completed',
      canceled: 'Canceled',
      refunded: 'Refunded',
    }
    return statusMap[status] || status
  }

  static formatPaymentStatus(status: string): string {
    const statusMap: Record<string, string> = {
      pending: 'Pending',
      completed: 'Completed',
      refunding: 'Refunding',
      refunded: 'Refunded',
      canceled: 'Canceled',
    }
    return statusMap[status] || status
  }

  static formatShippingStatus(status: string): string {
    const statusMap: Record<string, string> = {
      not_shipped: 'Not Shipped',
      delivering: 'Delivering',
      delivered: 'Delivered',
      canceled: 'Canceled',
    }
    return statusMap[status] || status
  }

  static getOrderTotal(order: Order): number {
    return order.amount
  }

  static getOrderSubtotal(order: Order): number {
    return order.sub_total
  }

  static getOrderShippingAmount(order: Order): number {
    return order.shipping_amount
  }

  static getOrderTaxAmount(order: Order): number {
    return order.tax_amount
  }

  static getOrderDiscountAmount(order: Order): number {
    return order.discount_amount
  }

  static getOrderItemsCount(order: Order): number {
    return order.products?.length || 0
  }

  static getOrderUrl(order: Order): string {
    return `/orders/${order.id}`
  }

  static canCancelOrder(order: Order): boolean {
    return order.status === 'pending' || order.status === 'processing'
  }

  static canConfirmDelivery(order: Order): boolean {
    return order.shipping_status === 'delivering'
  }
} 