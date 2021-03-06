json.partial! 'api/albums/album', album: @album
json.artist do
  json.id @album.artist.id
  json.name @album.artist.name
end

if @album.songs.empty?
  json.songs({})
else
  json.songs do
    @album.songs.each do |song|
      json.set! song.id do
        json.partial! 'api/songs/song', song: song
      end
    end
  end
end
