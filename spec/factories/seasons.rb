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

FactoryGirl.define do
  factory :season do
    start_year 1
    end_year 1
  end
end
