import { PromoOther } from '@/components'
import s from './styles.module.css'
import Link from 'next/link'
import { Breadcrumbs, ContactLink, Heading } from '@/components/ui'
import { mail, phoneNumbers } from '@/shared/constants/constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности — allapples.ru',
  description:
    'Ознакомьтесь с нашей политикой конфиденциальности, чтобы узнать, как мы защищаем и используем ваши персональные данные.',
  alternates: {
    canonical: 'https://allapples.ru/privacy-policy'
  }
}

export default function PolicyPage() {
  return (
    <div className={s.wrapper}>
      <PromoOther title='Политика конфиденциальности' imageUrl='/images/policy.jpg' />
      <section className={s.content}>
        <div className='container'>
          <Breadcrumbs />
          {/* <Button className={s.backLink} link='/' color='grey'>
            <ArrowLeft size={15} />
            Назад
          </Button> */}
          <div className={s.contentInner}>
            <div className={s.paragraphs}>
              <div className={s.paragraph}>
                <div className={s.text}>
                  <p>
                    Компания <b>AllApples</b> уважает конфиденциальность пользователей нашего веб-сайта{' '}
                    <Link className={s.link} href={'https://allapples.ru/'}>
                      allapples.ru
                    </Link>{' '}
                    (далее — «Сайт») и стремится защищать персональные данные, которые вы предоставляете. В данной
                    Политике конфиденциальности описывается, какие данные мы собираем, как их используем и какие у вас
                    есть права.
                  </p>
                </div>
              </div>
              <div className={s.paragraph}>
                <Heading className={s.title} level='h3'>
                  Какие данные мы собираем
                </Heading>
                <div className={s.text}>
                  <ul className={s.list}>
                    <li className={s.listItem}>
                      <b>Персональные данные</b>, которые вы предоставляете при заполнении форм на сайте (ФИО, телефон,
                      email, название компании и др.).
                    </li>
                    <li className={s.listItem}>
                      <b>Технические данные</b>, включая IP-адрес, данные о браузере, файлы cookie и аналитику
                      посещаемости.
                    </li>
                    <li className={s.listItem}>
                      <b>Информация о заказах</b>, если вы оформляете заявки на покупку яблок.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={s.paragraph}>
                <Heading className={s.title} level='h3'>
                  2. Как мы используем данные
                </Heading>
                <div className={s.text}>
                  <p>Собранные данные могут использоваться для:</p>
                  <ul className={s.list}>
                    <li className={s.listItem}>Обработки заявок и обратной связи с клиентами.</li>
                    <li className={s.listItem}>Улучшения работы сайта и персонализации пользовательского опыта.</li>
                    <li className={s.listItem}>Соблюдения правовых обязательств.</li>
                  </ul>
                </div>
              </div>
              <div className={s.paragraph}>
                <Heading className={s.title} level='h3'>
                  3. Передача данных третьим лицам
                </Heading>
                <div className={s.text}>
                  <p>Мы не продаем и не передаем ваши персональные данные третьим лицам, за исключением случаев:</p>
                  <ul className={s.list}>
                    <li className={s.listItem}>
                      Когда это необходимо для выполнения заказа (например, передача контактных данных логистическим
                      партнерам).
                    </li>
                    <li className={s.listItem}>Когда этого требует закон.</li>
                    <li className={s.listItem}>
                      В случае использования сторонних сервисов (например, аналитики, хостинга, платежных систем),
                      которые соблюдают стандарты конфиденциальности.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={s.paragraph}>
                <Heading className={s.title} level='h3'>
                  4. Защита данных
                </Heading>
                <div className={s.text}>
                  <p>
                    Мы принимаем меры для защиты ваших данных от несанкционированного доступа, изменения или удаления.
                    Однако полная безопасность передачи данных через интернет не может быть гарантирована.
                  </p>
                </div>
              </div>
              <div className={s.paragraph}>
                <Heading className={s.title} level='h3'>
                  5. Ваши права
                </Heading>
                <div className={s.text}>
                  <p>Вы имеете право:</p>
                  <ul className={s.list}>
                    <li className={s.listItem}>Запросить доступ к вашим данным.</li>
                    <li className={s.listItem}>Исправить или удалить ваши данные.</li>
                    <li className={s.listItem}>Отозвать согласие на обработку данных.</li>
                    <li className={s.listItem}>Подать жалобу в органы по защите персональных данных.</li>
                  </ul>
                </div>
              </div>
              <div className={s.paragraph}>
                <Heading className={s.title} level='h3'>
                  6. Использование файлов cookie
                </Heading>
                <div className={s.text}>
                  <p>
                    Мы используем файлы cookie для анализа посещаемости сайта и улучшения пользовательского опыта. Вы
                    можете отключить cookies в настройках браузера.
                  </p>
                </div>
              </div>
              <div className={s.paragraph}>
                <Heading className={s.title} level='h3'>
                  7. Контактная информация
                </Heading>
                <div className={s.text}>
                  <p>Если у вас есть вопросы по поводу обработки данных, вы можете связаться с нами:</p>
                  <p>
                    <b>AllApples</b> <br />
                    Email:
                    <ContactLink className={s.linksItem} link={`mailto:${mail}`} text={mail} />
                    <br />
                    Телефон:
                    <ContactLink
                      className={s.linksItem}
                      text={phoneNumbers[0].text}
                      link={`tel:${phoneNumbers[0].link}`}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
