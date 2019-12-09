var app = new Vue({
  el: '#app',
  methods: {
    logMessage () {
      console.log(this.message);
    }
  },
  data: {
    message: 'hello',
    title: 'hello',
    welcome: true
  }
})
