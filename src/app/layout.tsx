import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { GoogleAnalytics, YandexMetric } from '@/components/analytics'
import './assets/styles/globals.css'
import { Footer, Header, MobileMenu, Modal } from '@/components'
import { SpeedInsights } from '@vercel/speed-insights/next'
import NextTopLoader from 'nextjs-toploader'

const mazzard = localFont({
  src: [
    {
      path: '../../public/fonts/MazzardH-Light.woff2',
      weight: '300'
    },
    {
      path: '../../public/fonts/MazzardH-Regular.woff2',
      weight: '400'
    },
    {
      path: '../../public/fonts/MazzardH-Medium.woff2',
      weight: '500'
    },
    {
      path: '../../public/fonts/MazzardH-SemiBold.woff2',
      weight: '600'
    },
    {
      path: '../../public/fonts/MazzardH-Bold.woff2',
      weight: '700'
    }
  ],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Яблоки оптом - Купить яблоки оптом из Кабардино-Балкарии',
  description:
    'Яблоки оптом. Любой сорт. Калибры: 55+, 60+, 65+. Фуджи, Гала, Гренни Смит, Ред Чиф, Флорина, Айдаред, Семеренко, Ред Делишес, Голден',
  keywords: 'оптовая продажа, яблоки оптом, фрукты оптом, свежие фрукты, купить яблоки оптом',
  alternates: {
    canonical: 'https://allapples.ru'
  }
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
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' sizes='180x180' />
      </head>
      <body className={mazzard.className}>
        <NextTopLoader color='var(--c-yellow)' />
        <SpeedInsights />
        <YandexMetric />
        <GoogleAnalytics />
        <Header />
        <MobileMenu />
        <main>{children}</main>
        <Modal />
        <Footer />
      </body>
    </html>
  )
}
