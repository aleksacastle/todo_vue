Vue.component('todo-row', {
  template: '#todo-row',
  props: {
    todo: Object
  },
  methods: {
    cross: function(id) {
      // if (id)
      // console.log(id)
      $('#'+id).css('text-decoration', 'line-through')
      console.log($('#'+id))
    }
  }
})

var todos = new Vue({
  el: '#todos',
  data: {
    todos: [],
    todo: {
      name: '',
      status: false
    },
    errors: {}
  },
  ready: function() {
    var that;
    that = this;
    $.ajax({
      url: '/todos.json',
      success: function(res) {
        that.todos = res;
      }
    });
  },
  methods: {
    addTask: function () {
      var that = this;
      $.ajax({
        method: 'POST',
        data: {
          todo: that.todo,
        },
        url: '/todos.json',
        success: function(res) {
          that.errors = {}
          that.todos.push(res);
        },
        error: function(res) {
          that.errors = res.responseJSON.errors
        }
      })
    }
  }
});
