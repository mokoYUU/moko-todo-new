// nuxt.config.ts
export default defineNuxtConfig({
  css: ['vuetify/styles'],

  build: {
    transpile: ['vuetify'],
  },

  runtimeConfig: {
    public: {
      apiKey: process.env.NUXT_PUBLIC_API_KEY,
      authDomain: process.env.NUXT_PUBLIC_AUTH_DOMAIN,
      projectId: process.env.NUXT_PUBLIC_PROJECT_ID,
      storageBucket: process.env.NUXT_PUBLIC_STORAGE_BUCKET,
      messagingSenderId: process.env.NUXT_PUBLIC_MESSAGING_SENDER_ID,
      appId: process.env.NUXT_PUBLIC_APP_ID,
      measurementId: process.env.NUXT_PUBLIC_MEASUREMENT_ID,
    },
  },

  compatibilityDate: '2024-08-16',
})
