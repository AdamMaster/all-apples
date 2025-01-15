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
      <Image className={s.img} src={'/images/logo-km.svg'} alt={'logo'} width={170} height={50} />
      <div className={s.text}>
        <div className={s.name}>
          Kavkaz<span>Market</span>
        </div>
        <div className={s.descr}>оптовая продажа яблок</div>
      </div>
    </Link>
  )
}
