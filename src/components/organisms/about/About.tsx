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
    <div className={`${s.wrapper} ${className ? className : ''}`}>
      <div className={'container'}>
        <div className={s.inner}>
          <div className={s.grid}>
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
              >
                {galleryItems.map(galleryItem => (
                  <SwiperSlide className={s.galleryItem} key={galleryItem.id}>
                    <Image src={galleryItem.src} layout={'fill'} objectFit={'cover'} alt={'about-photo'} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={s.content}>
              <Heading className={s.title} level={'h2'}>
                <Image src={'/images/logo-circle.svg'} width={30} height={40} alt={'logo'} /> нас
              </Heading>
              <div className={s.description}>
                <p>
                  Мы специализируемся на оптовой торговле свежими овощами и фруктами, предоставляя полный цикл
                  обслуживания от подбора продукции до ее доставки в оптимальном состоянии.
                </p>
                <p>
                  Наша компания устанавливает прямые связи с более чем 40 производителями, что позволяет нам предложить
                  широкий ассортимент товаров в различных ценовых категориях. Мы гарантируем качественную переработку,
                  индивидуальную фасовку, упаковку, а также калибровку продукции по весу и размеру.
                </p>
                <p>
                  Наша команда готова обсудить любые разумные требования клиента, гарантируя доставку товара в требуемом
                  виде и в удобное для заказчика время. Не стесняйтесь связаться с нами – мы готовы предоставить вам
                  лучшие условия сотрудничества!
                </p>
              </div>
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
