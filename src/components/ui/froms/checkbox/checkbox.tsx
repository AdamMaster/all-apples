'use client'

import * as React from 'react'
import s from './styles.module.css'
import { Check } from 'lucide-react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  text: string
  isChecked: boolean
}

export const Checkbox = React.forwardRef<HTMLInputElement, Props>(({ className, isChecked, text, ...props }, ref) => {
  return (
    <div className={`${s.wrapper} ${className}`}>
      <div className={s.checkbox}>{isChecked && <Check className={s.checkboxIcon} width={15} height={15} />}</div>
      <div className={s.text}>{text}</div>
      <input ref={ref} type='checkbox' className={s.input} checked={isChecked} {...props} />
    </div>
  )
})
