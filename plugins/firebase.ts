// plugins/firebase.ts
// 認証サービス(auth)+データベース(db)を全体で使う
// plugins/firebase.ts
import { defineNuxtPlugin } from '#app'
import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { useRuntimeConfig } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  // Firebaseアプリの初期化
  const firebaseConfig = {
    apiKey: config.public.apiKey,
    authDomain: config.public.authDomain,
    projectId: config.public.projectId,
    storageBucket: config.public.storageBucket,
    messagingSenderId: config.public.messagingSenderId,
    appId: config.public.appId,
    measurementId: config.public.measurementId
  }

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0]
  const auth = getAuth(app)
  const db = getFirestore(app)

  // Nuxtアプリケーション全体で使用できるように提供
  nuxtApp.provide('auth', auth)
  nuxtApp.provide('db', db)
})


