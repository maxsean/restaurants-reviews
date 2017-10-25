class Api::V1::SearchesController < ApplicationController

  def create
    body = JSON.parse(request.body.read)
    restaurant = Restaurant.where("name LIKE ? OR city LIKE ?", "%#{body["value"]}%", "%#{body["value"]}%" )
    render json: { restaurant: restaurant }
  end

end
