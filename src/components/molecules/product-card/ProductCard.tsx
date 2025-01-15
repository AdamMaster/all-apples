import { FC } from 'react'
import Image from 'next/image'
import s from './styles.module.css'
import { ProductCardType, ProductWithRelations } from './types/types'
import { useStoreModal } from '@/store'
import { Order } from '@/components/modal/contents'
import { Button } from '@/components/ui'

export const ProductCard: FC<ProductWithRelations> = ({
  name,
  category,
  type,
  sort,
  ripeningPeriod,
  tastingEvaluation,
  imageUrl
}) => {
  const { setOpen } = useStoreModal()
  const onClickButton = () => {
    setOpen(<Order productFullName={`${type} ${sort}`} />)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.head}>
        <Image className={s.img} alt={sort} src={imageUrl} layout='fill' objectFit='cover' />
      </div>
      <div className={s.body}>
        {/* <div className={s.category}>{type}</div> */}
        <div className={s.sort}>{name}</div>
        <Button className={s.button} color='yellow' stroked onClick={() => onClickButton()}>
          Узнать цену
        </Button>
      </div>
    </div>
  )
}
