import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig().public;

  const firebaseConfig = {
    apiKey: config.apiKey as string,
    authDomain: config.authDomain as string,
    projectId: config.projectId as string,
    storageBucket: config.storageBucket as string,
    messagingSenderId: config.messagingSenderId as string,
    appId: config.appId as string,
    measurementId: config.measurementId as string,
  };

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
  const auth = getAuth(app);
  const db = getFirestore(app);

  return {
    provide: {
      auth,
      db,
    },
  };
});
