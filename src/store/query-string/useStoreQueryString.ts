import { create } from 'zustand'

interface State {
  queryString: string
  setQueryString: (value: string) => void
}

export const useStoreQueryString = create<State>(set => ({
  queryString: '',
  setQueryString: value =>
    set(() => {
      return {
        queryString: value
      }
    })
}))
