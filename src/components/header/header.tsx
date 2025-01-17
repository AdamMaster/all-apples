'use client'
import s from './styles.module.css'
import { mail, messengers, phoneNumbers } from '@/shared/constants/constants'
import { useStoreMobileMenu } from '@/store'
import { Burger, ContactLink, Logo } from '@/components/ui'
import { Navbar } from '../navbar/navbar'

export const Header = () => {
  const { isOpen, setOpen } = useStoreMobileMenu()
  const onClickBurger = () => {
    setOpen(!isOpen)
  }

  return (
    <header className={s.wrapper}>
      <div className={s.bottom}>
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
      </div>
    </header>
  )
}
