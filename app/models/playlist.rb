# == Schema Information
#
# Table name: playlists
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  owner_id           :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Playlist < ActiveRecord::Base
  validates :name, :owner, presence: true

  has_attached_file :image,
    default_url: -> (attachment) { ActionController::Base.helpers.asset_path('playlist-default.png') }

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :owner,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :owner_id

  has_many :playlist_listings, dependent: :destroy
  has_many :songs, through: :playlist_listings
end
