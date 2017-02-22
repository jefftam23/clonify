class Api::PlaylistListingsController < ApplicationController
  def create
    playlist_listing = PlaylistListing.new(playlist_listing_params)

    if playlist_listing.save
      @playlist = playlist_listing.playlist
      render 'api/playlists/show.json.jbuilder'
    else
    end
  end

  def destroy
  end

  private

  def playlist_listing_params
    params.require(:playlistListing).permit(:playlist_id, :song_id)
  end
end
