class Api::V1::RestaurantsController < ApplicationController

  def index
    render json: { restaurant: Restaurant.all.sample }
  end

  def show
    restaurant = Restaurant.find(params["id"]).to_json(include: {reviews: {include: :user}})
    render json: { restaurant: restaurant }
  end

  def create
    body = JSON.parse(request.body.read)
    restaurant = Restaurant.new(body)
    if restaurant.save
      render json: { restaurant: restaurant }
    end
  end

  private

  def restaurant_params(body)
    body.require(:restaurant).permit(:name, :address, :city, :state, :zip, :dollar_value,
      :description, :picture, :phone_number, :website_url, :user)
  end


end
