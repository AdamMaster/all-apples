'use client'

import React from 'react'
import s from './styles.module.css'
import { Heading } from '../ui'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
// import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import { NewsCard } from './news-card/news-card'

interface Props {
  className?: string
}

export const News: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${s.wrapper} ${className ? className : ''}`}>
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
              slidesPerView={3}
              spaceBetween={30}
              speed={1000}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
            >
              <SwiperSlide className={s.galleryItem}>
                <NewsCard
                  title='Вклад в общероссийский урожай'
                  text='Валовой сбор яблок, груш и айвы в РФ в 2023 году составил 2,89 млн т против 2,87 млн т в 2022-м, сообщили в «Россельхозбанке» (РСХБ) со ссылкой на данные Росстата. В последние годы в общем урожае растет доля семечковых культур (яблоки, груши, айва и т. д.). Аналитики банка подготовили рейтинг регионов по сбору яблок и других семечковых культур. Большая часть производства этой продукции приходится на Кабардино-Балкарию — 25%. За ней следует Краснодарский край (17%), замыкает топ-3 Крым (6%). Далее — Дагестан (4%), Воронежская область (4%), Ставропольский край (3%), Липецкая (3%), Московская (3%) и Белгородская области (2%).'
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}
