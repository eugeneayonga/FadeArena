Rails.application.routes.draw do
  resources :products
  resources :services
  resources :clients
  resources :appointments, only: [:create, :update, :show]
  resources :barbers, only: [:index, :show]

  get "/startup", to: "startup#index"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
