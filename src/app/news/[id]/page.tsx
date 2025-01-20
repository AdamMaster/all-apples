import Image from 'next/image'
import { prisma } from '../../../../prisma/prisma-client'
import { notFound } from 'next/navigation'
import s from './styles.module.css'
import { Button, Heading, LinesDecorate } from '@/components/ui'
import { ArrowLeft } from 'lucide-react'

export default async function NewsPage({ params: { id } }: { params: { id: string } }) {
  if (!id || isNaN(Number(id))) {
    return notFound()
  }

  const newsItem = await prisma.newsItem.findFirst({
    where: {
      id: Number(id)
    }
  })

  if (!newsItem) {
    return notFound()
  }

  const textArray = newsItem.text.split('\n')

  return (
    <div className={s.wrapper}>
      <section className={s.promo}>
        <Image className={s.promoBg} src={newsItem.imageUrl} alt={newsItem.title} fill />
        <div className='container'>
          <div className={s.promoInner}>
            <Heading className={s.promoTitle} level='h1'>
              {newsItem.title}
            </Heading>
          </div>
        </div>
        <LinesDecorate />
      </section>
      <section className={s.content}>
        <div className={`${s.container} container`}>
          <div className={s.contentInner}>
            <Button className={s.backLink} link='/#news' color='grey'>
              <ArrowLeft size={15} />
              Назад
            </Button>
            <div className={s.contentText}>
              {textArray.map((textArrayItem, index) => (
                <p key={index}>{textArrayItem}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
