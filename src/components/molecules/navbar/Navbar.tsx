'use client'
import Link from 'next/link'
import s from './styles.module.css'
import { usePathname } from 'next/navigation'

interface Props {
  className?: string
}

export const Navbar: FC<Props> = ({ className }) => {
  const pathName = usePathname()
  const links = [
    { id: 'home', text: 'Главная', href: '/' },
    { id: 'about', text: 'О нас', href: '#' },
    { id: 'contacts', text: 'Контакты', href: '#' }
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
