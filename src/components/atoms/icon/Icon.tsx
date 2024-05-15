import { FC } from 'react'

interface Props {
  id: string
  className?: string
}

export const Icon: FC<Props> = ({ id, className }) => {
  return (
    <svg className={`${className ? className : ''}`}>
      <use xlinkHref={`icons.svg#${id}`}></use>
    </svg>
  )
}
