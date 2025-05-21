import React from 'react'
import s from './styles.module.css'
import clsx from 'clsx'
import { NewsItemWithRelations } from '../types/types'
import { NewsCard } from '../news-card/news-card'
import parse from 'html-react-parser'

interface Props {
  className?: string
  items: NewsItemWithRelations[]
}

export const NewsList: React.FC<Props> = ({ className, items }) => {
  return (
    <div className={clsx(s.wrapper, className)}>
      {items.map(item => (
        <NewsCard
          id={item.id}
          title={item.title}
          text={parse(item.paragraphs[0].text)}
          imageUrl={item.imageUrl}
          date={item.createdAt!}
          key={item.id}
        />
      ))}
    </div>
  )
}
