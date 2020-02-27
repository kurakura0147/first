<template>
    <div class="center-block">
      <div class="card">
        <div class="card-header">記事投稿</div>
        <div class="card-body">
					<form  @submit.prevent="bookCreate">
						<div class="form-group row">
							<label for="BookCreate">title</label>
								<input type="text" class="form-control" id="BookCreate" v-model="bookForm.title" placeholder="Enter title">
						</div>
						<div class="form__button">
							<button type="submit" class="btn btn-primary">New</button>
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
			bookForm: {
				title: "",
				user_id: 1,
			},
		}
	},
  methods: {
    async create () {
      await this.$store.dispatch('/book/create', this.bookForm)
      // トップページに移動する
      this.$router.push('/book')
    },
	}
}
</script>
