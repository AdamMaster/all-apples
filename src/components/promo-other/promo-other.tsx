import Image from 'next/image'
import s from './styles.module.css'
import { FC } from 'react'
import { Button, LinesDecorate, Heading } from '@/components/ui'

interface Props {
  className?: string
  title: string
  imageUrl: string
}

export const PromoOther: FC<Props> = ({ className, title, imageUrl }) => {
  return (
    <section className={`${s.wrapper} ${className ? className : ''}`}>
      <Image className={s.bg} src={imageUrl} alt={title} fill priority />
      <div className='container'>
        <div className={s.inner}>
          <Heading className={s.title} level='h1'>
            {title}
          </Heading>
        </div>
      </div>
      <LinesDecorate />
    </section>
  )
}
