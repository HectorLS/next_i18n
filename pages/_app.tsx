import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import i18n from '../i18n';

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default i18n.appWithTranslation(MyApp)
