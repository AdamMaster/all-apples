import { FC } from 'react'
import s from './styles.module.css'

interface Props {
  className?: string
  onClick?: () => void
}

export const Burger: FC<Props> = ({ className, onClick }) => {
  const classNames = `${s.wrapper} ${className ? className : ''}`

  return (
    <button className={classNames} onClick={onClick}>
      <div className={s.line}></div>
      <div className={s.line}></div>
      <div className={s.line}></div>
    </button>
  )
}
