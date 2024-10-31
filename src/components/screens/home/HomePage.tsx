import { About, Catalog, Contacts, Delivery, Popular, Promo } from '@/components/organisms'
import s from './styles.module.css'

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
