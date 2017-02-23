json.partial! 'api/playlists/playlist', playlist: @playlist

if @playlist.songs.empty?
  json.songs({})
else
  json.songs do
    @playlist.playlist_listings.each do |listing|
      json.set! listing.song.id do
        json.extract! listing.song, :id, :name
        json.listingId listing.id
      end
    end
  end
end
