class BarbersController < ApplicationController
  def index
    barbers = Barber.all
    render json: barbers, status: :ok
  end

  def show
    barber = Barber.find(params[:id])
    render json: barber, status: :ok
  end
end
