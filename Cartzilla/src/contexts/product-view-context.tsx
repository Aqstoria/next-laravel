'use client'

import { createContext, useState, useContext, ReactNode } from 'react'

type ProductViewContextType = {
  isRoomView: boolean
  setView: (isRoom: boolean) => void
}

const ProductViewContext = createContext<ProductViewContextType>({
  isRoomView: false,
  setView: () => {},
})

export const ProductViewProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isRoomView, setIsRoomView] = useState(false)

  const setView = (isRoom: boolean) => {
    setIsRoomView(isRoom)
  }

  return <ProductViewContext.Provider value={{ isRoomView, setView }}>{children}</ProductViewContext.Provider>
}

export const useProductView = () => {
  const context = useContext(ProductViewContext)

  if (!context) {
    throw new Error('useProductView must be used within a ProductViewProvider')
  }

  return context
}
