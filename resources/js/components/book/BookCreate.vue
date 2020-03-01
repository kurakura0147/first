<template>
    <div class="center-block">
      <div class="card">
        <div class="card-header">記事投稿</div>
        <div class="card-body">
					<form>
						<div class="form-group row">
							<label for="BookCreate">title</label>
								<input type="text" class="form-control" id="BookCreate" v-model="book.title" placeholder="Enter title">
						</div>
						<div class="form__button">
							<button @click="bookCreate" type="submit" class="btn btn-primary">New</button>
						</div>
					</form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
	data(){
		return {
			book: {
				title: "",
				user_id: 1,
			},
		}
	},
  methods: {
    async bookCreate () {
			const response = await axios.post('/api/books/create', book)
			console.log(response)
      // this.$router.push('/api/book')
    },
	}
}
</script>
