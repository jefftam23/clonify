json.extract! song, :id, :name
json.albumId song.album.id
json.albumImageUrl song.album.image.url
json.artistId song.artist.id
json.artistName song.artist.name
