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
        json.extract! song, :id, :name
      end
    end
  end
end
