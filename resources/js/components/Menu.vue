<template>
  <div class="center-block" v-if="login_check">
    <Login></Login>
  </div>


  <div class="center-block" v-else>
    <div class="card">
      <div class="card-header" >
        こんにちは、{{login_name}}さん
      </div>
      {{ login_check }}
      <div class="card-body">
        <ul>
          <li v-for="(menu, index) in menus" :key=index>
            <router-link :to=menu.path>{{menu.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Login from './auth/Login.vue'
export default {
  components: {
    Login,
  },
  data: function() {
      return {
        menus: [
          {title: 'ユーザー情報詳細', path: '/users/show'},
          {title: '新規投稿', path: '/api/create'},
          {title: '記事一覧', path: '/api/books'},
          {title: 'その他', path: ''},
          {title: 'Back', path: '/'},
        ],
        msg: "default",
        login_name: this.$store.getters['auth/username'],
        login_check: this.login_name !== ''?true:false,

    }
  },
}
</script>
<style>
ul {
  list-style: none;
}
</style>