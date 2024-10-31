import { FC } from 'react'
import { Heading } from '@/components/atoms'
import s from './styles.module.css'

interface Props {
  title: string
  text: string
  className?: string
}

export const Advantage: FC<Props> = ({ title, text, className }) => {
  return (
    <div className={`${s.wrapper} ${className ? className : ''}`}>
      <Heading className={s.title} level={'h6'}>
        {title}
      </Heading>
      <div className={s.line}></div>
      <div className={s.text}>{text}</div>
    </div>
  )
}
