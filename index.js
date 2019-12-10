const mapGetters = Vuex.mapGetters
const mapActions = Vuex.mapActions

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
    },
    setCount(state, payload) {
      state.count = payload
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
  },
  actions: {
    getCount(content) {
      return axios.get('http://localhost:8080/api/count')
        .then((response) => {
          content.commit('setCount', response.data.count)
        })
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
        {{ average }}
      </div>
      <div class="ui divider"></div>
      共 {{ total }} 个项目，合计 {{ sum }}。
    </div>
  `,
  components: { AddButton, RemoveButton },
  computed: {
    ...mapGetters([
      'sum', // countSum: 'sum'
      'total',
      'average'
    ])
  },
  methods: {
    ...mapActions([
      'getCount'
    ])
  },
  mounted() {
    this.getCount()
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
