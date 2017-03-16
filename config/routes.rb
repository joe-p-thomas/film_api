Rails.application.routes.draw do

  get '/films/search/:title', to: 'films#search'
  get '/films/:url_slug', to: 'films#show'

  resources :films, only: [:index]

end
