<template>
  <div class="center-block">
    <div class="card">
      <div class="card-header">Menu List</div>
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
export default {
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
      }
    },
}
</script>
<style>
ul {
  list-style: none;
}
</style>