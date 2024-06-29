import { FC } from 'react'
import Image from 'next/image'
import s from './styles.module.css'
import { ProductCardType } from './types/types'
import { Button } from '@/components/atoms'
import { useStoreModal } from '@/store'
import { Order } from '@/components/modal/contents'

export const ProductCard: FC<ProductCardType> = ({ type, sort, imgUrl }) => {
  const { setOpen } = useStoreModal()
  const onClickButton = () => {
    setOpen(<Order productFullName={`${type} ${sort}`} />)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.head}>
        <Image className={s.img} alt='card-img' src={imgUrl} layout='fill' objectFit='cover' />
      </div>
      <div className={s.body}>
        <div className={s.category}>{type}</div>
        <div className={s.sort}>{sort}</div>
        <Button className={s.button} onClick={() => onClickButton()}>
          Узнать цену
        </Button>
      </div>
    </div>
  )
}
