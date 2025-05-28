import { prisma } from '../../../../prisma/prisma-client'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/ui'
import s from './styles.module.css'
import type { Metadata } from 'next'
import { PromoOther } from '@/components'
import parse from 'html-react-parser'

export const metadata: Metadata = {
  title: 'Полезные статьи - Яблоки оптом',
  description:
    'Читай подробности о новых поступлениях, предложениях и акциях на оптовую продажу яблок. Следи за новыми событиями на нашем сайте.',
  keywords: 'новости, статьи, яблоки оптом, предложения, акции'
}

export default async function NewsDetailsPage({ params: { id } }: { params: { id: string } }) {
  if (!id || isNaN(Number(id))) {
    return notFound()
  }

  const newsItem = await prisma.newsItem.findFirst({
    where: {
      id: Number(id)
    },
    include: {
      paragraphs: true
    }
  })

  if (!newsItem) {
    return notFound()
  }

  return (
    <div className={s.wrapper}>
      <PromoOther title={newsItem.title} imageUrl={newsItem.imageUrl} />
      <section className={s.content}>
        <div className={`${s.container} container`}>
          <Breadcrumbs />
          <div className={s.contentInner}>
            <div className={s.paragraphs}>
              {newsItem.paragraphs.map(paragraph => (
                <div className={s.paragraph} key={paragraph.id}>
                  {paragraph.subtitle && <div className={s.paragraphSubtitle}>{paragraph.subtitle}</div>}
                  <div className={s.text}>{parse(paragraph.text)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
