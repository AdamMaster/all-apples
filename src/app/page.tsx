import s from './page.module.css'
import { About, Catalog, NewsSlider, Promo, Quality } from '@/components'
import { prisma } from '../../prisma/prisma-client'
import { Suspense } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Яблоки оптом - оптовая продажа свежих яблок',
  description:
    'Купить яблоки оптом по всей России. Сорта: Фуджи, Гала, Гренни Смит, Ред Делишес и др. Разные калибры. Быстрая доставка в любой регион',
  keywords: 'яблоки оптом, оптовая продажа яблок, купить яблоки оптом, свежие фрукты оптом, доставка яблок по России',
  alternates: {
    canonical: 'https://allapples.ru/'
  }
}

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          category: true,
          type: true
        }
      }
    }
  })

  const newsItems = await prisma.newsItem.findMany({
    take: 5,
    include: {
      paragraphs: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <div className={s.wrapper}>
      <Promo className={s.promo} />
      <Suspense>
        <Catalog className={s.catalog} categories={categories} />
      </Suspense>
      <About className={s.about} />
      <Quality className={s.quality} />
      <NewsSlider className={s.news} newsItems={newsItems} />
    </div>
  )
}
