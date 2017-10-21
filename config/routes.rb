Rails.application.routes.draw do
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :restaurants
    end
  end

  resources :homes, only: [:index]
  root "homes#index"

  get "*path", to: "homes#index"
end
