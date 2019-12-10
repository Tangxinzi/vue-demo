const store = new Vuex.Store({
  state: {
    count: []
  },
  mutations: {
    // store.commit('add')
    add(state, payload) {
      state.count.push(payload)
    }
  },
  getters: {
    sum(state) {
      return state.count.reduce((a, b) => a + b, 0)
    },
    total(state) {
      return state.count.length
    },
    average(state, getters) {
      return +(getters.sum / getters.total * 100 / 100).toFixed(1)
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
      return this.$store.getters.average
      // return this.$store.state.count.reduce((a, b) => a + b, 0)
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
