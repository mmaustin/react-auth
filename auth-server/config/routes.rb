Rails.application.routes.draw do
  get 'sessions/create'
  get 'sessions/destroy'
  get '/signup', to: "users#create"
  resources :users, only: [:index, :show, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
