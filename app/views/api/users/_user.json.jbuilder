follow_id ||= nil

json.extract! user, :id, :username
json.imageUrl user.image.url
json.followId follow_id
json.follower user.followees.include?(current_user) if user

if user.nil? || user.playlists.empty?
  json.playlists({})
else
  json.playlists do
    user.playlists.each do |playlist|
      json.set! playlist.id do
        json.extract! playlist, :id, :name
        json.imageUrl playlist.image.url
      end
    end
  end
end
