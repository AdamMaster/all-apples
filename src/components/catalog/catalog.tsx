'use client'
import s from './styles.module.css'
import React, { FC } from 'react'
import { ProductsGroupList } from '@/components/products'

import { CategoryWithRelations } from '../products/product-card/types/types'
import { Heading } from '../ui'
import { SearchBar } from '../search-bar/search-bar'
import { useDebounce } from 'react-use'
import { Api } from '@/shared/api/api-client'
import { useStoreQueryString } from '@/store'

interface Props {
  className?: string
  categories: CategoryWithRelations[]
}

export const Catalog: FC<Props> = ({ className, categories }) => {
  const { queryString } = useStoreQueryString()
  const [stateCategory, setStateCategory] = React.useState<CategoryWithRelations[]>()

  useDebounce(
    async () => {
      try {
        const response = await Api.searchProducts(queryString)
        setStateCategory(response)
      } catch (error) {
        console.log(error)
      }
    },
    250,
    [queryString]
  )

  return (
    <section className={`${s.wrapper} ${className ? className : ''}`} id='catalog'>
      <div className={'container'}>
        <div className={s.inner}>
          <div className={s.head}>
            <Heading className={s.title} level='h2'>
              Каталог
            </Heading>
            <SearchBar />
          </div>
          {queryString === ''
            ? categories.map(
                category =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      // title={category.name}
                      products={category.products}
                      categoryId={category.id}
                      key={category.id}
                    />
                  )
              )
            : stateCategory?.map(
                category =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      // title={category.name}
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
