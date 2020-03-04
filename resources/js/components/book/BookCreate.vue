<template>
	<div class="center-block">
		<div class="card">
			<div class="card-header">記事投稿</div>
			<div class="card-body">
				<form>
					<div class="form-group row">
						{{ title }}
						<input type="text" class="form-control" v-model="title" placeholder="Enter title">
					</div>
					<div class="form__button">
						<button v-on:click.prevent="addBook" type="submit" class="btn btn-primary">New</button>
					</div>
				</form>
			</div>
		</div>
		<hr>
		<BookList></BookList>
	</div>
</template>

<script>
import Menu from '../Menu.vue'
import BookList from './BookList.vue'
export default {
	components: {
		Menu,
		BookList,
	},
	data(){
		return {
			title: "",
			user_id: "",
		}
	},
  methods: {
		addBook(){
			axios.post('/api/setBook',{
				title: this.title,
				user_id: this.$store.getters['auth/userid'],
			})
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
		},
	}
}
</script>
