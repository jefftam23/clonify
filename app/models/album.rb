# == Schema Information
#
# Table name: albums
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ActiveRecord::Base
end
