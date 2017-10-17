class Restaurant < ApplicationRecord

  validates :name, presence: true
  validates :address, presence: true
  validates :city, presence: true, numericality: false
  validates :state, presence: true
  validates :zip, presence: true, numericality: true, length: {is: 5}
<<<<<<< HEAD
  validates :dollar_value, presence: true
=======
  validates :dollar_value, presence: true, inclusion: { in: [1, 2, 3]}
>>>>>>> master
  validates :phone_number, numericality: true, length: {is: 10}
end
