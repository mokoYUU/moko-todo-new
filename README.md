
# MokoTodoApp

MokoTodoAppは、Nuxt.js 3.xとVuetifyを使用して構築されたシンプルなTo-Doアプリケーションです。このアプリケーションでは、Firebase Authenticationを使用したユーザー認証と、Firebase Firestoreを使用したタスクの保存・管理を行います。

## 使用技術

- **Nuxt.js 3.x**: Vue.jsフレームワークをベースにした、サーバサイドレンダリングおよび静的サイトジェネレータ。
- **Vuetify**: Vue.js向けのUIライブラリで、美しく機能的なマテリアルデザインコンポーネントを提供。
- **Firebase Authentication**: メールアドレスとパスワードによるユーザー認証を実装。
- **Firebase Firestore**: NoSQLドキュメントデータベースで、リアルタイムのデータ同期を提供。

## Firebase設定

Firebaseコンソールでプロジェクトを作成し、Firebase AuthenticationとFirestoreを有効にし、firebaseConfig.tsファイルに自分のプロジェクトの設定を追加します。

```typescript
// firebaseConfig.ts
import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID",
  appId: "APP_ID",
  measurementId: "MEASUREMENT_ID"
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0]
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
```

## 起動

開発サーバーを http://localhost:3000 で起動します:

```bash
npm run dev
```

## Production

本番環境向けにアプリケーションをビルドします:

```bash
npm run build
```

デプロイに関する詳細な情報はNuxtのデプロイメントドキュメントを確認してください。

## Firebaseホスティングへのデプロイ

Firebase CLIを使ってアプリケーションをデプロイします。

```bash
npm install -g firebase-tools
firebase login
firebase init
```

以下のコマンドでデプロイを実行します。

```bash
npm run build
firebase deploy
```

## 使用方法

### アカウントの作成
1. サインアップページで新しいアカウントを作成します。
2. 左側の「アカウント作成」ボタンを押し、任意のメールアドレスとパスワードを入力します。
3. 入力後、「アカウントを作成する」ボタンを押します。メールアドレスやパスワードに問題がなければ、サインアップが完了し、Todoリスト管理画面へ遷移します。

### ログイン
1. 作成したアカウントでログインします。
2. リロード等で再度ログイン画面に遷移した場合は、サインアップ時に作成したメールアドレスとパスワードを入力します。
3. 「ログイン」ボタンを押下することで、Todoリスト管理画面へ遷移します。

### タスクの管理
- **タスクの追加**: テキストフィールドにタスクを入力し、「追加」ボタンをクリックします。
- **タスクの完了**: 緑色の完了チェックボックスをクリックしてタスクを完了済みにします。
- **タスクの削除**: 赤色の削除ボタンをクリックしてタスクを削除します。
- **タスクのフィルタリング**: タスクフィルタードロップダウンで「すべて」「未完了」「完了」を選択し、タスクをフィルタリングします。


## 依存関係

- **Nuxt.js**: ^3.0.0
- **Vuetify**: ^3.0.0
- **Firebase**: ^9.0.0
- **Vue Router**: ^4.0.0
- **TypeScript**: ^4.0.0

## デモ

アプリのデモは以下のURLで利用できます: [MokoTodoApp](https://mokotodoapp-469c4.web.app/login)
