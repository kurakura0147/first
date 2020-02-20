import Vue from 'vue'
import VueRouter from 'vue-router'

// ページコンポーネントをインポート
import Login from './components/pages/Login.vue'
import Menu from './components/pages/Menu.vue'
import Book from './components/pages/Book.vue'
import BookCreate from './components/pages/BookCreate.vue'

Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
  {
    // ログイン後のトップ画面
    path: '/',
    component: Menu,
  },
  {
    // ログイン画面
    path: '/login',
    component: Login,
  },
  {
    // 本一覧
    path: '/book',
    component: Book,
  },
  {
    // 本新規投稿
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