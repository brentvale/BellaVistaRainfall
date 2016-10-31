# == Schema Information
#
# Table name: rainfalls
#
#  id               :integer          not null, primary key
#  rainfall_date    :datetime
#  amount_in_inches :float
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

require 'rails_helper'

RSpec.describe Rainfall, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
