class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

  def show
    user = User.find(session[:user_id])
    render json: user
  rescue ActiveRecord::RecordNotFound
    render json: {}, status: :not_found
  end

  def create
    client = Client.find_by(phone_number: params[:phone_number])
    raise StandardError, "User already exists" unless client&.user.nil?
    client = Client.create!(client_params) if client.nil?
    user = client.create_user!(user_params)
    session[:user_id] = user.id
    render json: client.user, status: :created
  rescue => err
    render json: { error: err }, status: :unprocessable_entity
  end

  protected

  def user_params
    params.permit(:email, :password, :password_confirmation)
  end

  def client_params
    params.permit(:first_name, :last_name, :phone_number)
  end

  private

  def invalid_record(err)
    render json: { errors: err.full_messages }
  end
end
