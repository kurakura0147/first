import './bootstrap'
import Vue from 'vue'
// ルーティングの定義をインポート
import router from './router'
import store from './store'
// ルートコンポーネントをインポート
import App from './components/App.vue'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App />'
})