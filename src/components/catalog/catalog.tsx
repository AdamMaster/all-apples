'use client'
import s from './styles.module.css'
import { FC, useState } from 'react'
import { useStoreProducts } from '@/store/products/useStoreProducts'
import { mail, phoneNumbers } from '@/shared/constants/constants'
import { useStoreModal } from '@/store'
import { Feedback } from '@/components/modal/contents'
import { getProducts } from '@/shared/api/fetchProducts'
import { Button, ContactLink, Heading, Logo } from '@/components/ui'
import { ProductsGroupList, SearchBar } from '@/components/products'
import { Category, Product } from '@prisma/client'
import { CategoryWithRelations } from '../products/product-card/types/types'

interface Props {
  className?: string
  categories: CategoryWithRelations[]
}

export const Catalog: FC<Props> = ({ className, categories }) => {
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
            {/* <Heading className={s.title} level='h2'>
              Каталог сортов
            </Heading>
            <SearchBar
              placeholder='Введите название'
              className={s.searchBar}
              value={searchBarValue}
              setValue={(value: string) => {
                setSearchBarValue(value)
              }}
            /> */}
          </div>
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
          {/* <div className={s.note}>
            Цены на товары зависят от сезона и других факторов. Для получения актуальной информации, пожалуйста,
            свяжитесь с нами по телефону{' '}
            <ContactLink className={s.noteLink} text={phoneNumbers[0].text} link={`tel:${phoneNumbers[0].link}`} /> или
            по email <ContactLink className={s.noteLink} text={mail} link={`mailto:${mail}`} />. Либо оставьте заявку:{' '}
            <Button className={s.noteButton} color='black' onClick={() => handleClickButton()}>
              Оставить заявку
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  )
}
