'use client'
import { ChangeEvent, ElementRef, FC, Fragment, InputHTMLAttributes, forwardRef, useState } from 'react'
import InputMask from 'react-input-mask'
import s from './styles.module.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  mode?: 'text' | 'phone'
  value?: string
  label?: string
  className: string
  onChangeValue?: (value: string) => void
}

export const Field = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { mode, name, placeholder, id, value, defaultValue, label, readOnly, className, onChangeValue } = props
  const [inputValue, setInputValue] = useState<string>(value ? value : '')

  const renderInput = () => {
    switch (mode) {
      case 'phone':
        return (
          <div className={s.wrapper}>
            <InputMask
              className={`${s.input} ${className ? className : ''}`}
              mask='+7 (999) 999 99-99'
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeValue && onChangeValue(e.target.value)}
              placeholder={placeholder}
            />
          </div>
        )
      default:
        return (
          <div className={s.wrapper}>
            {label && <div className={s.label}>{label}</div>}
            <input
              className={`${s.input} ${className ? className : ''}`}
              type='text'
              name={name}
              id={id}
              value={value}
              placeholder={placeholder}
              ref={ref}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeValue && onChangeValue(e.target.value)}
              autoComplete='off'
              readOnly={readOnly}
            />
          </div>
        )
    }
  }

  return <Fragment>{renderInput()}</Fragment>
})
