'use client'
import { Fragment, InputHTMLAttributes } from 'react'
import InputMask from 'react-input-mask'
import s from './styles.module.css'
import { useFormContext } from 'react-hook-form'
import { ErrorText } from '../error-text/error-text'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  mode?: 'text' | 'phone'
  value?: string
  label?: string
  name: string
}

export const Field: React.FC<Props> = ({ mode, name, placeholder, label, readOnly, className }) => {
  const {
    register,
    formState: { errors },
    watch
  } = useFormContext()

  const value = watch(name)
  const errorText = errors[name]?.message as string

  const renderInput = () => {
    switch (mode) {
      case 'phone':
        return (
          <div className={s.wrapper}>
            <InputMask
              className={`${s.input} ${className ? className : ''} ${errors[name] && s.error}`}
              mask='+7 (999) 999 99-99'
              value={value}
              placeholder={placeholder}
              autoComplete='off'
              {...register(name)}
            />
            <ErrorText text={errorText} />
          </div>
        )
      default:
        return (
          <div className={s.wrapper}>
            {label && <div className={s.label}>{label}</div>}
            <input
              className={`${s.input} ${className ? className : ''} ${errors[name] && s.error}`}
              type='text'
              value={value}
              placeholder={placeholder}
              autoComplete='off'
              readOnly={readOnly}
              {...register(name)}
            />
            <ErrorText text={errorText} />
          </div>
        )
    }
  }

  return <Fragment>{renderInput()}</Fragment>
}
