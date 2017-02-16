# == Schema Information
#
# Table name: songs
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ActiveRecord::Base
  validates :name, :album, presence: true

  belongs_to :album
end
