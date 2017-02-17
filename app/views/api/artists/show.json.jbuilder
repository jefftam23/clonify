json.partial! 'api/artists/artist', artist: @artist

if @artist.albums.empty?
  json.albums({})
else
  json.albums do
    json.partial! 'api/albums/albums', albums: @artist.albums
  end
end
