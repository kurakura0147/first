import './bootstrap'
import Vue from 'vue'
// ルーティングの定義をインポート
import router from './router'
import store from './store'
// ルートコンポーネントをインポート
import App from './components/App.vue'

const createApp = async () => {
  await store.dispatch('auth/currentUser')

  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App />'
  })
}

createApp()