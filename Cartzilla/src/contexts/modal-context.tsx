'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface ModalContextType {
  openModal: (id: string) => void
  closeModal: (id: string) => void
  isShown: (id: string) => boolean
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState<Set<string>>(new Set())

  const openModal = (id: string) => {
    setOpen((prev) => new Set(prev).add(id))
  }

  const closeModal = (id: string) => {
    setOpen((prev) => {
      const newSet = new Set(prev)
      newSet.delete(id)
      return newSet
    })
  }

  const isShown = (id: string) => open.has(id)

  return <ModalContext.Provider value={{ openModal, closeModal, isShown }}>{children}</ModalContext.Provider>
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within an ModalProvider')
  }
  return context
}
