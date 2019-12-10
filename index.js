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

const Counter = {
  template: `
    <div class="ui red circular label">
      {{ count }}
    </div>
  `,
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}

const app = new Vue({
  el: '#app',
  store,
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
})
