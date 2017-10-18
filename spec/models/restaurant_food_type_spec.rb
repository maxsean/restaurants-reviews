require "rails_helper"

RSpec.describe RestaurantFoodType, type: :model do
  it {should belong_to(:restaurant)}

  it {should belong_to(:food_type)}

  it {should_not belong_to(:user)}
end
