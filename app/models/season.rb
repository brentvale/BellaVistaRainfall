# == Schema Information
#
# Table name: seasons
#
#  id         :integer          not null, primary key
#  start_year :integer
#  end_year   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Season < ActiveRecord::Base
end
