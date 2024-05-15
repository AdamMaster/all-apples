import { FC, ReactNode } from 'react'
import s from './styles.module.css'

interface Props {
  id: string
  children: ReactNode
  className?: string
  isActive?: boolean
  onClick?: () => void
}

export const ButtonControl: FC<Props> = ({ id, children, className, isActive, onClick }) => {
  return (
    <button className={`${s.wrapper} ${className ? className : ''} ${isActive ? s.active : ''}`} onClick={onClick}>
      {children}
    </button>
  )
}
