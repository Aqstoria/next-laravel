'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { botbleAPI } from '@/services/api';

interface CartItem {
  id: number;
  name: string;
  title: string;
  price: number[];
  price_formatted: string;
  image: string;
  qty: number;
  quantity: number;
  slug: string;
  href: string;
  badge?: [string, string];
  license?: string;
  description?: string;
  specs?: any;
}

interface CartState {
  items: CartItem[];
  cartId: string | null;
  loading: boolean;
  error: string | null;
  total: number;
  total_formatted: string;
  store: string;
}

type CartAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_CART_ID'; payload: string }
  | { type: 'SET_CART_DATA'; payload: any }
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'UPDATE_ITEM'; payload: { id: number; qty: number } }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_STORE'; payload: string };

const initialState: CartState = {
  items: [],
  cartId: null,
  loading: false,
  error: null,
  total: 0,
  total_formatted: '$0.00',
  store: 'electronics'
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    
    case 'SET_CART_ID':
      return { ...state, cartId: action.payload };
    
    case 'SET_STORE':
      return { ...state, store: action.payload };
    
    case 'SET_CART_DATA':
      return {
        ...state,
        items: action.payload.cart_items || [],
        total: action.payload.order_total || 0,
        total_formatted: action.payload.order_total_formatted || '$0.00',
        loading: false,
        error: null
      };
    
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + action.payload.qty, quantity: item.qty + action.payload.qty }
              : item
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: action.payload.qty }]
      };
    
    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty, quantity: action.payload.qty }
            : item
        )
      };
    
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        total: 0,
        total_formatted: '$0.00'
      };
    
    default:
      return state;
  }
}

interface CartContextType {
  state: CartState;
  cart: CartItem[];
  addToCart: (product: any) => Promise<void>;
  updateCartItem: (productId: number, qty: number) => Promise<void>;
  removeFromCart: (productId: number | string) => Promise<void>;
  clearCart: () => void;
  refreshCart: () => Promise<void>;
  processCheckout: () => Promise<void>;
  calculateTotal: () => number;
  calculateTotalDiscount: () => number;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  reloadCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Generate or get cart ID
  useEffect(() => {
    const cartId = localStorage.getItem('cart_id') || generateCartId();
    localStorage.setItem('cart_id', cartId);
    dispatch({ type: 'SET_CART_ID', payload: cartId });
  }, []);

  function generateCartId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  const addToCart = async (product: any) => {
    if (!state.cartId) return;

    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });

    try {
      const productId = typeof product === 'number' ? product : product.id;
      const qty = product.quantity || 1;
      
      const response = await botbleAPI.addToCart(productId, qty);
      
      if (response.success) {
        // Get updated cart data
        await refreshCart();
      } else {
        dispatch({ type: 'SET_ERROR', payload: response.message });
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to add item to cart' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const updateCartItem = async (productId: number, qty: number) => {
    if (!state.cartId) return;

    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });

    try {
      const response = await botbleAPI.updateCartItem(state.cartId, productId, qty);
      
      if (response.success) {
        await refreshCart();
      } else {
        dispatch({ type: 'SET_ERROR', payload: response.message });
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to update cart item' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const removeFromCart = async (productId: number | string) => {
    if (!state.cartId) return;

    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });

    try {
      const id = typeof productId === 'string' ? parseInt(productId) : productId;
      const response = await botbleAPI.removeFromCart(state.cartId, id);
      
      if (response.success) {
        await refreshCart();
      } else {
        dispatch({ type: 'SET_ERROR', payload: response.message });
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to remove item from cart' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const refreshCart = async () => {
    if (!state.cartId) return;

    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });

    try {
      const response = await botbleAPI.getCart(state.cartId);
      
      if (response.success) {
        dispatch({ type: 'SET_CART_DATA', payload: response.data });
      } else {
        dispatch({ type: 'SET_ERROR', payload: response.message });
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to refresh cart' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const processCheckout = async () => {
    if (!state.cartId) return;

    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });

    try {
      const response = await botbleAPI.processCheckout(state.cartId);
      
      if (response.success) {
        // Clear cart after successful checkout
        dispatch({ type: 'CLEAR_CART' });
        localStorage.removeItem('cart_id');
      } else {
        dispatch({ type: 'SET_ERROR', payload: response.message });
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to process checkout' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const calculateTotal = () => {
    return state.items.reduce((total, item) => {
      const price = item.price[0];
      return total + (price * item.qty);
    }, 0);
  };

  const calculateTotalDiscount = () => {
    return 0; // Implement discount calculation if needed
  };

  const increaseQuantity = (productId: number) => {
    const item = state.items.find(item => item.id === productId);
    if (item) {
      updateCartItem(productId, item.qty + 1);
    }
  };

  const decreaseQuantity = (productId: number) => {
    const item = state.items.find(item => item.id === productId);
    if (item && item.qty > 1) {
      updateCartItem(productId, item.qty - 1);
    } else if (item && item.qty === 1) {
      removeFromCart(productId);
    }
  };

  const reloadCart = async () => {
    await refreshCart();
  };

  const contextValue: CartContextType = {
    state,
    cart: state.items,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    refreshCart,
    processCheckout,
    calculateTotal,
    calculateTotalDiscount,
    increaseQuantity,
    decreaseQuantity,
    reloadCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(store?: string) {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  // Update store if provided
  if (store && context.state.store !== store) {
    context.state.store = store;
  }
  
  return context;
}
