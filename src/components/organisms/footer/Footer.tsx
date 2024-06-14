import { ContactLink, Logo } from '@/components/atoms'
import s from './styles.module.css'
import { mail, phoneNumbers } from '@/shared/constants/constants'

export const Footer = () => {
  return (
    <footer className={s.wrapper}>
      <div className={'container'}>
        <div className={s.inner}>
          <div className={s.top}>
            <div className={s.topCol}>
              <Logo className={s.footerLogo} color={'default'} />
              <div className={s.copyright}>Все права защищены © 2024</div>
            </div>
            <div className={s.topCol}>
              <div className={s.title}>Адрес:</div>
              <div className={s.text}>
                Кабардино-Балкарская республика, <br /> г. Баксан, ул. Гагарина 2/7, дом 15
              </div>
            </div>
            <div className={s.topCol}>
              <div className={s.title}>Контакты:</div>
              <ContactLink className={s.link} text={phoneNumbers[0]} link={`tel:${phoneNumbers[0]}`} iconId={'phone'} />
              <ContactLink className={s.link} link={mail} text={mail} iconId={'mail'} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
