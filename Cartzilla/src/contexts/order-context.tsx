'use client';

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { orderService, Order, OrderListResponse, OrderTrackingResponse } from '../services/orderService';

// Order state interface
interface OrderState {
  orders: Order[];
  currentOrder: Order | null;
  loading: boolean;
  error: string | null;
  pagination: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  } | null;
}

// Order action types
type OrderAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_ORDERS'; payload: OrderListResponse }
  | { type: 'SET_CURRENT_ORDER'; payload: Order | null }
  | { type: 'UPDATE_ORDER'; payload: Order }
  | { type: 'CLEAR_ORDERS' }
  | { type: 'CLEAR_ERROR' };

// Initial state
const initialState: OrderState = {
  orders: [],
  currentOrder: null,
  loading: false,
  error: null,
  pagination: null,
};

// Order reducer
function orderReducer(state: OrderState, action: OrderAction): OrderState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_ORDERS':
      return {
        ...state,
        orders: action.payload.data,
        pagination: action.payload.meta,
        loading: false,
        error: null,
      };
    case 'SET_CURRENT_ORDER':
      return { ...state, currentOrder: action.payload };
    case 'UPDATE_ORDER':
      return {
        ...state,
        orders: state.orders.map(order => 
          order.id === action.payload.id ? action.payload : order
        ),
        currentOrder: state.currentOrder?.id === action.payload.id 
          ? action.payload 
          : state.currentOrder,
      };
    case 'CLEAR_ORDERS':
      return { ...state, orders: [], pagination: null };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
}

// Order context interface
interface OrderContextType {
  state: OrderState;
  getOrders: (params?: {
    status?: string;
    shipping_status?: string;
    payment_status?: string;
    per_page?: number;
  }) => Promise<void>;
  getOrder: (orderId: string) => Promise<void>;
  cancelOrder: (orderId: string, reason: string, description?: string) => Promise<boolean>;
  confirmDelivery: (orderId: string) => Promise<boolean>;
  trackOrder: (code: string, email?: string, phone?: string) => Promise<OrderTrackingResponse | null>;
  clearOrders: () => void;
  clearError: () => void;
  setCurrentOrder: (order: Order | null) => void;
}

// Create context
const OrderContext = createContext<OrderContextType | undefined>(undefined);

// Order provider component
interface OrderProviderProps {
  children: ReactNode;
}

export function OrderProvider({ children }: OrderProviderProps) {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  const getOrders = async (params?: {
    status?: string;
    shipping_status?: string;
    payment_status?: string;
    per_page?: number;
  }) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'CLEAR_ERROR' });

      const response = await orderService.getOrders(params);
      
      if (response.success && response.data) {
        dispatch({ type: 'SET_ORDERS', payload: response.data });
      } else {
        dispatch({ type: 'SET_ERROR', payload: response.message });
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch orders' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const getOrder = async (orderId: string) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'CLEAR_ERROR' });

      const response = await orderService.getOrder(orderId);
      
      if (response.success && response.data) {
        dispatch({ type: 'SET_CURRENT_ORDER', payload: response.data });
      } else {
        dispatch({ type: 'SET_ERROR', payload: response.message });
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch order' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const cancelOrder = async (orderId: string, reason: string, description?: string): Promise<boolean> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'CLEAR_ERROR' });

      const response = await orderService.cancelOrder(orderId, reason, description);
      
      if (response.success) {
        // Refresh the current order if it's the one being canceled
        if (state.currentOrder?.id.toString() === orderId) {
          await getOrder(orderId);
        }
        return true;
      } else {
        dispatch({ type: 'SET_ERROR', payload: response.message });
        return false;
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to cancel order' });
      return false;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const confirmDelivery = async (orderId: string): Promise<boolean> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'CLEAR_ERROR' });

      const response = await orderService.confirmDelivery(orderId);
      
      if (response.success) {
        // Refresh the current order if it's the one being confirmed
        if (state.currentOrder?.id.toString() === orderId) {
          await getOrder(orderId);
        }
        return true;
      } else {
        dispatch({ type: 'SET_ERROR', payload: response.message });
        return false;
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to confirm delivery' });
      return false;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const trackOrder = async (code: string, email?: string, phone?: string): Promise<OrderTrackingResponse | null> => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'CLEAR_ERROR' });

      const response = await orderService.trackOrder(code, email, phone);
      
      if (response.success && response.data) {
        dispatch({ type: 'SET_CURRENT_ORDER', payload: response.data.order });
        return response.data;
      } else {
        dispatch({ type: 'SET_ERROR', payload: response.message });
        return null;
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to track order' });
      return null;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const clearOrders = () => {
    dispatch({ type: 'CLEAR_ORDERS' });
  };

  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  const setCurrentOrder = (order: Order | null) => {
    dispatch({ type: 'SET_CURRENT_ORDER', payload: order });
  };

  const value: OrderContextType = {
    state,
    getOrders,
    getOrder,
    cancelOrder,
    confirmDelivery,
    trackOrder,
    clearOrders,
    clearError,
    setCurrentOrder,
  };

  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
}

// Custom hook to use order context
export function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
} 