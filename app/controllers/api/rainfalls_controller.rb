class Api::RainfallsController < ApplicationController
  
  def index
    rainfalls = Rainfall.all
    rainfalls_hash = sort_by_season(rainfalls)
 
    render json: {rainfalls: rainfalls_hash}
  end
  
  private 
  
  def sort_by_season(rainfalls)
    hash = {}
    rainfalls.each do |rain|
      #include january - june in previous year's rainfall
      if rain.rainfall_date.month < 7
        season = rain.rainfall_date.year - 1
      else
        season = rain.rainfall_date.year 
      end
      if hash[season].nil?
        hash[season] = []
      end
      hash[season] << rain
    end
    hash
  end


end
