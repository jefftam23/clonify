@users.each do |user|
  follow = user.in_follows.where(follower_id: current_user).first
  follow_id = follow ? follow.id : nil

  json.set! user.id do
    json.partial! 'api/users/user', user: user, follow_id: follow_id
  end
end
