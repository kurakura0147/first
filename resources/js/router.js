import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios';

// ページコンポーネントをインポート

// User
import UserInformation from './components/pages/user/UserInformation.vue'
import Login from './components/pages/Login.vue'

// Book
import Book from './components/pages/book/Book.vue'
import BookCreate from './components/pages/book/BookCreate.vue'

Vue.use(VueRouter)
Vue.prototype.$axios = axios

// パスとコンポーネントのマッピング
const routes = [
  // User関連
  {
    // ログイン画面
    path: '/users/show',
    component: UserInformation,
  },

  // Book関連
  {
    // Book一覧
    path: '/book',
    component: Book,
  },
  {
    // Book新規投稿
    path: '/book/create',
    component: BookCreate,
  },
]

const router = new VueRouter({
  // ページのリロード無しにURL遷移を実現する
  mode: 'history',
  routes
})

export default router