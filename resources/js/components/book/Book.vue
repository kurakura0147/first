<template>
  <li>
    Title:{{ item.title }}
    <hr>
  </li>
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

<style>

</style>