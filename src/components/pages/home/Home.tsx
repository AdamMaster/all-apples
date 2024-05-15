import { About } from '@/components/organisms/about'
import s from './styles.module.css'
import { Catalog } from '@/components/organisms/catalog'
import { DeliveryScreen } from '@/components/organisms/delivery-screen'
import { PromoScreen } from '@/components/organisms/promo-screen'

export const Home = () => {
  return (
    <div className={s.wrapper}>
      <PromoScreen className={s.promo} />
      <Catalog className={s.catalog} />
      <About className={s.about} />
      <DeliveryScreen className={s.delivery} />
    </div>
  )
}
