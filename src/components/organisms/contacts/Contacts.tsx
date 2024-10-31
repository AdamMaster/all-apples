import { FC, ReactNode } from 'react'
import s from './styles.module.css'
import { ContactLink, Heading } from '@/components/atoms'
import { address, mail, phoneNumbers } from '@/shared/constants/constants'

interface Props {
  className?: string
}

interface Item {
  id: number
  label: string
  children: string | ReactNode
}

export const Contacts: FC<Props> = ({ className }) => {
  const listItems = [
    {
      id: 1,
      label: 'юр. адрес:',
      children: address
    },
    {
      id: 2,
      label: 'телефон:',
      children: <ContactLink text={phoneNumbers[0].text} link={`tel:${phoneNumbers[0].link}`} />
    },
    {
      id: 3,
      label: 'e-mail:',
      children: <ContactLink link={`mailto:${mail}`} text={mail} />
    }
  ]

  return (
    <div className={`${s.wrapper} ${className ? className : ''}`} id='contacts'>
      <div className='container'>
        <div className={s.inner}>
          <div className={s.grid}>
            <div className={s.content}>
              <Heading className={s.title} level={'h2'}>
                Контакты
              </Heading>
              <div className={s.list}>
                {listItems.map((item: Item) => (
                  <div className={s.item} key={item.id}>
                    <div className={s.itemKey}>{item.label}</div>
                    <div className={s.itemValue}>{item.children}</div>
                  </div>
                ))}
              </div>
              <div className={s.workSchedule}>Режим работы: Пн-Пт : с 8:00 до 19:00</div>
            </div>
            <div className={s.map}>
              <iframe
                id='1'
                src='https://yandex.ru/map-widget/v1/?um=constructor%3Ae1a9a48b3dfa281d53be18182d9997ac88c4afbded3e9671221a95a99262752f&amp;source=constructor'
                width='100%'
                height='400'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
