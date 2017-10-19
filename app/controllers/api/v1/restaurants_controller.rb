class Api::V1::RestaurantsController < ApplicationController

  def index
      if params[:search]
        render json: Restaurant.search(params[:search])
      else
        render json: Restaurant.all
      end
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    render json: @restaurant 

  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :city, :state, :zip, :dollar_value,
      :description, :picture, :phone_number, :website_url, :user)
  end

end
