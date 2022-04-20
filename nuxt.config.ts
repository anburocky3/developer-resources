import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  router: {
    scrollBehavior: () => {}
  },
  modules: ['@nuxtjs/color-mode'],
  intlify: {
    vueI18n: 'vue-i18n.mjs'
  },
  // ssr: false,
  meta: {
    link: [{ rel: 'icon', href: '/favicon.ico' }]
  },
  colorMode: {
    classSuffix: ''
  },
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@intlify/nuxt3'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
    //   exposeConfig: true,
  }
})
