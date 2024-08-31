// composables/useFirestore.ts
import { getFirestore, doc, collection, addDoc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore'
import { initializeApp, getApps } from 'firebase/app'
import { useRuntimeConfig } from '#app'

export const useFirestore = () => {
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
  const db = getFirestore(app);

  const addTask = (task: { title: string, userId: string, completed: boolean }) => {
    return addDoc(collection(db, 'tasks'), task)
  }

  const getTasks = () => {
    return getDocs(collection(db, 'tasks'))
  }

  const updateTask = (id: string, updatedData: any) => {
    return updateDoc(doc(db, 'tasks', id), updatedData)
  }

  const deleteTask = (id: string) => {
    return deleteDoc(doc(db, 'tasks', id))
  }

  return {
    addTask,
    getTasks,
    updateTask,
    deleteTask,
  }
}

