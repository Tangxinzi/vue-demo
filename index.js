var vm = new Vue({
  el: '#app',
  beforeDestroy () {
    console.log('要被敢掉了 ...')
  },
  destroyed() {
    console.log('bye bye ~')
  }
})
