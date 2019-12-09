var vm = new Vue({
  el: '#app',
  data: {
    counter: 0
  },
  methods: {
    process (event) {
      console.log(event.target.value)
    }
  }
})
