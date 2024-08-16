// nuxt.config.ts
export default defineNuxtConfig({
  css: ['vuetify/styles'],

  plugins: [
    '~/plugins/firebase.ts', 
    '~/plugins/vuetify.ts',
  ],

  build: {
    transpile: ['vuetify'],
  },

  compatibilityDate: '2024-08-16',
})