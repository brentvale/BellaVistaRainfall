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

FactoryGirl.define do
  factory :rainfall do
    rainfall_date "2016-10-30 11:44:52"
    amount_in_inches 1.5
  end
end
