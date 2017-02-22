class Api::PlaylistsController < ApplicationController
  before_filter :require_authorization, only: [:update, :destroy]

  def index
    @playlists = current_user.playlists
    render :index
  end

  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.owner = current_user

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

  def update
    @playlist = Playlist.find(params[:id])
    @playlist.update!(playlist_params)
    render :show
  end

  private

  def playlist_params
    params.require(:playlist).permit(:name, :owner_id)
  end

  def require_authorization
    if current_user != Playlist.find(params[:id]).owner
      message = "You do not have permission to edit or delete this playlist!"
      render json: message, status: 403
    end
  end
end
