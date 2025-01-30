import { FC, ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './button.module.css'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

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
    green: styles.green,
    yellow: styles.yellow,
    white: styles.white,
    grey: styles.grey,
    black: styles.black
  }[color]

  const sizes = {
    l: styles.l,
    s: styles.s
  }[size!]

  const classNames = clsx(styles.wrapper, colors, sizes, stroked && styles.stroked, className)

  if (link) {
    return (
      <Link className={`${classNames}`} href={link}>
        {children}
        {isLoading && (
          <Image className={styles.loader} src={'/images/loader.gif'} alt='loader' width={30} height={30} />
        )}
      </Link>
    )
  }

  return (
    <button className={`${classNames}`} disabled={disabled} onClick={onClick}>
      {children}
      {isLoading && <Image className={styles.loader} src={'/images/loader.gif'} alt='loader' width={30} height={30} />}
    </button>
  )
}
