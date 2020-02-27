const state = {
  isBoolean: false,
  count: 10,
  books: [
    {
      id: 1,
      title: "test1",
    },
    {
      id: 2,
      title: "test2",
    },
    {
      id: 3,
      title: "test3",
    },
    {
      id: 4,
      title: "test4",
    },
  ]
}

const getters = {
  getStateIsBoolean: (state) => state.isBoolean,
  squared: state => state.count,
}

const mutations = {
  tttt(state) {
    return state.isBoolean
  },

  increment(state){
    state.count = state.count + 1
    console.log(state.count)
    return state.count
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}