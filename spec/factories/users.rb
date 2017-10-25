FactoryGirl.define do
  factory :user do
    sequence(:first_name) { |n| "first_name#{n}"}
    sequence(:last_name) { |n| "last_name#{n}"}
    sequence(:username) { |n| "username#{n}"}
    sequence(:email) { |n| "useremails#{n}@gmail.com"}
    password "123456"
  end
end
