Rails.application.routes.draw do
  #get 'sessions/create'
  #get 'sessions/destroy'
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get '/me', to: "users#show"
  post '/signup', to: "users#create"
  resources :users, only: [:index, :show, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
