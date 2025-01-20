'use client'

import { FC } from 'react'
import Image from 'next/image'
import s from './styles.module.css'
import { useStoreModal } from '@/store'
import { Button, Tooltip } from '@/components/ui'
import { ProductDetails } from '@/components/modal'

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
    <div className={`${s.wrapper} ${className ? className : ''}`} onClick={() => onClickButton()}>
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
