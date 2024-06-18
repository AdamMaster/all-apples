'use client'
import Link from 'next/link'
import s from './styles.module.css'
import { usePathname } from 'next/navigation'
import { FC } from 'react'

interface Props {
  className?: string
}

export const Navbar: FC<Props> = ({ className }) => {
  const pathName = usePathname()
  const links = [
    { id: 'catalog', text: 'Каталог', href: '#catalog' },
    { id: 'about', text: 'О нас', href: '#about' },
    { id: 'contact', text: 'Контакты', href: '#contacts' }
  ]

  return (
    <nav className={`${s.wrapper} ${className ? className : ''}`}>
      <ul className={s.list}>
        {links.map(item => (
          <li className={`${s.item}`} key={item.id}>
            <Link className={`${s.link} ${pathName == item.href ? s.active : ''}`} href={item.href}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
