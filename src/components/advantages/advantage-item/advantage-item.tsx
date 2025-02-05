import React from 'react'
import { type AdvantageItemType } from '../advantages'
import s from './styles.module.css'
import Image from 'next/image'
import clsx from 'clsx'

interface Props extends AdvantageItemType {
  className?: string
  layout?: 'column' | 'row'
}

export const AdvantageItem: React.FC<Props> = ({ className, title, description, icon, layout }) => {
  const layoutClassName = {
    column: s.row,
    row: s.column
  }[layout!]

  return (
    <div className={clsx(s.wrapper, className, layoutClassName)}>
      <div className={s.icon}>
        <Image src={icon} alt={title} width={70} height={70} />
      </div>
      <div className={s.content}>
        <div className={s.title}>{title}</div>
        <div className={s.description}>{description}</div>
      </div>
    </div>
  )
}
