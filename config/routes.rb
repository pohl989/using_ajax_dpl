Rails.application.routes.draw do

  root 'games#index'
  resources :games do 
    resources :characters
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
