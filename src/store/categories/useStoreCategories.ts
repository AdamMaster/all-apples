import { data } from '@/app/data'
import { Category, Product } from '@prisma/client'
import { create } from 'zustand'
import { products } from '../../../prisma/constants'
import { getCategories } from '@/shared/api/fetchCategories'
import { CategoryWithRelations } from '@/components/products/product-card/types/types'

interface State {
  categories: CategoryWithRelations[]
  isLoading: boolean
  getCategories: () => Promise<void>
}

export const useStoreCategories = create<State>(set => ({
  categories: [],
  isLoading: false,
  getCategories: async () => {
    set(() => ({ isLoading: true }))
    try {
      const categories = await getCategories()
      set(() => ({ categories }))
    } catch (error) {
      console.error('Ошибка при загрузке категорий:', error)
    } finally {
      set(() => ({ isLoading: false }))
    }
  }
}))
