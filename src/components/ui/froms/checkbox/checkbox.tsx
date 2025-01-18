'use client'

import * as React from 'react'
import s from './styles.module.css'
import { Check } from 'lucide-react'
import { useFormContext } from 'react-hook-form'
import { ErrorText } from '../error-text/error-text'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  name: string
  text: string
  isChecked: boolean
}

export const Checkbox: React.FC<Props> = ({ className, name, text, isChecked, ...props }) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue
  } = useFormContext()

  const value = watch(name)
  const errorText = errors[name]?.message as string
  return (
    <React.Fragment>
      <div className={`${s.wrapper} ${className}`}>
        <div className={s.checkbox}>{isChecked && <Check className={s.checkboxIcon} width={15} height={15} />}</div>
        <div className={s.text}>{text}</div>
        <input className={s.input} type='checkbox' checked={isChecked} {...props} {...register(name)} />
      </div>
      <ErrorText text={errorText} />
    </React.Fragment>
  )
}
