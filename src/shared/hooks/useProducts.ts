import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../api/fetchProducts'

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts('')
  })
}
