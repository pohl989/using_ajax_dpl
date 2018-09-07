Rails.application.routes.draw do

  root 'games#index'
  resources :games do
    resources :characters
  end

  get 'game_form', to: 'games#form'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
