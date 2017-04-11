# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_attached_file :image,
    styles: { thumb: '130x130#' },
    default_url: -> (attachment) { ActionController::Base.helpers.asset_path('user-default.png') }

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :playlists,
    class_name: 'Playlist',
    primary_key: :id,
    foreign_key: :owner_id

  has_many :in_follows, dependent: :destroy,
    class_name: 'UserFollow',
    foreign_key: :followee_id

  has_many :out_follows, dependent: :destroy,
    class_name: 'UserFollow',
    foreign_key: :follower_id

  has_many :playlist_follows,
    class_name: 'PlaylistFollow',
    foreign_key: :follower_id,
    dependent: :destroy

  has_many :followers, through: :in_follows
  has_many :followees, through: :out_follows

  has_many :followed_playlists,
    through: :playlist_follows,
    source: :playlist

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    (user && user.is_password?(password)) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    save!
    self.session_token
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
