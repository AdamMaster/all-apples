'use client'
import React from 'react'
import s from './styles.module.css'
import Link from 'next/link'
import clsx from 'clsx'

interface Props {
  className?: string
  href?: string
}

export const LinesDecorate: React.FC<Props> = ({ className, href }) => {
  if (href) {
    return (
      <Link href={href ? href : ''} className={clsx(s.wrapper, className)}>
        <span></span>
        <span></span>
        <span></span>
      </Link>
    )
  }

  return (
    <div className={clsx(s.wrapper, className)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
