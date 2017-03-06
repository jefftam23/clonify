# == Schema Information
#
# Table name: songs
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  album_id           :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  audio_file_name    :string
#  audio_content_type :string
#  audio_file_size    :integer
#  audio_updated_at   :datetime
#  duration           :integer
#

class Song < ActiveRecord::Base
  before_validation :get_duration

  validates :name, :album, :artist, presence: true

  has_attached_file :audio
  validates_attachment_content_type :audio,
  content_type: [ 'audio/mpeg',
    'audio/x-mpeg',
    'audio/mp3',
    'audio/x-mp3',
    'audio/mpeg3',
    'audio/x-mpeg3',
    'audio/mpg',
    'audio/x-mpg',
    'audio/x-mpegaudio'
  ]

  belongs_to :album
  has_one :artist, through: :album

  has_many :playlist_listings, dependent: :destroy
  has_many :playlists, through: :playlist_listings

  private

  def get_duration
    path = audio.queued_for_write[:original].path
    options = { :encoding => 'utf-8' }
    Mp3Info.open(path, options) do |mp3info|
      self.duration = mp3info.length.to_i
    end
  end
end
