import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'
import path from 'path'

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image-edge'
  ],
  app: {
    head: {
      link: [{ rel: 'icon', href: '/favicon.ico' }]
    }
  },
  colorMode: {
    classSuffix: ''
  },
  // build: {
  //   transpile: ['vue-i18n']
  // },
  vite: {
    plugins: [
      // VueI18nVitePlugin({
      //   include: [
      //     // resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
      //     // path.resolve(__dirname, './locales/**')
      //   ]
      // })
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
