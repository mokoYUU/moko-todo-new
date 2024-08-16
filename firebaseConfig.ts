// firebaseConfig.ts
import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Firebase設定情報
const firebaseConfig = {
  apiKey: "AIzaSyBgb46KVFYATPJ5xLiXVb34nPdSbP8nzY8",
  authDomain: "mokotodoapp-469c4.firebaseapp.com",
  projectId: "mokotodoapp-469c4",
  storageBucket: "mokotodoapp-469c4.appspot.com",
  messagingSenderId: "427289139087",
  appId: "1:427289139087:web:af36b2ed4ddfeccdea5dfa",
  measurementId: "G-9EWENRCZP5"
}

// Firebaseアプリの初期化（ここだけ）
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0]
const auth = getAuth(app)
const db = getFirestore(app)

// 認証とFirestoreのエクスポート
export { auth, db }
