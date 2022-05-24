class StartupController < ApplicationController
  def index
    barbers = Barber.all
    products = Product.all
    services = Service.all
    render json: { barbers: barbers, products: products, services: services }, status: :ok
  end
end
