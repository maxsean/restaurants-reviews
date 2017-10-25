require "rails_helper"

RSpec.describe DiningType, type: :model do

  it {should have_valid(:name).when('fine dining') }
  it {should_not have_valid(:name).when(nil, '')}

  it {should belong_to(:restaurant_dining_type)}

  it {should_not belong_to(:food_type)}

end
