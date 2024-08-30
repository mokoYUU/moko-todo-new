<template>
  <v-app>
    <v-main>
      <v-container class="ma-5">
        <v-card class="pa-6 mb-6" elevation="2">
          <v-form @submit.prevent="addTask">
            <v-text-field
              v-model="taskTitle"
              label="新しいタスクを入力"
              outlined
              clearable
              class="mb-4"
              placeholder="タスクを入力してください..."
            ></v-text-field>
            <v-btn type="submit" color="primary" block>タスクを追加</v-btn>
          </v-form>
        </v-card>
        <v-select
          v-model="filter"
          :items="['すべて', '未完了', '完了']"
          label="タスクフィルター"
          outlined
          class="mt-4"
        ></v-select>
        <v-list class="mt-4">
          <v-list-item
            v-for="task in filteredTasks"
            :key="task.id"
            class="my-2"
            :class="task.completed ? 'task-completed' : ''"
          >
            <v-card class="w-100 pa-4" elevation="1">
              <v-list-item-content>
                <v-list-item-title>{{ task.title }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  color="success"
                  class="rounded-circle"
                  @click="toggleComplete(task)"
                >
                  <v-icon>mdi-check-circle-outline</v-icon>
                </v-btn>
                <span>完了</span>
                <v-btn
                  icon
                  color="error"
                  class="rounded-circle"
                  @click="deleteTask(task.id)"
                >
                  <v-icon>mdi-delete-circle-outline</v-icon>
                </v-btn>
                <span class="ml-2">削除</span>
              </v-list-item-action>
            </v-card>
          </v-list-item>
        </v-list>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useNuxtApp } from '#app'
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore'

const taskTitle = ref('')
const tasks = ref([])
const filter = ref('すべて')
const { $db, $auth } = useNuxtApp()

const addTask = async () => {
  if (!taskTitle.value) return

  if (!$auth.currentUser) {
    console.error('ユーザーがログインしていません。')
    alert('タスクを追加するにはログインが必要です。')
    return
  }

  const taskRef = await addDoc(collection($db, 'tasks'), {
    title: taskTitle.value,
    completed: false,
    userId: $auth.currentUser.uid
  })
  tasks.value.push({ id: taskRef.id, title: taskTitle.value, completed: false })
  taskTitle.value = ''
}

const fetchTasks = async () => {
  if (!$auth.currentUser) {
    console.error('ユーザーがログインしていません。')
    return
  }

  const querySnapshot = await getDocs(collection($db, 'tasks'))
  tasks.value = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })).filter(task => task.userId === $auth.currentUser.uid)
}

const toggleComplete = async (task) => {
  task.completed = !task.completed
  const taskRef = doc($db, 'tasks', task.id)
  await updateDoc(taskRef, { completed: task.completed })
}

const deleteTask = async (id) => {
  await deleteDoc(doc($db, 'tasks', id))
  tasks.value = tasks.value.filter(task => task.id !== id)
}

const filteredTasks = computed(() => {
  if (filter.value === '完了') {
    return tasks.value.filter(task => task.completed)
  } else if (filter.value === '未完了') {
    return tasks.value.filter(task => !task.completed)
  } else {
    return tasks.value
  }
})

onMounted(fetchTasks)
</script>

<script>
export default {
  middleware: 'auth'
}
</script>

<style scoped>
.task-completed .v-list-item-title {
  text-decoration: line-through;
  color: gray;
}
.v-list-item-action {
  display: flex;
  align-items: center;
  gap: 10px;
}
.rounded-circle {
  border-radius: 50%;
}
</style>
