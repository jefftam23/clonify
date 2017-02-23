json.partial! 'api/playlists/playlist', playlist: @playlist

if @playlist.songs.empty?
  json.songs({})
else
  json.songs do
    @playlist.playlist_listings.each do |listing|
      song = listing.song
      json.set! song.id do
        json.partial! 'api/songs/song', song: song
        json.listingId listing.id
      end
    end
  end
end
