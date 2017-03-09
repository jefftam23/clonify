class Api::UsersController < ApplicationController
  def index
    @users = User.includes(:followers, :followees).reject { |user| user == current_user }
    render :index
  end

  def show
    # @user = User.find(params[:id]).includes(:followers, :followees)
    # N + 1 queries for single user? check pokemon index
    @user = User.find(params[:id])
    @follow_id = UserFollow.where(
      follower_id: current_user.id,
      followee_id: @user.id
    ).first

    @follow_id = @follow_id.id if @follow_id

    render :show
  end

  def create
    @user = User.new(user_params)

    if @user.save
      log_in_user!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
