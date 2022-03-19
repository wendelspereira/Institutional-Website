import React from 'react'
import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  const CustomLayout = Component.layout ? Component.layout : React.Fragment
  return (
      <CustomLayout>
          <NextNProgress color="var(--brand-tertiary)" options={{ showSpinner: false }} />
          <Component {...pageProps} />
      </CustomLayout>
  )
}

export default MyApp
