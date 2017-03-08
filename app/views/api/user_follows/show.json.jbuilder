isFollowee = @user.followers.include?(current_user)

json.set! @user.id do
  json.partial! 'api/users/user', user: @user
  json.follower @user.followees.include?(current_user)
  json.followee isFollowee
  # followId represents the follow linking the current_user to the followee, if any
  json.followId @follow_id
end
