class Api::V1::RestaurantsController < ApplicationController

  def index
    render json: { restaurant: Restaurant.all.sample }
  end

  def create
    body = JSON.parse(request.body.read)
    restaurant = Restaurant.new(body)
    if restaurant.save
      render json: { restaurant: restaurant }
    end
  end
end
