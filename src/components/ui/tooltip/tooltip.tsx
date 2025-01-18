import s from './styles.module.css'
import React from 'react'

interface Props {
  className?: string
  text: string
  children: React.ReactNode
}

export const Tooltip: React.FC<Props> = ({ className, text, children }) => {
  const [isShow, setIsShow] = React.useState<boolean>(false)
  const tooltipClassName = isShow && s.show

  return (
    <div
      className={`${s.wrapper} ${className}`}
      onMouseOver={() => setIsShow(true)}
      onMouseOut={() => setIsShow(false)}
    >
      {children}
      <div className={`${s.tooltip} ${tooltipClassName}`}>{text}</div>
    </div>
  )
}
