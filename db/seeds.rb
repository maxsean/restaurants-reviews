
user1 = User.create!(first_name: "Mark", last_name: "Swinimer", username: "mswinimer", email: "mswinimernottaken@gmail.com", password: "123456")


restaurant1 = Restaurant.create!(name: "Panera", address: "55 Summer St.", city: "Boston", state: "MA", zip: "02111", dollar_value: 2,
  description: "Sells bread.", picture: "https://chefservicesgroup.com/wp-content/uploads/2011/12/panera.jpg", phone_number: "3333333333", website_url: "https://www.panerabread.com", user: User.first)

restaurant2 = Restaurant.create!(name: "PoopDog", address: "34 Potato St.", city: "Boston", state: "MA", zip: "02301", dollar_value: 3,
  description: "The dog is the chef", picture: "https://iheartdogs.com/wp-content/uploads/2014/03/dogchef.jpg", phone_number: "2222222222", website_url: "www.dog.com", user: User.first)

restaurant3 = Restaurant.create!(name: "Wendy's", address: "75 Summer St.", city: "Boston", state: "MA", zip: "02111", dollar_value: 1,
    description: "Hamburgers", picture: "http://www.nrn.com/sites/nrn.com/files/wendys.gif", phone_number: "1111111111", website_url: "https://www.wendys.com", user: User.first)


review1 = Review.create!(restaurant: restaurant1, reason_of_visit: "Sports Event", quality_of_service: 1, noise_level: 1, fits_taste: true, lighting: 1, cleanliness: 2, comment: "This is a review, believe it...", user: user1)

review2 = Review.create!(restaurant: restaurant1, reason_of_visit: "Celebration", quality_of_service: 2, noise_level: 1, fits_taste: true, lighting: 1, cleanliness: 2, comment: "This is yet another review, don't believe it", user: user1)

Review.create!(restaurant: restaurant1, reason_of_visit: "Date", quality_of_service: 2, noise_level: 2, fits_taste: true, lighting: 1, cleanliness: 2, comment: "This is a review, believe it...", user: user1)

Review.create!(restaurant: restaurant1, reason_of_visit: "Sports Event", quality_of_service: 3, noise_level: 3, fits_taste: false, lighting: 2, cleanliness: 2, comment: "This is a review, believe it...", user: user1)

Review.create!(restaurant: restaurant1, reason_of_visit: "Lunch", quality_of_service: 4, noise_level: 4, fits_taste: true, lighting: 3, cleanliness: 3, comment: "This is a review, believe it...", user: user1)

Review.create!(restaurant: restaurant1, reason_of_visit: "Dinner", quality_of_service: 5, noise_level: 4, fits_taste: false, lighting: 4, cleanliness: 1, comment: "This is a review, believe it...", user: user1)

Review.create!(restaurant: restaurant1, reason_of_visit: "Breakfast", quality_of_service: 5, noise_level: 3, fits_taste: true, lighting: 5, cleanliness: 4, comment: "This is a review, believe it...", user: user1)

Review.create!(restaurant: restaurant1, reason_of_visit: "Brunch", quality_of_service: 2, noise_level: 3, fits_taste: true, lighting: 1, cleanliness: 5, comment: "This is a review, believe it...", user: user1)

Review.create!(restaurant: restaurant1, reason_of_visit: "Family Outing", quality_of_service: 2, noise_level: 1, fits_taste: false, lighting: 1, cleanliness: 2, comment: "This is a review, believe it...", user: user1)

Review.create!(restaurant: restaurant1, reason_of_visit: "Celebration", quality_of_service: 2, noise_level: 1, fits_taste: true, lighting: 1, cleanliness: 3, comment: "This is a review, believe it...", user: user1)

Review.create!(restaurant: restaurant1, reason_of_visit: "Takeout", quality_of_service: 2, noise_level: 1, fits_taste: false, lighting: 1, cleanliness: 3, comment: "This is a review, believe it...", user: user1)

Review.create!(restaurant: restaurant1, reason_of_visit: "Other", quality_of_service: 2, noise_level: 1, fits_taste: true, lighting: 1, cleanliness: 2, comment: "This is a review, believe it...", user: user1)
