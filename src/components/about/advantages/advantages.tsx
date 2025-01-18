import React from 'react'
import s from './styles.module.css'
import Image from 'next/image'
import { title } from 'process'

export interface AdvantageItems {
  id: number
  title: string
  description: string
  icon: string
}

interface Props {
  className?: string
  items: AdvantageItems[]
}

export const Advantages: React.FC<Props> = ({ className, items }) => {
  return (
    <div className={`${s.wrapper} ${className ? className : ''}`}>
      {items.map(item => (
        <div className={s.item} key={item.id}>
          <div className={s.itemIcon}>
            <Image src={item.icon} alt={item.title} width={70} height={70} />
          </div>
          <div className={s.itemContent}>
            <div className={s.itemTitle}>{item.title}</div>
            <div className={s.itemDescription}>{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
