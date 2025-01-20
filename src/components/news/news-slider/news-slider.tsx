'use client'

import React from 'react'
import s from './styles.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
// import { Autoplay } from 'swiper/modules'
import { NewsItem } from '@prisma/client'
import { Heading } from '@/components/ui'
import { NewsCard } from '../news-card/news-card'

interface Props {
  className?: string
  newsItems: NewsItem[]
}

export const NewsSlider: React.FC<Props> = ({ className, newsItems }) => {
  return (
    <div className={`${s.wrapper} ${className ? className : ''}`} id='news'>
      <div className='container'>
        <div className={s.inner}>
          <div className={s.head}>
            <Heading className={s.title} level='h2'>
              Новости
            </Heading>
            <Heading className={s.subtitle} level='h3'>
              Расскажем о том, что важно
            </Heading>
          </div>

          <div className={s.gallery}>
            <Swiper
              className={s.swiper}
              slidesPerView={3}
              spaceBetween={30}
              speed={1000}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
            >
              {newsItems.length > 0 &&
                newsItems.map(newsItem => (
                  <SwiperSlide className={s.swiperItem} key={newsItem.id}>
                    <NewsCard
                      id={newsItem.id}
                      title={newsItem.title}
                      text={newsItem.text}
                      imageUrl={newsItem.imageUrl}
                      date={newsItem.createdAt!}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}
