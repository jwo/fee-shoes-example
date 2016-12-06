class Api::ProductsController < ApplicationController

  before_action do
    request.format = :json
  end

  def index
    @products = Product.all
    @products = @products.where(sport: params[:sport]) if params[:sport].present?
    @products = @products.where(brand: params[:brand]) if params[:brand].present?
    @products = @products.where("name ILIKE ?", "%#{params[:name]}%") if params[:name].present?
  end

  def show
    @product = Product.find params[:id]
  end

end
