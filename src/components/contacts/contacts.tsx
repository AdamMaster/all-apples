import { FC, ReactNode } from 'react'
import s from './styles.module.css'
import { address, mail, phoneNumbers } from '@/shared/constants/constants'
import { ContactLink, Heading } from '@/components/ui'

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
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13727.384775799204!2d43.50054818197904!3d43.67256430239726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405756cc386fd0b1%3A0x9d5dd376c498b3d9!2z0KfQtdGA0LrQtdGB0YHQutCw0Y8g0YPQuy4sIDc4LCDQkdCw0LrRgdCw0L0sINCa0LDQsdCw0YDQtNC40L3Qvi3QkdCw0LvQutCw0YDRgdC60LDRjyDQoNC10YHQvy4sIDM2MTUzMg!5e0!3m2!1sru!2sru!4v1730403213067!5m2!1sru!2sru'
                width='100%'
                height='100%'
                loading='lazy'
                title='Map'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
