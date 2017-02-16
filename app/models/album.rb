# == Schema Information
#
# Table name: albums
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  artist_id          :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Album < ActiveRecord::Base
  validates :name, :artist, presence: true

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :artist
  has_many :songs
end
