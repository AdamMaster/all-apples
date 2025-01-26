import React from 'react'
import s from './styles.module.css'
import Link from 'next/link'

interface Props {
  className?: string
  href?: string
}

export const LinesDecorate: React.FC<Props> = ({ className, href }) => {
  if (href) {
    return (
      <Link href={href ? href : ''} className={`${s.wrapper} ${className ? className : ''}`}>
        <span></span>
        <span></span>
        <span></span>
      </Link>
    )
  }

  return (
    <div className={`${s.wrapper} ${className ? className : ''}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
