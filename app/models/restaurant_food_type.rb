class RestaurantFoodType < ApplicationRecord
  belongs_to :restaurant
  belongs_to :food_type

  validates :restaurant, presence: true
  validates :food_type, presence: true
end
