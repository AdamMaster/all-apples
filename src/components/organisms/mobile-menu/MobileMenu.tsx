'use client'
import { Navbar } from '@/components/molecules'
import s from './styles.module.css'
import { useStoreMobileMenu } from '@/store'
import { useEffect } from 'react'
import { ContactLink } from '@/components/atoms'
import { mail, phoneNumbers } from '@/shared/constants/constants'

export const MobileMenu = () => {
  const { isOpen } = useStoreMobileMenu()

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.scrollbarGutter = 'stable'
      document.body.style.overflow = 'hidden'
    } else {
      document.documentElement.style.scrollbarGutter = ''
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div className={`${s.wrapper} ${isOpen ? s.active : ''}`}>
      <div className={s.inner}>
        <div className={s.menu}>
          <Navbar mobile className={s.menu} />
          <div className={s.links}>
            <ContactLink text={phoneNumbers[0].text} link={`tel:${phoneNumbers[0].link}`} />
            <ContactLink link={`mailto:${mail}`} text={mail} />
          </div>
        </div>
      </div>
    </div>
  )
}
