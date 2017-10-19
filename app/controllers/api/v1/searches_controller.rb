class Api::V1::SearchesController < ApplicationController

def create
  body = JSON.parse(request.body.read)
  restaurant = Restaurant.where(["title LIKE ?", "%#{body}%"])
  binding.pry
  render json: { restaurant: restaurant[0] }
end

end
