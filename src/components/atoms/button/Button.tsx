import { FC, ButtonHTMLAttributes } from 'react'
import s from './styles.module.css'
import Image from 'next/image'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  color?: 'green' | 'white' | 'grey' | 'black'
  size?: 'l' | 's'
  className?: string
  isLoading?: boolean
  link?: string
}

export const Button: FC<Props> = ({
  children,
  color = 'green',
  size = 'l',
  className,
  isLoading,
  disabled,
  link,
  onClick
}) => {
  const colors = {
    green: s.green,
    white: s.white,
    grey: s.grey,
    black: s.black
  }[color]

  const sizes = {
    l: s.l,
    s: s.s
  }[size]
  const classNames = `${s.wrapper} ${colors} ${className ? className : ''} ${sizes}`

  if (link) {
    return (
      <a className={classNames} href={link}>
        {children}
        {isLoading && <Image className={s.loader} src={'/images/loader.gif'} alt='loader' width={30} height={30} />}
      </a>
    )
  }

  return (
    <button className={classNames} disabled={disabled} onClick={onClick}>
      {children}
      {isLoading && <Image className={s.loader} src={'/images/loader.gif'} alt='loader' width={30} height={30} />}
    </button>
  )
}
