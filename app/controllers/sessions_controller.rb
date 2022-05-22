class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])
    if user.nil?
      render json: { error: "Incorrect username or password. Please try again." }
    elsif user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    end
  end

  def destroy
    session[:user_id] = nil
  end
end
