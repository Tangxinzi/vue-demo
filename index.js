const store = new Vuex.Store({
  state: {
    count: []
  },
  mutations: {
    // store.commit('add')
    add(state, payload) {
      state.count.push(payload)
    },
    remove(state) {
      state.count.pop()
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

const AddButton = {
  template: `
    <button class="ui button" @click="add">
      Add
    </button>
  `,
  methods: {
    add() {
      this.$store.commit('add', Math.floor(Math.random() * (10 - 1) + 1))
    }
  }
}

const RemoveButton = {
  template: `
    <button class="ui button" @click="remove">
      Remove
    </button>
  `,
  methods: {
    add() {
      this.$store.commit('add', Math.floor(Math.random() * (10 - 1) + 1))
    },
    remove() {
      this.$store.commit('remove')
    },
  }
}

const Counter = {
  template: `
    <div>
      <add-button></add-button>
      <remove-button></remove-button>
      <div class="ui red circular label">
        {{ count }}
      </div>
    </div>
  `,
  components: { AddButton, RemoveButton },
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
