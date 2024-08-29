// plugins/firebase.ts
// 認証サービス(auth)+データベース(db)を全体で使う
import { defineNuxtPlugin } from '#app'
import { auth, db } from '../firebaseConfig'


export default defineNuxtPlugin((nuxtApp) => {
  if (!nuxtApp.vueApp.config.globalProperties.$auth) {
    nuxtApp.provide('auth', auth)
  }
  if (!nuxtApp.vueApp.config.globalProperties.$db) {
    nuxtApp.provide('db', db)
  }
})
