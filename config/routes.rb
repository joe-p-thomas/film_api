Rails.application.routes.draw do
  root 'static_pages#index'

  get '/films/search', to: 'films#search'
  get '/films/url/:url_slug', to: 'films#show'

  resources :films, only: [:index]
  resources :ratings, only: [:create]
  resource :session, only: [:create, :destroy]
  resources :users, only: [:create]

end
