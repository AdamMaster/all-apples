import { axiosInstance } from './instance'
import { ApiRoutes } from './constants'
import { CategoryWithRelations } from '@/components/products/product-card/types/types'
import { Product } from '@prisma/client'

export const getCategories = async (): Promise<CategoryWithRelations[]> => {
  return (await axiosInstance.get<CategoryWithRelations[]>(ApiRoutes.GET_CATEGORIES)).data
}

export const searchProducts = async (query: string): Promise<CategoryWithRelations[]> => {
  return (await axiosInstance.get<CategoryWithRelations[]>(ApiRoutes.SEARCH_PRODUCTS, { params: { query } })).data
}
