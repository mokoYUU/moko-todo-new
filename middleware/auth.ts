// /middleware/auth.ts
import { defineNuxtRouteMiddleware, navigateTo, useNuxtApp } from '#app'

export default defineNuxtRouteMiddleware((to, from) => {
  const { $auth } = useNuxtApp()
  const isAuthenticated = $auth?.currentUser !== null

  if (!isAuthenticated && to.path !== '/login') {
    return navigateTo('/login')
  }
})
