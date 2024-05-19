'use client'
import { ChangeEvent, ElementRef, FC, Fragment, InputHTMLAttributes, forwardRef, useState } from 'react'
import InputMask from 'react-input-mask'
import s from './styles.module.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  mode?: 'text' | 'phone'
  value?: string
  className: string
  onChangeValue: (value: string) => void
}

export const Field = forwardRef<ElementRef<'input'>, Props>((props, ref) => {
  const { mode, name, placeholder, id, value, className, onChangeValue } = props
  const [inputValue, setInputValue] = useState<string>(value ? value : '')

  const renderInput = () => {
    switch (mode) {
      case 'phone':
        return (
          <InputMask
            className={`${s.wrapper} ${className ? className : ''}`}
            mask='+7 (999) 999 99-99'
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeValue(e.target.value)}
            placeholder={placeholder}
          />
        )
      default:
        return (
          <input
            className={`${s.wrapper} ${className ? className : ''}`}
            type='text'
            name={name}
            id={id}
            value={value}
            placeholder={placeholder}
            ref={ref}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeValue(e.target.value)}
          />
        )
    }
  }

  return <Fragment>{renderInput()}</Fragment>
})
