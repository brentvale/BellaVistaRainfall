require 'rails_helper'

RSpec.describe Api::RainfallsController, type: :controller do
  describe "#index" do 
    before do
      (2012..2015).to_a.shuffle.each do |year|
        rainfall_date = Date.new("#{year}".to_i,10,30)
        FactoryGirl.create(:rainfall, rainfall_date: rainfall_date)
      end
    end
    
    it "returns a hash with rainfalls per year" do 
      
      get :index

      json = JSON.parse(response.body)

          # test for the 200 status-code
      expect(response).to be_success
      
        # check to make sure the right amount of rainfalls are returned in the hash
      expect(json['rainfalls']['2013'].length).to eq 1
      
    end
  end

end
