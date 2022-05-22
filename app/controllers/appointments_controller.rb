class AppointmentsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  def index
    appointments = Appointment.all
    render json: appointments, status: :ok
  end

  def show
    appointment = Appointment.find(params[:id])
    render json: appointment, status: :ok
  end

  private

  def record_not_found(err)
    render json: { errors: err.full_messages }, status: :not_found
  end
end
