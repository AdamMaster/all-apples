'use client'

import s from './styles.module.css'
import { useStoreMobileMenu } from '@/store'
import React, { useEffect } from 'react'
import { mail, messengers, phoneNumbers } from '@/shared/constants/constants'
import { ContactLink, Logo } from '@/components/ui'
import { Navbar } from '../navbar/navbar'
import { X } from 'lucide-react'

export const MobileMenu = () => {
  const { isOpen, setOpen } = useStoreMobileMenu()

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.scrollbarGutter = 'stable'
      document.body.style.overflow = 'hidden'
    } else {
      document.documentElement.style.scrollbarGutter = ''
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const menuRef = React.useRef<HTMLDivElement>(null)

  const touchStartY = React.useRef(0)
  const touchEndY = React.useRef(0)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY
  }

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndY.current = e.touches[0].clientY
  }

  const onTouchEnd = () => {
    if (touchStartY.current - touchEndY.current > 50) {
      setOpen(false) // Закрываем меню при свайпе вверх
    }
  }

  return (
    <div
      className={`${s.wrapper} ${isOpen ? s.active : ''}`}
      ref={menuRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <Logo className={s.logo} />
      <div className={s.closeButton} onClick={() => setOpen(false)}>
        <X width={30} height={30} />
      </div>
      <div className={s.inner}>
        <div className={s.menu}>
          <Navbar mobile className={s.menu} />
          <div className={s.links}>
            <ContactLink text={phoneNumbers[0].text} link={`tel:${phoneNumbers[0].link}`} />
            <ContactLink link={`mailto:${mail}`} text={mail} />
          </div>
          <div className={s.messengers}>
            <ContactLink className={s.link} link={`https://wa.me/${messengers.whatsapp}`} iconId={'whatsapp-fill'} />
            <ContactLink className={s.link} link={`https://t.me/${messengers.telegram}`} iconId={'telegram-fill'} />
          </div>
        </div>
      </div>
    </div>
  )
}
