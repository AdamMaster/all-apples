import { data } from '@/app/data'
import { ProductCardType } from '@/components/molecules'
import { create } from 'zustand'

interface State {
  products: ProductCardType[]
  setFilter: (category: string) => void
}

export const useStoreProducts = create<State>(set => ({
  products: data,
  setFilter: (category: string) =>
    set(() => {
      const filteredProducts = data.filter(item => item.category === category)
      return {
        products: filteredProducts.length ? filteredProducts : data
      }
    })
}))
