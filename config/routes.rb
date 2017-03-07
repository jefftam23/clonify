Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :create]
    resources :playlists, only: [:index, :show, :create, :destroy, :update]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:show]
    resources :songs, only: [:show]
    resources :playlist_listings, only: [:create, :destroy]
    resources :user_follows, only: [:create, :destroy]
  end

  root "static_pages#root"
end
