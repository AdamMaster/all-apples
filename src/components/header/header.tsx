'use client'

import React from 'react'
import s from './styles.module.css'
import { mail, messengers, phoneNumbers } from '@/shared/constants/constants'
import { useStoreMobileMenu } from '@/store'
import { Burger, ContactLink, Logo } from '@/components/ui'
import { Navbar } from '../navbar/navbar'

export const Header = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [isScroll, setIsScroll] = React.useState(false)
  const { isOpen, setOpen } = useStoreMobileMenu()
  const onClickBurger = () => {
    setOpen(!isOpen)
  }

  React.useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        if (scrollY >= 80) {
          setIsScroll(true)
          console.log(isScroll, scrollY)
        } else {
          setIsScroll(false)
          console.log(isScroll, scrollY)
        }
      }
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [isScroll])

  return (
    <header className={`${s.wrapper} ${isScroll ? s.white : ''}`} ref={ref}>
      <div className={'container'}>
        <div className={s.bottomInner}>
          <Logo className={s.logo} color={'default'} />
          <Navbar className={s.navbar} />
          <div className={s.messengers}>
            <ContactLink className={s.link} link={`https://wa.me/${messengers.whatsapp}`} iconId={'whatsapp-fill'} />
            <ContactLink className={s.link} link={`https://t.me/${messengers.telegram}`} iconId={'telegram-fill'} />
          </div>
          <div className={s.links}>
            <ContactLink text={phoneNumbers[0].text} link={`tel:${phoneNumbers[0].link}`} />
            <ContactLink link={`mailto:${mail}`} text={mail} />
          </div>
          <Burger className={s.burger} onClick={() => onClickBurger()} />
        </div>
      </div>
    </header>
  )
}
