import { PromoOther } from '@/components'
import s from './styles.module.css'
import { AdvantageItemType, Advantages } from '@/components/advantages/advantages'
import { Content } from './content'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Станьте партнером allapples.ru',
  description:
    'Станьте партнёром allapples.ru — расширьте свой бизнес, сотрудничая с надёжным поставщиком яблок оптом из Кабардино-Балкарии. Выгодные условия, стабильные поставки и поддержка партнёров.',
  alternates: {
    canonical: 'https://allapples.ru/partners'
  }
}

export default function PartnersPage() {
  const advantageItems: AdvantageItemType[] = [
    {
      id: 1,
      title: 'Гарантированный сбыт',
      description:
        'Мы активно ищем оптовых покупателей и берем на себя задачи по продаже вашей продукции, помогая вам сосредоточиться на выращивании яблок',
      icon: '/images/money-icon.svg'
    },
    {
      id: 2,
      title: 'Прозрачные условия',
      description: 'Все договоренности фиксируются в удобной форме: вы заранее знаете объемы, цены и сроки поставок',
      icon: '/images/drops-icon.svg'
    },
    {
      id: 3,
      title: 'Широкий охват рынка',
      description:
        'Наш сайт помогает вам выйти на новых клиентов по всей России, увеличивая ваши продажи без дополнительных затрат на рекламу.',
      icon: '/images/graphic-icon.svg'
    }
  ]

  return (
    <div className={s.wrapper}>
      <PromoOther className={s.promo} title='Партнерам' imageUrl='/images/handsnake.jpg' />
      <Content className={s.content} />
    </div>
  )
}
