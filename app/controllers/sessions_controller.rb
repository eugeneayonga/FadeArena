class SessionsController < ApplicationController

  # /login
  def create
    user = User.find_by(email: params[:email])
    if user.nil?
      render json: { error: "Incorrect email address and/or password." }, status: :unprocessable_entity
    else user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created     end
  end

  # /logout
  def destroy
    session.clear
    head :no_content
  end
end
