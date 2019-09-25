import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { NextPage } from 'next'

import i18next from '../i18n';

const IndexPage: NextPage = () => {
  const { t, i18n } = i18next.useTranslation();

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>{t('hello')} Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <button type='button' onClick={() => i18n.changeLanguage('en')}>{t('language.english')}</button>
      <button type='button' onClick={() => i18n.changeLanguage('es')}>{t('language.spanish')}</button>
      <button type='button' onClick={() => i18n.changeLanguage('fr')}>{t('language.french')}</button>
      <button type='button' onClick={() => i18n.changeLanguage('de')}>{t('language.german')}</button>
    </Layout>
  )
}

export default IndexPage
