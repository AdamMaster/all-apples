import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './assets/styles/globals.css'
import { Header } from '@/components/organisms/header'
import { Footer } from '@/components/organisms/footer'
import { MobileMenu } from '@/components/organisms/mobile-menu'
import { YandexMetrica } from '@/components/YandexMetrika/YandexMetrika'
import { GoogleAnalytics } from '@/components/GoogleAnalytics/GoogleAnalytics'

const mazzard = localFont({
  src: [
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
  title: 'Адамово Яблоко | Яблоки оптом',
  description: 'Оптовая продажа овощей и фруктов',
  keywords: 'оптовая продажа, яблоки оптом, фрукты оптом, Адамово Яблоко, свежие фрукты',
  icons: [{ rel: 'icon', url: '/images/favicon.ico' }]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={'en'}>
      <head>
        <meta name='yandex-verification' content='432e46207c298a5e' />
        <YandexMetrica counterId={'97863631'} />
        <GoogleAnalytics />
      </head>
      <body className={mazzard.className}>
        <Header />
        <MobileMenu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
