@users.each do |user|
  follow = user.in_follows
    .select { |follow| follow.follower_id == @current_user.id }
    .first
  follow_id = follow ? follow.id : nil

  json.set! user.id do
    json.partial! 'api/users/user',
      user: user, follow_id: follow_id, current_user: @current_user
  end
end
