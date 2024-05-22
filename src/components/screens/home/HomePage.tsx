import { About } from '@/components/organisms/about'
import s from './styles.module.css'
import { Catalog } from '@/components/organisms/catalog'
import { DeliveryScreen } from '@/components/organisms/delivery-screen'
import { PromoScreen } from '@/components/organisms/promo-screen'
import { Popular } from '@/components/organisms/popular'

export const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <PromoScreen className={s.promo} />
      <Popular />
      <Catalog className={s.catalog} />
      <About className={s.about} />
      <DeliveryScreen className={s.delivery} />
    </div>
  )
}
