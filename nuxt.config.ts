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
  build: {
    transpile: ['vue-i18n']
  },
  vite: {
    plugins: []
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
