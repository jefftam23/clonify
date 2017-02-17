class Api::AlbumsController < ApplicationController
  def index
    @albums = Artist.find(params[:artist_id]).albums
    render :index
  end

  def show
  end
end
