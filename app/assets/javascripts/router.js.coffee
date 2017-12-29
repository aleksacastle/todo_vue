# For more information see: http://emberjs.com/guides/routing/

TodoVue.Router.map ->
  @resource 'todos', path: '/', ->
    @route 'active'
    @route 'completed'

TodoVue.TodosRoute = Ember.Route.extend
  model: -> @store.find('todo')

TodoVue.TodosIndexRoute = Ember.Route.extend
  setupController: -> @controllerFor('todos').set('filteredTodos', this.modelFor('todos'))

TodoVue.TodosActiveRoute = Ember.Route.extend
  setupController: ->
    todos = @store.filter 'todo', (todo) ->
      !todo.get('isCompleted')

    @controllerFor('todos').set('filteredTodos', todos)

TodoVue.TodosCompletedRoute = Ember.Route.extend
  setupController: ->
    todos = @store.filter 'todo', (todo) ->
      todo.get('isCompleted')

    @controllerFor('todos').set('filteredTodos', todos)
