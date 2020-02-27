import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import book from './book'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    book,
  }
})

export default store