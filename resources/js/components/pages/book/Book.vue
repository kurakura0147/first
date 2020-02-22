<template>
  <div>
    <main>
      <div class="card-header">Book一覧表示</div>
      <div class="card-body">
        {{ error }}
        <ul>
          <li v-for="book in books" :key="book">
            {{ book }}
          </li>
        </ul>
          <RouterView />
      </div>
    </main>
  </div>
</template>

<script>

  export default {
        data(){
            return {
                books: [],
                error: [],
            }
        },
        mounted() {
            axios.get('/book')
            .then(response => (this.books = response.data))
            .catch(error => (this.error = error))
        }
    }

</script>