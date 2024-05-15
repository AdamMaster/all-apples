import { FC } from 'react'
import s from './styles.module.css'
import { Button, Heading } from '@/components/atoms'
import Image from 'next/image'

interface Props {
  className?: string
}

export const DeliveryScreen: FC<Props> = ({ className }) => {
  return (
    <section className={`${s.wrapper} ${className ? className : ''}`}>
      <div className='container'>
        <div className={s.inner}>
          <div className={s.grid}>
            <div className={s.content}>
              <Heading className={s.title} level='h2'>
                Доставка по всей стране
              </Heading>
              <div className={s.description}>
                <p>
                  Мы рады предложить вам качественные и свежие овощи и фрукты прямо с ферм Северного Кавказа, и лучшее в
                  этом - мы доставим их в любой уголок нашей страны!
                </p>
                <p>
                  Компания "ОптРынок" работает напрямую с надежными производителями, что позволяет нам обеспечить
                  быструю и эффективную доставку. Будь вы в Москве, Сибири или за Уралом, мы гарантируем, что наши овощи
                  и фрукты будут доставлены вам в самом лучшем виде.
                </p>
              </div>
              <Button className={s.button} color='black'>
                Подробнее
              </Button>
            </div>
            <div className={s.illustration}>
              <Image
                className={s.bg}
                alt='promo-bg'
                src={'/images/truck-in-map-2.png'}
                layout='responsive'
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
