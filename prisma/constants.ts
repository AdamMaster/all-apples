import { Product, Type } from '@prisma/client'

export const categories = [
  {
    name: 'Фрукты'
  },
  {
    name: 'Овощи'
  }
]

export const types = [
  {
    name: 'Яблоки',
    categoryId: 1
  },
  {
    name: 'Груши',
    categoryId: 1
  }
]

export const products = [
  {
    name: 'Айдаред',
    imageUrl: '/images/apples/aydared.jpg',
    categoryId: 1,
    typeId: 1,
    ripeningPeriod: 'Сентябрь',
    tastingEvaluation: '4.8'
  },
  {
    name: 'Гала',
    imageUrl: '/images/apples/gala.jpg',
    categoryId: 1,
    typeId: 1,
    ripeningPeriod: 'Сентябрь',
    tastingEvaluation: '4.8'
  }
]
