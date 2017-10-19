class FoodType < ApplicationRecord
  belongs_to :restaurant_food_type

  validates :restaurant_food_type, presence: true
  validates :name, presence: true
end
