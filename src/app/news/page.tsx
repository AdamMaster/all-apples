import s from './styles.module.css'
import { NewsList, PromoOther } from '@/components'
import { Breadcrumbs } from '@/components/ui'
import { prisma } from '../../../prisma/prisma-client'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Полезные статьи - Оптовая продажа яблок',
  description:
    'Читай подробности о новых поступлениях, предложениях и акциях на оптовую продажу яблок. Следи за новыми событиями на нашем сайте.',
  keywords: 'новости, статьи, яблоки оптом, предложения, акции',
  alternates: {
    canonical: 'https://allapples.ru/news'
  }
}

export default async function NewsPage() {
  const newsItems = await prisma.newsItem.findMany({
    include: {
      paragraphs: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <div className={s.wrapper}>
      <PromoOther className={s.promo} title='Статьи' imageUrl='/images/promo-bg-4.jpg' />
      <section className={s.content}>
        <div className='container'>
          <Breadcrumbs />
          <div className={s.contentInner}>
            <NewsList items={newsItems} />
          </div>
        </div>
      </section>
    </div>
  )
}
