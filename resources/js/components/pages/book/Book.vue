<template>
    <div class="center-block">
      <div class="card">
        <div class="card-header">記事一覧</div>
        <div class="card-body">
          <p>{{ books }}</p>
        </div>
      </div>
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
            .then(response => (this.books = response))
            .catch(error => (this.error = error))
        }
    }

</script>