class Api::PlaylistsController < ApplicationController
  def index
    @playlists = current_user.playlists
    render :index
  end
end
