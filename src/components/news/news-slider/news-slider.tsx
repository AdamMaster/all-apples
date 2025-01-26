'use client'

import React from 'react'
import s from './styles.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import { Heading } from '@/components/ui'
import { NewsCard } from '../news-card/news-card'
import { NewsItemWithRelations } from '../types/types'

interface Props {
  className?: string
  newsItems: NewsItemWithRelations[]
}

export const NewsSlider: React.FC<Props> = ({ className, newsItems }) => {
  return (
    <section className={`${s.wrapper} ${className ? className : ''}`} id='news'>
      <div className='container'>
        <div className={s.inner}>
          <div className={s.head}>
            <Heading className={s.title} level='h2'>
              Статьи
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
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              modules={[Autoplay, Pagination, Navigation]}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 15
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 15
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30
                }
              }}
            >
              {newsItems.length > 0 &&
                newsItems.map(newsItem => (
                  <SwiperSlide className={s.swiperItem} key={newsItem.id}>
                    <NewsCard
                      id={newsItem.id}
                      title={newsItem.title}
                      text={newsItem.paragraphs[0].text}
                      imageUrl={newsItem.imageUrl}
                      date={newsItem.createdAt!}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
