class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      user_params[:username],
      user_params[:password]
    )

    if @user
      log_in_user!(@user)
      render 'api/users/show'
    else
      render json: ['Incorrect username and password'].to_json, status: 401
    end
  end

  def destroy
    if logged_in?
      log_out_user!
      render json: {}
    else
      render json: ['no user to logout'], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
