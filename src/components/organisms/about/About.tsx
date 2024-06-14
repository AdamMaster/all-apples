import { FC } from 'react'
import s from './styles.module.css'
import { Heading } from '@/components/atoms'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Advantage } from '@/components/molecules'
import { Autoplay } from 'swiper/modules'

interface Props {
  className?: string
}

export const About: FC<Props> = ({ className }) => {
  const galleryItems = [
    { id: '1', src: '/images/about-gallery/5.jpg' },
    { id: '2', src: '/images/about-gallery/2.jpg' },
    { id: '3', src: '/images/about-gallery/3.jpg' },
    { id: '4', src: '/images/about-gallery/4.jpg' },
    { id: '6', src: '/images/about-gallery/12.jpg' },
    { id: '7', src: '/images/about-gallery/13.jpg' },
    { id: '8', src: '/images/about-gallery/14.jpg' },
    { id: '9', src: '/images/about-gallery/10.jpg' }
  ]

  const advantageItems = [
    {
      id: '1',
      title: 'Прямые поставки от производителей',
      text: 'Мы работаем с более чем 50 проеренными производителями, что позволяет нам обеспечивать наших клиентов высококачественными овощами и фруктами по выгодным ценам'
    },
    {
      id: '2',
      title: 'Выгодные цены',
      text: 'Наш сервис гарантирует самые выгодные цены для наших клиентов. Мы понимаем, насколько важно для вас получать качественную услугу или товар по доступной стоимости'
    },
    {
      id: '3',
      title: 'Гарантированная свежесть',
      text: 'Наши продукты собираются и упаковываются непосредственно перед отправкой, гарантируя максимальную свежесть и длительный срок годности при доставке на ваш склад'
    }
  ]

  return (
    <div className={`${s.wrapper} ${className ? className : ''}`} id='about'>
      <div className={'container'}>
        <div className={s.inner}>
          <div className={s.grid}>
            <div className={s.content}>
              <Heading className={s.title} level={'h2'}>
                <Image src={'/images/logo-circle.svg'} width={30} height={40} alt={'logo'} /> нас
              </Heading>
              <div className={s.description}>
                <p>
                  Мы - ведущая компания в сфере поставок свежих, сочных яблок, расположенная в живописной
                  Кабардино-Балкарской Республике. Этот регион славится своими превосходными садами, где растут лучшие
                  яблоки благодаря уникально плодородной земле, идеальной для выращивания фруктов.
                </p>
                <p>
                  Наша компания устанавливает прямые связи с более чем 40 производителями, что позволяет нам предложить
                  широкий ассортимент товаров в различных ценовых категориях. <br /> Мы гарантируем качественную
                  переработку, индивидуальную фасовку, упаковку, а также калибровку продукции по весу и размеру.
                </p>
              </div>
            </div>
            <div className={s.gallery}>
              <Swiper
                modules={[Autoplay]}
                speed={1000}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
                }}
                loop={true}
                spaceBetween={0}
                slidesPerView={1}
                breakpoints={{
                  576: {
                    slidesPerView: 3,
                    spaceBetween: 15
                  },
                  1200: {
                    slidesPerView: 1,
                    spaceBetween: 0
                  }
                }}
              >
                {galleryItems.map(galleryItem => (
                  <SwiperSlide className={s.galleryItem} key={galleryItem.id}>
                    <Image src={galleryItem.src} layout={'fill'} objectFit={'cover'} alt={'about-photo'} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* <div className={s.advantages}>
            {advantageItems.map(advantageItem => (
              <Advantage title={advantageItem.title} text={advantageItem.text} key={advantageItem.id} />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  )
}
