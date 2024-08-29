<template>
  <v-main class="d-flex align-center justify-center" style="background-color: #f5f5f5; min-height: 100vh;">
    <v-card class="pa-10" elevation="3" style="width: 500px;">
      <v-card-title class="text-h4 text-center">アカウント作成</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleSignUp">
          <v-text-field
            v-model="email"
            label="メールアドレス"
            type="email"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="パスワード"
            type="password"
            required
            outlined
            class="mt-4"
          ></v-text-field>
          <v-row justify="center" class="mt-6">
            <v-col cols="12" sm="6">
              <v-btn @click="goToLogin" color="secondary" block>ログイン画面に戻る</v-btn>
            </v-col>
            <v-col cols="12" sm="6">
              <v-btn type="submit" color="primary" block>アカウント作成する</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="snackbar.timeout">
        {{ snackbar.message }}
      </v-snackbar>
    </v-card>
  </v-main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useNuxtApp } from '#app'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const router = useRouter()
const { $auth } = useNuxtApp()
const snackbar = ref({
  show: false,
  message: '',
  color: '',
  timeout: 3000 
})

// サインアップ処理
async function handleSignUp() {
  try {
    // Firebaseのメールとパスワードで新しいアカウントを作成
    await createUserWithEmailAndPassword($auth, email.value, password.value)
    showSnackbar('アカウントが作成されました！', 'success')
    router.push('/tasks')
  } catch (error: any) {
    let message = 'アカウント作成エラー: '
    if (error.code === 'auth/email-already-in-use') {
      message += 'このメールアドレスは既に使用されています。'
    } else if (error.code === 'auth/missing-password' || error.code === 'auth/missing-email') {
      message += 'メールアドレスもしくはパスワードが正しくありません。'
    } else if (error.code === 'auth/weak-password') {
      message += 'パスワードが弱すぎます。もっと強力なパスワードを使用してください。'
    } else {
      message += error.message
    }
    showSnackbar(message, 'error')
  }
}

// ログインページへの遷移処理
function goToLogin() {
  router.push('/login')
}

// スナックバー表示処理
function showSnackbar(message: string, color: string) {
  snackbar.value.message = message
  snackbar.value.color = color
  snackbar.value.show = true
}
</script>
