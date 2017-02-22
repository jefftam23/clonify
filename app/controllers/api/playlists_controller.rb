class Api::PlaylistsController < ApplicationController
  def index
    @playlists = User.find(params[:user_id]).playlists
    render :index
  end

  def create
    @playlist = Playlist.new(playlist_params)

    if @playlist.save
      render :show
    else
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy!
    render :show
  end

  private

  def playlist_params
    params.require(:playlist).permit(:name, :owner_id)
  end
end
