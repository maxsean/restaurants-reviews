class Review < ApplicationRecord
  belongs_to :restaurant

  validates :restaurant, presence: true
  validates :reason_of_visit, presence: true
  validates :quality_of_service, presence: true
  validates :noise_level, presence: true
  validates_inclusion_of :fits_taste, :in => [true, false]
  validates :lighting, presence: true
  validates :cleanliness, presence: true

  def validate_boolean

  end
end
