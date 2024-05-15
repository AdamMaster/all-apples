'use client'
import styles from './page.module.css'
import { Router } from '@/components/pages/router'

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <Router />
    </main>
  )
}
