// middleware/auth.js
// 特定のページにアクセスする際の認証確認（ログインページは除く）
import { defineNuxtRouteMiddleware, useNuxtApp, navigateTo } from '#app'

export default defineNuxtRouteMiddleware((to) => { // 'from' を削除
  const { $auth } = useNuxtApp()
  const isAuthenticated = $auth?.currentUser !== null

  if (!isAuthenticated && to.path !== '/login') {
    return navigateTo('/login')
  }
})
