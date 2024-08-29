// middleware/auth.js
// 特定のページにアクセスする際の認証確認（ログインページは除く）
export default defineNuxtRouteMiddleware((to, from) => {
  const { $auth } = useNuxtApp()
  const isAuthenticated = $auth.currentUser !== null

  if (!isAuthenticated && to.path !== '/login') {
    return navigateTo('/login')
  }
})
