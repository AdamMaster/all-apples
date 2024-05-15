import { FC } from 'react'
import s from './styles.module.css'
import { Icon } from '..'

interface Props {
  link: string
  text: string
  iconId?: string
  className?: string
}

export const ContactLink: FC<Props> = ({ link, text, iconId, className }) => {
  return (
    <a className={`${s.wrapper} ${className ? className : ''}`} href={link}>
      {iconId && <Icon className={s.icon} id={iconId} />}
      {text}
    </a>
  )
}
