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

FactoryGirl.define do
  sequence(:time_info) { |n| Time.new(2001, n, 1) }
  factory :rain do
    time_info "2016-03-30 11:19:03"
    season_id 1
    amount_in_inches 1.5
  end

end
