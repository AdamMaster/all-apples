import { ReactNode } from 'react'
import { create } from 'zustand'

interface State {
  isOpen: boolean
  children: ReactNode
  setOpen: (children: ReactNode) => void
  setClose: () => void
}

export const useStoreModal = create<State>(set => ({
  isOpen: false,
  children: null,
  setOpen: (children: ReactNode) => set(() => ({ isOpen: true, children: children })),
  setClose: () => {
    set(() => ({ isOpen: false }))
    setTimeout(() => {
      set(() => ({ children: null }))
    }, 200)
  }
}))
