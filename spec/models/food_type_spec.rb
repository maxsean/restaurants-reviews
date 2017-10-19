require "rails_helper"

RSpec.describe FoodType, type: :model do

  it {should have_valid(:name).when('Chinese')}
  it {should_not have_valid(:name).when(nil, '')}

  it {should belong_to(:restaurant_food_type)}

  it {should_not belong_to(:dining_type)}

end
