<template>
  <ul>
    <li>ID:{{item.id}}</li>
    <li>Title:{{ item.title }}</li>
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