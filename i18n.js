
const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
  browserLanguageDetection:	true,
  serverLanguageDetection:	true,
  defaultNS: 'common',
  defaultLanguage: 'en',
  ignoreRoutes:	['/_next/', '/static/'],
  otherLanguages: ['de, es, fr'],
  localeExtension:'json',
  localePath:	'locales',
  localeStructure: '{{lng}}/{{ns}}',
  localeSubpaths: {
    fr: 'french',
    de: 'german',
    en: 'eng',
    es: 'esp'
  }
})
