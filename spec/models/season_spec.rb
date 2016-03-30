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

require 'rails_helper'

RSpec.describe Season, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
