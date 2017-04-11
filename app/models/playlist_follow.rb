# == Schema Information
#
# Table name: playlist_follows
#
#  id          :integer          not null, primary key
#  follower_id :integer          not null
#  playlist_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class PlaylistFollow < ActiveRecord::Base
  validates :follower, :playlist, presence: true
  validates :follower_id, uniqueness: { scope: :playlist_id }

  belongs_to :follower,
    class_name: 'User'

  belongs_to :playlist
end
