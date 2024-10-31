import { Fragment } from 'react'

export const GoogleAnalyticsNoScript = () => {
  return (
    <Fragment>
      <noscript>
        <iframe
          src='https://www.googletagmanager.com/ns.html?id=GTM-KMTJZ6KF'
          height='0'
          width='0'
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
    </Fragment>
  )
}
