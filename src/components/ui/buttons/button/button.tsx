import { FC, ButtonHTMLAttributes, ReactNode } from 'react'
import s from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  color?: 'green' | 'yellow' | 'white' | 'grey' | 'black'
  stroked?: boolean
  size?: 'l' | 's'
  className?: string
  isLoading?: boolean
  link?: string
}

export const Button: FC<Props> = ({
  children,
  color = 'yellow',
  stroked,
  size,
  className,
  isLoading,
  disabled,
  link,
  onClick
}) => {
  const colors = {
    green: s.green,
    yellow: s.yellow,
    white: s.white,
    grey: s.grey,
    black: s.black
  }[color]

  const sizes = {
    l: s.l,
    s: s.s
  }[size!]
  const classNames = ` ${s.wrapper} ${colors} ${sizes} ${stroked ? s.stroked : ''}`

  if (link) {
    return (
      <Link className={`${classNames} ${className ? className : ''}`} href={link}>
        {children}
        {isLoading && <Image className={s.loader} src={'/images/loader.gif'} alt='loader' width={30} height={30} />}
      </Link>
    )
  }

  return (
    <button className={`${classNames} ${className ? className : ''}`} disabled={disabled} onClick={onClick}>
      {children}
      {isLoading && <Image className={s.loader} src={'/images/loader.gif'} alt='loader' width={30} height={30} />}
    </button>
  )
}
