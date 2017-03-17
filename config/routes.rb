Rails.application.routes.draw do

  get '/films/search/:title', to: 'films#search'
  get '/films/:url_slug', to: 'films#show'

  resources :films, only: [:index]
  resources :ratings, only: [:create]
  resource :session, only: [:create, :destroy]
  resources :users, only: [:create]

end
