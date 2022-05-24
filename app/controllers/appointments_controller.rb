class AppointmentsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  def create
    client = get_client()
    byebug
  end

  private

  def get_client
    if session[:user_id]
      return User.find(session[:user_id]).client
    else
      client = Client.find_by(phone_number: params[:phone_number])
      if client.nil?
        client = Client.create! first_name: params[:first_name], last_name: params[:last_name], phone_number: params[:phone_number]
      else
        client.update(first_name: params[:first_name], last_name: params[:last_name])
      end
      return client
    end
  end

  def record_not_found(err)
    render json: { errors: err.full_messages }, status: :not_found
  end
end

# unused route methods:
# def index
#   appointments = Appointment.all
#   render json: appointments, status: :ok
# end

# def show
#   appointment = Appointment.find(params[:id])
#   render json: appointment, status: :ok
# end
