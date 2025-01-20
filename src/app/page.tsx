import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import s from './page.module.css'
import { About, Catalog, Contacts, Delivery, Modal, NewsSlider, ProductsGroupList, Promo } from '@/components'
import { prisma } from '../../prisma/prisma-client'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

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
      createdAt: 'desc' // или 'asc'
    }
  })

  return (
    // <QueryClientProvider client={queryClient}>
    <div className={s.wrapper}>
      <Promo className={s.promo} />
      {/* <Popular /> */}

      <Catalog className={s.catalog} categories={categories} />
      <About className={s.about} />
      <NewsSlider className={s.news} newsItems={newsItems} />
      <Delivery className={s.delivery} />
      <Contacts />
      <Modal />
    </div>
    // </QueryClientProvider>
  )
}
