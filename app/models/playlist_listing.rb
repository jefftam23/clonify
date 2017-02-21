# == Schema Information
#
# Table name: playlist_listings
#
#  id          :integer          not null, primary key
#  playlist_id :integer          not null
#  song_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistListing < ActiveRecord::Base
  validates :song, :playlist, presence: true
  validates :playlist_id, uniqueness: { scope: :song_id }

  belongs_to :playlist
  belongs_to :song
end
