'use client'
import { HomePage } from '@/components/screens/home'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <HomePage />
    </main>
  )
}
