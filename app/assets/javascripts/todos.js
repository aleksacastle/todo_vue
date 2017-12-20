var todo = new Vue({
  el: '#todos',
  data: {
    todos: [],
    todo: {
      name: '',
      status: false
    },
    errors: {}
  },
  computed: function() {
    var that;
    that = this;
    $.ajax({
      url: '/todos.json',
      success: function(res) {
        that.todos = res;
      }
    });
  }
});
