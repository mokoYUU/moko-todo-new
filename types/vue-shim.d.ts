// types/vue-shim.d.ts
declare module '#app' {
  interface NuxtApp {
    $auth: ReturnType<typeof import('firebase/auth').getAuth>
    $db: ReturnType<typeof import('firebase/firestore').getFirestore>
  }
}

export {}
