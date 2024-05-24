import { FC, ButtonHTMLAttributes } from 'react'
import s from './styles.module.css'
import Image from 'next/image'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  color?: 'orange' | 'white' | 'grey' | 'black'
  size?: 'l' | 's'
  className?: string
  isLoading?: boolean
}

export const Button: FC<Props> = ({
  children,
  color = 'orange',
  size = 'l',
  className,
  isLoading,
  disabled,
  onClick
}) => {
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
      {isLoading && <Image className={s.loader} src={'/images/loader.gif'} alt='loader' width={30} height={30} />}
    </button>
  )
}
