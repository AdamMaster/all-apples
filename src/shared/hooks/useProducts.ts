import { useQuery } from '@tanstack/react-query'
import { getCategories } from '../api/fetchCategories'

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => getCategories()
  })
}
