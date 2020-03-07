<template>
  <ul>
    <div>Title:{{ item.title }}</div>
    <div v-if="user_id === current_userid">
      <router-link to="/api/delete">delete</router-link>
    </div>
    <hr>
  </ul>
</template>
<script>
export default {
  // BookListからデータの所得
  props: {
    item: {
      type: Object,
      required: true,
    }
  }
}
</script>
<style scoped>
  ul{float: left;}
</style>