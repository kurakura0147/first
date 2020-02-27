<template>
    <div class="center-block">
      <div class="card">
        <div class="card-header">記事一覧</div>
        <div class="card-body">
          <p>{{ books }}</p>
          <ul>
            <li v-for="book in books" v-bind:key="book.id" >
              ID = {{ book.id }}: Name = {{ book.title }}
            </li>
          </ul>
    </div>
    </div>
    </div>
</template>

<script>

  export default {
        data(){
          return {
            books: this.$store.state.book.books,
          }
        },
        methods: {
          async index() {
            await this.$store.dispatch('book/index')
          }
        },
    }

</script>