const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    // store.commit('add')
    add(state, payload) {
      state.count += payload
    }
  }
})
