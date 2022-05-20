Rails.application.routes.draw do
  resources :products
  resources :services
  resources :clients
  resources :appointments
  resources :barbers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
