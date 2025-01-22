import s from './page.module.css'
import { About, Catalog, Contacts, Delivery, Modal, NewsSlider, Promo } from '@/components'
import { prisma } from '../../prisma/prisma-client'

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
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <div className={s.wrapper}>
      <Promo className={s.promo} />

      <Catalog className={s.catalog} categories={categories} />
      <About className={s.about} />
      <NewsSlider className={s.news} newsItems={newsItems} />
      <Delivery className={s.delivery} />
      <Contacts />
      <Modal />
    </div>
  )
}
