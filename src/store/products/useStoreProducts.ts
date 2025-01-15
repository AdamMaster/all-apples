import { data } from '@/app/data'
import { Product } from '@prisma/client'
import { create } from 'zustand'
import { products } from '../../../prisma/constants'
import { getProducts } from '@/shared/api/fetchProducts'

interface State {
  products: Product[]
  getProducts: (value: string) => Promise<void>
}

export const useStoreProducts = create<State>(set => ({
  products: [],
  getProducts: async (value: string) => {
    const products = await getProducts(value)
    set(() => ({
      products
    }))
  }
}))
