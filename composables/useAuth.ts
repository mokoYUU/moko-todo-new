// composables/useAuth.ts
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { initializeApp, getApps } from 'firebase/app'
import { useRuntimeConfig } from '#app'

export const useAuth = () => {
  const config = useRuntimeConfig().public;

  const firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId,
    measurementId: config.measurementId,
  };

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
  const auth = getAuth(app);

  // ログイン処理
  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // アカウント作成処理
  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // ログアウト処理
  const logout = () => {
    return signOut(auth)
  }

  return {
    login,
    signUp,
    logout,
  }
}