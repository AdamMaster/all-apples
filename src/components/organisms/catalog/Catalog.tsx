'use client'
import s from './styles.module.css'
import { FC, useState } from 'react'
import { Filter, ProductCard } from '@/components/molecules'
import { useStoreProducts } from '@/store/products/useStoreProducts'
import { mail, phoneNumbers } from '@/shared/constants/constants'
import { useStoreModal } from '@/store'
import { Feedback } from '@/components/modal/contents'
import { getProducts } from '@/shared/api/fetchProducts'
import { Button, ContactLink, Heading } from '@/components/ui'
import { SearchBar } from '@/components/products'

interface Props {
  className?: string
}

export const Catalog: FC<Props> = ({ className }) => {
  const { products } = useStoreProducts()
  const [searchBarValue, setSearchBarValue] = useState<string>('')

  const { setOpen } = useStoreModal()
  const handleClickButton = () => {
    setOpen(<Feedback />)
  }

  return (
    <section className={`${s.wrapper} ${className ? className : ''}`} id='catalog'>
      <div className={'container'}>
        <div className={s.inner}>
          <div className={s.panel}>
            {/* <Filter className={s.filter} onClick={setFilter} /> */}
            <Heading className={s.title} level='h2'>
              Каталог сортов
            </Heading>
            <SearchBar
              placeholder='Введите название'
              className={s.searchBar}
              value={searchBarValue}
              setValue={(value: string) => {
                setSearchBarValue(value)
              }}
            />
          </div>
          <div className={s.list}>
            {/* {products.map(product => (
              <ProductCard
                name={product.name}
                categoryId={1}
                typeId={1}
                imageUrl={product.imageUrl}
                category={product.category || ''}
                type={product.type || ''}
                sort={product.sort || ''}
                ripeningPeriod={product.ripeningPeriod}
                tastingEvaluation={product.tastingEvaluation}
                key={product.id}
              />
            ))} */}
          </div>
          <div className={s.note}>
            Цены на товары зависят от сезона и других факторов. Для получения актуальной информации, пожалуйста,
            свяжитесь с нами по телефону{' '}
            <ContactLink className={s.noteLink} text={phoneNumbers[0].text} link={`tel:${phoneNumbers[0].link}`} /> или
            по email <ContactLink className={s.noteLink} text={mail} link={`mailto:${mail}`} />. Либо оставьте заявку:{' '}
            <Button className={s.noteButton} color='black' onClick={() => handleClickButton()}>
              Оставить заявку
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
