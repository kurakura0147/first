<template>
  <div>
    <main>
      <div class="card-header">Book一覧表示</div>
      <div class="card-body">
        
          <RouterView />
      </div>
    </main>
  </div>
</template>

<script>

  export default {
        data(){
            return {
                books: []
            }
        },
        mounted() {
            axios.get('/book').then(response => this.books = response.data)
        }
    }

</script>