import React from 'react'
import { Search } from 'lucide-react'
import { useDebounce } from 'react-use'
import s from './styles.module.css'
import { Api } from '@/shared/api/api-client'
import { useStoreQueryString } from '@/store'

interface Props {
  className?: string
}

export const SearchBar: React.FC<Props> = ({ className }) => {
  const [value, setValue] = React.useState('')
  const [isActive, setIsActive] = React.useState(false)
  const { queryString, setQueryString } = useStoreQueryString()

  const onChangeInput = (value: string) => {
    setValue(value)
    setQueryString(value)
  }

  return (
    <div className={`${s.wrapper} ${className ? className : ''} ${isActive ? s.active : ''}`}>
      <Search className={s.icon} />
      <input
        className={s.input}
        type='text'
        value={value}
        onChange={e => onChangeInput(e.target.value)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
    </div>
  )
}
