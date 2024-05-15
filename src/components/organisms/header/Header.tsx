import Image from 'next/image'
import s from './styles.module.css'
import { mail, phoneNumbers } from '@/shared/constants/constants'
import { Logo, ContactLink, PhoneLinks } from '@/components/atoms'
import { Navbar } from '@/components/molecules'

export const Header = () => {
  return (
    <header className={s.wrapper}>
      <div className={s.bottom}>
        <div className='container'>
          <div className={s.bottomInner}>
            <Logo className={s.logo} color='black' />
            <Navbar className={s.navbar} />
            <div className={s.links}>
              <ContactLink text={phoneNumbers[0]} link={`tel:${phoneNumbers[0]}`} />
              <ContactLink link={mail} text={mail} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
