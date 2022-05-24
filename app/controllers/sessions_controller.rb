class SessionsController < ApplicationController
  def create
    # /login
    user = User.find_by(email: params[:email])
    if user.nil?
      render json: { error: "Incorrect email address and/or password." }, status: :unprocessable_entity
    elsif user.authenticate(params[:password])
      session[:user_id] = user.id
      # byebug
      render json: user, status: :created
    else
      render json: { error: "Incorrect email address and/or password." }, status: :unprocessable_entity
    end
  end

  # /logout
  def destroy
    session.clear
    head :no_content
  end
end
