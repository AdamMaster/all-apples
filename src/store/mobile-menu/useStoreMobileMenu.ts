import { create } from 'zustand'

interface State {
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
}

export const useStoreMobileMenu = create<State>(set => ({
  isOpen: false,
  setOpen: (isOpen: boolean) =>
    set(() => {
      return {
        isOpen: isOpen
      }
    })
}))
