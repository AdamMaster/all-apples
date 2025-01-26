import React from 'react'
import { Search, X } from 'lucide-react'
import s from './styles.module.css'
import { useStoreQueryString } from '@/store'

interface Props {
  className?: string
}

export const SearchBar: React.FC<Props> = ({ className }) => {
  const [value, setValue] = React.useState('')
  const [isActive, setIsActive] = React.useState(false)
  const { setQueryString } = useStoreQueryString()

  const onChangeInput = (value: string) => {
    setValue(value)
    setQueryString(value)
  }

  const onClickDelete = () => {
    setValue('')
    setQueryString('')
  }

  return (
    <div className={`${s.wrapper} ${className ? className : ''} ${isActive ? s.active : ''}`}>
      <Search className={s.icon} />
      <input
        className={s.input}
        type='text'
        value={value}
        placeholder={!isActive ? 'Введите название сорта' : ''}
        onChange={e => onChangeInput(e.target.value)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
      {value !== '' && <X className={s.deleteButton} width={18} height={18} onClick={() => onClickDelete()} />}
    </div>
  )
}
