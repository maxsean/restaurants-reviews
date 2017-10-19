class Restaurant < ApplicationRecord
  belongs_to :user
  has_many :reviews
  has_many :restaurant_dining_types
  has_many :restaurant_food_types
  has_many :food_types, through: :restaurant_food_types
  has_many :dining_types, through: :restaurant_dining_types

  validates :name, presence: true
  validates :address, presence: true
  validates :city, presence: true, numericality: false
  validates :state, presence: true
  validates :zip, presence: true, numericality: true, length: {is: 5}
  validates :dollar_value, presence: true, inclusion: { in: [1, 2, 3]}
  validates :phone_number, numericality: true, length: {is: 10}
  validates :user_id, presence: true
end
