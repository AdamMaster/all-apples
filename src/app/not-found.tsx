import { MoveLeft } from 'lucide-react'
import s from './not-found.module.css'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: '404 - Страница не найдена'
}

export default function NotFound() {
  return (
    <div className={s.wrapper}>
      <div className={s.inner}>
        <Image className={s.logo} src={'/images/logo-white.svg'} width={150} height={150} alt='AllApples' />
        <h1 className={s.title}>404</h1>
        <p className={s.text}>
          Страница не найдена. <br /> Возможно, вы ввели неправильный адрес.
        </p>
        <Link className={s.button} href={'/'}>
          <MoveLeft />
          Вернуться на главную
        </Link>
      </div>
    </div>
  )
}
