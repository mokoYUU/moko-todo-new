export default defineNuxtConfig({
  srcDir: 'src/', 
  css: ['vuetify/styles'],

  build: {
    transpile: ['vuetify'],
  },

  compatibilityDate: '2024-08-16',
})
