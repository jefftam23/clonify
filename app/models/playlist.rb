# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ActiveRecord::Base
  validates :name, :owner, presence: true

  belongs_to :owner,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :owner_id

  has_many :playlist_listings, dependent: :destroy
  has_many :songs, through: :playlist_listings
end
