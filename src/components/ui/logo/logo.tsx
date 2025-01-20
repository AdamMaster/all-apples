import Image from 'next/image'
import s from './styles.module.css'
import { FC } from 'react'
import Link from 'next/link'

interface Props {
  text?: boolean
  color: 'default' | 'white'
  className?: string
}

export const Logo: FC<Props> = ({ text = true, className }) => {
  return (
    <Link className={`${s.wrapper} ${className ? className : ''}`} href={'/'}>
      <Image className={s.img} src={'/images/logo-km.svg'} alt={'logo'} width={170} height={50} />
      {text && (
        <div className={s.text}>
          <div className={s.name}>
            Kavkaz<span>Market</span>
          </div>
          <div className={s.descr}>оптовая продажа яблок</div>
        </div>
      )}
    </Link>
  )
}
