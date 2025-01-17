import { Category, Product, Type } from '@prisma/client'

export type ProductWithRelations = Product & { category: Category | null; type: Type | null }
export type CategoryWithRelations = Category & { products: ProductWithRelations[] }
