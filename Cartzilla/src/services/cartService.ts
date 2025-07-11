import { botbleAPI } from './api';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  price_formatted: string;
  image: string;
  qty: number;
  slug: string;
}

export interface CartData {
  id: string;
  cart_items: CartItem[];
  count: number;
  raw_total: number;
  raw_total_formatted: string;
  sub_total: number;
  sub_total_formatted: string;
  tax_amount: number;
  tax_amount_formatted: string;
  promotion_discount_amount: number;
  promotion_discount_amount_formatted: string;
  coupon_discount_amount: number;
  coupon_discount_amount_formatted: string;
  applied_coupon_code: string | null;
  order_total: number;
  order_total_formatted: string;
}

export interface TaxCalculationResult {
  items: Array<{
    product_id: number;
    price: number;
    price_formatted: string;
    quantity: number;
    tax_rate: number;
    tax_amount: number;
    tax_amount_formatted: string;
    subtotal: number;
    subtotal_formatted: string;
    total: number;
    total_formatted: string;
  }>;
  totals: {
    sub_total: number;
    sub_total_formatted: string;
    tax_amount: number;
    tax_amount_formatted: string;
    total: number;
    total_formatted: string;
  };
}

class CartService {
  private static instance: CartService;
  private cartId: string | null = null;

  private constructor() {
    // Initialize cart ID from localStorage
    if (typeof window !== 'undefined') {
      this.cartId = localStorage.getItem('cart_id');
      if (!this.cartId) {
        this.cartId = this.generateCartId();
        localStorage.setItem('cart_id', this.cartId);
      }
    }
  }

  public static getInstance(): CartService {
    if (!CartService.instance) {
      CartService.instance = new CartService();
    }
    return CartService.instance;
  }

  private generateCartId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  getCartId(): string | null {
    return this.cartId;
  }

  // Add product to cart
  async addToCart(productId: number, qty: number = 1): Promise<{ success: boolean; message: string; data?: any }> {
    try {
      const response = await botbleAPI.addToCart(productId, qty);
      return {
        success: response.success,
        message: response.message || 'Operation completed',
        data: response.data
      };
    } catch (error) {
      console.error('Add to cart error:', error);
      return {
        success: false,
        message: 'Failed to add product to cart'
      };
    }
  }

  // Update cart item quantity
  async updateCartItem(productId: number, qty: number): Promise<{ success: boolean; message: string; data?: any }> {
    if (!this.cartId) {
      return {
        success: false,
        message: 'Cart ID not found'
      };
    }

    try {
      const response = await botbleAPI.updateCartItem(this.cartId, productId, qty);
      return {
        success: response.success,
        message: response.message || 'Operation completed',
        data: response.data
      };
    } catch (error) {
      console.error('Update cart item error:', error);
      return {
        success: false,
        message: 'Failed to update cart item'
      };
    }
  }

  // Remove item from cart
  async removeFromCart(productId: number): Promise<{ success: boolean; message: string; data?: any }> {
    if (!this.cartId) {
      return {
        success: false,
        message: 'Cart ID not found'
      };
    }

    try {
      const response = await botbleAPI.removeFromCart(this.cartId, productId);
      return {
        success: response.success,
        message: response.message || 'Operation completed',
        data: response.data
      };
    } catch (error) {
      console.error('Remove from cart error:', error);
      return {
        success: false,
        message: 'Failed to remove item from cart'
      };
    }
  }

  // Get cart data
  async getCart(customerId?: number): Promise<{ success: boolean; message: string; data?: CartData }> {
    if (!this.cartId) {
      return {
        success: false,
        message: 'Cart ID not found'
      };
    }

    try {
      const response = await botbleAPI.getCart(this.cartId, customerId);
      return {
        success: response.success,
        message: response.message || 'Operation completed',
        data: response.data
      };
    } catch (error) {
      console.error('Get cart error:', error);
      return {
        success: false,
        message: 'Failed to get cart'
      };
    }
  }

  // Refresh cart
  async refreshCart(products: string[]): Promise<{ success: boolean; message: string; data?: any }> {
    try {
      const response = await botbleAPI.refreshCart(products);
      return {
        success: response.success,
        message: response.message || 'Operation completed',
        data: response.data
      };
    } catch (error) {
      console.error('Refresh cart error:', error);
      return {
        success: false,
        message: 'Failed to refresh cart'
      };
    }
  }

  // Calculate tax
  async calculateTax(products: string[], location?: {
    country?: string;
    state?: string;
    city?: string;
    zip_code?: string;
  }): Promise<{ success: boolean; message: string; data?: TaxCalculationResult }> {
    try {
      const response = await botbleAPI.calculateTax(products, location);
      return {
        success: response.success,
        message: response.message || 'Operation completed',
        data: response.data
      };
    } catch (error) {
      console.error('Calculate tax error:', error);
      return {
        success: false,
        message: 'Failed to calculate tax'
      };
    }
  }

  // Process checkout
  async processCheckout(): Promise<{ success: boolean; message: string; redirect?: string }> {
    if (!this.cartId) {
      return {
        success: false,
        message: 'Cart ID not found'
      };
    }

    try {
      const response = await botbleAPI.processCheckout(this.cartId);
      return {
        success: response.success,
        message: response.message || 'Operation completed',
        redirect: response.redirect || undefined
      };
    } catch (error) {
      console.error('Process checkout error:', error);
      return {
        success: false,
        message: 'Failed to process checkout'
      };
    }
  }

  // Clear cart (local)
  clearCart(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cart_id');
      this.cartId = null;
    }
  }

  // Get cart count
  async getCartCount(): Promise<number> {
    try {
      const response = await this.getCart();
      if (response.success && response.data) {
        return response.data.count || 0;
      }
      return 0;
    } catch (error) {
      return 0;
    }
  }

  // Get cart total
  async getCartTotal(): Promise<{ total: number; formatted: string }> {
    try {
      const response = await this.getCart();
      if (response.success && response.data) {
        return {
          total: response.data.order_total || 0,
          formatted: response.data.order_total_formatted || '$0.00'
        };
      }
      return { total: 0, formatted: '$0.00' };
    } catch (error) {
      return { total: 0, formatted: '$0.00' };
    }
  }
}

export const cartService = CartService.getInstance(); 