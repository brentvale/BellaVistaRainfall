# == Schema Information
#
# Table name: rainfalls
#
#  id               :integer          not null, primary key
#  amount_in_inches :float            not null
#  month            :integer          not null
#  day              :integer          not null
#  year             :integer          not null
#  hours            :string           default("{}"), is an Array
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

require 'rails_helper'

RSpec.describe Rainfall, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
