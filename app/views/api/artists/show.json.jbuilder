json.partial! 'api/artists/artist', artist: @artist
json.albums do
  json.partial! 'api/albums/albums', albums: @artist.albums
end
