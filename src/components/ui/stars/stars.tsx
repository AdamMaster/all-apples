import React from 'react'
import s from './styles.module.css'
import clsx from 'clsx'
import { Star } from 'lucide-react'

interface Props {
  className?: string
  quantity: number
  width?: number
}

export const Stars: React.FC<Props> = ({ className, quantity, width = 18 }) => {
  return (
    <div className={clsx(s.wrapper, className)}>
      {Array.from({ length: quantity }, (_, i) => (
        <Star width={width} fill='var(--c-yellow)' stroke='transparent' key={i} />
      ))}
    </div>
  )
}
