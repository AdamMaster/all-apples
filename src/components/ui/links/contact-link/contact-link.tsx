import { FC } from 'react'
import s from './styles.module.css'
import { Icon } from '../../icon/icon'
import { Phone } from 'lucide-react'

interface Props {
  link: string
  text?: string
  iconId?: string
  className?: string
}

export const ContactLink: FC<Props> = ({ link, text, iconId, className }) => {
  return (
    <a className={`${s.wrapper} ${className ? className : ''}`} href={link} target='_blank'>
      {iconId && <Icon className={s.icon} id={iconId} />}
      {text}
    </a>
  )
}
