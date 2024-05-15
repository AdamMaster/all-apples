import { FC, ButtonHTMLAttributes } from 'react'
import s from './styles.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  color?: 'orange' | 'white' | 'grey' | 'black'
  size?: 'l' | 's'
  className?: string
}

export const Button: FC<Props> = ({ children, color = 'orange', size = 'l', className, disabled, onClick }) => {
  const colors = {
    orange: s.orange,
    white: s.white,
    grey: s.grey,
    black: s.black
  }[color]

  const sizes = {
    l: s.l,
    s: s.s
  }[size]
  const classNames = `${s.wrapper} ${colors} ${className ? className : ''} ${sizes}`

  return (
    <button className={classNames} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
