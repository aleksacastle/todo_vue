Rails.application.routes.draw do
  #routes for vue js
  resources :todos, except: %i[:new :edit]
  root 'todos#index'
end
