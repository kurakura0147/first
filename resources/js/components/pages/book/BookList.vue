<template>
  <div>
    <div class="center-block">
      <div class="card">
        <div class="card-header">記事一覧</div>
        <div class="card-body">
          <ul>
            <li v-for="book in books" v-bind:key="book.id" >
              ID = {{ book.id }}: Name = {{ book.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Menu from './Bookcreate.vue'

  export default {
    component: {
      // Menu,
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
            console.log(this.books)
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