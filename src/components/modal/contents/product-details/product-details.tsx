'use client'
import s from './styles.module.css'
import React, { FC } from 'react'
import { Button, Heading } from '@/components/ui'
import Image from 'next/image'
import { useStoreModal } from '@/store'
import { Order } from '../order/Order'
import { useRouter } from 'next/navigation'

interface Props {
  name: string
  ripeningPeriod?: string
  tastingEvaluation?: string
  description?: string
  type?: string
  imageUrl: string
}

export const ProductDetails: FC<Props> = ({ name, ripeningPeriod, tastingEvaluation, description, imageUrl }) => {
  const router = useRouter()
  const { isOpen, setOpen, setClose } = useStoreModal()
  const onClickButton = () => {
    setClose()
    setTimeout(() => {
      setOpen(<Order />)
    }, 200)
  }

  React.useEffect(() => {
    if (!isOpen) {
      router.push('/', { scroll: false })
    }
  }, [isOpen])

  return (
    <div className={s.wrapper}>
      <div className={s.imgWrapper}>
        <Image src={imageUrl} alt={name} fill />
      </div>
      <div className={s.content}>
        <Heading className={s.title} level='h3'>
          {name}
        </Heading>
        <ul className={s.character}>
          <li className={s.characterItem}>
            <span>Оценка вкуса</span>
            <span>{tastingEvaluation}</span>
          </li>
          <li className={s.characterItem}>
            <span>Период созревания</span>
            <span>{ripeningPeriod}</span>
          </li>
        </ul>
        <div className={s.description}>{description}</div>
        <Button className={s.button} color='yellow' onClick={() => onClickButton()}>
          Заказать
        </Button>
      </div>
    </div>
  )
}
