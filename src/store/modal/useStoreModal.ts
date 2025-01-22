import { ReactNode } from 'react'
import { create } from 'zustand'

interface State {
  isOpen: boolean
  content: ReactNode
  queryString?: string
  setOpen: (content: React.ReactNode, query?: string) => void
  setClose: () => void
  checkAndOpen: (query: string, getContent: (id: string) => React.ReactNode) => void
}

export const useStoreModal = create<State>(set => ({
  isOpen: false,
  content: null,
  queryString: '',
  setOpen: (content, query) => set(() => ({ isOpen: true, content: content, queryString: query })),
  setClose: () => {
    set(() => ({ isOpen: false, queryString: '' }))
    setTimeout(() => {
      set(() => ({ content: null }))
    }, 200)
  },
  checkAndOpen: (query, getContent) => {
    if (query) {
      set(() => ({
        isOpen: true,
        content: getContent(query),
        queryString: query
      }))
    }
  }
}))
