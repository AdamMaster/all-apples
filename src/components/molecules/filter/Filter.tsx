'use client'
import s from './styles.module.css'
import { FC, useState } from 'react'
import { ButtonControl } from '@/components/atoms'

interface Props {
  className?: string
  onClick: (value: string) => void
}

export const Filter: FC<Props> = ({ className, onClick }) => {
  const buttons = [
    { id: 'all', name: 'Весь каталог' },
    { id: 'vegetables', name: 'Овощи' },
    { id: 'fruits', name: 'Фрукты' }
  ]
  const [activeClass, setActiveClass] = useState('all')

  const handleClickButton = (id: string) => {
    setActiveClass(id)
    onClick(id)
  }

  return (
    <div className={`${s.wrapper} ${className ? className : ''}`}>
      {buttons.map(item => (
        <ButtonControl
          id={item.id}
          key={item.id}
          isActive={activeClass === item.id}
          onClick={() => handleClickButton(item.id)}
        >
          {item.name}
        </ButtonControl>
      ))}
    </div>
  )
}
