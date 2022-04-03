import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],
  meta: {
    link: [{ rel: 'icon', href: '/favicon.ico' }]
  },
  colorMode: {
    classSuffix: ''
  },
  buildModules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@pinia/nuxt', '@intlify/nuxt3'],
  intlify: {
    vueI18n: 'vue-i18n.mjs'
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
    //   exposeConfig: true,
  }
})
