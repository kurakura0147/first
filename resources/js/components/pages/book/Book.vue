<template>
    <div class="center-block">
      <div class="card">
        <div class="card-header">記事一覧</div>
        <div class="card-body">
          <p>countの値:{{ count }}</p>
          <ul>
            <li v-for="book in books" v-bind:key="book.id" >
              ID = {{ book.id }}: Name = {{ book.title }}
            </li>
          </ul>
          <button v-on:click="test(10)"> bookObject</button>
          <button v-on:click="side"> インクリメント</button>
    </div>
    </div>
    </div>
</template>

<script>

  export default {
        data(){
            return {
              books: this.$store.state.book.books,
              isBoolean: null,
              count: 1
            }
        },
        methods: {
          test(number){
            return this.count += number
          },
          side(){
            return this.$store.commit('book/increment')
          },
        },
    }

</script>