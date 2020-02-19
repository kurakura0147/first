import Vue from 'vue'
import VueRouter from 'vue-router'

// ページコンポーネントをインポート
import ExampleComponent from './components/pages/ExampleComponent.vue'

Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '/home',
    component: ExampleComponent
  },
]

const router = new VueRouter({
  // ページのリロード無しにURL遷移を実現する
  mode: 'history',
  routes
})

export default router