Vue.component('ui-botton', {
  template: '<button type="button" name="button" class="ui button">{{ text }}</button>',
  props: ['text']
})

var vm = new Vue({
  el: '#app',
  data: {
    published: false
  }
})
