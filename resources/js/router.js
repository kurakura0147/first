// 設定ファイルのインポート
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import store from './store'

// ページコンポーネントをインポート
// User
import Login from './components/auth/Login.vue'
import Menu from './components/Menu.vue'

// Book
import Book from './components/pages/book/BookList.vue'
import BookCreate from './components/pages/book/BookCreate.vue'

Vue.use(VueRouter)
Vue.prototype.$axios = axios

// パスとコンポーネントのマッピング
const routes = [

  // User関連
  {
    // ログイン・新規登録画面
    path: '/login',
    component: Login,
    beforeEnter (to, from, next) {
    if (store.getters['auth/check']) {
      next('/')
    } else {
      next()
    }
  }
  },
  {
    // ログイン後の画面
    path: '/',
    component: Menu,
  },
  // Book関連
  {
    // Book一覧
    path: '/api/books',
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