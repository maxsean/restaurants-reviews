class DiningType < ApplicationRecord
  belongs_to :restaurant_dining_type

  validates :name, presence: true
  validates :restaurant_dining_type, presence: true
end
