import { Product } from '@prisma/client'
import { axiosInstance } from './instance'
import { ApiRoutes } from './constants'

export const getProducts = async (query: string): Promise<Product[]> => {
  return (await axiosInstance.get<Product[]>(ApiRoutes.GET_PRODUCTS, { params: { query } })).data
}
