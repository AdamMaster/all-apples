import React, { FC, ReactNode } from 'react'

interface Props {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
  className?: string
}

export const Heading: FC<Props> = ({ level, children, className }) => {
  const Tag = level as keyof JSX.IntrinsicElements
  return <Tag className={className}>{children}</Tag>
}
