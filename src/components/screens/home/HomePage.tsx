import { About, Contacts, Popular, Promo } from '@/components/organisms'
import s from './styles.module.css'
import dynamic from 'next/dynamic'
import type { FC } from 'react'

const Catalog = dynamic(
  () => import('@/components/organisms/catalog/Catalog').then(mod => mod.Catalog) as unknown as Promise<FC>
)
const Delivery = dynamic(
  () => import('@/components/organisms/delivery/Delivery').then(mod => mod.Delivery) as unknown as Promise<FC>,
  {
    ssr: false
  }
)

export const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <Promo className={s.promo} />
      {/* <Popular /> */}
      <Catalog className={s.catalog} />
      <About className={s.about} />
      <Delivery className={s.delivery} />
      <Contacts />
    </div>
  )
}
