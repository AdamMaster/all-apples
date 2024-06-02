'use client'
import { FC, InputHTMLAttributes, useState } from 'react'
import s from './styles.module.css'
import { Icon } from '../icon/Icon'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  setValue: (value: string) => void
}

export const SearchBar: FC<Props> = ({ className, value, setValue, placeholder }) => {
  const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <div
      className={`${s.wrapper} ${className ? className : ''} ${isActive ? s.active : ''}`}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
    >
      <div className={s.button}>
        <Icon className={s.icon} id={'search'} />
      </div>
      <input
        className={s.input}
        value={value}
        type={'text'}
        placeholder={placeholder}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  )
}
