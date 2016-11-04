class Api::RainfallsController < ApplicationController
  
  def index
    rainfalls = Rainfall.all
    rainfalls_hash = sort_by_season(rainfalls)
 
    render json: {rainfalls: rainfalls_hash}
  end
  
  def create 
    rainfall = Rainfall.new(rainfall_params)
    if rainfall.save
      render json: {rainfall: rainfall}
    else
      render json: {message: "errored out server side"}
    end
  end
  
  private 
  
  def sort_by_season(rainfalls)
    hash = {}
    rainfalls.each do |rain|
      #include january - june in previous year's rainfall
      if rain.month < 7
        season = rain.year-1
      else
        season = rain.year
      end
      if hash[season].nil?
        hash[season] = []
      end
      hash[season] << rain
    end
    hash
  end

  def rainfall_params
    params[:rainfall][:hours] ||= []
    params.require(:rainfall).permit(:month, :day, :year, :amount_in_inches, hours: [])
  end

end  