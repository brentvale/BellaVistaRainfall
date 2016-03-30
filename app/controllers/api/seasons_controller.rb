class Api::SeasonsController < ApplicationController
  def index
    @seasons = Season.all
    render json: {seasons: @seasons}
  end
end
