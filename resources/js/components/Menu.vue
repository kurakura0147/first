<template>
  <!-- <div class="row justify-content-center"> -->
    <div class="center-block">
      <div class="card">
        <div class="card-header">Menu List</div>
        <div class="card-body">
          <ul>
            <li>
            <router-link to="/users/show">ユーザー情報詳細</router-link>
            </li>
            <li>
            <router-link to="/book/create">新規投稿</router-link>
            </li>
            <li>
            <router-link to="/api/books">記事一覧</router-link>
            </li>
            <li>
            <router-link to="">その他</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
    data: function() {
        return {
          msg: "default",
      }
    },
}
</script>
