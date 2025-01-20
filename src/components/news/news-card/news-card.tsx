import React from 'react'
import s from './styles.module.css'
import Image from 'next/image'
import { Button, Heading } from '@/components/ui'
import { text } from 'stream/consumers'
import Link from 'next/link'

interface Props {
  id: number
  title: string
  text: string
  imageUrl: string
  date: Date
  customDate?: string
}

export const NewsCard: React.FC<Props> = ({ id, title, text, imageUrl, date, customDate }) => {
  const formattedDate = date.toLocaleDateString('ru-RU')
  {
    String(formattedDate)
  }
  return (
    <Link href={`/news/${id}`} className={s.wrapper}>
      <div className={s.imgWrapper}>
        <Image src={imageUrl} alt={title} fill />
      </div>
      <div className={s.content}>
        {/* <div className={s.date}>{customDate ? customDate : String(formattedDate)}</div> */}
        <div className={s.title}>{title}</div>
        <div className={s.text}>
          <p className={s.text}>{text}</p>
        </div>
        <Button className={s.button} stroked>
          Подробнее
        </Button>
      </div>
    </Link>
  )
}
