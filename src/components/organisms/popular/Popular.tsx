import { Heading, Icon } from '@/components/atoms'
import s from './styles.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { useStoreProducts } from '@/store/products/useStoreProducts'
import Image from 'next/image'
import { ProductCard } from '@/components/molecules'

export const Popular = () => {
  const products = useStoreProducts().products.filter(item => item.type === 'Яблоки')

  return (
    <div className={s.wrapper}>
      <div className='container'>
        <Heading className={s.title} level='h2'>
          Популярные товары
          <Icon id='star' />
        </Heading>
        <Swiper
          modules={[Autoplay]}
          speed={1000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          loop={true}
          spaceBetween={25}
          slidesPerView={5}
        >
          {products.map(product => (
            <SwiperSlide className={s.galleryItem} key={product.id}>
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
