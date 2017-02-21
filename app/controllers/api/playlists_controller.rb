class Api::PlaylistsController < ApplicationController
  def index
    @playlists = User.find(params[:user_id]).playlists
    render :index
  end
end
