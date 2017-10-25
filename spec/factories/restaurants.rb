FactoryGirl.define do
  factory :restaurant do
    sequence(:name) { |n| "restaurantName#{n}"}
    sequence(:address) { |n| "address#{n}"}
    sequence(:city) { |n| "city#{n}"}
    sequence(:state) { |n| "state#{n}"}
    zip "00000"
    dollar_value {rand(1..3)}
    description "FactoryGirl Description"
    picture "www.pictureFactory.com"
    phone_number "3338884444"
    website_url "www.websiteFactory.com"

    association :user, factory: :user
  end
end
