'use client'
import { FC, InputHTMLAttributes, useRef, useState } from 'react'
import s from './styles.module.css'
import { Product } from '@prisma/client'
import { useStoreProducts } from '@/store/products/useStoreProducts'
import { Icon } from '@/components/ui'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  setValue: (value: string) => void
}

export const SearchBar: FC<Props> = ({ className, value, setValue, placeholder }) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const { getProducts } = useStoreProducts()

  const handleCHangeInput = (value: string) => {
    setValue(value)
    getProducts(value)
  }

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
        onChange={e => handleCHangeInput(e.target.value)}
      />
    </div>
  )
}
