FactoryGirl.define do
  factory :review do
    sequence(:reason_of_visit) { |n| "reasonOfVisitfactory#{n}"}
    quality_of_service {rand(1..5)}
    noise_level {rand(1..5)}
    fits_taste [true, false].sample
    lighting {rand(1..5)}
    cleanliness {rand(1..5)}
    sequence(:comment) { |n| "factoryComment#{n}"}

    association :user, factory: :user
    association :restaurant, factory: :restaurant
  end
end
