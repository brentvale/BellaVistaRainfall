Rails.application.routes.draw do

  namespace :api do
    resources :rainfalls, only: [:index, :create]
  end

  root :to => "static_pages#root"
end
