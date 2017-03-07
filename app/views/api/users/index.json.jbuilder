@users.each do |user|
  json.set! user.id do
    json.partial! 'api/users/user', user: user
    json.follower user.followees.include?(current_user)
    json.followee user.followers.include?(current_user)
  end
end
