require "rails_helper"

RSpec.describe ReviewMailer, type: :mailer do

  user_1 = User.create!(first_name: "Mark", last_name: "Swinimer", username: "mswinimer", email: "markswinimer@gmail.com", password: "123456")

  restaurant_1 = Restaurant.create!(name: "Panera", address: "55 Summer St.", city: "Boston", state: "MA", zip: "02111", dollar_value: 2,
    description: "Sells bread.", picture: "https://chefservicesgroup.com/wp-content/uploads/2011/12/panera.jpg", phone_number: "3333333333", website_url: "https://www.panerabread.com", user: user_1)

  review_1 = Review.create!(
    restaurant: restaurant_1,
    reason_of_visit: "Family Party",
    quality_of_service: 2,
    noise_level: 1,
    fits_taste: true,
    lighting: 2,
    cleanliness: 3,
    comment: "I will come back again.",
    user: user_1
  )

sign_in_as(user_1)

visit

end
