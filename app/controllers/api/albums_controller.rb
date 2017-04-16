class Api::AlbumsController < ApplicationController
  def show
    @album = Album
      .includes(songs: [:album, :artist])
      .find(params[:id])
  end
end
