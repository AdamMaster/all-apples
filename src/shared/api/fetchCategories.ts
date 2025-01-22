import { Category, Product } from '@prisma/client'
import { axiosInstance } from './instance'
import { ApiRoutes } from './constants'
import axios from 'axios'
import { CategoryWithRelations } from '@/components/products/product-card/types/types'

export const getCategories = async (): Promise<CategoryWithRelations[]> => {
  return (await axiosInstance.get<CategoryWithRelations[]>(ApiRoutes.GET_CATEGORIES)).data
}
