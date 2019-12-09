Vue.component('ui-botton', {
  template: '<button type="button" name="button" class="ui button">{{ text }}</button>',
  props: {
    text: {
      type: String,
      default: 'Button',
      // required: true,
      validator (value) {
        return value.length > 3
      }
    }
  }
})

var vm = new Vue({
  el: '#app',
  data: {
    published: false
  }
})
