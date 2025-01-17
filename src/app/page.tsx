import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import s from './page.module.css'
import { About, Catalog, Contacts, Delivery, Modal, ProductsGroupList, Promo } from '@/components'
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

  return (
    // <QueryClientProvider client={queryClient}>
    <main className={s.wrapper}>
      <Promo className={s.promo} />
      {/* <Popular /> */}

      <Catalog className={s.catalog} categories={categories} />
      <About className={s.about} />
      <Delivery className={s.delivery} />
      <Contacts />
      <Modal />
    </main>
    // </QueryClientProvider>
  )
}
