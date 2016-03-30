class Api::RainsController < ApplicationController
  def index
    @rains = Rain.all.sort_by { |obj| obj.time_info }
    render json: {rains: @rains}
  end

  def create
  end
  
  private
  
  def rain_params
    params.require(:rain).permit(:time_info, :season_id, :amount_in_inches)
  end
  
end
