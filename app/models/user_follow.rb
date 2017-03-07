# == Schema Information
#
# Table name: user_follows
#
#  id          :integer          not null, primary key
#  follower_id :integer          not null
#  followee_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class UserFollow < ActiveRecord::Base
  validates :follower, :followee, presence: true
  validates :follower_id, uniqueness: { scope: :followee_id }

  belongs_to :follower,
    class_name: 'User'

  belongs_to :followee,
    class_name: 'User'
end
