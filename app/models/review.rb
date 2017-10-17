class Review < ApplicationRecord
  belongs_to :restaurant

  validates :restaurant, presence: true
  validates :reason_of_visit, presence: true
  validates :quality_of_service, presence: true
  validates :noise_level, presence: true
  validates :fits_taste, presence: true, inclusion: { in: [true, false]}
  validates :lighting, presence: true
  validates :cleanliness, presence: true

end
