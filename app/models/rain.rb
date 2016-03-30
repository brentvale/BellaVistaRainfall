# == Schema Information
#
# Table name: rains
#
#  id               :integer          not null, primary key
#  time_info        :datetime
#  season_id        :integer
#  amount_in_inches :float
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Rain < ActiveRecord::Base
end
