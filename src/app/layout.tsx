import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { GoogleAnalytics, GoogleAnalyticsNoScript, GoogleTagManager, YandexMetric } from '@/components/analytics'
import './assets/styles/globals.css'
import { Footer, Header, MobileMenu, Modal } from '@/components'
import NextTopLoader from 'nextjs-toploader'

const mazzard = localFont({
  src: [
    {
      path: '../../public/fonts/MazzardH-Thin.woff',
      weight: '200'
    },
    {
      path: '../../public/fonts/MazzardH-Light.woff',
      weight: '300'
    },
    {
      path: '../../public/fonts/MazzardH-Regular.woff',
      weight: '400'
    },
    {
      path: '../../public/fonts/MazzardH-Medium.woff',
      weight: '500'
    },
    {
      path: '../../public/fonts/MazzardH-SemiBold.woff',
      weight: '600'
    },
    {
      path: '../../public/fonts/MazzardH-Bold.woff',
      weight: '700'
    }
  ],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Яблоки оптом - купить яблоки оптом из Кабардино-Балкарии',
  description:
    'Яблоки оптом. Любой сорт. Калибры: 55+, 60+, 65+. Фуджи, Гала, Гренни Смит, Ред Чиф, Флорина, Айдаред, Семеренко, Ред Делишес, Голден',
  keywords: 'оптовая продажа, яблоки оптом, фрукты оптом, свежие фрукты'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={'ru'}>
      <head>
        {/* <meta name='yandex-verification' content='432e46207c298a5e' /> */}
        <meta name='color-scheme' content='light' />
        <link rel='icon' href='/images/favicon.ico' type='image/x-icon'></link>
        {/* <YandexMetric /> */}
        <GoogleTagManager />
        <GoogleAnalytics />
      </head>
      <body className={mazzard.className}>
        <GoogleAnalyticsNoScript />
        <NextTopLoader color='var(--c-yellow)' />
        <Header />
        <MobileMenu />
        <main>{children}</main>
        <Modal />
        <Footer />
      </body>
    </html>
  )
}
