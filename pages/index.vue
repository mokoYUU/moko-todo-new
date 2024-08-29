<!-- /pages/index.vue -->
<template>
  <v-card class="pa-10" elevation="3" max-width="1000">
    <v-card-title class="text-h4 text-center">Todoリスト管理アプリへ</v-card-title>
    <v-card-text>
      <v-row justify="center" class="mt-6">
        <v-col cols="12" sm="6" class="d-flex justify-center">
          <v-btn @click="goToLogin" color="primary" block>ログイン</v-btn>
        </v-col>
        <v-col cols="12" sm="6" class="d-flex justify-center">
          <v-btn @click="goToSignUp" color="secondary" block>サインアップ</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goToLogin() {
  router.push('/login')
}

function goToSignUp() {
  router.push('/signup')
}
</script>
