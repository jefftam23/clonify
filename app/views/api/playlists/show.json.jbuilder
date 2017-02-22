json.partial! 'api/playlists/playlist', playlist: @playlist

if @playlist.songs.empty?
  json.songs({})
else
  json.songs do
    @playlist.songs.each do |song|
      json.set! song.id do
        json.extract! song, :id, :name
      end
    end
  end
end
