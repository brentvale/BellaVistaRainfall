Rails.application.routes.draw do
  namespace :api do
  get 'seasons/index'
  end

  namespace :api do
    resources :rains, only: [:index, :create]
  end

  root :to => "static_pages#root"
end
