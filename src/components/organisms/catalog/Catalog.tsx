'use client'
import s from './styles.module.css'
import { FC, useState } from 'react'
import { SearchBar } from '@/components/atoms'
import { Filter, ProductCard } from '@/components/molecules'
import { useStoreProducts } from '@/store/products/useStoreProducts'

interface Props {
  className?: string
}

export const Catalog: FC<Props> = ({ className }) => {
  const { products, setFilter } = useStoreProducts()
  const [searchBarValue, setSearchBarValue] = useState<string>('')

  return (
    <section className={`${s.wrapper} ${className ? className : ''}`}>
      <div className={'container'}>
        <div className={s.inner}>
          <div className={s.head}>
            <h2 className={s.title}>Каталог продуктов</h2>
          </div>
          <div className={s.panel}>
            <Filter className={s.filter} onClick={setFilter} />
            <SearchBar
              value={searchBarValue}
              setValue={(value: string) => {
                setSearchBarValue(value)
              }}
            />
          </div>
          <div className={s.list}>
            {products
              .filter(
                product =>
                  product.type.toLowerCase().includes(searchBarValue.toLowerCase()) ||
                  product.sort.toLowerCase().includes(searchBarValue.toLowerCase()) ||
                  product.category.toLowerCase().includes(searchBarValue.toLowerCase())
              )
              .map(product => (
                <ProductCard {...product} key={product.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
