Vue.component('todo-row', {
  template: '#todo-row',
  props: {
    todo: Object
  },
  methods: {
    //method to change status in database depending on click in box
    change: function(todo) {
      // var that = this;
      var id = todo.id;
      var status = todo.status;
      // var completed = false;
      //change checkbox and cross out task
      if (status==1){
        $('#'+id).css('text-decoration', 'line-through')
      }
      else {
        $('#'+id).css('text-decoration', 'none')
      }
      $.ajax({
        method: 'PUT',
        url: '/todos/'+id+'.json',
        data: {
          todo: todo
        },
        success: function(res) {
          console.log(res)
          status = res.status
          // todo.status=res.status
        }
      })
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
