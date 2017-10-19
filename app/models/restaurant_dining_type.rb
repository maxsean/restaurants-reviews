class RestaurantDiningType < ApplicationRecord
  belongs_to :restaurant
  belongs_to :dining_type

  validates :restaurant, presence: true
  validates :dining_type, presence: true
end
