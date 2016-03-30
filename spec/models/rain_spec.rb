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

require 'rails_helper'

RSpec.describe Rain, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
