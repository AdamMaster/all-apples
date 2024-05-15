import { FC } from 'react'
import s from './styles.module.css'

interface Props {
  numbers: string[]
}

export const PhoneLinks: FC<Props> = ({ numbers }) => {
  const formatPhoneNumber = (number: string) => {
    const cleaned = number.replace(/\D/g, '')

    if (!cleaned) {
      return number
    }

    const formatted = cleaned.slice(1)

    return formatted
  }

  return (
    <div className={s.wrapper}>
      {numbers.map(item => (
        <a className={s.link} href={`tel:+7${formatPhoneNumber(item)}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  )
}
