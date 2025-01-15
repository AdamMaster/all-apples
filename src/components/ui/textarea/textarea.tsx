import { ChangeEvent, ElementRef, FC, TextareaHTMLAttributes, forwardRef } from 'react'
import s from './styles.module.css'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: string
  label?: string
  className?: string
  onChangeValue?: (value: string) => void
}

export const Textarea: FC<Props> = forwardRef<ElementRef<'textarea'>, Props>((props, ref) => {
  const { name, placeholder, id, value, label, className, onChangeValue } = props

  return (
    <div className={s.wrapper}>
      {label && <div className={s.label}>{label}</div>}
      <textarea
        className={`${s.textarea} ${className ? className : ''}`}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        ref={ref}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChangeValue && onChangeValue(e.target.value)}
        autoComplete='off'
      />
    </div>
  )
})
