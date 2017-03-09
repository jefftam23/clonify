@users.each do |user|
  follow = user.in_follows.where(follower_id: current_user).first
  followId = follow ? follow.id : nil

  json.set! user.id do
    json.id user.id
    json.username user.username
    json.follower user.followees.include?(current_user)
    json.followee user.followers.include?(current_user)
    json.followId followId
  end
end
