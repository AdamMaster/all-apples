import React from 'react'
import s from './styles.module.css'

interface Props {
  className?: string
}

export const LinesDecorate: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${s.wrapper} ${className ? className : ''}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
