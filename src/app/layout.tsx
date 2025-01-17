import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { GoogleAnalytics, GoogleAnalyticsNoScript, GoogleTagManager, YandexMetric } from '@/components/analytics'
import './assets/styles/globals.css'
import { Footer, Header, MobileMenu } from '@/components'

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
  ]
})

export const metadata: Metadata = {
  title: 'Яблоки оптом - купить свежие яблоки оптом',
  description:
    'Яблоки оптом. Любой сорт. Калибры: 55+, 60+, 65+. Фасовка: ящики по 15 кг. Минимальная отгрузка: 10 тонн',
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
        <meta name='yandex-verification' content='432e46207c298a5e' />
        <link rel='icon' href='https://adams-apple.ru/images/favicon.ico' type='image/x-icon'></link>
        <YandexMetric />
        <GoogleTagManager />
        <GoogleAnalytics />
      </head>
      <body className={mazzard.className}>
        <GoogleAnalyticsNoScript />
        <Header />
        <MobileMenu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
