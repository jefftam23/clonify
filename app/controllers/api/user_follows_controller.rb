class Api::UserFollowsController < ApplicationController
  def create
    @user_follow = UserFollow.new(user_follow_params)
    @user_follow.follower = current_user

    if @user_follow.save
      @user = @user_follow.followee
      @follow_id = @user_follow.id
      render 'api/users/show'
    else
    end
  end

  def destroy
    @user_follow = UserFollow.find(params[:id])
    @user = @user_follow.followee
    @user_follow.destroy!
    render 'api/users/show'
  end

  private

  def user_follow_params
    params.require(:userFollow).permit(:follower_id, :followee_id)
  end
end
