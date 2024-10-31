import Script from 'next/script'
import { Fragment } from 'react'

export const GoogleAnalytics = () => {
  return (
    <Fragment>
      <Script id='gtm-script' strategy='afterInteractive'>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KMTJZ6KF');`}
      </Script>
      <Script async src={'https://www.googletagmanager.com/gtag/js?id=G-YXN1Y64N9E'} />
      <Script
        id='google-analytics'
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YXN1Y64N9E');
            `
        }}
      />
    </Fragment>
  )
}
