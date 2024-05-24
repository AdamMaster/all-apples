'use client'
import { Heading } from '@/components/atoms'
import s from './styles.module.css'

export const Thanks = () => {
  return (
    <div className={s.wrapper}>
      <Heading className={s.title} level='h3'>
        Спасибо за заявку!
      </Heading>
      <div className={s.delimiter}></div>
      <div className={s.subtitle}>Мы свяжемся с вами в течение 30 минут.</div>
    </div>
  )
}
