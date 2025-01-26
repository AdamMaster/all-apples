import React from 'react'
import { type AdvantageItemType } from '../advantages'
import s from './styles.module.css'
import Image from 'next/image'

interface Props extends AdvantageItemType {
  className?: string
}

export const AdvantageItem: React.FC<Props> = ({ className, id, title, description, icon }) => {
  return (
    <div className={`${s.wrapper} ${className ? className : ''}`}>
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
