'use client'
import Link from 'next/link'
import s from './styles.module.css'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { menuLinks } from '@/shared/constants/constants'
import { useStoreMobileMenu } from '@/store'

interface Props {
  mobile?: boolean
  className?: string
}

export const Navbar: FC<Props> = ({ mobile, className }) => {
  const pathName = usePathname()
  const { setOpen } = useStoreMobileMenu()

  const onClickLink = () => {
    setOpen(false)
  }

  return (
    <nav className={`${s.wrapper} ${className ? className : ''} ${mobile ? s.mobileMenu : ''}`}>
      <ul className={s.list}>
        {menuLinks.map(item => (
          <li className={`${s.item}`} key={item.id}>
            <Link
              className={`${s.link} ${pathName == item.href ? s.active : ''}`}
              href={item.href}
              onClick={() => onClickLink()}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
