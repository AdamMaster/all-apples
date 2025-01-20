'use client'
import s from './styles.module.css'
import { FC } from 'react'
import { ProductsGroupList } from '@/components/products'

import { CategoryWithRelations } from '../products/product-card/types/types'

interface Props {
  className?: string
  categories: CategoryWithRelations[]
}

export const Catalog: FC<Props> = ({ className, categories }) => {
  return (
    <section className={`${s.wrapper} ${className ? className : ''}`} id='catalog'>
      <div className={'container'}>
        <div className={s.inner}>
          {categories.map(
            category =>
              category.products.length > 0 && (
                <ProductsGroupList
                  title={category.name}
                  products={category.products}
                  categoryId={category.id}
                  key={category.id}
                />
              )
          )}
        </div>
      </div>
    </section>
  )
}
