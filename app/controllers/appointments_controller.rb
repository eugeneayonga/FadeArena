class AppointmentsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  def create
    client = get_client()
    appointment = Appointment.create!(barber_id: params[:barber_id], client_id: client.id, appointment_date: params[:appointment_date])
    render json: { client: client, appointment: appointment }, status: :created
  end

  private

  def get_client
    return User.find(session[:user_id]).client if session[:user_id]
    client = Client.find_by(phone_number: params[:phone_number])
    if client.nil?
      client = Client.create! first_name: params[:first_name], last_name: params[:last_name], phone_number: params[:phone_number]
    else
      client.update(first_name: params[:first_name], last_name: params[:last_name])
    end
    client
  end

  def record_not_found(err)
    render json: { errors: err.full_messages }, status: :not_found
  end
end
