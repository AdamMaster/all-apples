'use client'
import { HomePage } from '@/components/screens/home'
import styles from './page.module.css'
import { Modal } from '@/components/modal'

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <HomePage />
      <Modal />
    </main>
  )
}
