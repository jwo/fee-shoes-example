Rails.application.routes.draw do
  get 'api/products' => 'api/products#index'
  get 'api/products/:id' => 'api/products#show'
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
end
