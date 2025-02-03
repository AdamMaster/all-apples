'use client'
import React from 'react'
import s from './styles.module.css'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { links } from '@/shared/constants/constants'

interface Item {
  href: string
  text: string
  active?: boolean
}

interface Props {
  className?: string
}

export const Breadcrumbs: React.FC<Props> = ({ className }) => {
  const pathname = usePathname()
  console.log(links)

  // Создаем массив хлебных крошек
  const breadcrumbs: Item[] = pathname
    .split('/')
    .filter(Boolean)
    .map((item, index, arr) => {
      const href = '/' + arr.slice(0, index + 1).join('/')
      const link = links.find(link => link.href === href)

      return {
        href,
        text: link ? link.text : item.replace('-', ' '),
        active: index === arr.length - 1
      }
    })

  const items: Item[] = [
    {
      href: '/',
      text: 'Главная',
      active: false
    },
    ...breadcrumbs
  ]

  return (
    <nav className={clsx(s.wrapper, className)}>
      <ol className={s.list}>
        {items.map(item => (
          <li className={s.item} key={item.href}>
            <Link className={clsx(s.link, item.active ? s.active : '')} href={item.href}>
              {item.text}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
