import { createI18n } from 'vue-i18n'

import en from '../locales/en.json'
import ta from '../locales/ta.json'

// type MessageSchema = typeof en;

// const i18n = createI18n<[MessageSchema], "en" | "ta">({
const i18n = createI18n({
  locale: 'en',
  globalInjection: true,
  fallbackLocale: 'en',
  messages: {
    en,
    ta
  }
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(i18n)
})
