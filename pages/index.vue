<template>
  <v-app>
    <!-- メインコンテンツコンテナ　カード内　タイトル中央、ボタン中央-->
    <v-main class="d-flex align-center justify-center" style="background-color: #f5f5f5;">
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
    </v-main>
  </v-app>
</template>

<script setup>
  // Vue Routerのフック　➡︎　ルーティングを可能
  import { useRouter } from 'vue-router'
  const router = useRouter()

  // ログインページへ遷移させる
  const goToLogin = () => {
    router.push('/login')
  }

  // サインアップページへ遷移させる
  const goToSignUp = () => {
    router.push('/signup')
  }
</script>
