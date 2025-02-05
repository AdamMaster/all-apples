import React from 'react'
import s from './styles.module.css'
import { AdvantageItem } from './advantage-item/advantage-item'
import clsx from 'clsx'

export interface AdvantageItemType {
  id: number
  title: string
  description: string
  icon: string
}

interface Props {
  className?: string
  items: AdvantageItemType[]
  layout?: 'column' | 'row'
}

export const Advantages: React.FC<Props> = ({ className, items, layout = 'column' }) => {
  const layoutClassName = {
    column: s.column,
    row: s.row
  }[layout!]

  return (
    <div className={clsx(s.wrapper, layoutClassName, className)}>
      {items.map(item => (
        <AdvantageItem className={clsx(s.item)} layout={layout} {...item} key={item.id} />
      ))}
    </div>
  )
}
