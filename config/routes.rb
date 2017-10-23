Rails.application.routes.draw do
  devise_for :users

  resources :homes, only: [:index]
  resources :users
  root "homes#index"

  get "*path", to: "homes#index"
end
