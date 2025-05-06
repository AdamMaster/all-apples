import { Fragment } from 'react'

export const GoogleAnalyticsNoScript = () => {
  return (
    <Fragment>
      <noscript>
        <iframe
          src='https://www.googletagmanager.com/ns.html?id=G-RF2PNCKR4V'
          height='0'
          width='0'
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
    </Fragment>
  )
}
