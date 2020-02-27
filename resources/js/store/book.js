const state = {
  books: null,
}

const getters = {
}

const mutations = {
  setBook(state) {
    state.books = "book"
  },
}

const actions = {
  async currentBook (context) {
    const response = await axios.get('/api/book')
    // const book = response.data
    context.commit('setBook')
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}