import Script from 'next/script'
import { Fragment } from 'react'

export const GoogleAnalytics = () => {
  return (
    <Fragment>
      <Script async src={'https://www.googletagmanager.com/gtag/js?id=G-RF2PNCKR4V'} strategy='afterInteractive' />
      <Script
        id='google-analytics'
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RF2PNCKR4V');
            `
        }}
      />
    </Fragment>
  )
}
