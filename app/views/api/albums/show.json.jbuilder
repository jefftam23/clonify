json.partial! 'api/albums/album', album: @album
json.artistId @album.artist.id

if @album.songs.empty?
  json.songs({})
else
  json.songs do
    @album.songs.each do |song|
      json.set! song.id do
        json.extract! song, :id, :name
      end
    end
  end
end
