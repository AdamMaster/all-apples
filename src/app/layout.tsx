import localFont from 'next/font/local'
import { GoogleAnalytics, YandexMetric } from '@/components/analytics'
import './globals.css'
import NextTopLoader from 'nextjs-toploader'
import Script from 'next/script'

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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AllApples',
    url: 'https://allapples.ru',
    logo: 'https://allapples.ru/images/logo.png',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+7-930-408-79-71',
        contactType: 'sales',
        areaServed: 'RU',
        availableLanguage: 'Russian'
      }
    ]
  }

  return (
    <html lang={'ru'}>
      <head>
        <meta name='color-scheme' content='light' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' sizes='180x180' />
        <Script
          id='jsonld-organization'
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy='afterInteractive'
        />
      </head>
      <body className={mazzard.className}>
        <NextTopLoader color='var(--c-yellow)' />
        <YandexMetric />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
