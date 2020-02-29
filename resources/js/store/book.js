// const state = {
//   books: [],
// }

// const getters = {
// }

// const mutations = {
//   setBook(state, book) {
//     state.books = book
//     console.log("book")
//     console.log(state.books)
//   },
// }

// const actions = {
//   async getBooks (context) {
//     const response = await axios.get('/api/book')
//     .then(
//       (res) => {this.books = res.data}
//     )
//     console.log("response")
//     console.log(response)
//     this.books = response.data
//     context.commit('setBook', books)
//   },
//   // created() {
//   //   this.getBooks()
//   // },
// }

// export default {
//   namespaced: true,
//   state,
//   getters,
//   mutations,
//   actions
// }