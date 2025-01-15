import { Category, Product, Type } from '@prisma/client'

export interface ProductCardType {
  id: number // ID продукта
  name: string // Название продукта
  category: string // Название категории
  type: string // Название типа
  sort: string // Сорт продукта
  ripeningPeriod?: string // Срок созревания
  tastingEvaluation?: string // Дегустационная оценка
  imageUrl: string // URL изображения
}

export type ProductWithRelations = Product & { category: Category; type: Type; sort: string }
