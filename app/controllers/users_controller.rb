class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

  # /me
  def show
    if session[:user_id].nil?
      render json: { error: "No user is currently logged in." }, status: :unauthorized
    else
      user = User.find(session[:user_id])
      session[:user_id] = user.id
      render json: user
    end
  end

  # /signup
  def create
    client = Client.find_by(phone_number: params[:phone_number]) || Client.create!(client_params)
    return render json: { message: "User already exists!" }, status: :ok unless client.user.nil?
    user = client.create_user!(user_params(client.id))
    session[:user_id] = user.id
    render json: user, status: :created
  rescue ActiveRecord::RecordInvalid => err
    render json: { error: err.message }, status: :unprocessable_entity
  end

  def user_appointments
    user = User.find(session[:user_id])
    appointments = user.client.appointments
    render json: appointments, status: :ok
  end

  protected

  def user_params(client_id)
    {
      client_id: client_id,
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation],
    }
  end

  def client_params
    params.permit(:first_name, :last_name, :phone_number)
  end

  private

  def invalid_record(err)
    render json: { errors: err.message }, status: :unprocessable_entity
  end
end
