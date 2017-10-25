class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :review

  validates :value, numericality: true, inclusion: { in: [-1, 0, 1]}
  validates :user_id, uniqueness: { scope: :review_id }

  def self.getKarma(parameters)
    sum = 0
    Vote.where(parameters).each do |vote|
      sum += vote["value"]
    end
    sum
  end

end
