'use client'

import { ChangeEvent, ElementRef, FC, TextareaHTMLAttributes, forwardRef } from 'react'
import s from './styles.module.css'
import { useFormContext } from 'react-hook-form'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label?: string
  className?: string
}

export const Textarea: FC<Props> = ({ name, placeholder, label, className }) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue
  } = useFormContext()

  const value = watch(name)

  return (
    <div className={s.wrapper}>
      {label && <div className={s.label}>{label}</div>}
      <textarea
        className={`${s.textarea} ${className ? className : ''}`}
        value={value}
        placeholder={placeholder}
        autoComplete='off'
        {...register(name)}
      />
    </div>
  )
}
