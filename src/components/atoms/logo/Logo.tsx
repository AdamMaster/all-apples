import Image from 'next/image'
import s from './styles.module.css'
import { FC } from 'react'
import Link from 'next/link'

interface Props {
  color: 'default' | 'white'
  className?: string
}

export const Logo: FC<Props> = ({ color, className }) => {
  const colors = {
    default: 'logo-3.svg',
    white: 'logo-white.svg'
  }[color]

  return (
    <Link className={`${s.wrapper} ${className ? className : ''}`} href={'/'}>
      <Image className={s.img} src={colors} alt={'logo'} width={170} height={50} />
    </Link>
  )
}
