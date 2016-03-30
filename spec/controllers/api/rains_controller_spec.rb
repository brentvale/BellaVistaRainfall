require 'rails_helper'
require 'byebug'

RSpec.describe Api::RainsController, type: :controller do

  describe "GET #index" do
    it "returns all rains" do
      FactoryGirl.create_list(:rain, 10)
      get :index
      json = JSON.parse(response.body)
      
      expect(response).to have_http_status(:success)
      
      expect(json['rains'].length).to eq(10)
    end
    
    it "returns rains sorted by date" do     
      FactoryGirl.create(:rain, time_info: Time.new(2005, 1, 30))
      FactoryGirl.create(:rain, time_info: Time.new(2010, 1, 30))
      FactoryGirl.create(:rain, time_info: Time.new(2001, 1, 30))
      get :index
      json = JSON.parse(response.body)
      
      expect(json['rains'].first['time_info']).to eq("2001-01-30T08:00:00.000Z")
      expect(json['rains'].last['time_info']).to eq("2010-01-30T08:00:00.000Z")
    end
  end

  describe "POST #create" do
    it "returns http success" do
      
    end
  end

end
