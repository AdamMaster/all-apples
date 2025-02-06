'use client'

import s from './styles.module.css'
import { useStoreMobileMenu } from '@/store'
import { useEffect } from 'react'
import { mail, messengers, phoneNumbers } from '@/shared/constants/constants'
import { ContactLink, Logo } from '@/components/ui'
import { Navbar } from '../navbar/navbar'
import { X } from 'lucide-react'
import { useGesture } from '@use-gesture/react'

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

  const bind = useGesture({
    onDrag: ({ direction, movement: [, my] }) => {
      if (isOpen && direction[1] < 0 && my < -50) {
        setOpen(false)
      }
    }
  })

  return (
    <div>
      {isOpen && (
        <div {...bind()} className={`${s.wrapper} ${isOpen ? s.active : ''}`}>
          {/* Контент меню */}

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
                <ContactLink
                  className={s.link}
                  link={`https://wa.me/${messengers.whatsapp}`}
                  iconId={'whatsapp-fill'}
                />
                <ContactLink className={s.link} link={`https://t.me/${messengers.telegram}`} iconId={'telegram-fill'} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
