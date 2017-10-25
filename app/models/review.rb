class Review < ApplicationRecord
  belongs_to :restaurant
  belongs_to :user

  validates :restaurant, presence: true
  validates :user, presence: true
  validates :reason_of_visit, presence: true
  validates :quality_of_service, presence: true
  validates :noise_level, presence: true
  validates_inclusion_of :fits_taste, :in => [true, false]
  validates :lighting, presence: true
  validates :cleanliness, presence: true

  def self.tally_reasons(param, name)
    size = 0
    reviews = Review.where({restaurant_id: param, reason_of_visit: name })
    if reviews
      reviews.each do |review|
        size += 1
      end
      data = {
        "name": name,
        "description": name,
        "size": size
      }
    else
      data = {
        "name": name,
        "description": name,
        "size": 0
      }
    end
    data
  end

  def self.fives(param, attribute)
    i = 1
    children = []
    5.times do
      size = 0
      reviews = Review.where({restaurant_id: param, attribute => i})
      if reviews
        reviews.each do |review|
          size += 1
        end
      end
      data = {
        "name": i.to_s,
        "description": i.to_s,
        "size": size
      }
      children.push(data)
      i += 1
    end
    children
  end

  def self.tally_taste(param, name)
    size = 0
    Review.where({restaurant_id: param, fits_taste: name }).each do |review|
      size += 1
    end
    data = {
      "name": name.to_s,
      "description": name.to_s,
      "size": size
    }
  end
end
