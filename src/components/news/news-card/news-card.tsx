import React from 'react'
import s from './styles.module.css'
import Image from 'next/image'
import { Heading } from '@/components/ui'
import { text } from 'stream/consumers'

interface Props {
  title: string
  text: string
}

export const NewsCard: React.FC<Props> = ({ title, text }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.imgWrapper}>
        <Image src={'/images/news/1.jpg'} alt={title} layout={'fill'} objectFit={'cover'} />
      </div>
      <div className={s.content}>
        <div className={s.title}>{title}</div>
        <p className={s.text}>{text}</p>
      </div>
    </div>
  )
}
