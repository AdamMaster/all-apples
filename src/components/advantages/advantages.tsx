import React from 'react'
import s from './styles.module.css'
import Image from 'next/image'
import { AdvantageItem } from './advantage-item/advantage-item'

export interface AdvantageItemType {
  id: number
  title: string
  description: string
  icon: string
}

interface Props {
  className?: string
  items: AdvantageItemType[]
}

export const Advantages: React.FC<Props> = ({ className, items }) => {
  return (
    <div className={`${s.wrapper}  ${className ? className : ''}`}>
      {items.map(item => (
        <AdvantageItem className={s.item} {...item} key={item.id} />
      ))}
    </div>
  )
}
