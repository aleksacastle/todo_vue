var todo = new Vue({
  el: '#todos',
  data: {
    todos: []
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
  }
});
