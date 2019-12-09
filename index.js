Vue.component('segment', {
  template: '\
    <div class="ui stacked segment">\
      <slot>:)</slot>\
    </div>\
  '
})

var vm = new Vue({
  el: '#app'
})
