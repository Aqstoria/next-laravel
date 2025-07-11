'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface OffcanvasContextType {
  openOffcanvas: (id: string) => void
  closeOffcanvas: (id: string) => void
  isOpen: (id: string) => boolean
}

const OffcanvasContext = createContext<OffcanvasContextType | undefined>(undefined)

export const OffcanvasProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<Set<string>>(new Set())

  const openOffcanvas = (id: string) => {
    setOpen((prev) => new Set(prev).add(id))
  }

  const closeOffcanvas = (id: string) => {
    setOpen((prev) => {
      const newSet = new Set(prev)
      newSet.delete(id)
      return newSet
    })
  }

  const isOpen = (id: string) => open.has(id)

  return (
    <OffcanvasContext.Provider value={{ openOffcanvas, closeOffcanvas, isOpen }}>{children}</OffcanvasContext.Provider>
  )
}

export const useOffcanvas = () => {
  const context = useContext(OffcanvasContext)
  if (!context) {
    throw new Error('useOffcanvas must be used within an OffcanvasProvider')
  }
  return context
}
