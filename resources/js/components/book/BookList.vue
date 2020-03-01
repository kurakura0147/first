<template>
  <div>
    <div class="center-block">
      <div class="card">
        <div class="card-header">記事一覧</div>
        <div class="card-body">
          <Book v-for="book in books" v-bind:key="book.id" :item="book">
          </Book>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Book from './Book.vue'
export default {
  components: {
    Book,
  },
  data(){
    return{
      books: [],
    }
  },
  methods: {
      async fetchBooks() {
        const response = await axios.get('/api/books')
          this.books = response.data
      }
  },
  watch: {
    $route: {
      async handler(){
        await this.fetchBooks()
      },
      immediate: true
    }
  },
}
</script>