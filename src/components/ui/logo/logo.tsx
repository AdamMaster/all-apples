import Image from 'next/image'
import s from './styles.module.css'
import { FC } from 'react'
import Link from 'next/link'

interface Props {
  text?: boolean
  color?: 'default' | 'white'
  square?: boolean
  className?: string
}

export const Logo: FC<Props> = ({ text = true, square = true, className }) => {
  return (
    <Link className={`${s.wrapper} ${className ? className : ''} ${!square ? s.square : ''}`} href={'/'}>
      <Image
        className={s.img}
        src={square ? '/images/logo.svg' : '/images/logo-white.svg'}
        alt={'logo'}
        width={170}
        height={50}
      />
      {text && (
        <div className={s.text}>
          <div className={s.name}>
            All<span>Apples</span>
          </div>
          <div className={s.descr}>оптовая продажа яблок</div>
        </div>
      )}
    </Link>
  )
}
