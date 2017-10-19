require "rails_helper"

RSpec.describe RestaurantDiningType, type: :model do
  it {should belong_to(:restaurant)}

  it {should belong_to(:dining_type)}

  it {should_not belong_to(:user)}
end
