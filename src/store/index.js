import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [
      { id: 1, username: 'balloon', password: 'balloon01', status: 'admin' },
      { id: 2, username: 'jojo', password: 'jojo1234', status: 'cus' },
      { id: 3, username: 'kitty', password: 'kitty1234', status: 'cus' }
    ]
  },
  getters: {
    getUsers: (state) => state.users
  },
  mutations: {
    ADD_User (state, user) {
      state.users.push(user)
    }
  },
  actions: {
    registerUser ({ commit }, user) {
      commit('ADD_User', user)
    }
  },
  modules: {
  }
})
