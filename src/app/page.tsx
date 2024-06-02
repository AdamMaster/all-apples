'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HomePage } from '@/components/screens/home'
import styles from './page.module.css'
import { Modal } from '@/components/modal'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

export default function Main() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={styles.wrapper}>
        <HomePage />
        <Modal />
      </main>
    </QueryClientProvider>
  )
}
