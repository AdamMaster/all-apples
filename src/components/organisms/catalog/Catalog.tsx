'use client'
import s from './styles.module.css'
import { FC, useState } from 'react'
import { Button, ContactLink, Heading, SearchBar } from '@/components/atoms'
import { Filter, ProductCard } from '@/components/molecules'
import { useStoreProducts } from '@/store/products/useStoreProducts'
import { mail, phoneNumbers } from '@/shared/constants/constants'
import { useStoreModal } from '@/store'
import { Feedback } from '@/components/modal/contents'

interface Props {
  className?: string
}

export const Catalog: FC<Props> = ({ className }) => {
  const { products, setFilter } = useStoreProducts()
  const [searchBarValue, setSearchBarValue] = useState<string>('')
  const sortProducts = products.sort((a, b) => {
    if (a.sort < b.sort) {
      return -1
    }
    if (a.sort > b.sort) {
      return 1
    }
    return 0
  })

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
            {sortProducts
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
