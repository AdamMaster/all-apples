import Image from 'next/image'
import s from './styles.module.css'
import { Button } from '@/components/atoms'
import { FC } from 'react'

interface Props {
  className?: string
}

export const Promo: FC<Props> = ({ className }) => {
  return (
    <section className={`${s.wrapper} ${className ? className : ''}`}>
      <Image
        className={s.bg}
        alt={'яблоки фура'}
        src={'/images/promo-bg-3.jpg'}
        layout={'fill'}
        objectFit={'cover'}
        loading='eager'
      />
      <div className={'container'}>
        <div className={s.inner}>
          <h1 className={s.title}>Яблоки оптом</h1>
          <div className={s.subtitle}>разных сортов и калибров</div>
          <div className={s.otherTitle}>От надежных производителей Кабарлино-Балкарской Республики</div>
          <div className={s.otherTitle}>Заказы принимаются от 10 тон</div>
          <div className={s.otherTitle}>Доставка по всей стране</div>
          <Button className={s.button} color={'yellow'} link='#catalog' size='l'>
            Перейти в каталог
          </Button>
        </div>
      </div>
      <div className={s.scrollDiscover}>
        <span></span>
        <span></span>
      </div>
    </section>
  )
}
