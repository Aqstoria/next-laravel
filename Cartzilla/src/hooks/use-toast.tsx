'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'

export type ToastType = 'cart' | 'wishlist' | 'comparison'

export interface ToastMessage {
  action: string
  product: string
}

export interface ToastItem {
  id: string
  message: ToastMessage
  timestamp: number
  type: ToastType
}

export interface UseToastOptions {
  duration?: number
}

export const useToast = (options: UseToastOptions = {}) => {
  const { duration = 6000 } = options
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const toastTimeoutRef = useRef<Record<string, NodeJS.Timeout>>({})

  // Clean up timeouts when component unmounts
  useEffect(() => {
    // Store a reference to the current timeouts object itself, not its values
    const timeoutsRef = toastTimeoutRef

    // Return a cleanup function that uses the captured reference
    return () => {
      Object.values(timeoutsRef.current).forEach(clearTimeout)
    }
  }, [])

  // Create a new toast
  const createToast = useCallback(
    (message: ToastMessage, type: ToastType = 'cart') => {
      const toastId = `toast_${Date.now()}`

      // Add new toast to the list
      setToasts((prevToasts) => [
        {
          id: toastId,
          message,
          timestamp: Date.now(),
          type,
        },
        ...prevToasts,
      ])

      // Set timeout to remove this specific toast
      toastTimeoutRef.current[toastId] = setTimeout(() => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== toastId))
        delete toastTimeoutRef.current[toastId]
      }, duration)
    },
    [duration]
  )

  // Close a specific toast
  const closeToast = useCallback((id: string) => {
    if (toastTimeoutRef.current[id]) {
      clearTimeout(toastTimeoutRef.current[id])
      delete toastTimeoutRef.current[id]
    }
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }, [])

  // Reusable Toast Renderer Component
  const ToastRenderer = () => {
    return (
      <ToastContainer position="bottom-end" className="position-fixed z-fixed p-3">
        {toasts.map((toast) => {
          const { className: toastClassName, iconClass } = getToastConfig(toast.type)

          return (
            <Toast
              key={toast.id}
              className={`d-flex ${toastClassName} fw-medium mb-2`}
              show={true}
              onClose={() => closeToast(toast.id)}
            >
              <i className={`${iconClass} fs-lg mt-1 me-2`} />
              <Toast.Body className="fw-medium me-2">
                <strong>{toast.message.action}</strong>
                {toast.message.product}
              </Toast.Body>
            </Toast>
          )
        })}
      </ToastContainer>
    )
  }

  return {
    toasts,
    createToast,
    closeToast,
    ToastRenderer,
  }
}

// Utility function to get toast configuration based on type
export const getToastConfig = (type: ToastType) => {
  switch (type) {
    case 'cart':
      return {
        className: 'bg-success-subtle border-success',
        iconClass: 'ci-check-circle text-success',
      }
    case 'wishlist':
      return {
        className: 'bg-primary-subtle border-primary',
        iconClass: 'ci-heart text-primary',
      }
    case 'comparison':
      return {
        className: 'bg-info-subtle border-info',
        iconClass: 'ci-refresh-cw text-info',
      }
    default:
      return {
        className: 'bg-secondary-subtle border-secondary',
        iconClass: 'ci-info text-secondary',
      }
  }
}
