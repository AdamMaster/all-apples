'use client'

import { FC } from 'react'
import Image from 'next/image'
import s from './styles.module.css'
import { useStoreModal } from '@/store'
import { Order, ProductDetails } from '@/components/modal/contents'
import { Button, Tooltip } from '@/components/ui'

interface Props {
  id: number
  category?: string
  name: string
  type?: string
  imageUrl: string
  price?: number
  sort?: number
  ripeningPeriod: string
  tastingEvaluation: string
  description: string
  className?: string
}

export const ProductCard: FC<Props> = ({
  name,
  type,
  imageUrl,
  price,
  sort,
  ripeningPeriod,
  tastingEvaluation,
  description,
  className
}) => {
  const { setOpen } = useStoreModal()
  const onClickButton = () => {
    setOpen(
      <ProductDetails
        name={name}
        ripeningPeriod={ripeningPeriod}
        tastingEvaluation={tastingEvaluation}
        description={description}
        type={type}
        imageUrl={imageUrl}
      />
    )
  }

  return (
    <div className={s.wrapper} onClick={() => onClickButton()}>
      <Tooltip className={s.tooltip} text='Вкусовая оценка'>
        <div className={s.tastingEvaluation}>{tastingEvaluation}</div>
      </Tooltip>
      <div className={s.head}>
        <Image className={s.img} alt={name} src={imageUrl} fill />
      </div>
      <div className={s.body}>
        {/* <div className={s.category}>{type}</div> */}
        <div className={s.sort}>{name}</div>
        <Button className={s.button} color='yellow' stroked>
          Подробнее
        </Button>
      </div>
    </div>
  )
}
