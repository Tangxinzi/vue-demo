Vue.component('ui-botton', {
  template: '<button type="button" name="button" class="ui button" @click="increment">{{ counter }}</button>',
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    increment () {
      this.counter += 1,
      this.$emit('increment')
    }
  }
})

var vm = new Vue({
  el: '#app',
  data: {
    total: 0
  },
  methods: {
    incrementTotal () {
      this.total += 1
    }
  }
})
