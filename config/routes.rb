Rails.application.routes.draw do
  #route for vue application
    resources :todos, except: %i[:new :edit]
    root 'todos#index'

    #route for ember application
    namespace :ember do
      resources :todos, except: %i[:new :edit]
    end
end
