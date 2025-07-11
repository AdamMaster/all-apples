import s from './styles.module.css'
import { address, mail, phoneNumbers } from '@/shared/constants/constants'
import { ContactLink, Logo } from '@/components/ui'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className={s.wrapper}>
      <div className={s.inner}>
        <div className={s.top}>
          <div className={'container'}>
            <div className={s.topInner}>
              <div className={s.topCol}>
                <Logo className={s.footerLogo} square={false} />
                <div className={s.copyright}>Все права защищены © 2024</div>
              </div>
              <div className={s.topCol}>
                <div className={s.title}>Адрес:</div>
                <div className={s.text}>{address}</div>
              </div>
              <div className={s.topCol}>
                <div className={s.title}>Контакты:</div>
                <ContactLink
                  className={s.link}
                  text={phoneNumbers[0].text}
                  link={`tel:${phoneNumbers[0].link}`}
                  iconId={'phone'}
                />
                <ContactLink className={s.link} link={`mailto:${mail}`} text={mail} iconId={'email'} />
              </div>
            </div>
          </div>
        </div>
        <div className={s.bottom}>
          <div className='container'>
            <div className={s.bottomInner}>
              <Link className={s.bottomLink} href='/policy'>
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
