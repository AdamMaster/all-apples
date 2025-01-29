import React, { ReactNode } from 'react'
import s from './styles.module.css'

interface Item {
  id: number
  text: ReactNode
}

interface Props {
  className?: string
  items: Item[]
}

export const List: React.FC<Props> = ({ className, items }) => {
  return (
    <ul className={`${s.wrapper} ${className ? className : ''}`}>
      {items.map(item => (
        <li className={s.item} key={item.id}>
          {item.text}
        </li>
      ))}
    </ul>
  )
}
