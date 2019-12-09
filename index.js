var vm = new Vue({
  el: '#app',
  data: {
    counter: 0
  },
  methods: {
    like (event) {
      this.counter += 1
      console.log(event)
    }
  }
})
