Vue.component('todo-row', {
  template: '#todo-row',
  props: {
    todo: Object
  },
  methods: {

    change: function(todo) {
      var id = todo.id
      var status = todo.status;
      // var completed = false;
      if (status==0){
        $('#'+id).css('text-decoration', 'line-through')
      }
      else {
        $('#'+id).css('text-decoration', 'none')
        // $.ajax({
        //   method: 'PUT',
        //   url: '/todos/id.json',
        //     status == 1;
        // })
      }
      console.log('change')
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
