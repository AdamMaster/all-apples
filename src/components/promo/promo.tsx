import Image from 'next/image'
import s from './styles.module.css'
import { FC } from 'react'
import { Button, Heading, LinesDecorate } from '@/components/ui'

interface Props {
  className?: string
}

export const Promo: FC<Props> = ({ className }) => {
  return (
    <section className={`${s.wrapper} ${className ? className : ''}`}>
      <Image className={s.bg} alt={'Яблоки оптом'} src={'/images/promo-bg-3.jpg'} fill loading='eager' />
      <div className={'container'}>
        <div className={s.inner}>
          <Heading className={s.title} level='h1'>
            Яблоки оптом
          </Heading>
          <div className={s.subtitle}>разных сортов и калибров</div>
          <div className={s.text}>
            <div className={s.otherTitle}>От надежных производителей Кабарлино-Балкарии</div>
            <div className={s.otherTitle}>Заказы принимаются от 10 тон</div>
            <div className={s.otherTitle}>Доставка по всей стране</div>
          </div>
          <Button className={s.button} color={'yellow'} link='#catalog' size='l'>
            Перейти в каталог
          </Button>
        </div>
      </div>
      <LinesDecorate href='#catalog' />
    </section>
  )
}
