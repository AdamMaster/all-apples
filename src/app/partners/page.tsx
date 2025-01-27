import { Feedback, PromoOther } from '@/components'
import s from './styles.module.css'
import { Button, Heading } from '@/components/ui'
import { AdvantageItemType, Advantages } from '@/components/advantages/advantages'
import { useStoreModal } from '@/store'
import { ArrowLeft } from 'lucide-react'

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

  // const { setOpen } = useStoreModal()
  const onClickButton = () => {
    // setOpen(<Feedback />)
  }

  return (
    <div className={s.wrapper}>
      <PromoOther className={s.promo} title='Партнерам' imageUrl='/images/handsnake.jpg' />
      <section className={s.content}>
        <div className='container'>
          <div className={s.contentInner}>
            <Button className={s.backLink} link='/' color='grey'>
              <ArrowLeft size={15} />
              Назад
            </Button>
            <div className={s.grid}>
              <div className={s.gridContent}>
                <Heading className={s.title} level='h2'>
                  Почему <span className='highlight'>выгодно</span> работать с нами?
                </Heading>
                <div className={s.contentText}>
                  <p>
                    Мы стремимся создать комфортные условия для наших партнеров — фермеров и плодопитомников. Вот что вы
                    получаете:
                  </p>
                </div>
                <Button className={s.button} size='l'>
                  Узнать подробнее
                </Button>
              </div>
              <div className={s.advantages}>
                <Advantages items={advantageItems} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
