'use client'
import clsx from 'clsx'
import s from './styles.module.css'
import React from 'react'
import { Heading, Stars } from '../ui'
import Image from 'next/image'
import { AdvantageItemType, Advantages } from '../advantages/advantages'
import { VideoPlayer } from '../video-player/video-player'

interface Props {
  className?: string
}

export const Quality: React.FC<Props> = ({ className }) => {
  const advantageItems: AdvantageItemType[] = [
    {
      id: 1,
      title: 'Сбор и сортировка',
      description: 'Ручная проверка и отбор только качественных яблок',
      icon: '/images/boxes-icon.svg'
    },
    {
      id: 2,
      title: 'Хранение',
      description: 'Поддержание оптимальной температуры и влажности',
      icon: '/images/gradus-icon.svg'
    },
    {
      id: 3,
      title: 'Газовая среда',
      description: 'Замедление созревания для продления свежести',
      icon: '/images/gas-icon.svg'
    },
    {
      id: 4,
      title: 'Контроль перед отправкой',
      description: 'Повторная проверка перед отправкой клиенту',
      icon: '/images/quality-icon.svg'
    }
  ]

  return (
    <section className={clsx(s.wrapper, className)}>
      <div className={s.imgBox}>
        <Image className={s.img1} src='/images/tubercle.svg' alt='' width={250} height={200} />
        <Image className={s.img2} src='/images/apples.jpg' alt='' width={200} height={200} />
      </div>
      <div className='container'>
        <div className={s.inner}>
          <div className={s.head}>
            <Stars className={s.stars} quantity={3} width={20} />
            <Heading className={s.title} level='h2'>
              Наши <span className=''>стандарты</span>
            </Heading>
            <Stars className={s.stars} quantity={3} width={20} />
            <Stars className={s.starsMobile} quantity={5} width={20} />
          </div>
          <div className={s.subtitle}>
            Мы следим за каждым этапом – от сбора до доставки, чтобы наши яблоки сохраняли свежесть, вкус и товарный
            вид. Современные технологии хранения и строгий контроль качества гарантируют, что вы получите только лучшие
            фрукты.
          </div>
          <div className={s.grid}>
            <VideoPlayer className={s.videoPlayer} src='/videos/video-1.mp4' />
            <Advantages className={s.advantages} items={advantageItems} layout='column' />
          </div>
        </div>
      </div>
    </section>
  )
}
