import Image from 'next/image'
import s from './styles.module.css'
import { FC } from 'react'

interface Props {
  color: 'black' | 'white'
  className?: string
}

export const Logo: FC<Props> = ({ color, className }) => {
  const colors = {
    black: 'logo.svg',
    white: 'logo-white.svg'
  }[color]

  return (
    <a className={`${s.wrapper} ${className ? className : ''}`} href={'/'}>
      <Image className={s.img} src={colors} alt={'logo'} width={170} height={50} />
    </a>
  )
}
