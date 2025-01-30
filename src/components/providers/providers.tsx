'use client'
import React, { Fragment } from 'react'
import NextTopLoader from 'nextjs-toploader'

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <NextTopLoader />
    </Fragment>
  )
}
