'use client'
import { FC } from 'react'
import s from './styles.module.css'
import 'swiper/css'
import { Button, Heading, Logo } from '@/components/ui'
import { type AdvantageItemType, Advantages } from '../advantages/advantages'
import { useStoreModal } from '@/store'
import { Feedback } from '../modal'

interface Props {
  className?: string
}

const advantageItems: AdvantageItemType[] = [
  {
    id: 1,
    title: 'Прямые поставки от производителей',
    description:
      'Мы работаем с более чем 20 проверенными производителями, что позволяет нам обеспечивать наших клиентов высококачественными овощами и фруктами по выгодным ценам',
    icon: '/images/connect-icon.svg'
  },
  {
    id: 2,
    title: 'Выгодные цены',
    description:
      'Наш сервис гарантирует самые выгодные цены для наших клиентов. Мы понимаем, насколько важно для вас получать качественную услугу или товар по доступной стоимости',
    icon: '/images/money-icon-2.svg'
  },
  {
    id: 3,
    title: 'Гарантированная свежесть',
    description:
      'Наши продукты собираются и упаковываются непосредственно перед отправкой, гарантируя максимальную свежесть и длительный срок годности при доставке на ваш склад',
    icon: '/images/fruits-icon.svg'
  }
]

export const About: FC<Props> = ({ className }) => {
  const { setOpen } = useStoreModal()
  const onClickButton = () => {
    setOpen(<Feedback />)
  }

  return (
    <section className={`${s.wrapper} ${className ? className : ''}`} id='about'>
      <div className={'container'}>
        <div className={s.inner}>
          <Logo className={s.logo} text={false} />
          <div className={s.grid}>
            <div className={s.content}>
              <div className={s.contentHead}>
                <Heading className={s.title} level={'h2'}>
                  All<span>Apples</span>
                </Heading>
                <div className={s.subtitle}>Сочные плоды для вашего бизнеса</div>
              </div>
              <div className={s.description}>
                <p>
                  Наша компания занимается оптовой продажей свежих яблок по всей России. Мы находимся в
                  Кабардино-Балкарии — одном из крупнейших регионов по выращиванию яблок. Наши партнеры — лучшие сады и
                  плодопитомники, что позволяет нам предлагать только качественные и экологически чистые фрукты.
                  Гарантируем индивидуальный подход, выгодные условия сотрудничества и оперативную доставку.
                </p>
              </div>
              <Button className={s.button} size='l' onClick={() => onClickButton()}>
                Оставить заявку
              </Button>
            </div>
            <div className={s.advantages}>
              <Advantages items={advantageItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
