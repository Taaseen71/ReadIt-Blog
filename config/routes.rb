Rails.application.routes.draw do
  resources :comments
  resources :articles
#   get '/articles/:id/comments', to: 'comments#index' #trying to show all comments specific to each article. not all of them
#   get '/articles/:id/comments/:id', to: 'comments#show'


  post '/auth/login', to: 'authentication#login'
    get '/auth/verify', to: 'authentication#verify'
    resources :users
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
